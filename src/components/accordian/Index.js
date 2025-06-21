import React from 'react'
import { useState } from 'react';
import './index.css';
import dataofitem from "./dataofitem"

export const Accordian = () => {
      const[selected, setSelected]=useState(null)
      const selectedItem=(selectedId)=>{
        setSelected(selectedId===selected ? null: selectedId)
      }

  return (
    <div className='wrapper'>
        <div className='accordian'>
            {
                dataofitem && dataofitem.length > 0 ? 
                dataofitem.map((listitems, index)=>{
                    return <div className='item' key={index}>
                        <div className='title'>
                            <h3 >{listitems.question}</h3>
                            <span onClick={()=>{selectedItem(listitems.id)}} >+</span>

                        </div>
                        {selected===listitems.id ? <div>
                            <p>{listitems.answer}</p>
                        </div> :null}
                    </div>
                })
            

                
                : <div> no data found </div>
            }

        </div>

    </div>
  )
}
