//1.1 Step 1
// import React from 'react'

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//         <Header course = {course}/>
//         <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
//         <Total exercises1 = {exercises1} exercises2 = {exercises2}  exercises3 ={exercises3}/>
//     </div>
//   )
// };

// const Header = (props) => {
//   return( 
//     <div>
//       <h1>{props.course}</h1>
//       </div>
//   )
// };

// const Content = (props) => {
//   return(
//     <>
//       <p>{props.part1} : {props.exercises1}</p>
//       <p>{props.part2} : {props.exercises2}</p>
//       <p>{props.part3} : {props.exercises3}</p>
//     </>
//   )
// };

// const Total = (props) => {
//   return( 
//     <div>
//     <p>Total Exercises: {props.exercises1+props.exercises2+props.exercises3}</p>
//     </div>
//   )
// };


// export default App


//1.2 Step 2

// import React from 'react'

// const App = () => {
//   const course = 'Half Stack application development'

//   return (
//     <div>
//       <Header course={course}/>
//       <Content />
//       <Total />
//     </div>
//   )
// };

// const Header = (props) => {
//   return( 
//     <div>
//       <h1>{props.course}</h1>
//       </div>
//   )
// };

//   const Content = () =>{
//     const contents = PartsStuff.map(
//       function(content){
//         return (
//         <div>
//           <Part part={content.name} exercises={content.exercises}/>
//         </div>
//         )
//       })
//       return contents
//   }; 

//   //Content is now Part
//   const Part = (props) => {
//     return( 
//       <div>
//         <p>{props.name} : {props.exercises}</p>
//       </div>
//     )
//   }

// const Total = (props) => {
//   return( 
//     <div>
//     <p>Total Exercises: {props.exercises1+props.exercises2+props.exercises3}</p>
//     </div>
//   )
// };
  
//   const PartsStuff = [
//     {name: 'Fundamentals of React',
//     exercises: 10}, 
//     {name: 'Using props to pass data',
//     exercises: 7}, 
//     {name: 'State of a component',
//     exercises: 14
//     }
//   ];

// export default App

//1.3 Step 3
// import React from 'react'

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>{part1.name} : {part1.exercises}</p>
//       <p>{part2.name} : {part2.exercises}</p>
//       <p>{part3.name} : {part3.exercises}</p>
//     </div>
//   )
// }

// export default App

//1.4 Step 4

// import React from 'react'

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//         <Header course={course}/>
//         <Content parts={parts}/>
//         <Total   parts={parts}/>
//     </div>
//   )
// };

// const Header = (props) => {
//   return( 
//     <div>
//       <h1>{props.course}</h1>
//       </div>
//   )
// };

// const Content = (props) =>{
//       const contents = props.parts.map(function(stuff){
//         return (
//           <div>
//             <p>{stuff.name} : {stuff.exercises}</p>
//           </div>
//           )
//         })
//         return contents
//     }; 

//     const Total = (props) => {
//       let total1 = 0
//       const contents = props.parts.map(function(stuff){
//               total1 = total1 + stuff.exercises
//       })
//       return (
//           <div>
//               <p>Total Exercises: {total1}</p>
//           </div>
//       )
//     }

// export default App


// 1.5 Step 5

// import React from 'react'

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//         <h1>{course.name}</h1>
//         <Content course={course}/>
//         <Total course={course}/>
//     </div>
//   )
// };

// const Content = (props) => {
//     const contents = props.course.parts.map(function(stuff){
//       return(
//         <div>
//           <p>{stuff.name} : {stuff.exercises}</p>
//         </div>
//       )
//     })
//     return contents
// };

// const Total = (props) => {
//     let total1 = 0
//       const contents = props.course.parts.map(function(stuff){
//               total1 = total1 + stuff.exercises
//       })
//       return (
//           <div>
//               <p>Total Exercises: {total1}</p>
//           </div>
//       )
// };

// export default App

//1.6 Unicafe Step 1

// import React, { useState } from 'react'

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       {/* code here */}
//       <h1>give feedback</h1>

