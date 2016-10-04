# closestSequence2
_Source_: [CodeFights](https://codefights.com/challenge/Qjts7cukDvYpDW4Bc/main) from author [Tigran](https://codefights.com/profile/Tigran)

## Task
The difference between two sequences of the same length a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>,..., a<sub>n</sub> and b<sub>1</sub>, b_<sub>2</sub>, b_<sub>3</sub>,..., b<sub>n</sub> can be defined as the sum of absolute differences between their respective elements:

diff(a, b) = |a<sub>1</sub> - b<sub>1</sub>| + |a<sub>2</sub> - b<sub>2</sub>| + ... + |a<sub>n</sub> - b<sub>n</sub>|.

For the given sequences a and b (not necessarily having the same lengths) find a subsequence b' of b such that ```diff(a, b')``` is minimal. Return this difference.

### Example

For ```a = [1, 2, 6]``` and ```b = [0, 1, 3, 4, 5]```, the output should be
```closestSequence2(a, b) = 2```.

The best subsequence will be ```b' = [1, 3, 5]``` which has a difference of ```2``` with a.

### Input/Output

 * [time limit] 4000ms (js)
 * [input] array.integer a

#### Constraints:

 * 3 ≤ a.length ≤ 1000,
 * -1000 ≤ a[i] ≤ 1000.

### [input] array.integer b

#### Constraints:

 * a.length ≤ b.length ≤ 1000,
 * -1000 ≤ b[i] ≤ 1000.

### [output] integer
