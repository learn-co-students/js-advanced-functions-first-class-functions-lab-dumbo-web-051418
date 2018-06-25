// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

function createFareMultiplier(multiplier) {
  return function(fare) {return multiplier * fare };
};

function fareDoubler(fare) {
  const fareMultiplier = createFareMultiplier(2);
  return fareMultiplier(fare)
};

function fareTripler(fare) {
  const fareMultiplier = createFareMultiplier(3);
  return fareMultiplier(fare);
}

function selectDifferentDrivers(arrayOfDrivers, driverReturningFunc) {
    return driverReturningFunc(arrayOfDrivers);
}
