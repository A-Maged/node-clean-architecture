import { inject, injectable } from 'inversify';

import { IDBDriver } from '@DB';
import { IInMemoryStoreDriver } from '@InMemoryStore';
import { TYPES } from '@Types';

export interface IUserRepo {}

@injectable()
export class UserRepo implements IUserRepo {
  constructor(
    @inject(TYPES.DBDriver)
    private dbDriver: IDBDriver,

    @inject(TYPES.InMemoryStoreDriver)
    private inMemoryStoreDriver: IInMemoryStoreDriver
  ) {}
}
