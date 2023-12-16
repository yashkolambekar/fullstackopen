// const Hello = (props) => {
//   let client_name = "Developer";
//   console.table({
//     "client_name": props.client_name,
//     "age": props.age
//   })
//   return(
//     <>
//       <p>Hello {props.client_name || client_name}, you are {props.age || 100} years old!</p>
//     </>
//   )
// }

// const App = () => {
//   return (
//     <>
//       <p>Greetings</p>
//       <Hello  client_name='Yash' age="18" />
//       <Hello  client_name="Sai" age="19" />
//       <Hello  client_name="Siddhi"  age="17" />
//       <Hello client_name="Bhakti" age="16" />
//     </>
//   )
// }

// const App = () => {
//   const friends = [
//     {name: "Peter", age: 4},
//     {name: "Yash", age: 10}
//   ]

//   return (
//     <div>
//       <p>Hey there {friends[0].name}, your {friends[0].age} is na?</p>
//       <p>Hey there {friends[1].name}, your {friends[1].age} is na?</p>
//     </div>
//   )

// }

// const App = () => {
//   const friends = ["Yash", "Bhakti"];

//   return (
//     <div>
//       <p>{friends}</p>
//     </div>
//   )

// }

// const Hello = (props) => {

//   const bornYear = () => new Date().getFullYear() - props.age;

//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//       <p>
//         So you were probably born in {bornYear()}
//       </p>
//     </div>
//   );
// };

// const App = () => {
//   const name = "Peter";
//   const age = 10;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Yash" age="18"/>
//     </div>
//   );
// };

// import { useState } from "react";

// const App = () => {

//   const [counter, setCounter] = useState(0);

//   function addCount(){
//     setCounter(counter + 1);
//   }
//   return (
//     <div style={{cursor: "pointer"}} >{counter}
//     <button onClick={
//       addCount
//     }>Click me</button>
//     </div>
//   )
// }

import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  setTimeout(() => setCounter(counter + 1), 1000);
  return <div>{counter}</div>;
};

export default App;