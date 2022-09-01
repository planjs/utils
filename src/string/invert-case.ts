/**
 * Inverts the case of a string
 * @param {string} str
 * @return {string}
 * @example
 * Str.invertCase('Hello'); // => 'hELLO'
 */
function invertCase(str: string) {
  let output = '';
  let code = 0;

  for (let i = 0, len = str.length - 1; i <= len; i++) {
    code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      output += str.charAt(i).toLowerCase();
    } else if (code >= 97 && code <= 122) {
      output += str.charAt(i).toUpperCase();
    } else {
      output += str.charAt(i);
    }
  }

  return output;
}

export default invertCase;
