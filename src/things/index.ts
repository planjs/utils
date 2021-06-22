import Event from './event';

const eventCenter = new Event();

export { Event, eventCenter };

export { default as uuid } from './uuid';
export { default as KeyCode } from './key-code';
export { default as slash } from './slash';
export { default as qs } from './qs';

export type { OauthClientOption } from './oauth-client';
export { default as OauthClient } from './oauth-client';
