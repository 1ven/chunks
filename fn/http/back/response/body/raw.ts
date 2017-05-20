import { Body } from './';
import { PlainData } from '../../../../types';

export const raw: Body = (data:PlainData): string => (
  String(data)
);