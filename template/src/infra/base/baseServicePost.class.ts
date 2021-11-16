import AsyncStorage from '@react-native-async-storage/async-storage';
import { buildSaveDateTime, getUuid } from 'gaUtils';
import BaseService from './baseService.class';
import { IBasePost, ModelSchema } from './types.d';

type PostProps = {
  IdMobile?: string;
  MobUserNameCreator?: string | null;
  MobUserNameLastChange?: string | null;
  MobileCreationDate?: string;
  MobileLastChangeDate?: string;
};

export default class BaseServicePost<T extends PostProps> extends BaseService<T>
  implements IBasePost<T> {
  constructor(public repository: IBasePost<T>) {
    super(repository);
  }

  async save(item: ModelSchema<T> & PostProps) {
    const newItem = { ...item };

    const userName = await AsyncStorage.getItem('UserName');

    if (!newItem?.IdMobile || newItem.IdMobile === '') {
      newItem.IdMobile = await getUuid();
      newItem.MobUserNameCreator = userName;
      newItem.MobileCreationDate = buildSaveDateTime(new Date());
    }

    newItem.MobUserNameLastChange = userName;
    newItem.MobileLastChangeDate = buildSaveDateTime(new Date());

    const responde = await this.repository.save(newItem);

    return responde;
  }

  async saveMultiple(listItem: T[]) {
    const userName = await AsyncStorage.getItem('UserName');

    const formattedItems: T[] = [];

    for await (const item of listItem) {
      if (!item?.IdMobile) {
        item.IdMobile = await getUuid();
        item.MobUserNameCreator = userName;
        item.MobileCreationDate = buildSaveDateTime(new Date());
      }

      item.MobUserNameLastChange = userName;
      item.MobileLastChangeDate = buildSaveDateTime(new Date());

      formattedItems.push(item);
    }

    const result = await this.repository.saveMultiple(formattedItems);

    return result;
  }

  async getByIdMobile(idMobile: string) {
    const request = await this.repository.getByIdMobile(idMobile);

    return request;
  }

  async deleteByIdMobile(idMobile: string) {
    const request = await this.repository.deleteByIdMobile(idMobile);

    return request;
  }

  async deleteMultipleByIdMobile(listIds: string[]) {
    const request = await this.repository.deleteMultipleByIdMobile(listIds);

    return request;
  }
}
