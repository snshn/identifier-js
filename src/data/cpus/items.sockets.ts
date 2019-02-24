// src/data/cpus/items.sockets.ts

import { IdentifierEnum } from '@/types';

const SOCKETS: IdentifierEnum = {

  // AMD
  G34: 'Socket G34',
  AM4: 'Socket AM4',
  SP3: 'Socket SP3',
  TR4: 'Socket TR4',

  // Intel
  LGA775: 'LGA 775', // aka Socket T
  LGA1155: 'LGA 1155', // aka Socket H2
  LGA1150: 'LGA 1150', // aka Socket H3
  LGA1151: 'LGA 1151', // aka Socket H4
  LGA2066: 'LGA 2066', // aka Socket R4
  LGA3647: 'LGA 3647',

};

export default SOCKETS;
