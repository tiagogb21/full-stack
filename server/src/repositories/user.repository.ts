import UserModel from '../database/models/user.model';
import { Entity, IModel } from '../protocols/user.protocol';

export default class Repository implements IModel {
  constructor(private model = UserModel) {
    this.model = model;
  }

  async create(data: Omit<Entity, 'id'>): Promise<Entity> {
    const entity = await this.model.create(data);

    return entity;
  }

  async list(): Promise<Entity[]> {
    const entities = await this.model.findAll();

    return entities;
  }
}
