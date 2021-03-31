//{ამოცანა #1
// Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//
// friend ["Ryan", "Kieran", "Mark"] shouldBe ["Ryan", "Mark"]
// ტესტ ქეისები (ამ მასივებზე შეგიძლიათ გატესტოთ ფუნქცია)
// ["George", "Nick", "Tom", "Kate", "Annie"] უნდა დააბრუნოს ["Nick", "Kate"]
// ["James", "Will", "Jack", "Nate", "Edward"] უნდა დააბრუნოს ["Will", "Jack", "Nate"]}

let friendList = ['Ryan', 'Kieran', 'Jason', 'Lazare'];
let myFriendList = ['Lazare'];

let nameFunc = (allNames, myFriend) => {
    for (let i = 0; i < allNames.length; i++){
         if (allNames[i] === myFriend[0]){
            console.log(allNames[i]);
         } else if(allNames[i].length === 4){
             console.log(allNames[i]);
         }
    }
}
nameFunc(friendList, myFriendList)


//{ამოცანა #2
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
//
// ტესტ ქეისები (ამ მასივებზე შეგიძლიათ გატესტოთ ფუნქცია)
// [5, 8, 12, 19, 22] უნდა დააბრუნოს 5+8 ის ჯამი (13)
// [52, 76, 14, 12, 4] უნდა დააბრუნოს 4 + 12 ის ჯამი (16)
// [3, 87, 45, 12, 7] უნდა დააბრუნოს 3 + 7 ის ჯამი (10)}

let numbers = [5, 8, 12, 19, 22];
let minimums = [];

let numFunc = (array) => {
    let res = array.sort((a, b) => a - b).slice(0, 2);
    console.log(`${res[0]} + ${res[1]} = ${res[0] + res[1]}`);
};

numFunc(numbers);