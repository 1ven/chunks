import { Response } from './';

export const status = (status: number): Response => ({
  status,
});