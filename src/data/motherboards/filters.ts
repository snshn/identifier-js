// src/data/motherboards/filters.ts

import { TYPES, IdentifierFilter } from '@/types';

const title = 'Desktop/Server/Workstation Motherboards';

const templates = {
  list: '{{ item.manufacturer }} {{ item.name }}',
};

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
export { title, templates };
