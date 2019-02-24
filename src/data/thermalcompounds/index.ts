// src/data/thermalcompounds/index.ts

import items, { Item } from './items';
import filters from './filters';

const title = 'Thermal Compoounds';

const templates = {
  list: '{{ item.manufacturer }} {{ item.name }} ({{ item.thermalConductivity }} W/mk)',
  item: `<div>
    <h1>{{ item.manufacturer }} {{ item.name }}</h1>
    <ul>
      <li>Thermal Conductivity: {{ item.thermalConductivity }} W/mk</li>
      <li>Electrically Conductive: {{ item.electricallyConductive ? 'Yes' : 'No' }}</li>
    </ul>
  </div>`,
};

export { items, filters, title, templates, Item };
