export interface IHttpRequest {
  readonly method: any;
  readonly body: any;
  readonly headers: any;
  readonly path: any;
  readonly cookies: any;
}

export default class HttpRequest implements IHttpRequest {
  readonly method: any;
  readonly body: any;
  readonly headers: any;
  readonly path: any;
  readonly cookies: any;

  constructor(req: any) {
    this.method = req.method;
    this.body = req.body;
    this.headers = req.headers;
    this.path = req.path;
    this.cookies = req.cookies || req.signedCookies;
  }
}
