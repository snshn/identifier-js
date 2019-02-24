// src/data/motherboards/items.ts

import MANUFACTURERS from './items.manufacturers';
import SOCKETS from '../cpus/items.sockets';
import FORMFACTORS from './items.formfactors';

export interface Item {
  manufacturer: string;
  name: string;
  socket: string;
  ecc: boolean;
  formFactor: string;
  m2: number; // Number of on-board M.2 slots
  [key: string]: any;
}

const items: Item[] = [
  {
    manufacturer: MANUFACTURERS.ASUS,
    name: 'KGPE-D16',
    socket: SOCKETS.G34,
    ecc: true,
    formFactor: FORMFACTORS.EEB,
    m2: 0,
    sataII: 6,
  },
  {
    manufacturer: MANUFACTURERS.ASUS,
    name: 'ROG Zenith Extreme',
    socket: SOCKETS.TR4,
    ecc: true,
    formFactor: FORMFACTORS.EATX,
    m2: 1,
    sataIII: 6,
  },
  {
    manufacturer: MANUFACTURERS.ASUS,
    name: 'P10S WS',
    socket: SOCKETS.LGA1151,
    ecc: true,
    formFactor: FORMFACTORS.ATX,
    m2: 2,
    sataIII: 8,
  },
  {
    manufacturer: MANUFACTURERS.ASUS,
    name: 'P10S-I',
    socket: SOCKETS.LGA1151,
    ecc: true,
    formFactor: FORMFACTORS.MINI_ITX,
    m2: 1,
    sataIII: 3,
  },
  {
    manufacturer: MANUFACTURERS.ASUS,
    name: 'P10S-M-DC',
    socket: SOCKETS.LGA1151,
    ecc: true,
    formFactor: FORMFACTORS.MICRO_ATX,
    m2: 2,
    sataIII: 6,
  },
  {
    manufacturer: MANUFACTURERS.ASUS,
    name: 'P10S-V/4L',
    socket: SOCKETS.LGA1151,
    ecc: true,
    formFactor: FORMFACTORS.ATX,
    m2: 0,
    sataIII: 8,
  },
  {
    manufacturer: MANUFACTURERS.ASUS,
    name: 'P10S-M WS',
    socket: SOCKETS.LGA1151,
    ecc: true,
    formFactor: FORMFACTORS.MICRO_ATX,
    m2: 1,
    sataIII: 8,
  },
  {
    manufacturer: MANUFACTURERS.ASUS,
    name: 'P8B-M',
    socket: SOCKETS.LGA1155,
    ecc: true,
    formFactor: FORMFACTORS.MICRO_ATX,
    m2: 0,
    sataIII: 6,
  },
];

export default items;
