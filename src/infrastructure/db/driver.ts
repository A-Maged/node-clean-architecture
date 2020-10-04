export interface IDBDriver {
  find(): any;
  findByID(): any;
}

/* connect to db & export actual driver */

export default class DBDriver implements IDBDriver {
  private db;

  constructor(connectionOptions: object) {
    this.db = 'connect to db here';
  }

  find() {
    throw new Error(`Method not implemented. ${this.db}`);
  }

  findByID() {
    throw new Error(`Method not implemented. ${this.db}`);
  }
}
