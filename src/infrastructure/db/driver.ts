import { injectable, unmanaged } from 'inversify';

export interface IDBDriver {
  connect(): Promise<any>;
  find(): Promise<any>;
  findByID(): Promise<any>;
}

type TconnectionOptions = {
  host: string;
  port: number;
  password: string;
};

@injectable()
export default class DBDriver implements IDBDriver {
  private connection: any;

  constructor(@unmanaged() private connectionOptions: TconnectionOptions) {}

  async connect() {
    this.connection = `connect to db using connectionOptions: ${JSON.stringify(
      this.connectionOptions
    )}`;

    console.log(this.connection);

    return Promise.resolve();
  }

  async find() {
    console.log(`Method not implemented. ${this.connection}`);

    // throw new Error(`Method not implemented. ${this.db}`);
  }

  async findByID() {
    throw new Error(`Method not implemented. ${this.connection}`);
  }
}
