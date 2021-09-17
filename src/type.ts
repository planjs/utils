export type Primitive = null | undefined | string | number | boolean | symbol | bigint;

export type Many<T> = T | ReadonlyArray<T>;

export type PropertyName = string | number | symbol;

export type PropertyPath = Many<PropertyName>;

export interface Dictionary<T> {
  [index: string]: T;
}

export type Values<T extends object> = T[keyof T];

export interface ClassType<T = any, A = any> {
  prototype: T;
  new (args?: A): T;
}

export type AnyFn = (...args: any[]) => any;

export type ThenReturn<T> = T extends Promise<infer U>
  ? U
  : T extends (...args: any[]) => Promise<infer V>
  ? V
  : T;
