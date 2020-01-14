// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];
  const mapper = {
    '{': '}',
    '[': ']',
    '(': ')',
  }

  for (let i in s) {
    const v = s[i];
    if(Object.keys(mapper).includes(v)) {
      stack.push(v);
    } else {
      const peak = stack.pop();
      if (v !== mapper[peak]) {
        return false
      }
    }
  }

  return stack.length <= 0;
}

const result = isValid('[{}]')
console.log(result)
