import BaseController from './baseController.class';
import { IBaseGet } from './types.d';

export default function BaseControllerGet<T>(
  service: IBaseGet<T>,
  displayName = '',
) {
  abstract class Controller extends BaseController<T>(service, displayName) {
    static async getById(id: number) {
      try {
        const result = await service.getById(id);

        return result;
      } catch (error) {
        const newError = {
          message: error?.message,
          hierarchy: `${displayName} - getById`,
          payload: JSON.stringify(id),
        };
        throw newError;
      }
    }

    static async getByListIds(listId: number[]) {
      try {
        const result = await service.getByListIds(listId);

        return result;
      } catch (error) {
        const newError = {
          message: error?.message,
          hierarchy: `${displayName} - getMultipleById`,
          payload: JSON.stringify(listId),
        };
        throw newError;
      }
    }

    static async deleteById(id: number) {
      try {
        const result = await service.deleteById(id);

        return result;
      } catch (error) {
        const newError = {
          message: error?.message,
          hierarchy: `${displayName} - deleteById`,
          payload: JSON.stringify(id),
        };
        throw newError;
      }
    }

    static async deleteMultipleById(listId: number[]) {
      try {
        const result = await service.deleteMultipleById(listId);

        return result;
      } catch (error) {
        const newError = {
          message: error?.message,
          hierarchy: `${displayName} - deleteMultipleById`,
          payload: JSON.stringify(listId),
        };
        throw newError;

      }
    }
  }

  return Controller;
}
