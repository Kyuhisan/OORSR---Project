// // NOVI KVIZ
// import { useState } from "react";
// const [age, setAge] = useState(20);

// function handleClick() {
//   setAge(age + 1);
//   console.log(age); // ?
//   setAge(age + 1);
//   console.log(age); // ?
//   setAge(age + 1);
//   console.log(age); // ?
// }
// return <div>{age}</div>;

// // NOVI KVIZ
// import { useState } from "react";
// const [age, setAge] = useState(20);

// function handleClick() {
//   setAge((a) => a + 1);
//   console.log(age); // ?
//   setAge((a) => a + 1);
//   console.log(age); // ?
//   setAge((a) => a + 1);
//   console.log(age); // ?
// }
// return <div>{age}</div>;

// // NOVI KVIZ
// const [age, setAge] = useState(20);

// function handleClick() {
//   setAge((a) => {
//     console.log(age); // ?
//     return a + 1;
//   });
//   setAge((a) => {
//     console.log(age); // ?
//     return a + 1;
//   });
//   setAge((a) => {
//     console.log(age); // ?
//     return a + 1;
//   });
// }

// // NOVI KVIZ
// const [age, setAge] = useState(20);

// function handleClick2() {
//   let nextAge = age;
//   setAge(() => {
//     nextAge += 1;
//     console.log(nextAge); // ?
//     return nextAge;
//   });
//   setAge(() => {
//     nextAge += 1;
//     console.log(nextAge); // ?
//     return nextAge;
//   });
//   setAge(() => {
//     nextAge += 1;
//     console.log(nextAge); // ?
//     return nextAge;
//   });
// }

// // NOVI KVIZ
// const [person, setPerson] = useState({
//   firstName: "Joel",
//   lastName: "Miller",
//   email: "joel.miller@thelastof.us",
// });

// setPerson({
//   firstName: "Peter",
//   lastName: person.lastName,
//   email: person.email,
// });

// // NOVI KVIZ
// const obj1 = {
//   title: "Blue Nana",
//   city: "Hamburg",
//   image: "https://i.imgur.com/Sd1AgUOm.jpg",
// };
// const obj2 = {
//   name: "Niki de Saint Phalle",
//   artwork: obj1,
// };
// const obj3 = {
//   name: "Copycat",
//   artwork: obj1,
// };

// obj3.artwork.city = "Maribor";
// console.log(obj3.artwork.city); // ???
// console.log(obj2.artwork.city); // ???
// console.log(obj1.city); // ???

// // NOVI KVIZ
// let nextId = 0;

// const [igralci, setIgralci] = useState<{ id: number; name: string }[]>([]);

// setIgralci([...igralci, { id: nextId++, name: name }]);
