import * as express from 'express';

import entityFactory from './factory/factory';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');

      this.app.get('/ping', (req, res, next) => res.status(200).send('Pingou'));

      this.app.get('/object', (req, res, next) => {
        entityFactory().list(req, res, next);
      });

      this.app.post('/object', (req, res, next) => {
        entityFactory().create(req, res, next);
      });

      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Logged in port ${PORT}`));
  }
}

export { App };

export const { app } = new App(); // criterio dos testes
