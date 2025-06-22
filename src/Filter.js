import React, { useState } from 'react'
import Filterchildren from './Filterchildren'

const Filter = () => {
    const [items, setItems]= useState(['bananas', 'soap', 'water'])
    const [input, setInput]= useState('')
    const hundleinputvalue=(e)=>{
        setInput(e.target.value)
    }
    const removeItems=()=>{
        setItems(items.filter((item)=>item!==input))
    }
    const additem=()=>{
        setItems([...items, input])
    }
  return (
<Filterchildren items={items} hundleinputvalue={hundleinputvalue} additem={additem} removeItems={removeItems}/>
  )
}

export default Filter