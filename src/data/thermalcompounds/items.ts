// src/data/thermalcompounds/items.ts

import MANUFACTURERS from './items.manufacturers';
import TECHNOLOGIES from './items.technologies';

export interface Item {
  manufacturer: string;
  name: string;
  thermalConductivity: number; // W/mk
  electricallyConductive: boolean;
  [key: string]: any;
}

const items: Item[] = [
  {
    manufacturer: MANUFACTURERS.THERMAL_GRIZZLY,
    name: 'Aeronaut',
    technology: TECHNOLOGIES.THERMAL_GREASE,
    thermalConductivity: 8.5,
    electricallyConductive: false,
  },
  {
    manufacturer: MANUFACTURERS.THERMAL_GRIZZLY,
    name: 'Kryonaut',
    technology: TECHNOLOGIES.THERMAL_GREASE,
    thermalConductivity: 12.5,
    electricallyConductive: false,
  },
  {
    manufacturer: MANUFACTURERS.THERMAL_GRIZZLY,
    name: 'Conductonaut',
    technology: TECHNOLOGIES.LIQUID_METAL,
    thermalConductivity: 73,
    electricallyConductive: true,
  },
  {
    manufacturer: MANUFACTURERS.EK_TIM,
    name: 'Ectotherm',
    technology: TECHNOLOGIES.THERMAL_GREASE,
    thermalConductivity: 8.5,
    electricallyConductive: false,
  },
  {
    manufacturer: MANUFACTURERS.EK_TIM,
    name: 'Indigo XS',
    technology: TECHNOLOGIES.THERMAL_GREASE,
    thermalConductivity: 40,
    electricallyConductive: false,
  },
  {
    manufacturer: MANUFACTURERS.ARCTIC,
    name: 'MX-4',
    technology: TECHNOLOGIES.THERMAL_GREASE,
    thermalConductivity: 8.5,
    electricallyConductive: false,
  },
  {
    manufacturer: MANUFACTURERS.IC,
    name: 'Graphite Thermal Pad',
    technology: TECHNOLOGIES.GRAPHITE,
    thermalConductivity: 35,
    electricallyConductive: true,
  },
];

export default items;
