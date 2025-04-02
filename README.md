# domlint-ui

DOMLint UI (React)

## Installation

```bash
npm i -S domlint-ui
```

## Usage

```jsx
import { DOMLintUI } from 'domlint-ui';

const config = {
  rules: {
    a: {
      style: {
        'border-left-width': { expect: ['0px', '1px'] },
      },
    },
    'code, pre': {
      style: {
        'background-color': {
          expect: ['#f3f3f3', '#f8f8f8'],
        },
      },
    },
    img: {
      exist: {
        goodness: 10,
        badness: 20,
      },
    },
    h2: {
      deprecated: {},
    },
  },
  ignore: ['script'],
};

render(<DOMLintUI config={config} />);
```
