import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/authenticateUserService';
import { UserNameType } from '../entities/User';

export default class SessionsController {
  public async create(request: Request, response: Response) {
    try {
      const authenticateUser = new AuthenticateUserService();
      const { name } = request.body as UserNameType;

      const { user, token } = await authenticateUser.execute({
        name
      });

      return response.json({ user, token });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
