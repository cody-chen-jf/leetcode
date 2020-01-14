// https://leetcode.com/problems/string-compression/

/**
 * @param {string[]} chars
 * @return {number}
 */
const compress = function(chars) {
  let i = 0, j = 0;

  while (i < chars.length) {
    if (chars[i] === chars[j]) {
      j++;
    } else if (j > i + 1) {
      const nums = (j - i).toString().split('');
      chars.splice(i + 1, j - i - 1, ...nums);  // i + 1 与 j - i - 1 表示splice的时候需要保留一位原始数字
      j = i = i + nums.length + 1;
    } else {
      i = j;
      j++;
    }
  }

  return chars.length;
};

// console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]))
// console.log(compress(["a"]))
console.log(compress(["a","a","b","b","c","c","c"]))

const arr = ['a', 'b', 'b', 'b'];
console.log(arr.splice(1 + 1, 3 - 1))  // i + 1 与 j - i - 1
console.log(arr)
