
const PerformanceCalculator=(runs,balls)=>{
      // Write the Logic here
let performance = runs/balls
let bonus
if (runs > 30 && balls < 15 ) {
      bonus = performance * 1/100
} else if (runs > 50 && balls < 20) {
      bonus = performance * 10/100
} else if (runs > 100 && balls < 50) { 
      bonus = performance * 20/100
}
else return performance
return performance + bonus
}

module.exports={PerformanceCalculator}


// If the player scores more than 30 runs in less than 15 balls, 
// give the additional 1% of the batting average. 

// If the player scores more than 50 runs in less than 20 balls, 
// give the additional 10% of the batting average. 

// If the player scores more than 100 runs in less than 50 balls, 
// give the additional 20% of the batting average.