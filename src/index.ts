import 'reflect-metadata';

import express, {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import { adaptHttpReq } from '@Adapters/httpAdapters';
import router from '@Router';

/* Todo: for testing */
import getConnectedDevices from '@Usecases/device/getConnectedDevices';
import { IDBDriver } from './infrastructure/db/driver';
import { container } from '@IOC';
import { TYPES } from '@Types';
import { IInMemoryStoreDriver } from '@InMemoryStore';
import { exit } from 'process';

const PORT = 8000;
const app = express();

/* Global Middlewares */
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIES_SECRET));

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

const dbDriver = container.get<IDBDriver>(TYPES.DBDriver);

const inMemoryStoreDriver = container.get<IInMemoryStoreDriver>(
  TYPES.InMemoryStoreDriver
);

/* Start App */
dbDriver
  .connect()
  .then(inMemoryStoreDriver.connect.bind(inMemoryStoreDriver))
  .catch(handleInMemoryStoreConnectError)
  .then(startServer);

function handleInMemoryStoreConnectError(err: Error) {
  console.log(`can't conncect to inMemoryStore`);
  console.log(err);
  exit(1);
}

function startServer() {
  app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });
}
