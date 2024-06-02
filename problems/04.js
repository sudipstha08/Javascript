/**
 * Finds the largest sum of any contiguous subarray
 * 
 * @param {number[]} nums - Array of integers
 * @returns {number} - Largest sum of any contiguous subarray
 */
function maxSubArray(nums) {
  if (nums.length === 0) {
    return 0; // Alternatively, you can return a value that signifies an invalid input.
  }

  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Example usage:
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6