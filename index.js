// Code your solution in this file!

function logDriverNames (driver) {
  let eachDriverName = driver.forEach(function (eachDriver){
    console.log(eachDriver.name)
  });
  return eachDriverName;
}

function logDriversByHometown (driver, location) {
  let driverLocation = driver.forEach(function(eachDriver){
    if(eachDriver.hometown == location){
      console.log(eachDriver.name);
    }
  });
  return driverLocation;
}

function driversByRevenue (driver) {
  let sortDriverRevenue = [...driver];
  sortDriverRevenue = sortDriverRevenue.sort(function (a , b){
    return a.revenue - b.revenue;
  });
  return sortDriverRevenue;
}

function driversByName (driver) {
  let sortDriverName = [...driver];
  sortDriverName = sortDriverName.sort(function (a, b){
    let aName = a.name;
    let bName = b.name;
    return aName.localeCompare(bName);
  });
  return sortDriverName;
}
