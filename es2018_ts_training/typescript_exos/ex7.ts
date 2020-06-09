let myObject: {
    name1: string,
    name2: string,
    age: number,
    hobbies: string[],
    fetishNumbers: number[] } = {
    name1: "jessie",
    name2: "barré",
    age: 34,
    hobbies: ["music", "photo", "knitting"],
    fetishNumbers: []
};

myObject.fetishNumbers.push(2);
myObject.fetishNumbers.push(7);
myObject.fetishNumbers.push(23);

    let sum: number = 0;
    for (let fetishNumber of myObject.fetishNumbers) {
        sum += fetishNumber;
    }
    sum += myObject.age;
    console.log(sum);
