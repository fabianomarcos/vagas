import axios from "axios";
import { baseURL } from "../utils/constants";
import { IUserList } from "../entities/User";

export class ListUsersService {
  constructor() {}

  public async execute(): Promise<IUserList> {
      const { data } = await axios.get(baseURL)
      return { users: data }
  }
}