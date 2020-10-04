import express, {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import { adaptHttpReq } from '@Adapters/httpAdapters';
import router from '@Router';

export { deviceRepo, userRepo } from './boot';

/* Todo: for testing */
import getConnectedDevices from '@Usecases/device/getConnectedDevices';

const PORT = 8000;
const app = express();

/* Global Middlewares */
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIES_SECRET));

// Register Routes
let { deviceRouter } = router();
app.use(deviceRouter);

/* Todo: for testing */
app.get('/devices', async (req: ExpressRequest, res: ExpressResponse) => {
  try {
    const httpRequest = adaptHttpReq(req);

    let httpResponse = await getConnectedDevices(httpRequest);

    res.send(httpResponse);
  } catch (error) {
    res.send(error.message);
  }
});

/* Start Server */
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
