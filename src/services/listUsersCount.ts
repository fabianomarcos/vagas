import axios from "axios";
import { baseURL } from "../utils/constants";
import { AppError } from "../errors/AppError";

export class ListUsersCountService {
  constructor() {}

  public async execute({ name }) {
    if(!name) throw new AppError('It is necessary to send the name', 400)

    const username = name.toLowerCase()

    const { data } = await axios.get(baseURL)

    const usersFounded = data.filter(user => user.name.toLowerCase().includes(username))

    if(usersFounded.length == 0) throw new AppError('No user found', 400)

    const complement = usersFounded.length > 1 ? "vezes" : "vez"

    return { message :`Usuário ${name} foi lido ${usersFounded.length} ${complement}.`}
  }
}