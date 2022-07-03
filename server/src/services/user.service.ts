import { Entity, IModel, IService } from '../protocols/user.protocol';

export default class UserService implements IService {
  constructor(private model: IModel) {
    this.model = model;
  }

  create(data: Omit<Entity, 'id'>): Promise<Entity> {
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!data.email || !regexEmail.test(data.email)) {
      throw new Error('Invalid email!');
    }

    if (!data.name || data.name.length < 3) {
      throw new Error('Invalid name!');
    }

    if (!data.age || data.age < 0 || data.age > 120) {
      throw new Error('Invalid age!');
    }

    const entity = this.model.create(data);

    return entity;
  }

  list(): Promise<Entity[]> {
    const entities = this.model.list();

    return entities;
  }
}
