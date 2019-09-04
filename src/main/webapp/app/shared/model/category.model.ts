import { IUser } from 'app/core/user/user.model';

export interface ICategory {
  id?: number;
  name?: string;
  description?: string;
  user?: IUser;
}

export class Category implements ICategory {
  constructor(public id?: number, public name?: string, public description?: string, public user?: IUser) {}
}
