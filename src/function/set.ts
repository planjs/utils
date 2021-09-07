import { PropertyPath } from '../type';

function set<Entity = any, Output = Entity, Value = any>(
  entity: Entity,
  paths: PropertyPath[],
  value: Value,
): Output {
  if (!paths.length) {
    return value as unknown as Output;
  }

  const [path, ...restPath] = paths;

  let clone: Output;
  if (!entity && typeof path === 'number') {
    clone = [] as unknown as Output;
  } else if (Array.isArray(entity)) {
    clone = [...entity] as unknown as Output;
  } else {
    clone = { ...entity } as unknown as Output;
  }

  clone[path as string] = set(clone[path as string], restPath, value);

  return clone;
}

export default set;
