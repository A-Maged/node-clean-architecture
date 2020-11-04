import 'reflect-metadata';
import express from 'express';
import { exit } from 'process';

import config from '@Config';
import * as routers from '@Routers';
import { IDBDriver } from '@DB';
import { IInMemoryStoreDriver } from '@InMemoryStore';
import { container } from 'src/ioc';
import { IOC_TYPES } from 'src/ioc-types';
import { globalMiddlewares } from '@Web/middlewares';

const app = express();

/* Global Middlewares */
app.use(globalMiddlewares);

/* Register Routes */
app.use(routers.deviceRouter);

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
