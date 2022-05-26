
const arr1 = [1, 2, 3];
console.log(shift(arr1));
console.log(arr1);

console.log(shift(arr1));
console.log(arr1);

console.log(shift(arr1));
console.log(arr1);




function shift(arr) {
    if(arr.length == 0){
        return 'Array is empty!';
    }else if(arr.length == 1){
        return arr.pop();
    }
    else{
        var item = arr[0];
        for(var i = 1; i < arr.length; i++){
            arr[i-1] = arr[i]; 
        }
        arr.pop();
        return item;
    }
}


