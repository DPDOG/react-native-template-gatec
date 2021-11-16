import { UpdateMode } from 'realm';

import getRealm from '../../core/realm';
import { ModelSchema, SortParam } from './types.d';

export default class BaseRepository<T> {
  constructor(public schema: string) {
    this.schema = schema;
  }

  async getAll(sort?: SortParam<T>) {
    const realm = await getRealm();

    let listItems = realm.objects<T>(this.schema);

    if (sort) {
      listItems = listItems.sorted(sort?.param as string, sort?.reverse);
    }

    return listItems;
  }

  async save(model: ModelSchema<T>) {
    const realm = await getRealm();
    let result = { ...model };

    realm.write(() => {
      result = realm.create(this.schema, model as T, UpdateMode.Modified);
    });

    return result;
  }

  async saveMultiple(listItems: T[]) {
    const realm = await getRealm();

    realm.write(() => {
      listItems.forEach((item) => {
        realm.create(this.schema, item as T, UpdateMode.Modified);
      });
    });

    return listItems;
  }

  async deleteAll() {
    const realm = await getRealm();

    const items = realm.objects<T>(this.schema);

    realm.write(() => {
      realm.delete(items);
    });

    return true;
  }

  async getBy(param: keyof ModelSchema<T>, value: string | number) {
    const realm = await getRealm();

    const listItems = realm.objects<T>(this.schema);

    const filtered = listItems.filtered(`${param} = '${value}'`);

    return filtered;
  }
}
