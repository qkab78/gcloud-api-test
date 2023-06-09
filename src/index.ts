import { Request, Response } from "express";

const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
});

app.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Test' });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});