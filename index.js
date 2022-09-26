// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Telephone Number Validator</h1>`;

/** TODO:
 * Return true if the passed string looks like a valid US phone number.
 * The user may fill out the form field any way they choose as long as it has the format of a valid US number.  The following are examples of valid formats for US numbers (refer to the tests below for other variants):
 *    555-555-5555
 *    (555)555-5555
 *    (555) 555-5555
 *    555 555 5555
 *    5555555555
 *    1 555 555 5555
 * For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.  Your job is to validte or reject the US phone number based on any combination of the formats provided above.  The area code is required.  If the country code is provided, you must confirm that the country code is 1.  Return true if the string is a valid US phone number; otherwise return false.
 */

function telephoneCheck(str) {
  // 555-555-5555 => /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
  // (555)555-5555|(555) 555-5555 => /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/
  // 555 555 5555 => /^[0-9]{3} [0-9]{3} [0-9]{4}$/
  // 5555555555 => /^[0-9]{3}[0-9]{3}[0-9]{4}$/
  // 1 555 555 5555 => /^[1]{1} [0-9]{3} [0-9]{3} [0-9]{4}$/
  let regex =
    /^(1\s?)?[0-9]{3}-[0-9]{3}-[0-9]{4}$|^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$|^(1\s?)?\([0-9]{3}\)\s?[0-9]{3}-[0-9]{4}$|^(1\s?)?[0-9]{3} [0-9]{3} [0-9]{4}$|^(1\s?)?[0-9]{3}[0-9]{3}[0-9]{4}$/;

  // console.log('Testing...', regex.test(str));

  if (str.match(regex)) {
    return true;
  } else {
    return false;
  }
}

console.log('555-555-5555 =>', telephoneCheck('555-555-5555')); // true
console.log('1 555-555-5555 =>', telephoneCheck('1 555-555-5555')); // true
console.log('1 (555) 555-5555 =>', telephoneCheck('1 (555) 555-5555')); // true
console.log('5555555555 =>', telephoneCheck('5555555555')); // true
console.log('(555)555-5555 =>', telephoneCheck('(555)555-5555')); // true
console.log('(123) 456-7890 =>', telephoneCheck('(123) 456-7890'));
console.log('1(555)555-5555 =>', telephoneCheck('1(555)555-5555')); // true
console.log('555-5555 =>', telephoneCheck('555-5555')); // false
console.log('5555555 =>', telephoneCheck('5555555')); // false
console.log('1 555)555-5555 =>', telephoneCheck('1 555)555-5555')); // false
console.log('1 555 555 5555 =>', telephoneCheck('1 555 555 5555')); // true
console.log('555 555 5555 =>', telephoneCheck('555 555 5555'));
console.log('1 456 789 4444 =>', telephoneCheck('1 456 789 4444')); // true
console.log('123**&!!aasdf# =>', telephoneCheck('123**&!!aasdf#')); // false
console.log('55555555 =>', telephoneCheck('55555555')); // false
console.log('(6054756961 =>', telephoneCheck('(6054756961')); // false
console.log('2 (757) 622-7382 =>', telephoneCheck('2 (757) 622-7382')); // false
console.log('0 (757) 622-7382 =>', telephoneCheck('0 (757) 622-7382')); // false
console.log('-1 (757) 622-7382 =>', telephoneCheck('-1 (757) 622-7382')); // false
console.log('2 (757) 622-7382 =>', telephoneCheck('2 (757) 622-7382')); // false
console.log('10 (757) 622-7382 =>', telephoneCheck('10 (757) 622-7382')); // false
console.log('27576227382 =>', telephoneCheck('27576227382')); // false
console.log('(275)76227382 =>', telephoneCheck('(275)76227382')); // false
console.log('2(757)6227382 =>', telephoneCheck('2(757)6227382')); // false
console.log('2(757)622-7382 =>', telephoneCheck('2(757)622-7382')); // false
console.log('555)-555-5555 =>', telephoneCheck('555)-555-5555')); // false
console.log('(555-555-5555 =>', telephoneCheck('(555-555-5555')); // false
console.log('(555)5(55?)-5555 =>', telephoneCheck('(555)5(55?)-5555')); // false
console.log('55 55-55-555-5 =>', telephoneCheck('55 55-55-555-5')); // false
console.log('11 555-555-5555 =>', telephoneCheck('11 555-555-5555')); // false
