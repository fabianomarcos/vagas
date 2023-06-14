import { AppError } from '../errors/AppError';
import axios from "axios";
import { baseURL } from "../utils/constants";

export class CreateUserService {
  constructor() {}

  public async execute({ name, job }) {
      if(!name || !job)
        throw new AppError("It is necessary to send the name and the job")

      const { data } = await axios.get(baseURL)
      const username = name.toLowerCase()
      const userExists = data.find(user => user.name.toLowerCase() === username)

      if (userExists) throw new AppError("User already exists", 400)

      const newUser = { name, job }

      await axios.post(baseURL, newUser)

      return { newUser }
  }
}