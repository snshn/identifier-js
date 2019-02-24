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

  // Arctic
  {
    manufacturer: MANUFACTURERS.ARCTIC,
    name: 'MX-4',
    technology: TECHNOLOGIES.THERMAL_GREASE,
    thermalConductivity: 8.5,
    electricallyConductive: false,
  },
  {
    manufacturer: MANUFACTURERS.ARCTIC,
    name: 'Silver 5',
    technology: TECHNOLOGIES.THERMAL_GREASE,
    thermalConductivity: 8.7,
    electricallyConductive: false,
  },

  // Coollaboratory
  {
    manufacturer: MANUFACTURERS.COOLLABORATORY,
    name: 'Liquid Ultra',
    technology: TECHNOLOGIES.LIQUID_METAL,
    thermalConductivity: 38.4,
    electricallyConductive: true,
  },
  {
    manufacturer: MANUFACTURERS.COOLLABORATORY,
    name: 'Liquid Pro',
    technology: TECHNOLOGIES.LIQUID_METAL,
    thermalConductivity: 82,
    electricallyConductive: true,
  },
  {
    manufacturer: MANUFACTURERS.COOLLABORATORY,
    name: 'Liquid MetalPad',
    technology: TECHNOLOGIES.THERMAL_PAD,
    thermalConductivity: 10,
    electricallyConductive: true,
  },

  // Cooler Master
  {
    manufacturer: MANUFACTURERS.COOLER_MASTER,
    name: 'MasterGel Maker',
    technology: TECHNOLOGIES.THERMAL_GREASE,
    thermalConductivity: 11,
    electricallyConductive: false,
  },

  // EK-TIM
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

  // Gelid
  {
    manufacturer: MANUFACTURERS.GELID,
    name: 'GC Extreme',
    technology: TECHNOLOGIES.THERMAL_GREASE,
    thermalConductivity: 8.5,
    electricallyConductive: false,
  },

  // Innovation Cooling
  {
    manufacturer: MANUFACTURERS.INNOVATION_COOLING,
    name: 'Graphite Thermal Pad',
    technology: TECHNOLOGIES.THERMAL_PAD,
    thermalConductivity: 35,
    electricallyConductive: true,
  },
  {
    manufacturer: MANUFACTURERS.INNOVATION_COOLING,
    name: 'Diamond',
    technology: TECHNOLOGIES.THERMAL_GREASE,
    thermalConductivity: 4.5,
    electricallyConductive: false,
  },

  // Noctua
  {
    manufacturer: MANUFACTURERS.NOCTUA,
    name: 'NT-H1',
    technology: TECHNOLOGIES.THERMAL_GREASE,
    thermalConductivity: 8.9,
    electricallyConductive: false,
  },

  // Thermal Grizzly
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

];

export default items;
