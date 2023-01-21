const binaryRecursiveSearch = (numbersArray: number[], min: number, max: number, item: number): number => {
    if(max >= min){
        const midpoint = (min + max) / 2;
        // Check if the element is at the midpoint
        if(numbersArray[midpoint] === item){
            return midpoint;
        }
        // Check if the item is greater than midpoint, then it should be present in the right array
        else if(item > numbersArray[midpoint]){
            binaryRecursiveSearch(numbersArray, min + 1, max, item);
        }
        // Or else it should be present in the left array
        else{
            binaryRecursiveSearch(numbersArray, min, max - 1, item);
        }
    }
    return -1;
};

const numbersArray = [1000, 2500, 3900, 4000, 5000];
const item = 3900;
const totalElements = numbersArray.length;
const result = binaryRecursiveSearch(numbersArray, 0, totalElements - 1,     item);

if(result === -1){
    console.log("Element not found");
}else{
    console.log("Element found at the index", result);
}

export default {};