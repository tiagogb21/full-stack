import { Request, Response, NextFunction } from 'express';
import { IService } from '../protocols/user.protocol';

export default class UserController {
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

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.service.findAll();
      return res.status(200).json({ users });
    } catch (error) {
      return next(error);
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.service.findOne();
      return res.status(200).json({ users });
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.service.update();
      return res.status(200).json({ users });
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.service.destroy();
      return res.status(200).json({ users });
    } catch (error) {
      return next(error);
    }
  }
}
