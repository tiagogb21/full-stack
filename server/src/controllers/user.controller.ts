import { NextFunction, Request, Response } from 'express';
import { IService } from '../protocols/user.protocol';

export default class Controller {
  constructor(private service: IService) {
    this.service = service;
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.service.create(req.body);
      return res.status(201).json({ user });
    } catch (error) {
      return next(error);
    }
  }

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.service.findAll();
      return res.status(200).json({ users });
    } catch (error) {
      return next(error);
    }
  }
}
