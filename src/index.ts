import 'reflect-metadata';
import express from 'express';
import { exit } from 'process';

import config from '@Config';
import * as routers from '@Routers';
import { IDBDriver } from '@DB';
import { IInMemoryStoreDriver } from '@InMemoryStore';
import { container, IOC_TYPES } from '@Ioc';
import { globalMiddlewares } from '@Web/middlewares';

const app = express();

/* Global Middlewares */
app.use(globalMiddlewares);

/* App Settings */
app.set('views', 'src/infrastructure/web/views');
app.set('view engine', 'pug');

/* Register Routes */
app.use(routers.deviceRouter);
app.use(routers.homeRouter);

/* Start App */
run();

async function run() {
  const dbDriver = container.get<IDBDriver>(IOC_TYPES.DBDriver);

  const inMemoryStoreDriver = container.get<IInMemoryStoreDriver>(
    IOC_TYPES.InMemoryStoreDriver
  );

  try {
    await Promise.all([dbDriver.connect(), inMemoryStoreDriver.connect()]);

    app.listen(config.httpPort, config.host, () =>
      console.log(`listening on http://${config.host}:${config.httpPort}`)
    );
  } catch (error) {
    console.log(`Can't Start Server`);

    console.error(error);

    exit(1);
  }
}
