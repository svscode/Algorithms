const binarySearch = (numbersArray: number[], item: number) => {
    let low = 0;
    let high = numbersArray.length - 1;
    let midpoint: number;
    while(high >= low){
        midpoint = low + Math.floor((high - low) / 2);
        if(numbersArray[midpoint] === item){
            return midpoint;
        }else if(numbersArray[midpoint] > item){
            high = midpoint - 1;
        }else{
            low = midpoint + 1;
        }
    }
    return -1;
};

const numbersArray = [1000, 2500, 3900, 4000, 5000, 6500, 7500, 8000, 9000, 10000];
const item = 10500;
const result = binarySearch(numbersArray, item);
if(result === -1){
    console.log("Element not found");
}else{
    console.log("Element found at the index", result);
}
export default {};