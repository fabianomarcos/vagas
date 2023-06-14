import { AppError } from './../errors/AppError';
import axios from "axios";
import { baseURL } from "../utils/constants";
import authConfig from '../infra/http/middleware/config';
import { sign } from 'jsonwebtoken';

export class AuthenticateUserService {
  constructor() {}

  public async execute({ name }) {
    const { data } = await axios.get(baseURL)
    const username = name.toLowerCase()
    const user = await data.find(user => user.name.toLowerCase() === username);

    if (!user) {
      throw new AppError('Usuário não existe.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}