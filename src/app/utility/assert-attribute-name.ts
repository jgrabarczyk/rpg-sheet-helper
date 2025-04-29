import { DHII_AttributeName } from '@dhii/types/dhii-attribute';
/**
 * exclude 'Influence' from attributes to enable easy access to lvl and aptitudes parameters
 * @param name DHII_AttributeName 
 */
export function assertAttributeName(
  name: DHII_AttributeName
): asserts name is Exclude<DHII_AttributeName, 'Influence'> {
  if (name === 'Influence') {
    throw new Error('Influence is Excluded in this scope');
  }
}
