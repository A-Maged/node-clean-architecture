import { Container } from 'inversify';

import { TYPES } from '@IocTypes';
import { IDBDriver, DBDriver } from '@DB';
import { IInMemoryStoreDriver, InMemoryStoreDriver } from '@InMemoryStore';
import { DeviceRepo, IDeviceRepo, UserRepo, IUserRepo } from '@Repos';

const container = new Container();

container.bind<IDBDriver>(TYPES.DBDriver).to(DBDriver).inSingletonScope();

container
  .bind<IInMemoryStoreDriver>(TYPES.InMemoryStoreDriver)
  .toConstantValue(InMemoryStoreDriver);

container.bind<IDeviceRepo>(TYPES.DeviceRepo).to(DeviceRepo).inSingletonScope();

container.bind<IUserRepo>(TYPES.UserRepo).to(UserRepo).inSingletonScope();

export { container };
