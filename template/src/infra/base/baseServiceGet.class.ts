import BaseService from './baseService.class';
import { IBaseGet } from './types.d';

export default class BaseServiceGet<T>
  extends BaseService<T>
  implements IBaseGet<T>
{
  constructor(public repository: IBaseGet<T>) {
    super(repository);
  }

  async getById(id: number) {
    const request = await this.repository.getById(id);

    return request;
  }

  async getByListIds(listId: number[]) {
    const request = await this.repository.getByListIds(listId);

    return request;
  }

  async deleteById(idMobile: number) {
    const request = await this.repository.deleteById(idMobile);

    return request;
  }

  async deleteMultipleById(listIds: number[]) {
    const request = await this.repository.deleteMultipleById(listIds);

    return request;
  }
}
