import { Request as ExpressRequest } from 'express';

import HttpRequest, { IHttpRequest } from '@Usecases/interfaces/HttpRequest';

export function adaptHttpReq(req: ExpressRequest): IHttpRequest {
  return new HttpRequest(req);
}
