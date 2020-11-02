export interface IUser {
  readonly id: string;
}

export interface IAdminUser extends IUser {
  name: string;
}

export interface IClientUser extends IUser {
  age: number;
}
