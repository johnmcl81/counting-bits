#COUNTING BITS

PROBLEM:
Given an integer, n, we want to know the following:
1. How many 1-bits are in its binary representation?
2. Let's say n's binary representation has k significant bits indexed from 1 to k. What are the respective positions (i.e., in ascending order) of each 1-bit? 

- The first index (0) must contain the total number of 1 bits in n's binary representation.
- The subsequent indices must contain the respective positions of the one-indexed 1-bits in n's binary representation.
- Return an enumerable of integers where the first element is the total number of 1-bits in n's binary representation and the subsequent elements are the respective one-indexed locations of each 1-bit from most to least significant.


APPROACH: Bitwise '&' operator (between (number) & (number-1)) => Right most SET bit of "number" will be unset.
REASON: More effecient than looping through all bits.
CAVEAT: Bitwise operators only work for a maximum of 32 bits


#Getting Started
Install the dependencies by running `npm install`

#Build and Test
Run the tests using `npm test`

#Linting
If you want, you can lint your code using `npm run lint`