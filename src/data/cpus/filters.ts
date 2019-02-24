// src/data/cpus/filters.ts

import { TYPES, IdentifierFilter } from '@/types';

const filters: IdentifierFilter[] = [

  // Enum
  {
    name: 'manufacturer',
    title: 'Manufacturer',
    type: TYPES.ENUM,
  },
  {
    name: 'socket',
    title: 'Socket',
    type: TYPES.ENUM,
  },

  // Int
  {
    name: 'cores',
    title: 'No. of cores',
    type: TYPES.INT,
  },

  // Bool
  {
    name: 'ecc',
    title: 'ECC memory support',
    type: TYPES.BOOL,
  },
  {
    name: 'optane',
    title: 'Intel Optane support',
    type: TYPES.BOOL,
  },
  {
    name: 'graphics',
    title: 'Integrated graphics',
    type: TYPES.BOOL,
  },

];

export default filters;
