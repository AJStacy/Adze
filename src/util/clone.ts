/**
 * Clones an object if it is not null.
 */
export function cloneObject<T>(obj: T | null): T | null {
  return obj ? { ...obj } : null;
}

/**
 * Clones an array if it is not null.
 */
export function cloneArray<T>(arr: T[] | null): T[] | null {
  return arr ? [...arr] : null;
}
