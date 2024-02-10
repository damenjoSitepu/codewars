export function oddOnesOut(nums: number[]) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(nums[i])) {
      numMap.set(nums[i], numMap.get(nums[i]) + 1);
      continue;
    }
    numMap.set(nums[i], 1);
  }
  return nums.filter((num: number) => numMap.get(num) % 2 === 0);
}

console.log(oddOnesOut([1, 1, 2, 2, 3, 3, 3]));