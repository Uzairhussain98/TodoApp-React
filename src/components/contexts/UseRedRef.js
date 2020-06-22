import React ,{useReducer ,useRef} from 'react'

const UseRedRef = () => {
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







  return (
    <div>
      
    </div>
  )
}

export default UseRedRef;
