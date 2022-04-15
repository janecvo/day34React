import React from 'react';
import Header from './header';
import Content from './content';
import Total from './total';

const App = () => {
  const course = {
    name:'Half Stack Application Development',
    parts: [
      { 
        title:'Fundamentals of React', 
        exercises: 10,
      },
      {
        title:'Using Props to Pass Data',
        exercises: 7,
      },
      {
        title:'State of a Component',
        exercises: 14,
      },
    ],
  };
  
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total count={course.parts} />
    </>
  );
};

export default App