//       <button onClick={() => setGood(good+1)}>Good</button>
//       <button onClick={() => setNeutral(neutral+1)}>Neutral</button>
//       <button onClick={() => setBad(bad+1)}>Bad</button>
    
//       <h1>statistics</h1>

//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//     </div>
//   )
// }

// export default App

// 1.7 Unicafe Step 2

// import React, { useState } from 'react'

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       {/* code here */}
//       <h1>give feedback</h1>

//       <button onClick={() => setGood(good+1)}>Good</button>
//       <button onClick={() => setNeutral(neutral+1)}>Neutral</button>
//       <button onClick={() => setBad(bad+1)}>Bad</button>
    
//       <h1>statistics</h1>

//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//       <p>All: {good+neutral+bad}</p>
//       <p>Average: {(good-bad)/(good+neutral+bad)}</p>
//       <p>Positive: {good/(good+neutral+bad)*100} %</p>
//     </div>
//   )
// }

// export default App

//1/8 Unicafe Step 3
// import React, { useState } from 'react'

// const Statistics = (props) => {
//       return(
//         <div>
//           <p>Good: {props.good}</p>
//           <p>Neutral: {props.neutral}</p>
//           <p>Bad: {props.bad}</p>
//           <p>All: {props.all}</p>
//           <p>Average: {props.average}</p>
//           <p>Positive: {props.positive}</p>
//         </div>
//       )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h1>Provide Feedback By Clicking Your Choice Below</h1>

//       <button onClick={() => setGood(good+1)}>Good</button>
//       <button onClick={() => setNeutral(neutral+1)}>Neutral</button>
//       <button onClick={() => setBad(bad+1)}>Bad</button>
    
//       <h1>Statistics</h1>

//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//       <p>All: {good+neutral+bad}</p>
//       <p>Average: {(good-bad)/(good+neutral+bad)}</p>
//       <p>Positive: {good/(good+neutral+bad)*100} %</p>
//     </div>
//   )
// }

// export default App

//1.9 Unicafe Step 4

// import React, { useState } from 'react'

// const Statistics = (props) => {
//         if (props.All === 0){
//           return (
//             <div>
//               <h2> No Feedback Provided At This Time</h2>
//             </div>
//           )
//         }
    
//       return(
//         <div>
//           <p>Good: {props.good}</p>
//           <p>Neutral: {props.neutral}</p>
//           <p>Bad: {props.bad}</p>
//           <p>All: {props.all}</p>
//           <p>Average: {props.average}</p>
//           <p>Positive: {props.positive}</p>
//         </div>
//       )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h1>Provide Feedback By Clicking Your Choice Below</h1>

//       <button onClick={() => setGood(good+1)}>Good</button>
//       <button onClick={() => setNeutral(neutral+1)}>Neutral</button>
//       <button onClick={() => setBad(bad+1)}>Bad</button>
    
//       <h1>Statistics</h1>

//       <Statistics
//       good = {good}
//       Neutral = {neutral}
//       Bad = {bad}
//       All = {good+neutral+bad}
//       Average = {(good-bad)/(good+neutral+bad)}
//       Positive = {good/(good+neutral+bad)*100} 
//       />
//     </div>
//   )
// }

// export default App


// 1.10 Unicafe Step 5

// import React, { useState } from 'react'



// const StatisticLine = (props) => {
//   return (
//     <tr>
//         <td>{props.text}</td>
//         <td>{props.value}</td>
//     </tr>
//   )
// }

// const Statistics = (props) => {
//   const {good, neutral, bad} = props.stats;
//   const all = good + neutral + bad;
//   const average = (good-bad)/all;
//   const positive = good/all*100 + "%";

//           if (props.all === 0){
//             return (
//               <div>
//                 <h2> No Feedback Provided At This Time</h2>
//               </div>
//             )
//           }
      
//         return(
//           <table>
//           <tbody>
//             <StatisticLine text="Good" value = {good} />
//             <StatisticLine text="Neutral" value = {neutral} />
//             <StatisticLine text="Bad" value = {bad} />
//             <StatisticLine text="All" value = {all} />
//             <StatisticLine text="Average" value = {average} />
//             <StatisticLine text="Positive" value = {positive} />
//           </tbody>
//           </table>
//         );
//   };

