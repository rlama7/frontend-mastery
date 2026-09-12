import { technologies } from '../data/technologies';
import type { Technology } from '../types/technology';

export const fetchTechnologies = async (): Promise<Technology[]> => {
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });

    return technologies;
  } catch {
    throw new Error('Failed to fetch technologies');
  }
};
