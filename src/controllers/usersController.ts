import { Request, Response } from 'express';
import { ListUsersService } from './../services/listUsersService';
import { CreateUserService } from '../services/createUserService';
import { ListUserByNameService } from '../services/listUserByNameService';
import { ListUsersByNameService } from '../services/listUsersByNameService';
import { DeleteUserService } from '../services/deleteUserService';
import { UpdateUserService } from '../services/updateUserService';
import { ListUsersCountService } from '../services/listUsersCount';
import { IUser, IUserRequest, UserNameType } from '../entities/User';

export default class UsersController {
  public async create(request: Request, response: Response) {
    try {
      const { name, job } =  request.body as IUserRequest
      const createUser = new CreateUserService();
      const { user } = await createUser.execute({
        name,
        job
      });

      response.status(201).json({ user });

    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  public async listAllUsers(request: Request, response: Response) {
    try {
      const listUsers = new ListUsersService();
      const { users } = await listUsers.execute();
      response.status(201).json({ users });

    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  public async getUsersByName(request: Request, response: Response) {
    try {
      const { name } = request.query as UserNameType
      const listUsers = new ListUsersByNameService();
      const { users } = await listUsers.execute({ name });
      response.status(201).json({ users });

    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  public async getUserByName(request: Request, response: Response) {
    try {
      const { name } = request.query as UserNameType
      const listUsers = new ListUserByNameService();
      const { user } = await listUsers.execute({ name });
      response.status(201).json({ user });

    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  public async deleteUser(request: Request, response: Response) {
    try {
      const { name } = request.query as UserNameType
      const deleteUsers = new DeleteUserService();
      await deleteUsers.execute({ name, id: request.user.id });
      response.status(200).json({ message: "User removed successfully" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  public async updateUser(request: Request, response: Response) {
    try {
      const { id } =  request.query as unknown as IUser;
      const { name, job } = request.body as IUserRequest;
      const updateUser = new UpdateUserService();
      const { user } = await updateUser.execute({ name, id, sub_id: request.user.id, job });
      response.status(200).json({ user });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }

  }
  public async listCountUser(request: Request, response: Response) {
    try {
      const { name } = request.query as UserNameType
      const listCount = new ListUsersCountService();
      const { message } = await listCount.execute({ name });
      response.status(200).json({ message });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
