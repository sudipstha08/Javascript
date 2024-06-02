/**
 *
 * @param {*} nums array of integers
 * @returns largest sum of any contagious subarray
 */
function maxSubArray(nums) {
	let sum = Number.NEGATIVE_INFINITY;
	let tempSum = 0;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i; j < nums.length; j++) {
			tempSum += nums[j];

			if (tempSum > sum) {
				sum = tempSum;
			}
		}
		tempSum = 0;
	}

	return sum;
}

console.log(maxSubArray([-2,  1, -3, 4, -4, 4, 1, -5, 1]));
