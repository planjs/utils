import Event from './event';

const eventCenter = new Event();

export { Event, eventCenter };

export * from './promise';
export * from './random';
export * from './string';
export * from './blob';
export * from './array';
export * from './dom';
export * from './bom';
export * from './things';
export * from './regex_constant';

export { default as noop } from './noop';
export { default as slash } from './slash';
