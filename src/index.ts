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
import { IDBDriver } from '@DB';
import { container } from '@Ioc';
import { TYPES } from '@IocTypes';
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

/* Start App */

run();

async function run() {
  const dbDriver = container.get<IDBDriver>(TYPES.DBDriver);

  const inMemoryStoreDriver = container.get<IInMemoryStoreDriver>(
    TYPES.InMemoryStoreDriver
  );

  try {
    await dbDriver.connect();

    await inMemoryStoreDriver.connect();

    app.listen(PORT, () => {
      console.log(`listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Can't Start Server`);

    console.error(error);

    exit(1);
  }
}
