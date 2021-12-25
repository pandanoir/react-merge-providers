import { createContext, FC } from 'react';
import { MergeProviders, mergeProviders } from './main';

const NumContext = createContext(0);
const StringContext = createContext('string');

export const Valid: FC = () => {
  return mergeProviders(
    [
      [NumContext, 0],
      [StringContext, 'string'],
    ],
    <div />
  );
};

export const Valid2: FC = () => {
  return (
    <MergeProviders
      providers={[
        [NumContext, 0],
        [StringContext, 'string'],
      ]}
    >
      <div />
    </MergeProviders>
  );
};

// @ts-expect-error
export const Invalid: FC = () => {
  return mergeProviders(
    [
      [NumContext, 'string'],
      [StringContext, 'string'],
    ],
    <div />
  );
};

// @ts-expect-error
export const Invalid2: FC = () => {
  return mergeProviders(
    [
      [NumContext, 3],
      [StringContext, true],
    ],
    <div />
  );
};
export const Invalid3: FC = () => {
  return (
    // @ts-expect-error
    <MergeProviders
      providers={[
        [NumContext, 3],
        [StringContext, true],
      ]}
    >
      <div />
    </MergeProviders>
  );
};
