export interface Entity {
  id: number,
  email: string,
  name: string,
  age: number,
}

export interface IService {
  create(data: Omit<Entity, 'id'>): Promise<Entity[]>;
  findAll(): Promise<Entity[]>;
  findOne(): Promise<Entity>;
  update(): Promise<Entity[]>;
  destroy(): Promise<Entity[]>;
}

export interface IModel {
  create(data: Omit<Entity, 'id'>): Promise<Entity[]>;
  findAll(): Promise<Entity[]>;
  findOne(): Promise<Entity>;
  update(): Promise<Entity[]>;
  destroy(): Promise<Entity[]>;
}
