// src/data/items.ports.ts

import { IdentifierEnum } from '@/types';

const PORTS: IdentifierEnum = {
  DP14: 'DisplayPort 1.4',
  MINIDP: 'Mini DisplayPort',
  HDMI20: 'HDMI 2.0',
  USB30IN: 'USB 3.0 (in)',
  USB30OUT: 'USB 3.0 (out)',
  USBC: 'USB Type C',
  A35MMIN: '3.5 mm Audio-in',
  A35MMOUT: '3.5 mm Audio-out',
};
// note: Ports are currently a mess due to versioning, implement them last

export default PORTS;
