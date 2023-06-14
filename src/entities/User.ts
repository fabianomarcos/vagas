export interface IUserRequest {
  name: string
  job: string
}

export interface IUser extends IUserRequest {
  id: string
}

export interface IUserResponse {
  user: Omit<IUser, "id">
}

export interface IUserList {
  users:  Omit<IUser, "id">[]
}


export type UserNameType = Omit<IUserRequest, "job">