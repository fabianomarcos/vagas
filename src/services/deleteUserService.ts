import axios from "axios";
import { baseURL } from "../utils/constants";
import { AppError } from "../errors/AppError";
import { IUser } from "../entities/User";

export class DeleteUserService {
  constructor() {}

  public async execute({ name, id }: { name: string, id: string }): Promise<void> {
    const { data } = await axios.get<IUser[]>(baseURL)
    const username = name.toLowerCase()

    const userWithPermission = data.find(user => user.id === id)
    if (!userWithPermission) throw new AppError("Unauthorized", 401)

    const userFound = data.find(user => user.name.toLowerCase() === username)

    if(!userFound) throw new AppError('User not found' ,400)

    const actuallyUser = id === userFound.id
    if(actuallyUser) throw new AppError("You cannot delete your user", 401)

    await axios.delete(`${baseURL}/${userFound.id}`)
  }
}