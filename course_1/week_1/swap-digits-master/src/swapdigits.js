const swapDigits = (number)=>{
    if (number <0) return 0
    let swappedNumber = 0
    let start = 0
    let cache=""
    //write logic here
    let numberAsArr = number.toString().split("")
    const length = numberAsArr.length
    if (length % 2 == 1) start = 1
    for (let i=start; i<length-1; i=i+2) {
        cache = numberAsArr[i]
        numberAsArr[i] = numberAsArr[i+1]
        numberAsArr[i+1] = cache
    }
    swappedNumber = parseInt(numberAsArr.join(""))
    return swappedNumber;
}


module.exports = swapDigits
