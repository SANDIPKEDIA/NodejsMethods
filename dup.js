function removeDuplicates(arr, equals) {
    var originalArr = arr.slice(0);
    var i, len, val;
    arr.length = 0;

    for (i = 0, len = originalArr.length; i < len; ++i) {
        val = originalArr[i];
        if (!arr.some(function(item) {return equals(item, val);  })) {//IIFE
            arr.push(val);

        }
    }
}
function thingsEqual(thing1, thing2) {
    return thing1.place === thing2.place
        && thing1.name === thing2.name;
}

var things = [
    { name: 'A', credit: 100 },
    { name: 'B', credit: 2000 },
    { name: 'A', credit: 100 },
    { name: 'C', debit: 1050 },
    { name: 'B', credit: 2000 }
];

removeDuplicates(things, thingsEqual);
console.log(things);


