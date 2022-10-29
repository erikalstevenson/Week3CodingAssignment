// Coding Assignment Week 3

//Item 1 - 1.        Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);
 

//Item 1a - 1a.        Programmatically subtract the value of the first element in the array from the value in the last element of the array

console.log(ages[ages.length-1] - ages[0]);

//Item 1b - Add a new age to your array and repeat the step above to ensure it is dynamic.

ages.push(27, 65);
console.log(ages[ages.length-1] - ages[0]);


//Item 1c - Use a loop to iterate through the array and calculate the average age.

function calculateAverageAge(array) {
    var sumAges = 0;
    for (i in array) {
        sumAges += array[i];
}
    console.log(sumAges);
    console.log(array.length-1);
    aveAges = sumAges / (array.length);
    return aveAges;
}

console.log(calculateAverageAge(ages));


//Item 2 - Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//Item 2a - Use a loop to iterate through the array and calculate the average number of letters per name.

function averageNameLength(array) {
    let charSum = 0;
    for (element of array) {
        charSum += element.length;
    }
    aveNames = charSum / (array.length);
    return aveNames;
}

console.log(averageNameLength(names));

//Item 2b - Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

function concatNames(array) {
    let concatArray;
    concatArray = array.join(" ");
    return concatArray;
    }
    
console.log(concatNames(names));

//Item 3 - How do you access the last element of any array? 

// you access the last element of an array by specifying the length of the list minus 1 (because arrays are a 0 indexed element).


//Item 4 - How do you access the first element of any array? 

// you access the first element of an array by specifying the element with an index of 0.


//Item 5 - Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

function nameLens(array) {
    let nameLengths = [];
    for (element of array) {
        nameLengths.push(element.length);
    }
    return nameLengths;
}

console.log(nameLens(names));

 

//Item 6 - Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

function sumNameLengths(array) {
    let calcSum = 0;
    for (element of array) {
        calcSum += element;
    }
    return calcSum;
}

console.log(sumNameLengths(nameLens(names)));

//Item 7 - Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.

function repeatWord(word, n) {
    let compoundWord = "";
    for (let i = 0;i < n;i++) {
        compoundWord += word;
    }
    return compoundWord;
}

console.log(repeatWord('hi', 4));



//Item 8 - Write a function that takes two parameters, firstName and lastName, and returns a full name.
//  - The full name should be the first and the last name separated by a space.

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(fullName('Erika', 'Stevenson'));

//Item 9  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function sumArrayGreaterThan100(array) {
    let sumArray = 0;
    for (item of array) {
        sumArray += item;
    }
    if (sumArray > 100) {
        return true;
    }
}

console.log(sumArrayGreaterThan100(ages));

//Item 10 Write a function that takes an array of numbers and returns the average of all the elements in the array.

function sumArray(array) {
    let sum = 0;
    for(item of array) {
        sum += item;
    }
    return sum;
}
function returnAverage(array) {
    return  sumArray(array) / array.length;
}

console.log(returnAverage(ages));

//Item 11 Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
arrayOfRandomNumbers = [27, 37, 42, 11, 12, 7, 65, 3, 24, 18];

function compareArrayAverage(arr1, arr2) {
    if (sumArray(arr1) > sumArray(arr2)) {
        return true;
    }
}

console.log(compareArrayAverage(ages, arrayOfRandomNumbers));

//Item 12 Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}

//item 13 Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
//Function Explanation - In order to determine if I can knit today I need to evaluate if I have yarn to work with, if my homework is done for this class and if it's a workday - these are all boolean values.



function canIKnitToday(hasYarn, homeworkDone, isWorkDay) {
    if (hasYarn === true && homeworkDone === true && isWorkDay != true) {
        return true;
    } else {
        return false;
    }
}

console.log(canIKnitToday(true, true, false));
console.log(canIKnitToday(true, false, false));






