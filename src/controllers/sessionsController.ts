import { AuthenticateUserService } from '../services/authenticateUserService';

export default class SessionsController {
  public async create(request, response) {
    const authenticateUser = new AuthenticateUserService();
    const { name } = request.body;

    const { user, token } = await authenticateUser.execute({
      name
    });

    return response.json({ user, token });
  }
}
