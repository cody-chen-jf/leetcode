/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  // 因为需要修改原数组，所以该方法不可用
  // const set = new Set(Array.from(nums));
  // console.log(nums);
  // return set.size;

  const size = nums.length;
  let slowP = 0;
  for (let fastP = 0; fastP < size; fastP++) {
    if (nums[fastP] !== nums[slowP]) {
      slowP++;
      nums[slowP] = nums[fastP];
    }
  }

  nums.length = slowP + 1;
  console.log(nums);

  return slowP + 1;
};



console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([1,1,2]))
