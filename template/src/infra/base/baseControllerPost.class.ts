import BaseController from './baseController.class';
import { IBasePost } from './types.d';

export default function BaseControllerPost<T>(
  service: IBasePost<T>,
  displayName: string = '',
) {
  abstract class Controller extends BaseController<T>(service) {
    static async getByIdMobile(idMobile: string) {
      try {
        const result = await service.getByIdMobile(idMobile);

        return result;
      } catch (error) {
        const newError = {
          message: error?.message,
          hierarchy: `${displayName} - getByIdMobile`,
          payload: JSON.stringify(idMobile),
        };
        throw newError;
      }
    }

    static async deleteByIdMobile(idMobile: string) {
      try {
        const result = await service.deleteByIdMobile(idMobile);

        return result;
      } catch (error) {
        const newError = {
          message: error?.message,
          hierarchy: `${displayName} - deleteById`,
          payload: JSON.stringify(idMobile),
        };
        throw newError;
      }
    }

    static async deleteMultipleByIdMobile(listId: string[]) {
      try {
        const result = await service.deleteMultipleByIdMobile(listId);

        return result;
      } catch (error) {
        const newError = {
          message: error?.message,
          hierarchy: `${displayName} - deleteMultipleByIdMobile`,
          payload: JSON.stringify(listId),
        };
        throw newError;
      }
    }
  }

  return Controller;
}
