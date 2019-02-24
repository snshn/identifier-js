// src/types.ts

import { Item } from '@/data';

export interface IdentifierEnum {
  [key: string]: string;
}

interface Refinements {
  [key: string]: any;
}

interface Values {
  [key: string]: (any[] | undefined);
}

export const TYPES = {
  BOOL: 1,
  ENUM: 2,
  INT: 3,
};

export interface RootState {
  items: Item[];
  refinements: Refinements;
  values: Values;
  mode: string;
}

export interface IdentifierFilter {
  name: string;
  title: string;
  type: typeof TYPES.BOOL;
}
