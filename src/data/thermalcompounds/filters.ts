// src/data/thermalcompounds/filters.ts

import { TYPES, IdentifierFilter } from '@/types';

const filters: IdentifierFilter[] = [
  {
    name: 'manufacturer',
    title: 'Manufacturer',
    type: TYPES.ENUM,
  },
  {
    name: 'technology',
    title: 'Technology',
    type: TYPES.ENUM,
  },
  {
    name: 'thermalConductivity (W/mk)',
    title: 'Thermal Conductivity',
    type: TYPES.INT,
  },
  {
    name: 'electricallyConductive',
    title: 'Electrically Conductive',
    type: TYPES.BOOL,
  },
];

export default filters;
