const arr1 = [226,345,106,20,26.5,30]; 
const arr2 = [34,89,76,54,200,55.5]; 

  

function arrSort(arr) { 

    arr.sort((a,b)=>a-b); 

    arr.reverse(); 

    return arr; 
} 

  
console.log(arrSort(arr1)); 
console.log(arrSort(arr2));