//   const Button = (props) => {
//     <button onClick={props.handleClick}>{props.text}</button>
//   };
  
//   const App = () => {
//     const [good, setGood] = useState(0)
//     const [neutral, setNeutral] = useState(0)
//     const [bad, setBad] = useState(0)

//     const results = {
//       good: good, 
//       neutral: neutral,
//       bad: bad
//     };

//     const handleGood = () => {
//       setGood(good+1);
//     };
//     const handleNeutral = () => {
//       setNeutral(neutral+1);
//     };
//     const handleBad = () => {
//       setBad(bad+1);
//     };
  
//     return (
//       <div>
//         <h1>Provide Feedback By Clicking Your Choice Below</h1>
  
//         <Button handleClick={handleGood} text="Good" />
//         <Button handleClick={handleNeutral} text="Neutral" />
//         <Button handleClick={handleBad} text="Bad" />
      
//         <h1>Statistics</h1>
  
//         <Statistics stats={results} />
//       </div>
//     );
//   };

// export default App

//1.12 Anecdotes Step 1

// import React, { useState } from 'react'

// const App = () => {
//     const [selected, setSelected] = useState(0)

//     const anecdotes = [
//       'If it hurts, do it more often',
//       'Adding manpower to a late software project makes it later!',
//       'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//       'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//       'Premature optimization is the root of all evil.',
//       'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//       'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
//     ]

//     const getRandom = () => {
//       setSelected(Math.floor(Math.random()*anecdotes.length))
//     }

//   return (
//     <div>
//       <button onClick = {getRandom}>Click Me for Timeless Truths!</button>
//       <h1>{anecdotes[selected]}</h1>
//     </div>
//   )
// }

// export default App

//1.13 Anecdotes Step 2

// import React, { useState } from 'react'

// const App = () => {
//     const [selected, setSelected] = useState(0)
//     const [vote, setVote] =useState([0,0,0,0,0,0,0])

//     const anecdotes = [
//       'If it hurts, do it more often',
//       'Adding manpower to a late software project makes it later!',
//       'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//       'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//       'Premature optimization is the root of all evil.',
//       'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//       'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
//     ]

//     const getRandom = () => {
//       setSelected(Math.floor(Math.random()*anecdotes.length))
//     }

//     const Vote = () => {
//       const copy = {...vote}
//       copy[selected]++
//       setVote(copy)
//     }

//   return (
//     <div>
//       <button onClick = {getRandom}>Click Me for Timeless Anecdotes!</button>

//       <button onClick = {Vote}>Vote for your Favorite!</button>
//       <h1>{anecdotes[selected]}</h1>
//       <h2>..has {vote[selected]} votes!!</h2>
//     </div>
//   )
// }

// export default App

//1.14 Anecdotes Step 3

import React, { useState } from 'react'

const App = () => {
   const anecdotes = [
      'If it hurts, do it more often',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    const [selected, setSelected] = useState(0)
    const [vote, setVote] =useState(new Array(anecdotes.length).fill(0));
    console.log(vote);
    
    const getRandom = () => {
      setSelected(Math.floor(Math.random()*anecdotes.length))
    }

    const getVotes = () => {
      const copy = [...vote];
      copy[selected]+=1;
      setVote(copy)
    }

    const most = () => {
      return Math.max.apply(null, vote);
    };
  
    const displayMostIndex = () => {
      return vote.indexOf(Math.max(...vote));
    };
  
    return (
      <div>
        <h1>A Collection of Timeless Anecdotes</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {vote[selected]} votes</p>
        <button onClick={getVotes}>Vote</button>
        <button onClick={getRandom}>Get Me Another One!</button>
        <h1>Anecdote with the MOST Votes</h1>
        <p>{anecdotes[displayMostIndex()]}</p>
        <p>has {most()} votes</p>
      </div>
    );
  };

export default App



