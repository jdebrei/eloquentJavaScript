const chapter4 = () => {
    //exercise 1
    function range(start, end, step = start < end ? 1 : -1) {
        let array = [];

        if (step > 0) {
            for (let i = start; i <=end; i += step) array.push(i);
        } else {
            for (let i = start; i >=end; i += step) array.push(i);
        }
        return array;        
    }

    function sum(array) {
        let total = 0;
        for (let value of array) {
            total += value;
        }
    return total
    }

    console.log(range(1,10));
    console.log(range(5,2,-1));
    console.log(sum(range(1,10)));

    //exercise 2
    function reverseArray(array) {
        let output = [];
        for (let i = array.length - 1; i >= 0; i-- ) {
            output.push(array[i])
        }
        return output;
    }

    function reverseArrayInPlace(array) {
        for (let i = 0; i < Math.floor(array.length / 2); i++) {
            let old = array[i];
            array[i] = array[array.length - 1 - i];
            array[array.length - 1 - i] = old;    
        }
    return array;
    }

    console.log(reverseArray(["A", "B", "C"]));
    let arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);
} 