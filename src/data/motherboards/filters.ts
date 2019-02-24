// src/data/motherboards/filters.ts

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
    name: 'sataII',
    title: 'No. of SATA II ports',
    type: TYPES.INT,
  },
  {
    name: 'sataIII',
    title: 'No. of SATA III ports',
    type: TYPES.INT,
  },
  {
    name: 'm2',
    title: 'No. of M.2 ports',
    type: TYPES.INT,
  },


  // Bool
  {
    name: 'ecc',
    title: 'ECC memory support',
    type: TYPES.BOOL,
  },
];

export default filters;
