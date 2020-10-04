import { IDBDriver } from '@DB';
import { IDevice } from '@Entities/Device';
import { IUser } from '@Entities/User';
import { IInMemoryStoreDriver } from '@InMemoryStore';

export interface IDeviceRepo {
  getConnectedDevices(userID: IUser['id']): Promise<IDevice[]>;
}

export class DeviceRepo implements IDeviceRepo {
  constructor(
    private dbDriver: IDBDriver,
    private inMemoryStoreDriver: IInMemoryStoreDriver
  ) {}

  async getConnectedDevices(userID: IUser['id']) {
    console.log('getting connected devices for user: ' + userID);

    return [{ uuid: 'cewrtrgb' }, { uuid: 'regedre' }];
  }
}
