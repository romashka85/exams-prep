function calculate(capacity, passengersArr){
let outputArr = [];

let startWagon = 0;

for (const wagon of passengersArr) {
   
        if (startWagon + wagon >= capacity){
           
            startWagon += wagon - capacity
            outputArr.push(capacity)
        } else{
            outputArr.push(wagon)
        }
      
    }
    console.log(outputArr)
    if(startWagon <= 0){
        console.log(`All passengers aboard`)
    } else {
        console.log(`Could not fit ${startWagon} passengers`)
    }
    
}

calculate(6, [0, 15, 2])