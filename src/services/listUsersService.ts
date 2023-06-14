import axios from "axios";
import { baseURL } from "../utils/constants";

export class ListUsersService {
  constructor() {}

  public async execute() {
      const { data } = await axios.get(baseURL)
      return { users: data }
  }
}