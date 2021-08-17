import root from '../global';
import Event from './event';

const eventCenterKey = '__planjs_event_center__';
const eventCenter: Event = root[eventCenterKey] || (root[eventCenterKey] = new Event());

export { Event, eventCenter };

export { default as uuid } from './uuid';
export { default as KeyCode } from './key-code';
export { default as slash } from './slash';
export { default as qs } from './qs';

export type { OauthClientOption } from './oauth-client';
export { default as OauthClient } from './oauth-client';
