import { inject, injectable } from 'inversify';

import { TYPES } from '@Types';
import { IDBDriver } from '@DB';
import { IDevice } from '@Entities/Device';
import { IUser } from '@Entities/User';
import { IInMemoryStoreDriver } from '@InMemoryStore';

export interface IDeviceRepo {
  getConnectedDevices(userID: IUser['id']): Promise<IDevice[]>;
}

@injectable()
export class DeviceRepo implements IDeviceRepo {
  constructor(
    @inject(TYPES.DBDriver)
    private dbDriver: IDBDriver,

    @inject(TYPES.InMemoryStoreDriver)
    private inMemoryStoreDriver: IInMemoryStoreDriver
  ) {}

  async getConnectedDevices(userID: IUser['id']) {
    console.log('getting connected devices for user: ' + userID);

    return [{ uuid: 'cewrtrgb' }, { uuid: 'regedre' }];
  }
}
