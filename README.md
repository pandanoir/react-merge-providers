# react-merge-providers

This package provides provides *type-safe* way to merge providers flat.

# Install

```
$ npm install --save react-merge-providers
```

# Examples

```tsx
import { createContext, FC } from 'react';
import { MergeProviders } from 'react-merge-providers';

const NumContext = createContext(0);
const StringContext = createContext('string');

export const Valid: FC = () => {
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

export const Invalid: FC = () => {
  return (
    // @ts-expect-error
    <MergeProviders
      providers={[
        [NumContext, 3],
        [StringContext, true], // causes type error
      ]}
    >
      <div />
    </MergeProviders>
  );
};
```

Now you don't have to get providers nested and nested and nested!

# API

This package provides two way to merge providers.

- MergeProviders: component version
- mergeProviders: function version

```tsx
export const Valid: FC = () => {
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

export const Valid2: FC = () => {
  return mergeProviders(
    [
      [NumContext, 0],
      [StringContext, 'string'],
    ],
    <div />
  );
};
```