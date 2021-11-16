/* eslint-disable @typescript-eslint/ban-types */
import Realm from 'realm';

export interface IResponseInfra<T> {
  Status: boolean;
  Data: T;
  Error?: {};
}

export type SortParam<T> = {
  param: keyof ModelSchema<T>;
  reverse?: boolean;
};

export interface IBase<T> {
  getBy: (param: keyof ModelSchema<T>, value: string | number) => Promise<T[]>;
  getAll: (sort?: SortParam<T>) => Promise<T[]>;
  save: (item: ModelSchema<T>) => Promise<T>;
  deleteAll: () => Promise<boolean>;
  saveMultiple: (listId: T[]) => Promise<T[]>;
}

export interface IBaseGet<T> extends IBase<T> {
  getById: (id: number) => Promise<T | undefined>;
  getByListIds: (listId: number[]) => Promise<T[]>;
  deleteById: (id: number) => Promise<boolean>;
  deleteMultipleById: (listIds: number[]) => Promise<boolean>;
}

export interface IBasePost<T> extends IBase<T> {
  getByIdMobile: (id: string) => Promise<T | undefined>;
  deleteByIdMobile: (id: string) => Promise<boolean>;
  deleteMultipleByIdMobile: (listIds: string[]) => Promise<boolean>;
}

export type ModelSchema<T> = Omit<T, keyof Realm.Object>;
