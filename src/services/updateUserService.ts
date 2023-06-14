import axios from "axios";
import { baseURL } from "../utils/constants";
import { AppError } from "../errors/AppError";

export class UpdateUserService {
  constructor() {}

  public async execute({ name, job, id, sub_id }) {
    const { data } = await axios.get(baseURL)

    const userWithPermission = data.find(user => user.id === sub_id)
    if (!userWithPermission) throw new AppError("Unauthorized", 401)

    if(!name && !job)
        throw new AppError('It is necessary to send the name or the job', 400)

    const userIndex = data.findIndex(user => user.id == id);
    const oldUser = data[userIndex]

    if(userIndex == -1) throw new AppError('User not found', 400)

    const userUpdated = { name: name || oldUser.name, job: job || oldUser.job }

    await axios.put(`${baseURL}/${id}`, userUpdated)

    return { user: { ...data[userIndex], ...userUpdated }}
  }
}