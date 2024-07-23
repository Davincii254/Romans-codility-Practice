// You are given an implementation of a function:

// int solution(int A[], int N, int B[], int M);

// that, given a non-empty array A of N non-negative integers and a non-empty array B of M non-negative integers, returns the minimal value that occurs in both arrays. If there is no such value, the function should return −1.

// For example, given arrays A and B such that:

//     A[0] = 1    B[0] = 4
//     A[1] = 3    B[1] = 2
//     A[2] = 2    B[2] = 5
//     A[3] = 1    B[3] = 3
//                 B[4] = 2
// your function should return 2, since 2 is the minimal value which occurs in both arrays A and B (another value which occurs in both arrays is 3).

// Given arrays A and B such that:

//     A[0] = 2    B[0] = 3
//     A[1] = 1    B[1] = 3
// your function should return −1, since there is no value that occurs in both arrays.

// The attached code is still incorrect for some inputs. Despite the error(s), the code may produce a correct answer for the example test cases. The goal of the exercise is to find and fix the bug(s) in the implementation. You can modify at most two lines.

// Write an efficient algorithm for the following assumptions:

// N and M are integers within the range [1..100,000];
// each element of arrays A and B is an integer within the range [0..1,000,000,000].

	
function solution(A, B) {
    const ASet = new Set(A);

    const minCommonValue = B.reduce((acc, curr) => {
        if (ASet.has(curr)) {
            return Math.min(acc, curr);
        }
        return acc;
    }, Infinity);

    return minCommonValue === Infinity ? -1 : minCommonValue;
}

// Test cases
function runTest(A, B, expected) {
    const result = solution(A, B);
    console.log(`Input: A = [${A}], B = [${B}]`);
    console.log(`Expected: ${expected}`);
    console.log(`Result: ${result}`);
    console.log(result === expected ? "PASS" : "FAIL");
    console.log("---");
}

// Test case 1 (from example)
runTest([1, 3, 2, 1], [4, 2, 5, 3, 2], 2);

// Test case 2 (from example)
runTest([2, 3], [3, 3], 3);

// Test case 3 (from example)
runTest([6, 7, 8, 9, 8], [8, 10, 11, 12, 9], 8);

// Test case 4 (from example)
runTest([2, 1], [3, 3], -1);

// Test case 5: Empty arrays
runTest([], [], -1);

// Test case 6: One empty array
runTest([1, 2, 3], [], -1);

// Test case 7: Large numbers
runTest([1000000, 2000000], [2000000, 3000000], 2000000);

// Test case 8: Negative numbers
runTest([-5, -3, -1], [-4, -3, -2], -3);

// Test case 9: Multiple common elements
runTest([1, 2, 3, 4, 5], [5, 4, 3, 2, 1], 1);

// Test case 10: Single element arrays
runTest([1], [1], 1);

// Test case 11: Repeated elements
runTest([1, 1, 1], [2, 2, 1], 1);

// Test case 12: All elements common
runTest([1, 2, 3], [3, 2, 1], 1);