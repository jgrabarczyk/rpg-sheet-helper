/**
 * Method to check if type assertion is exhausted correctly.
 * @param _ parameter which assertion is based on.
 * If assertion is not exhausted correctly intellisense will detect type missmach. (parameter type will be different from type never).
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function assertUnreachable(_: never): never {
  throw new Error('Assertion not exhausted properly');
}
