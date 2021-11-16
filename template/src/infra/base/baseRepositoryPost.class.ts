import getRealm from '../../core/realm';
import BaseRepository from './baseRepository.class';

export default class BaseRepositoryPost<
  T extends { IdMobile: string },
> extends BaseRepository<T> {
  constructor(public schema: string) {
    super(schema);
  }

  async getByIdMobile(idMobile: string) {
    const realm = await getRealm();

    const listItems = realm.objects<T>(this.schema);

    const filtered = listItems.filtered(`IdMobile = '${idMobile}'`);

    return filtered[0];
  }

  async deleteByIdMobile(idMobile: string) {
    const realm = await getRealm();

    const listItems = realm.objects<T>(this.schema);

    const filtered = listItems.filtered(`IdMobile = '${idMobile}'`);

    realm.write(() => {
      realm.delete(filtered);
    });

    return true;
  }

  async deleteMultipleByIdMobile(listIds: string[]) {
    const realm = await getRealm();

    const listItems = realm.objects<T>(this.schema);

    const filtered = Array.from(listItems).filter((s) =>
      listIds.includes(s.IdMobile),
    );

    realm.write(() => {
      realm.delete(filtered);
    });

    return true;
  }
}
