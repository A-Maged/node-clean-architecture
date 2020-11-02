import { injectable, unmanaged } from 'inversify';

export interface IDBDriver {
  connect(): Promise<any>;
  find(): any;
  findByID(): any;
}

@injectable()
export default class DBDriver implements IDBDriver {
  private connection: any;

  constructor(@unmanaged() private connectionOptions: object) {}

  connect() {
    this.connection = 'connect to db here';

    console.log('connect to db here');

    return Promise.resolve();
  }

  find() {
    console.log(`Method not implemented. ${this.connection}`);

    // throw new Error(`Method not implemented. ${this.db}`);
  }

  findByID() {
    throw new Error(`Method not implemented. ${this.connection}`);
  }
}
