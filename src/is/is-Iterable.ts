import isNil from './is-Nil';

function isIterable(value): value is Iterable<any> {
  if (isNil(value)) {
    return false;
  }
  return typeof value[Symbol.iterator] === 'function';
}

export default isIterable;
