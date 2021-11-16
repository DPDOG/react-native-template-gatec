import getRealm from '../../core/realm';
import BaseRepository from './baseRepository.class';

export default class BaseRepositoryGet<
  T extends { Id: number },
> extends BaseRepository<T> {
  constructor(public schema: string) {
    super(schema);
  }

  async getById(id: number) {
    const realm = await getRealm();

    const listItems = realm.objects<T>(this.schema);

    const filtered = listItems.filtered(`Id = '${id}'`);

    return filtered[0];
  }

  async getByListIds(listId: number[]) {
    const realm = await getRealm();

    const listItems = realm.objects<T>(this.schema);

    const filtered = listItems.filter((s) => listId.includes(s.Id));

    return filtered;
  }

  async deleteById(id: number) {
    const realm = await getRealm();

    const listItems = realm.objects<T>(this.schema);

    const filtered = listItems.filtered(`Id = '${id}'`);

    realm.write(() => {
      realm.delete(filtered);
    });

    return true;
  }

  async deleteMultipleById(listIds: number[]) {
    const realm = await getRealm();

    const listItems = realm.objects<T>(this.schema);

    const filtered = listItems.filter((s) => listIds.includes(s.Id));

    realm.write(() => {
      realm.delete(filtered);
    });

    return true;
  }
}
