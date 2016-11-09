from flask import Flask, jsonify, request
import pg
app = Flask('app')

db = pg.DB(dbname='ajax_ex_8')


@app.route('/')
def home():
    # this sends the contents of static/index.html
    return app.send_static_file('index.html')

@app.route('/search')
def search():
    # this sends the contents of static/results.json
    query = request.args.get('search')
    query = '%' + query + '%'
    results = db.query(
        'select * from website where title ilike $1',
        query).dictresult()
    return jsonify(results)


if __name__ == '__main__':
    app.run(debug=True)
