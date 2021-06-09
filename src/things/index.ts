import Event from './event';

const eventCenter = new Event();

export { Event, eventCenter };

export { default as uuid } from './uuid';
export { default as KeyCode } from './key-code';
export { default as slash } from './slash';

export type { OauthClientOptions } from './oauth-client';
export { default as OauthClient } from './oauth-client';
