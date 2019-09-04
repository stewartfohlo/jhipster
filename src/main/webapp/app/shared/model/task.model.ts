import { Moment } from 'moment';
import { ICategory } from 'app/shared/model/category.model';
import { IStatus } from 'app/shared/model/status.model';

export interface ITask {
  id?: number;
  title?: string;
  description?: any;
  due?: Moment;
  category?: ICategory;
  status?: IStatus;
}

export class Task implements ITask {
  constructor(
    public id?: number,
    public title?: string,
    public description?: any,
    public due?: Moment,
    public category?: ICategory,
    public status?: IStatus
  ) {}
}
