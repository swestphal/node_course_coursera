const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   if (cycling<=0 || running <=0 || swimming <=0 || extraCalorieInTake <= 0) return -1
   
   let weightLostInAMonth = 0;
    
   // write logic here 
   const burnedCaloriesPerWeek =cycling * 2 + running * 2 + swimming * 2 
   const burnedCaloriesPerMonth = burnedCaloriesPerWeek * 4
   const extraCalorieInTakePerMonth = extraCalorieInTake * 30
   const caloriesBurnedInMonth = burnedCaloriesPerMonth - extraCalorieInTakePerMonth
   weightLostInAMonth = caloriesBurnedInMonth / 1000

   return weightLostInAMonth;
   
}

module.exports = calculateWeightLostInAMonth

