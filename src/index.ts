import Event from './event';

const eventCenter = new Event();

export { Event, eventCenter };
export * from './promise';
export { default as noop } from './noop';
export { default as uuid } from './uuid';
