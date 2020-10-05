import { inject, injectable } from 'inversify';

import { IDBDriver } from '@DB';
import { IInMemoryStoreDriver } from '@InMemoryStore';
import { IOC_TYPES } from '@IocTypes';

export interface IUserRepo {}

@injectable()
export class UserRepo implements IUserRepo {
  constructor(
    @inject(IOC_TYPES.DBDriver)
    private dbDriver: IDBDriver,

    @inject(IOC_TYPES.InMemoryStoreDriver)
    private inMemoryStoreDriver: IInMemoryStoreDriver
  ) {}
}
