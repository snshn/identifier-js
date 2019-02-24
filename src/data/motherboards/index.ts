// src/data/motherboards/index.ts

import items, { Item } from './items';
import filters from './filters';

const title = 'Desktop/Server/Workstation Motherboards';

const templates = {
  list: '{{ item.manufacturer }} {{ item.name }}',
};

export { items, filters, title, templates, Item };
