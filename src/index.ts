import 'reflect-metadata';

import express, {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import { config } from './config';
import { adaptHttpReq } from '@Adapters/httpAdapters';
import router from '@Router';

/* Todo: for testing */
import { container } from '@Ioc';
import { IOC_TYPES } from '@IocTypes';
import { IDBDriver } from '@DB';
import { IInMemoryStoreDriver } from '@InMemoryStore';
import getConnectedDevices from '@Usecases/device/getConnectedDevices';
import { exit } from 'process';

const app = express();

/* Global Middlewares */
app.use(bodyParser.json());
app.use(cookieParser(config.cookiesSecret));

/* Register Routes */
let { deviceRouter } = router();
app.use(deviceRouter);

// Todo: for testing
app.get('/devices', async (req: ExpressRequest, res: ExpressResponse) => {
  try {
    const httpRequest = adaptHttpReq(req);

    let httpResponse = await getConnectedDevices(httpRequest);

    res.send(httpResponse);
  } catch (error) {
    res.send(error.message);
  }
});

/* Start App */

run();

async function run() {
  const dbDriver = container.get<IDBDriver>(IOC_TYPES.DBDriver);

  const inMemoryStoreDriver = container.get<IInMemoryStoreDriver>(
    IOC_TYPES.InMemoryStoreDriver
  );

  try {
    await Promise.all([dbDriver.connect(), inMemoryStoreDriver.connect()]);

    app.listen(config.httpPort, config.host, () => {
      console.log(`listening on http://${config.host}:${config.httpPort}`);
    });
  } catch (error) {
    console.log(`Can't Start Server`);

    console.error(error);

    exit(1);
  }
}
