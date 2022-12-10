#Arithmetics countdown style exercises

###Little js script to generate a txt file containing mutliple blocks of seed numbers and target numbers, Countdown style

[x] Generate 2 lists of natural numbers, seed numbers and target numbers.

[x] Seed numbers list is composed of 8 numbers.
2 are between 1 and 10, 2 between 11 and 50, 2 between 51 and 100, 1 between 101 and 300 and the last between 101 and 400.

[x] Target numbers list is composed of X numbers.

[x] To gen a target number we will pick between 3 to 8 numbers of the seeds list and create a list with a copy of the values.

[x] Then we will pick randomly two values from these candidates list and apply to them a random operation.

[x] If the result of applying the operation is valid, it will be added to the candidate list and repeat the process until theres only 1 candidate remaining.

[x] A result is valid if
it's not already picked,
is a positive integer,
the result is not equal to one of the seeds
and, in the case the operation is a division, the result is an integer.

[x] Also if the ending candidate is greater than 1000, discard it and start again.

---

[x] print a given pair of seeds list and targets list to txt file in the working dir

---

[ ] Clean and refactor code
..[ ] Refactor genTargetNumbers
