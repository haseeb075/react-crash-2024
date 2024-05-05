import React from 'react'

const Basics = () => {
  const name = 'John';
  const x= 10;
  const names =['react', 'crash', '2024'];
  const isLoggedIn = true;
  const styles ={
    color: 'red',
    fontSize: '12px',
  }
  return (
    <>
    <div className='text-5xl'>
      This is main app component
    </div>
    <p style={styles}>hello {name} Age {10}</p>
    <ul>
    
    {names.map((name, index)=> (
     <li key={index}>{name}</li> 
    ))}
    </ul>
    {isLoggedIn && <h1>Hello Member</h1>}
    </>
  )
}

export default Basics
