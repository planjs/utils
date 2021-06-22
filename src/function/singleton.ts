import { ClassType } from '../type';

export const SINGLETON_KEY = Symbol('singleton');

export type Singleton<T extends ClassType> = T & {
  [SINGLETON_KEY]: InstanceType<T>;
};

/**
 * singleton class
 * @param classTarget
 * @return class {classTarget}
 * @example
 * class A {}
 * const SingletonA = singleton(A);
 * console.log(new SingletonA() === new SingletonA()) // true;
 *
 * use decorators
 * @singleton
 * class B {}
 * @category Function
 */
const singleton = <T extends ClassType>(classTarget: T) => {
  return new Proxy(classTarget, {
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
};

export default singleton;
