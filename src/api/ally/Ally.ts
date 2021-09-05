/* eslint-disable no-unused-vars */
import { PublicKey } from '@solana/web3.js';

export enum AllyKind {
  PROTECTOR,
  PROTECTED,
  TWO_WAY,
}

export interface Ally {
  name: string;
  address: PublicKey;
  kind: AllyKind;
}
