import { container } from '@IOC';
import { TYPES } from '@Types';
import { IDeviceRepo, IUserRepo } from '@Repos';
import { IDBDriver } from './infrastructure/db/driver';
import { IInMemoryStoreDriver } from '@InMemoryStore';

/* databases */
// const dbDriver = container.get<IDBDriver>(TYPES.DBDriver);
// const inMemoryStoreDriver = container.get<IInMemoryStoreDriver>(
//   TYPES.InMemoryStoreDriver
// );

/* repos */
const deviceRepo = container.get<IDeviceRepo>(TYPES.DeviceRepo);
const userRepo = container.get<IUserRepo>(TYPES.UserRepo);

export { deviceRepo, userRepo };
