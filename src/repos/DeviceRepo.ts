import { inject, injectable } from 'inversify';

import { IOC_TYPES } from '@Ioc';
import { IDBDriver } from '@DB';
import { IDevice, IUser } from '@Entities';
import { IInMemoryStoreDriver } from '@InMemoryStore';

export interface IDeviceRepo {
  getConnectedDevices(userID: IUser['id']): Promise<IDevice[]>;
}

@injectable()
export class DeviceRepo implements IDeviceRepo {
  constructor(
    @inject(IOC_TYPES.DBDriver)
    private dbDriver: IDBDriver,

    @inject(IOC_TYPES.InMemoryStoreDriver)
    private inMemoryStoreDriver: IInMemoryStoreDriver
  ) {}

  async getConnectedDevices(userID: IUser['id']) {
    console.log('getting connected devices for user: ' + userID);

    return [{ uuid: 'cewrtrgb' }, { uuid: 'regedre' }];
  }
}
