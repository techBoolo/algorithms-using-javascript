# Algorithm using javascript

do the algorithms once in a while.

for each algorithm problem statement please refer the web

## Project organization

You don't have to clone the entire project repository once, it might overwhelm
you,

I suggest to follow the following instruction, which i think is best to learn
algorithm by doing a single problem taking your time.

- clone the main branch

  `git clone -b main --single-branch git@github.com:techBoolo/algorithms-using-javascript.git`

- install the dependencies

  `npm install`

- from now on just pull / fetch one algorithm branch at a time and solve the problem,

  > for the problem statement please refer the web.

 ```
  [the following branch has taken as an example, just change the name for the rest]

  git fetch anagrams
  git checkout anagrams
``` 

- run the test for the choosen algorithm

  `npm run test`

- the test will fail, to pass the test implement your solution by creating a
  file in the algorithms folder for each algorithm problem, if you found the
file just wipe the content and do your solution

  `touch ./algorithms/anagrams.js`

- when you finish the implementation, run the test again and check if all the
  tests have passed.

  `npm run test`

- if you get stuck. you can always check the solutions in the github repo for a hint.

  > the branch with the '-solution' appended is one possible solution


## Congratulation you have done it.

#### Then you know what to do next  _**'Loop'**_

# Next

We will see how to organize our solutions when we have more than one algorithm solution
for a given problem.
