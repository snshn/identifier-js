// src/data/thermalcompounds/index.ts

import items, { Item } from './items';
import filters from './filters';

const title = 'Thermal Compoounds';

const templates = {
  list: '<strong>{{ item.manufacturer }}</strong> {{ item.name }} ({{ item.thermalConductivity }} W/mk)',
  item: `<h1><strong>{{ item.manufacturer }}</strong> {{ item.name }}</h1>
    <ul>
      <li>Thermal Conductivity: {{ item.thermalConductivity }} W/mk</li>
      <li>Electrically Conductive: {{ item.electricallyConductive ? 'Yes' : 'No' }}</li>
    </ul>`,
};

export { items, filters, title, templates, Item };
