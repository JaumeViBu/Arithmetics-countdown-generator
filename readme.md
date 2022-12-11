<h1>Arithmetics countdown generator</h1>

<h3>Little js script to generate a txt file containing mutliple blocks of seed numbers and target numbers, Countdown style</h3>

This project started as a personal challenge in order to see how far I can go in a short dev spring of one evening. I also wanted to test how maintainable can I make the code, so I tried to go for short sprints spaced in time.

The first day I managed to have all the functionalities I wanted for a proof of concept, and showed it in a web page printing a block pair of seed numbers and target numbers using p5.js.

For the second sprint, a week later, I cleaned some of the code and added the functionality of clicking/pressing a key to give a new block, without having to refresh the page.

For the third sprint, a month later, I decided to change the environment, from a web application to a node js one, beacause I didn't need a web page and also the way I had coded it, made it impossible to easiky copy the results to work on them.
Also I can easily generate a txt file with a long list of block pairs.

For the fourth sprint, 5 months later, I tried cleaning and refactoring the code, so it is easier to maintain.
I tried separating the code base into a main script, the entry point, and a module.
For the module I decided to use common js because I was using node, leave trying to use es6 import for future sprints.
Sadly, the function genTargetNumbers I had was really poorly written. It was functional but almost unmaintanable.

I managed to clean most of the code base, and a big part of genTargetNumbers, but there's still work for a future sprint.

---

Sprint 1( ~3h):

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

Sprint 2 (~1h):

[x] Reload new blocks without refreshing the page

---

Sprint 3 (~3h):

[x] Migrating from p5 JS to node JS

[x] Print a given pair of seeds list and targets list to txt file in the working dir

---

Sprint 4 (~3h):

[+] Clean and refactor code  
\_\_[+] Refactor genTargetNumbers
