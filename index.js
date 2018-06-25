// Code your solution in this file!
const returnLastTwoDrivers = function(arr){
  let newArr = [];
  newArr.push(arr[arr.length -2]);
  newArr.push(arr[arr.length -1]);
  return newArr;
}

const returnFirstTwoDrivers = function(arr){
  let newArr = [];
  newArr.push(arr[0]);
  newArr.push(arr[1]);
  return newArr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
  return function(int){
    return int * int
  }
}

function fareDoubler(int){
    return int * 2;
}

function fareTripler(int){
    return int * 3;
}

function selectDifferentDrivers(arrayOfDrivers, func){
  return func(arrayOfDrivers);
}
