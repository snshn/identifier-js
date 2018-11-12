// src/data/filters.ts

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
    name: 'curved',
    title: 'Curved',
    type: TYPES.BOOL,
  },
  {
    name: 'camera',
    title: 'Built-in camera',
    type: TYPES.BOOL,
  },
  {
    name: 'speakers',
    title: 'Built-in speakers',
    type: TYPES.BOOL,
  },
];

export default filters;
