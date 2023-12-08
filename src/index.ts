import express from 'express';
import cors from 'cors';
import http from 'http';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();

app.use(
  cors({
    credentials: true,
  }),
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
