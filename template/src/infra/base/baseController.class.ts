import { IBase, ModelSchema, SortParam } from './types.d';

export default function BaseController<T>(service: IBase<T>, displayName = '') {
  abstract class Controller {
    static async getAll(sort?: SortParam<T>) {
      try {
        const result = await service.getAll(sort);

        return result;
      } catch (error) {
        const newError = {
          message: error?.message,
          hierarchy: `${displayName} - getAll`,
        };
        throw newError;
      }
    }

    static async deleteAll() {
      try {
        const result = await service.deleteAll();

        return result;
      } catch (error) {
        const newError = {
          message: error?.message,
          hierarchy: `${displayName} - deleteAll`,
        };
        throw newError;
      }
    }

    static async save(item: ModelSchema<T>) {
      try {
        const result = await service.save(item);

        return result;
      } catch (error) {
        const newError = {
          message: error?.message,
          hierarchy: `${displayName} - save`,
          payload: JSON.stringify(item),
        };
        throw newError;
      }
    }

    static async saveMultiple(items: T[]) {
      try {
        const result = await service.saveMultiple(items);

        return result;
      } catch (error) {
        const newError = {
          message: error?.message,
          hierarchy: `${displayName} - saveMultiple`,
          payload: JSON.stringify(items),
        };
        throw newError;
      }
    }

    static async getBy(param: keyof ModelSchema<T>, value: number | string) {
      try {
        const result = await service.getBy(param, value);

        return result;
      } catch (error) {
        const newError = {
          message: error?.message,
          hierarchy: `${displayName} - getBy`,
          payload: JSON.stringify(param) + value,
        };
        throw newError;
      }
    }
  }

  return Controller;
}
