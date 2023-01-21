const linearSearch = (numbersArray: number[], totalElements: number, item: number) => {
    for(let i = 0; i< totalElements; i++){
        if(numbersArray[i] === item){
            return i;
        }
    }
    return -1;
}

const numbersArray = [40, 30, 10, 20, 50];
const item = 10;
const totalElements = numbersArray.length;
const result = linearSearch(numbersArray, totalElements, item);
if(result === -1){
    console.log("Element not found");
}else{
    console.log("Element found at the index", result);
}