import { ClassType } from '../type';

export const SINGLETON_KEY = Symbol('singleton');

export type Singleton<T extends ClassType> = T & {
  [SINGLETON_KEY]: T extends new (...args: any[]) => infer I ? I : never;
};

const singleton = <T extends ClassType>(classTarget: T) =>
  new Proxy(classTarget, {
    construct(target: Singleton<T>, argumentsList, newTarget) {
      if (target.prototype !== newTarget.prototype) {
        return Reflect.construct(target, argumentsList, newTarget);
      }
      if (!target[SINGLETON_KEY]) {
        target[SINGLETON_KEY] = Reflect.construct(target, argumentsList, newTarget);
      }
      return target[SINGLETON_KEY];
    },
  });

export default singleton;
