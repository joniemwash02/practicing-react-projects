import React from 'react'

const Filterchildren = ({items, input, additem, hundleinputvalue, removeItems}) => {
  return (
     <div>
        {items.map((item, key)=>(
            <li key={key}>
                {item}
            </li>
        ))}
        <input onChange={hundleinputvalue} 
        type="text" 
        placeholder='enter item to remove'
        
        />
        <button onClick={removeItems}>click to remove </button>
        <button onClick={additem}>click to add </button>

    </div>
  )
}

export default Filterchildren