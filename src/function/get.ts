import type { Dictionary, PropertyPath } from '../type';
import { isDef } from '../is';

function get<T>(
  entity: Dictionary<T> | null | undefined,
  ...paths: PropertyPath[]
): T[keyof T] | undefined {
  let current: any = entity;

  for (let i = 0; i < paths.length; i += 1) {
    if (isDef(current)) {
      return undefined;
    }

    current = current[paths[i] as keyof T];
  }

  return current;
}

export default get;
