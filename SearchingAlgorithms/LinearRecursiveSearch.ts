const linearRecursiveSearch = (numbersArray: number[], totalElements: number, item: number) => {
    if(totalElements === 0){
        return -1;
    }else if(numbersArray[totalElements - 1] === item){
        return totalElements - 1;
    }else{
        const result = linearRecursiveSearch(numbersArray, totalElements - 1, item);
        return result;
    }
}

const numbersArray = [40, 30, 10, 20, 50];
const item = 10;
const totalElements = numbersArray.length;
const result = linearRecursiveSearch(numbersArray, totalElements, item);
if(result === -1){
    console.log("Element not found");
}else{
    console.log("Element found at the index", result);
}