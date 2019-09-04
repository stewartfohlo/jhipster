import { ITask } from 'app/shared/model/task.model';

export interface IStatus {
  id?: number;
  name?: string;
  tasks?: ITask[];
}

export class Status implements IStatus {
  constructor(public id?: number, public name?: string, public tasks?: ITask[]) {}
}
