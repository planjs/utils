/**
 * hex color 转化为 rgba
 * @param hex
 * @param opacity
 * https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
 * @category Dom
 */
export function hexColorToRgba(hex: string, opacity?: number) {
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    if (typeof opacity !== 'number') {
      return `rgb(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${opacity})`;
    }
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${opacity})`;
  }
  throw new Error('Bad Hex');
}
