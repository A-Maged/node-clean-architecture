import express from 'express';

import getConnectedDevices from '@Usecases/device/getConnectedDevices';
import { adaptHttpReq } from '@Adapters/httpAdapters';

export async function index(req: express.Request, res: express.Response) {
  try {
    const httpRequest = adaptHttpReq(req);

    let httpResponse = await getConnectedDevices(httpRequest);

    res.send(httpResponse);
  } catch (error) {
    res.send(error.message);
  }
}

export async function create(req: express.Request, res: express.Response) {
  console.log('creating new device');

  res.send({
    uuid: 'cdvfvfs',
  });
}
