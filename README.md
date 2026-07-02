# Pick UI

A lightweight, modern React UI component library.

## Installation

Install the package via npm (if published) or link it locally:

```bash
npm install pick-ui
```

## Usage

Import components directly in your React project:

```jsx
import { Button } from 'pick-ui';

function App() {
  return (
    <Button 
      label="Click Me" 
      onClick={() => alert('Button Clicked!')} 
    />
  );
}
```

## Development & Building

To build the library for distribution:

```bash
npm run build
```

This generates the compiled assets in the `dist` folder:
- `dist/my-ui-package.es.js` (ES Module)
- `dist/my-ui-package.umd.js` (UMD Module)

## Linting

To run the linter and ensure code quality:

```bash
npm run lint
```
