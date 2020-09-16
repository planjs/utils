import EventEmitter from './event_emitter';

const eventEmitter = new EventEmitter();

export { EventEmitter, eventEmitter };
export * from './promise';
export { default as noop } from './noop';
export { default as uuid } from './uuid';
