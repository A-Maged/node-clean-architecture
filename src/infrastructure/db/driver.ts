import { injectable, unmanaged } from 'inversify';

export interface IDBDriver {
  connect(): Promise<any>;
  find(): any;
  findByID(): any;
}

/* connect to db & export actual driver */

@injectable()
export default class DBDriver implements IDBDriver {
  private db;

  counter = 0;

  constructor(@unmanaged() connectionOptions: object) {
    this.db = 'connect to db here';
  }

  connect() {
    console.log('connect to db here');

    return Promise.resolve();
  }

  find() {
    this.counter++;
    console.log(`${this.counter} Method not implemented. ${this.db}`);

    // throw new Error(`Method not implemented. ${this.db}`);
  }

  findByID() {
    throw new Error(`Method not implemented. ${this.db}`);
  }
}
