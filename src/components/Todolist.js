import React ,{useReducer, useRef} from 'react'
import './Todo.css';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const Todolist = () => {

    const inputref = useRef();
    const [item , dispatch] = useReducer((state, action)=> {
     switch(action.type){
       case 'add':
         return [...state,
           {
             id : state.length,
           name : action.name,
 
         }
         ];
         case 'delall' :
           return [];
 
 
 
       case 'remove':
          return state.filter(( _, index) => index != action.index) ; 
 
         default : return state ;
        }
        
        
    }, []);



    function handleSubmit(event){
        event.preventDefault();
      // inputref.current.value = ''
      
      
      }




  return (
    <>
 
  <ul className='list'>
    {

    item.map((item, index) => (
    <li key={item.id}>{item.name}{''}<button onClick={()=> dispatch({type:'remove', index })}>X
    </button></li>
      
      
    ))}

  </ul>

  <form onSubmit={handleSubmit}>
  <input ref={inputref} placeholder='Enter A Todo Task'/>
  </form>

  <Button color="primary" onClick={()=> dispatch({
      type:'add',
      name : inputref.current.value
  })}> Add Task
  </Button>
          

  <Button color="primary" onClick={()=> dispatch({type:'delall'})}>Clear</Button>
  </>
      
    
  )
}

export default Todolist ;