/* eslint-disable no-unused-vars */
import { Class, User } from '../database/models';

// CRUD --> CREATE, READ, UPDATE, DELETE

// CREATE --> POST "/users"

async function createUser(name: string): Promise<number> {
  const user = await User.create({
    name,
  });

  return user.id;
}

// READ --> GET

// Return details about all users: "/users"

async function getUsers(): Promise<any[]> {
  const users = await User.findAll({
    order: [['id', 'ASC']],
    attributes: ['id', 'name'],
  });

  return users;
}

// Return details about the specified user: "/users/{id}"

async function getUser(id: number): Promise<any> {
  const user = await Class.findByPk(id, {
    attributes: ['email', 'name', 'age'],
  });

  if (!user) { throw Error('404'); }

  return user;
}

// UPDATE --> PUT "/users/{id}"

async function updateUser(id: number, name: string): Promise<void> {
  const user = await Class.findByPk(id);

  if (!user) { throw Error('404'); }

  await user.update({
    name,
  });
}

// DELETE --> DELETE "/classes/{id}"

async function deleteUser(id: number): Promise<void> {
  const user = await Class.findByPk(id);

  if (!user) { throw Error('404'); }

  await user.destroy();
}
