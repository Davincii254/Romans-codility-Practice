// Given four digits, count how many valid times can be displayed on a digital clock (in 24-hour format) using those digits. The earliest time is 00:00 and the latest time is 23:59.

// Write a function:

// int solution(int A, int B, int C, int D);

// that, given four integers A, B, C and D (describing the four digits), returns the number of valid times that can be displayed on a digital clock.

// Examples:

// 1. Given A = 1, B = 8, C = 3, D = 2, the function should return 6. The valid times are: 12:38, 13:28, 18:23, 18:32, 21:38 and 23:18.

// 2. Given A = 2, B = 3, C = 3, D = 2, the function should return 3. The valid times are: 22:33, 23:23 and 23:32.

// 3. Given A = 6, B = 2, C = 4, D = 7, the function should return 0. It is not possible to display any valid time using the given digits.

// Assume that:

// A, B, C and D are integers within the range [0..9].
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

function solution(A, B, C, D) {
    const digits = [A, B, C, D];
    const times = new Set();

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (j === i) continue;
            for (let k = 0; k < 4; k++) {
                if (k === i || k === j) continue;
                for (let l = 0; l < 4; l++) {
                    if (l === i || l === j || l === k) continue;

                    const hours = digits[i] * 10 + digits[j];
                    const minutes = digits[k] * 10 + digits[l];

                    if (isValidTime(hours, minutes)) {
                        times.add(hours * 100 + minutes);
                    }
                }
            }
        }
    }

    return times.size;

    function isValidTime(hours, minutes) {
        return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
    }
}

// Test cases
function runTest(A, B, C, D, expected) {
    const result = solution(A, B, C, D);
    console.log(`Input: A = ${A}, B = ${B}, C = ${C}, D = ${D}`);
    console.log(`Expected: ${expected}`);
    console.log(`Result: ${result}`);
    console.log(result === expected ? "PASS" : "FAIL");
    console.log("---");
}

// Test case 1 (from example)
runTest(1, 8, 3, 2, 6);

// Test case 2 (from example)
runTest(2, 3, 3, 2, 3);

// Test case 3 (from example)
runTest(6, 2, 4, 7, 0);

// Test case 4: All zeros
runTest(0, 0, 0, 0, 1);

// Test case 5: All same digits
runTest(1, 1, 1, 1, 1);


// Test case 6: Only valid as minutes
runTest(5, 6, 7, 8, 0);


