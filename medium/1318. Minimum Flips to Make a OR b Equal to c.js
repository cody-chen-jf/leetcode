/**
 * https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/discuss/479153/JavaScript-Easy-to-understand-bit-manipulation
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const minFlips = (a, b, c) => {
  let ret = 0;
  while (a > 0 || b > 0 || c > 0) {
    console.log('a ==== ', b)
    if (((a & 1) | (b & 1)) !== (c & 1)) {
      ret += ((a & 1) === 1 && (b & 1) === 1) ? 2 : 1;
    }
    a >>>= 1;
    b >>>= 1;
    c >>>= 1;
  }
  return ret;
};

const res = minFlips(10, 12, 1)
console.log(res)
