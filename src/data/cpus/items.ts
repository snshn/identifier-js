// src/data/cpus/items.ts

import MANUF from './items.manufacturers';
import SOCKETS from './items.sockets';

export interface Item {
  manufacturer: string;
  name: string;
  socket: string;
  cores: number;
  freq: number; // Processor speed in GHz
  l3cache: number; // L3 cache size
  tdp: number;
  ecc: boolean;
  graphics: boolean;
  lithography: number; // Nanometers
  [key: string]: any;
}

const items: Item[] = [

  // AMD
  {
    manufacturer: MANUF.AMD,
    name: 'Opteron 6366 HE',
    socket: SOCKETS.G34,
    cores: 16,
    freq: 1.80,
    l3cache: 16,
    tdp: 85,
    ecc: true,
    graphics: false,
    lithography: 32,
  },
  {
    manufacturer: MANUF.AMD,
    name: 'Epyc 7351P',
    socket: SOCKETS.SP3,
    cores: 16,
    freq: 2.40,
    l3cache: 64,
    tdp: 170,
    ecc: true,
    graphics: false,
    lithography: 14,
  },

  // Intel
  {
    manufacturer: MANUF.INTEL,
    name: 'Celeron G1610T',
    socket: SOCKETS.LGA1155,
    cores: 2,
    freq: 2.30,
    l3cache: 2,
    tdp: 35,
    ecc: true,
    graphics: true,
    lithography: 22,
  },
  {
    manufacturer: MANUF.INTEL,
    name: 'Xeon E3-1235L v5',
    socket: SOCKETS.LGA1151,
    cores: 4,
    freq: 2.00,
    l3cache: 8,
    tdp: 25,
    ecc: true,
    graphics: true,
    lithography: 14,
  },
  {
    manufacturer: MANUF.INTEL,
    name: 'Xeon E3-1220 v6',
    socket: SOCKETS.LGA1151,
    cores: 4,
    freq: 3.00,
    l3cache: 8,
    tdp: 72,
    ecc: true,
    graphics: false,
    lithography: 14,
  },

];

export default items;
