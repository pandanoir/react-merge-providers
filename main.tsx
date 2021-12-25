import { Context, PropsWithChildren, ReactNode } from 'react';
type Tuple = readonly [] | readonly any[];
type IsProvider<T> = T extends (infer R)[]
  ? R extends [Context<infer x>, infer y]
    ? x extends y
      ? JSX.Element
      : void
    : void
  : void;

export const mergeProviders = <T extends Tuple[]>(
  providers: T,
  children: ReactNode
): IsProvider<T> => {
  const mergedProvider = providers.reduce<ReactNode>(
    (acc, [Context, value]) => (
      <Context.Provider value={value}>{acc}</Context.Provider>
    ),
    children
  );
  return mergedProvider as unknown as IsProvider<T>;
};

export const MergeProviders = <T extends Tuple[]>({
  providers,
  children,
}: PropsWithChildren<{ providers: T }>): IsProvider<T> => {
  const mergedProvider = providers.reduce<ReactNode>(
    (acc, [Context, value]) => (
      <Context.Provider value={value}>{acc}</Context.Provider>
    ),
    children
  );
  return mergedProvider as unknown as IsProvider<T>;
};
