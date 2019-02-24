// src/data/cpus/index.ts

import items, { Item } from './items';
import filters from './filters';

const title = 'CPUs';

const templates = {
  list: '{{ item.manufacturer }} {{ item.name }}',
};

export { items, filters, title, templates, Item };
