import Redis from 'ioredis';

type Ok = 'OK';

export interface IInMemoryStoreDriver {
  get(key: string): Promise<string | null>;
  set(key: string, value: any): Promise<Ok | null>;
}

let driver: IInMemoryStoreDriver | null = null;

/* connect to redis & export actual driver */

export function InMemoryStoreDriver(): IInMemoryStoreDriver {
  return driver || new Redis({
    password: "foobared"
  }); // Connect to 127.0.0.1:6379;
}
