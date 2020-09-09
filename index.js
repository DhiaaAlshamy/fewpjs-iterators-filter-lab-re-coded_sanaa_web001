// Code your solution here
findMatching=(drivers,str)=>{
  return drivers.filter((driver)=>{
    driver.toUpper.toUpperCase()===str.toUpperCase();
  })
}