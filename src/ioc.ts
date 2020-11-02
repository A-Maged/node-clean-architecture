import { Container } from 'inversify';

import { IOC_TYPES } from 'src/ioc-types';
import { IDBDriver, DBDriver } from '@DB';
import {
  IInMemoryStoreDriver,
  createInMemoryStoreDriver,
} from '@InMemoryStore';
import { DeviceRepo, IDeviceRepo, UserRepo, IUserRepo } from '@Repos';

import config from '@Config';

const container = new Container();

container.bind<IDBDriver>(IOC_TYPES.DBDriver).toConstantValue(
  new DBDriver({
    host: config.dbHost,
    port: config.dbPort,
    password: config.dbPassword,
  })
);

container
  .bind<IInMemoryStoreDriver>(IOC_TYPES.InMemoryStoreDriver)
  .toConstantValue(
    createInMemoryStoreDriver({
      password: 'foobared',
    })
  );

container
  .bind<IDeviceRepo>(IOC_TYPES.DeviceRepo)
  .to(DeviceRepo)
  .inSingletonScope();

container.bind<IUserRepo>(IOC_TYPES.UserRepo).to(UserRepo).inSingletonScope();

export { container };
