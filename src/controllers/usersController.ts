import { ListUsersService } from './../services/listUsersService';
import { CreateUserService } from '../services/createUserService';

export default class UsersController {
  public async create(request, response) {
    try {
      const { name, job } =  request.body;
      const createUser = new CreateUserService();
      const { newUser } = await createUser.execute({
        name,
        job
      });

      response.status(201).json({ user: newUser });

    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  public async listAllUsers(request, response) {
    try {
      const listUsers = new ListUsersService();
      const { users } = await listUsers.execute();
      response.status(201).json({ users });

    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
