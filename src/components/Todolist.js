import React ,{useReducer, useRef} from 'react'
import './Todo.css'


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
    //   inputref.current.value = ''
      
      
      }




  return (
    <>
 
  <ul>
    {

    item.map((item, index) => (
    <li key={item.id}>{item.name}{''}<button onClick={()=> dispatch({type:'remove', index })}>X
    </button></li>
      
      
    ))}

  </ul>

  <form onSubmit={handleSubmit}>
  <input ref={inputref}/>
  </form>

  <button className='savebtn' onClick={()=> dispatch({
      type:'add',
      name : inputref.current.value
  })}> Add Task
  </button>
          

  <button className='delbtn' onClick={()=> dispatch({type:'delall'})}>Clear</button>
  </>
      
    
  )
}

export default Todolist ;