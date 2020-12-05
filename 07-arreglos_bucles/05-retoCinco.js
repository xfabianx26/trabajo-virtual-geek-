var arr = [1, 9, 4, 8, 6]

function average(arr) {
    var acomulador=0;
    for (let i = 0; i < arr.length; i++) {
        acomulador += arr[i];
    }
    var media = acomulador / arr.length;
    return media;
}
console.log(average(arr));
arr.push(12);
console.log(average(arr));
