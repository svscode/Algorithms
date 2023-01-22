const ternaryRecursiveSearch = (numbersArray: number[], low: number, high: number, item: number): number => {
    let midpoint1: number;
    let midpoint2: number;
    if(high >= low){
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        midpoint1 = low + Math.floor((high - low) / 3);
        midpoint2 = high - Math.floor((high - low) / 3);
        if(numbersArray[midpoint1] === item){
            return midpoint1;
        }else if(numbersArray[midpoint2] === item){
            return midpoint2;
        }else if(item < numbersArray[midpoint1]){
            return ternaryRecursiveSearch(numbersArray, low, midpoint1 - 1, item);
        }else if(item > numbersArray[midpoint2]){
            return ternaryRecursiveSearch(numbersArray, midpoint2 + 1, high, item);
        }else{
            return ternaryRecursiveSearch(numbersArray, midpoint1 + 1, midpoint2 - 1, item);
        }
    }
    return -1;
}
const numbersArray = [1000, 2500, 3900, 4000, 5000, 6500, 7500, 8000, 9000, 10000];
const item = 10000;
const low = 0;
const high = numbersArray.length - 1;
const result = ternaryRecursiveSearch(numbersArray, low, high, item);
if(result === -1){
    console.log("Element not found");
}else{
    console.log("Element found at the index", result);
}
export default {};