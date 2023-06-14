import { AppError } from '../errors/AppError';
import axios from "axios";
import { baseURL } from "../utils/constants";

export class ListUserByNameService {
  constructor() {}

  public async execute({ name }) {
    const { data } = await axios.get(baseURL)
    const username = name.toLowerCase()

    const userFound = data.find(user => user.name.toLowerCase() === username)

    if(!userFound) throw new AppError('User not found' ,404)

    return { user: userFound }
  }
}