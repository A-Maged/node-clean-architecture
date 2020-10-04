import { IDBDriver } from '@DB';
import { IInMemoryStoreDriver } from '@InMemoryStore';

export interface IUserRepo {}

export class UserRepo implements IUserRepo {
  constructor(
    private dbDriver: IDBDriver,
    private inMemoryStoreDriver: IInMemoryStoreDriver
  ) {}
}
