import { IBase, SortParam, ModelSchema } from './types.d';

export default class BaseService<T> implements IBase<T> {
  constructor(public repository: IBase<T>) {
    this.repository = repository;
  }

  async getAll(sort?: SortParam<T>) {
    const request = await this.repository.getAll(sort);

    return request;
  }

  async save(item: ModelSchema<T>) {
    const request = await this.repository.save(item);

    return request;
  }

  async saveMultiple(items: T[]) {
    const request = await this.repository.saveMultiple(items);

    return request;
  }

  async deleteAll() {
    const request = await this.repository.deleteAll();

    return request;
  }

  async getBy(param: keyof ModelSchema<T>, value: string | number) {
    const request = await this.repository.getBy(param, value);

    return request;
  }
}
