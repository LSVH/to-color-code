# to-hex-color-code

> Convert a string to a six character hexadecimal color code.

[![NPM](https://img.shields.io/npm/v/to-hex-color-code.svg)](https://www.npmjs.com/package/to-hex-color-code) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save to-hex-color-code
```

## Usage

```jsx
import toHexColorCode from 'to-hex-color-code'

toHexColorCode('ABC');      // output: #AABBCC
toHexColorCode('ABCABC');   // output: #ABCABC
toHexColorCode('INVALID');  // output:

toHexColorCode('#ABC');     // output: #AABBCC
toHexColorCode('#ABCABC');  // output: #ABCABC
toHexColorCode('#INVALID'); // output:
```

## License

MIT © [LSVH](https://github.com/LSVH)
