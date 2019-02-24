// src/data/monitors/index.ts

import items, { Item } from './items';
import filters from './filters';

const title = 'Desktop Monitors';

const templates = {
  list: '{{ item.manufacturer }} {{ item.model }} {{ item.size }}" {{ item.technology }} Monitor',
};

export { items, filters, title, templates, Item };
