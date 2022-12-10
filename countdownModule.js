/***************************************************
  
  Imports
  
 **************************************************/
const fs = require('fs');

/***************************************************
  
  GLOBALS
  
 **************************************************/
let seedsNumbers;
let targetNumbers;

/***************************************************
  
  Function Declarations
  
 **************************************************/

/**
 
/**
 *
 * Generates a seed candidate between a and b, b not included
 *
 * @param {number} a
 * @param {number} b
 * @param {Array<number>} seeds
 * @returns
 */
function genSeedCandidate(a, b, seeds) {

  let candidate;

  if (typeof a != 'number' || !Number.isInteger(a) || a < 0)
    throw new Error('Param a must be a positive integer');

  if (typeof b != 'number' || !Number.isInteger(b) || b < 0)
    throw new Error('Param b must be a positive integer');

  do {

    candidate = Math.floor(random(a, b));
  } while (seeds.includes(candidate));

  return candidate;
}

/**
 * Generates an array with 8 seed numbers, sorted from small to big
 * 2 between 1 and 10
 * 2 between 11 and 50
 * 2 between 51 and 100
 * 1 between 101 and 300
 * 1 between 101 and 400
 * 
 * 
 * @returns Array<number> Array containing the 8 seed numbers sorted
 */
function genSeedNumbers() {

  let seeds = [];

  seeds.push(genSeedCandidate(1, 11, seeds));
  seeds.push(genSeedCandidate(1, 11, seeds));
  seeds.push(genSeedCandidate(11, 51, seeds));
  seeds.push(genSeedCandidate(11, 51, seeds));
  seeds.push(genSeedCandidate(51, 101, seeds));
  seeds.push(genSeedCandidate(51, 101, seeds));
  seeds.push(genSeedCandidate(101, 301, seeds));
  seeds.push(genSeedCandidate(101, 401, seeds));

  seeds.sort((a, b) => a - b);

  return seeds;
}

/**
 * Pick a random arithmetic operation from the basic 4 and applies it to the to given numbers
 *
 * @param {number} a
 * @param {number} b
 * @returns
 */
function applyRandomOperation(a, b) {

  if (typeof a != 'number' || !Number.isInteger(a) || a < 0)
    throw new Error('Param a must be a positive integer');

  if (typeof b != 'number' || !Number.isInteger(a) || a < 0)
    throw new Error('Param b must be a positive integer');

  let randomOp = Math.floor(random(0, 4));
  let candidateRes;

  switch (randomOp) {

    case 0:

      candidateRes = a + b;
      break;

    case 1:

      candidateRes = a - b;
      break;

    case 2:

      candidateRes = a * b;
      break;

    case 3:

      candidateRes = a / b;
      break;

    default:
      throw new Error(`Operation ${randomOp} not recognized`);
      break;
  }
  return candidateRes;
}



/**
 * Generates a list of target numbers to achieve from a list of seed numbers
 *  
 * @param {Array<number>} seedsNumbers A seedNumbers array, better generated using genSeedNumbers export function
 * @returns Array<number> An array containing all the targets generated with the given seed numbers
 */
function genTargetNumbers(seedsNumbers) {

  const TARGET_NUMBERS = 12;
  let res = [];

  for (let i = 0; res.length < TARGET_NUMBERS; i++) {

    let tempSeeds = [...seedsNumbers];
    let candidates = [];
    const random_seeds = Math.floor(random(3, seedsNumbers.length + 1));

    for (let j = 0; j < random_seeds; j++) {

      const randomSeedIndex = Math.floor(random(0, tempSeeds.length));
      candidates.push(tempSeeds.splice(randomSeedIndex, 1)[0]);
    }

    let success = true;
    do {

      let a = candidates.splice(Math.floor(random(0, candidates.length)), 1)[0];
      let b = candidates.splice(Math.floor(random(0, candidates.length)), 1)[0];
      if (a === b) break
      let candidateRes = applyRandomOperation(a, b);

      if (isCandidateInvalid(candidateRes)) {
        success = false;
        break;
      }
      candidates.push(candidateRes);
    } while (candidates.length > 1);

    if (
      success
      && candidates[0] <= 1000
      && !res.includes(candidates[0])
      && !seedsNumbers.includes(candidates[0])
    ) {

      res.push(candidates[0]);
    }
  }
  return res;
}

/**
 * Checks whether a given candidate number is not an intger or less than 1
 *
 * @param {number} candidate
 * @returns boolean
 */
function isCandidateInvalid(candidate) {

  return !Number.isInteger(candidate) || candidate < 1;
}

/**
 * initiates both seedsNumbers and targetNumbers globals
 *
 */
function initiateLists() {

  seedsNumbers = genSeedNumbers();
  targetNumbers = genTargetNumbers(seedsNumbers);
}

/**
 *  Returns a random integer between min and max, max excluded
 *
 * @param {Number} min
 * @param {Number} max
 * @returns Number random int between min and max
 */
function random(min, max) {
  if (typeof min !== 'number' || !Number.isInteger(min)) throw new Error('min param. must be an integer');
  if (typeof max !== 'number' || !Number.isInteger(max) || min > max) throw new Error(`max param. must be an integer greater than or equal to min`);

  return Math.floor(Math.random() * (max - min) + min);
}




/**
 * write the given seed and target numbers into a textfile in the run dir in append mode
 * if the file doesn't exists, it will be created
 *
 * @param {Array<number>} seedsNumbers
 * @param {Array<number>} targetNumbers
 */
function printLog(seedsNumbers, targetNumbers) {

  const headerLine = '_____________________________________________________\n';


  let content = [];

  //Prepare output as array of strings
  content.push(headerLine);
  content.push('\n\t  ' + seedsNumbers.join('  ') + '\n');
  content.push(headerLine);
  content.push('\t|\n');

  for (let i = 0; i < targetNumbers.length; i++) {

    content.push(`${targetNumbers[i].toString().padEnd(2, ' ')}\t|\n`);
    content.push('\t|\n');
  }
  content.push('\t|\n');

  //collapse array into a string and write it into external txt file
  fs.writeFile('./arithmetics_countdown_log.txt', content.join(''), { flag: 'a+' }, err => {
    if (err) console.error(err);
    // else console.log('added generated lists to ./arithmetics_countdown_log.txt');
  });
}


/**
 * Getter to export global seedNumbers
 *
 */
function getSeedsNumbers() {
  return seedsNumbers;
}

/**
 * Getter to export global targetNumbers
 *
 */
function getTargetNumbers() {
  return targetNumbers;
}

module.exports = {
  initiateLists,
  printLog,
  getSeedsNumbers,
  getTargetNumbers,
};


