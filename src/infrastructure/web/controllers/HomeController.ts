import express from 'express';

export async function index(req: express.Request, res: express.Response) {
  const ctx = { title: 'Hey', message: 'Hello there!' };
  res.render('index', ctx);
}
