import Controller from './controllers/controller';
import Repository from './repository/repository';
import Service from './services/service';

const entityFactory = () => {
  const repository = new Repository();
  const service = new Service(repository);
  const controller = new Controller(service);

  return controller;
}

export default entityFactory;
