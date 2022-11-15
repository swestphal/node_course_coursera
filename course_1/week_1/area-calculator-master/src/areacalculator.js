const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    // write logic here
    if ( !side && !length && !breadth && !radius) return -1
    switch(choice) {
        case 'circle':
            area = radius * radius * pi
            break;
        case 'square':
            area = side * 4
            break;
        case 'rectangle':
            area = length * breadth
            break;
        default:
            area = -1
      }
    // note that you check the values passed are not null before performing any operation on them
    return area
}
module.exports = {calculateArea}
