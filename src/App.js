import './App.css';
import { useState, useEffect } from 'react';




function generateUsers () {
  return [
    {name: 'Giorgi', id: 1},
    {name: 'Qeti', id: 2},
    {name: 'Salome', id: 3},
    {name: 'Lasha', id: 4},
    {name: 'mariami', id: 5},
    {name: 'gaga', id: 6},
    {name: 'Dato', id: 7},
    {name: 'Matilda', id: 8},
    {name: 'Giorgi', id: 9},
    {name: 'Qeti', id: 10},
    
    
  ];

}  
function App() {
const [users, setUsers] = useState([]);
  
  useEffect(()=>{
    setUsers(generateUsers())
  },[])

  useEffect(() => {
    document.title = `${users.length} users left`;
  });

return (
<div className='app'>
<button onClick={() => 
  setUsers((prevUsers) => prevUsers.slice(1))}>
   Delete
  </button>

{users.map(({id, name}) => (
  <h1 key={id}>{name}</h1>
))}

</div>
);
};
export default App;
