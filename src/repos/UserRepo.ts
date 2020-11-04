import { inject, injectable } from 'inversify';

import { IDBDriver } from '@DB';
import { IInMemoryStoreDriver } from '@InMemoryStore';
import { IOC_TYPES } from '@Ioc';
import { IHttpRequest } from '@Usecases/interfaces/HttpRequest';
import { IUser } from '@Entities';

export interface IUserRepo {
  getCurrentUser: (request: IHttpRequest) => IUser | null;
}

@injectable()
export class UserRepo implements IUserRepo {
  constructor(
    @inject(IOC_TYPES.DBDriver)
    private dbDriver: IDBDriver,

    @inject(IOC_TYPES.InMemoryStoreDriver)
    private inMemoryStoreDriver: IInMemoryStoreDriver
  ) {}

  /* TODO: replace stup */
  getCurrentUser(request: IHttpRequest): IUser | null {
    if (!request.cookies) {
      return null;
    }

    return { id: 'cewv' };
  }
}
