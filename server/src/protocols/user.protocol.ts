export interface Entity {
  id: number,
  email: string,
  name: string,
  age: number,
}

export interface IService {
  create(data: Omit<Entity, 'id'>): Promise<Entity>;
  list(): Promise<Entity[]>;
}

export interface IModel {
  create(data: Omit<Entity, 'id'>): Promise<Entity>;
  list(): Promise<Entity[]>;
}
