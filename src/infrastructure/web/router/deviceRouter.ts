import {
  Router,
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import getConnectedDevices from '@Usecases/device/getConnectedDevices';
import { adaptHttpReq } from '@Adapters/httpAdapters';

const router = Router();

router.get('/devices', async (req: ExpressRequest, res: ExpressResponse) => {
  try {
    const httpRequest = adaptHttpReq(req);

    let httpResponse = await getConnectedDevices(httpRequest);

    res.send(httpResponse);
  } catch (error) {
    res.send(error.message);
  }
});

export default router;
