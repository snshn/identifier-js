// src/data/monitors/items.ts

import MANUFACTURERS from './items.manufacturers';
import TECHNOLOGIES from './items.technologies';
import PORTS from './items.ports';

export interface Item {
  manufacturer: string;
  model: string;
  name: string;
  technology: string;
  size: number;
  hz: number;
  width: number;
  height: number;
  response: number;
  colors: number;
  staticContrast: number;
  dynamicContrast: number;
  curved: boolean;
  ports: object;
  camera: boolean;
  speakers: boolean;
  [key: string]: any;
}

const items: Item[] = [
  {
    manufacturer: MANUFACTURERS.DELL,
    model: 'UP3017Q',
    name: '30" UltraSharp OLED Monitor',
    technology: TECHNOLOGIES.OLED,
    size: 30,
    hz: 60,
    width: 3840,
    height: 2160,
    response: 0.1,
    colors: 1070000000,
    staticContrast: 0,
    dynamicContrast: 1000000,
    curved: false,
    ports: {
      [PORTS.MINIDP]: 1,
      [PORTS.HDMI20]: 1,
      [PORTS.USBC]: 1,
    },
    camera: false,
    speakers: false,
  },
  {
    manufacturer: MANUFACTURERS.SAMSUNG,
    model: 'CHG90',
    name: '49" 32:9 Curved 144 Hz FreeSync HDR LCD Monitor',
    technology: TECHNOLOGIES.LCD,
    size: 49,
    hz: 144,
    width: 3840,
    height: 1080,
    response: 1,
    colors: 1070000000,
    staticContrast: 3000, // TODO
    dynamicContrast: 0, // TODO undefined
    curved: true,
    ports: {
      [PORTS.MINIDP]: 1,
      [PORTS.DP14]: 1,
      [PORTS.HDMI20]: 2, // TODO (you sure it's 2.0?)
      [PORTS.A35MMIN]: 1,
      [PORTS.A35MMOUT]: 1,
      [PORTS.USB30IN]: 2,
      [PORTS.USB30OUT]: 1,
    },
    camera: false,
    speakers: false,
  },
  {
    manufacturer: MANUFACTURERS.BENQ,
    model: 'SW271',
    name: '27" 16:9 4K IPS Monitor',
    technology: TECHNOLOGIES.LCD,
    size: 27,
    hz: 60,
    width: 3840,
    height: 2160,
    response: 5,
    colors: 1073741824,
    staticContrast: 0, // TODO
    dynamicContrast: 1000,
    curved: false,
    ports: {
      [PORTS.USB30IN]: 2,
      [PORTS.USB30OUT]: 1,
      [PORTS.USBC]: 1,
      [PORTS.HDMI20]: 2,
      [PORTS.DP14]: 1,
      [PORTS.A35MMOUT]: 1,
    },
    camera: false,
    speakers: false,
  },
  {
    manufacturer: MANUFACTURERS.ASUS,
    model: 'PQ22UC',
    name: '21.6" Professional OLED Monitor',
    technology: TECHNOLOGIES.OLED,
    size: 21.6,
    hz: 60,
    width: 3840,
    height: 2160,
    response: 0.1,
    colors: 1070000000,
    staticContrast: 0, // TODO
    dynamicContrast: 1000000,
    curved: false,
    ports: {
      [PORTS.USBC]: 2,
      [PORTS.MICROHDMI]: 1,
    },
    camera: false,
    speakers: false,
  },
];

export default items;
