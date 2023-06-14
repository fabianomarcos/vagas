import { ListUsersService } from './../services/listUsersService';
import { CreateUserService } from '../services/createUserService';
import { ListUserByNameService } from '../services/listUserByNameService';
import { ListUsersByNameService } from '../services/listUsersByNameService';
import { DeleteUserService } from '../services/deleteUserService';
import { UpdateUserService } from '../services/updateUserService';
import { ListUsersCountService } from '../services/listUsersCount';

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

  public async getUsersByName(request, response) {
    try {
      const { name } = request.query;
      const listUsers = new ListUsersByNameService();
      const { users } = await listUsers.execute({ name });
      response.status(201).json({ users });

    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  public async getUserByName(request, response) {
    try {
      const { name } = request.query;
      const listUsers = new ListUserByNameService();
      const { user } = await listUsers.execute({ name });
      response.status(201).json({ user });

    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  public async deleteUser(request, response) {
    try {
      const { name } = request.query;
      const deleteUsers = new DeleteUserService();
      await deleteUsers.execute({ name, id: request.user.id });
      response.status(200).json({ message: "User removed successfully" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  public async updateUser(request, response) {
    try {
      const { id } =  request.query;
      const { name, job } = request.body;
      const updateUser = new UpdateUserService();
      const { user } = await updateUser.execute({ name, id, sub_id: request.user.id, job });
      response.status(200).json({ user });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }

  }
  public async listCountUser(request, response) {
    try {
      const { name } = request.body;
      const listCount = new ListUsersCountService();
      const { message } = await listCount.execute({ name });
      response.status(200).json({ message });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
