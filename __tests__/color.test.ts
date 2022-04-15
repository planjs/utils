import { rgbaColorToHex, hexColorToRgba } from '../src/dom/color';

describe('bom/color', () => {
  it('hexColorToRgba', () => {
    expect(hexColorToRgba('#000')).toBe('rgb(0,0,0)');
    expect(hexColorToRgba('#000000')).toBe('rgb(0,0,0)');
  });

  it('rgbaColorToHex', () => {
    expect(rgbaColorToHex('rgba(0,0,0,1)')).toBe('#000000ff');
    expect(rgbaColorToHex('rgba(0,0,0)')).toBe('#000000');
    expect(rgbaColorToHex('rgb(0,0,0)')).toBe('#000000');
    expect(() => rgbaColorToHex('0,0,0')).toThrow('Bad rgba');
  });
});
