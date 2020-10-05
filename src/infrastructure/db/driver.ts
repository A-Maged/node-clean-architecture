import { injectable, unmanaged } from 'inversify';

export interface IDBDriver {
  connect(): Promise<any>;
  find(): any;
  findByID(): any;
}

@injectable()
export default class DBDriver implements IDBDriver {
  private db;

  constructor(@unmanaged() connectionOptions: object) {
    this.db = 'connect to db here';
  }

  connect() {
    console.log('connect to db here');

    return Promise.resolve();
  }

  find() {
    console.log(`Method not implemented. ${this.db}`);

    // throw new Error(`Method not implemented. ${this.db}`);
  }

  findByID() {
    throw new Error(`Method not implemented. ${this.db}`);
  }
}
