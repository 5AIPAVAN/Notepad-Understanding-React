// import React from 'react'

// export default function Alert(props) {
//     const {description} = props;
//   return (
//     <div className="alert alert-primary" role="alert">
//     This is in testing {description}
//   </div>
//   )
// }


import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';

function Alert() {
  
  const dataa = useContext(noteContext);
  const {alert} = dataa;

    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height: '50px'}}>
        {<div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
           <strong>{(alert.type)}</strong>: {alert.msg} 
        </div>}
        </div>
    )
}

export default Alert