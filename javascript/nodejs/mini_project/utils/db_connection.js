const { MongoClient } = require('mongodb');

module.exports = class ConnectToMongoDB {
  #DB_URL = 'mongodb://127.0.0.1:27017/miniProject';
  #db = null
  async #connect() {
    try {
      let client = new MongoClient(this.#DB_URL);
      let db = client.db();
      return db
    } catch (error) {
      console.log(error.message);
    }
  }

  async get() {
    try {
      if (this.#db) {
        console.log('db connection is already alive');
        return this.#db
      }

      this.#db = await this.#connect();
      return this.#db;

    } catch (error) {
      console.log(error.message);
    }
  }
}

