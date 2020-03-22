let FirstArrayNumb = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];
  let secondArrayNumb = [
    '',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  
  ];
module.exports = function toReadable (number) {
    let firstNum = + (String(number).split('').splice(0, 1).join(''));
let secondNum = + (String(number).split('').splice(1, 1).join(''));
let thirdNum = + (String(number).split('').splice(2, 1).join(''));
let twoNum = + (String(number).split('').splice(1, 2).join(''));

let exReg = /\d[0-1][0-9]/; 
let hunder = function (number) {
  if (String(number).match(exReg) == null) {
    return null
  } else {
    return + (String(number).match(exReg).join(''));
  }
}

let exRegTy = /\d0/; 
let ty = function (number) {
  if (String(number).match(exRegTy) == null) {
    return null
  } else {
    return + (String(number).match(exRegTy).join(''));
  }
}

let exRegHundTy = /\d[1-9]0/; 
let HundTy = function (number) {
  if (String(number).match(exRegHundTy) == null) {
    return null
  } else {
    return + (String(number).match(exRegHundTy).join(''));
  }
}

let exRegOneHund = /\d00/; 
let OneHund = function (number) {
  if (String(number).match(exRegOneHund) == null) {
    return null
  } else {
    return + (String(number).match(exRegOneHund).join(''));
  }
}

  if (number == ty(number) && number != 10) {
    return secondArrayNumb[firstNum]
  } else if (number == OneHund(number)) {
    return FirstArrayNumb[firstNum] + ' hundred';
  }else if (number == HundTy(number)){
    return FirstArrayNumb[firstNum] + ' hundred ' + secondArrayNumb[secondNum];
  } else if (number < 20 && number > 0) {
    return FirstArrayNumb[number]
  } else if(number >= 20 && number < 100) {
    return secondArrayNumb[firstNum] + ' ' + FirstArrayNumb[secondNum];
  } else if (number == hunder(number)) {
    return FirstArrayNumb[firstNum] + ' hundred ' + FirstArrayNumb[twoNum]
  } else if (number == 0) {
    return 'zero'
  } else {
  return FirstArrayNumb[firstNum] + ' hundred ' + secondArrayNumb[secondNum] + ' ' + FirstArrayNumb[thirdNum];
  }
}
