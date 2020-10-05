import { Container } from 'inversify';

import { IOC_TYPES } from '@IocTypes';
import { IDBDriver, DBDriver } from '@DB';
import { IInMemoryStoreDriver, InMemoryStoreDriver } from '@InMemoryStore';
import { DeviceRepo, IDeviceRepo, UserRepo, IUserRepo } from '@Repos';

const container = new Container();

container.bind<IDBDriver>(IOC_TYPES.DBDriver).to(DBDriver).inSingletonScope();

container
  .bind<IInMemoryStoreDriver>(IOC_TYPES.InMemoryStoreDriver)
  .toConstantValue(InMemoryStoreDriver);

container.bind<IDeviceRepo>(IOC_TYPES.DeviceRepo).to(DeviceRepo).inSingletonScope();

container.bind<IUserRepo>(IOC_TYPES.UserRepo).to(UserRepo).inSingletonScope();

export { container };
