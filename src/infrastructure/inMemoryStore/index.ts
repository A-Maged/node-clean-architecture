import Redis from 'ioredis';

type Ok = 'OK';

export interface IInMemoryStoreDriver {
  get(key: string): Promise<string | null>;
  set(key: string, value: any): Promise<Ok | null>;
  connect(callback?: (() => void) | undefined): Promise<void>;
}

export let InMemoryStoreDriver: IInMemoryStoreDriver = new Redis({
  lazyConnect: true,
  password: 'foobared',
});
