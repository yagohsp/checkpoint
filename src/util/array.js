function arrayRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele !== value; 
    });
};

function removeFromArrayByIndex(arr, index) {
    return arr.splice(index, 1);
};

function ordenateArray(arr) {
    return arr.sort(function(a, b){
        if(a < b) { return -1; }
        if(a > b) { return 1; }
        return 0;
    })
};

export { arrayRemove, ordenateArray, removeFromArrayByIndex };