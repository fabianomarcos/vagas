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
}
