export default function toHexColorCode(str) {
  const pattern = /#?([a-fA-F0-9]+)/g;
  const matches = pattern.exec(str);
  let code = matches != null ? matches[1] : '';

  switch (code.length) {
    case 3:
      let newCode = '';
      for (let i = 0; i < code.length; i++) {
        newCode += code.charAt(i).repeat(2);
      }
      return '#' + newCode;

    case 6:
      return '#' + code;

    default:
      return '';
  }
}