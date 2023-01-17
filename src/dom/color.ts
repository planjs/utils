import { isDigit } from '../is';

/**
 * hex color 转化为 rgba
 * @param hex
 * @param opacity
 * https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
 * @category Dom
 * TODO support hex8
 */
export function hexColorToRgba(hex: string, opacity?: number | string) {
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    if (!isDigit(opacity)) {
      return `rgb(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')})`;
    }
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${opacity})`;
  }
  throw new Error('Bad Hex');
}

/**
 * rgba color 转化为 hex
 * @param rgba
 */
export function rgbaColorToHex(rgba: string) {
  if (!/^rgb/.test(rgba)) {
    throw new Error('Bad rgba');
  }

  const inParts = rgba.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
  const r = parseInt(inParts[0], 10),
    g = parseInt(inParts[1], 10),
    b = parseInt(inParts[2], 10),
    a = inParts.length === 4 ? parseFloat(inParts[3]).toFixed(2) : null;

  const outParts = [r.toString(16), g.toString(16), b.toString(16)];

  if (a !== null) {
    outParts.push(
      // @ts-ignore
      Math.round(a * 255)
        .toString(16)
        .substring(0, 2),
    );
  }

  // Pad single-digit output values
  outParts.forEach(function (part, i) {
    if (part.length === 1) {
      outParts[i] = '0' + part;
    }
  });

  return '#' + outParts.join('');
}
