/**
 * Create dynamic number type for easier lvl progression.
 */


/**
 * Helper type for Range
 * Add array lenght as first element of new array and return it as a new type
 */
type PrependNextNum<A extends Array<unknown>> = A['length'] extends infer T
  ? ((t: T, ...a: A) => void) extends (...x: infer X) => void
    ? X
    : never
  : never;

/**
 * Helper type for Range
 * Recursivly build Array of natural numbers where X >= 0 && X <= N
 */
type EnumerateInternal<A extends Array<unknown>, N extends number> = {
  0: A;
  1: EnumerateInternal<PrependNextNum<A>, N>;
}[N extends A[0] ? 0 : 1];

export type Enumerate<N extends number> = EnumerateInternal<[], N> extends (infer E)[] ? E : never;

/**
 * Range create collection of natural numbers where:
 * X > FROM && X <= TO
 */
export type Range<FROM extends number, TO extends number> = Exclude<Enumerate<TO>, Enumerate<FROM>>;

export type Digit = Enumerate<9>;