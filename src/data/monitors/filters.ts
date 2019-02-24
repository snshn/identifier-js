// src/data/monitors/filters.ts

import { TYPES, IdentifierFilter } from '@/types';

const filters: IdentifierFilter[] = [
    {
      name: 'manufacturer',
      title: 'Manufacturers',
      type: TYPES.ENUM,
    },
    {
      name: 'technology',
      title: 'Technologies',
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
