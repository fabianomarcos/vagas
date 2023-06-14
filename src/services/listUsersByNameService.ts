import { AppError } from '../errors/AppError';
import axios from "axios";
import { baseURL } from "../utils/constants";

export class ListUsersByNameService {
  constructor() {}

  public async execute({ name }) {
    const { data } = await axios.get(baseURL)
    const username = name.toLowerCase()

    const userFound = data.filter(user => user.name.toLowerCase().includes(username))
    console.log('userFound: ', userFound);

    if(userFound.length === 0) throw new AppError('No user found' ,404)

    return { users: userFound }
  }
}