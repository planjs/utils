export type Many<T> = T | ReadonlyArray<T>;

export type PropertyName = string | number | symbol;

export type PropertyPath = Many<PropertyName>;

export interface Dictionary<T> {
  [index: string]: T;
}

export interface NumericDictionary<T> {
  [index: string]: T;
}

export interface ClassType<T = any, A = any> {
  prototype: T;
  new (args?: A): T;
}
