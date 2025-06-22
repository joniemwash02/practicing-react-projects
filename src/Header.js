import React from 'react'

const Header = () => {
    const arry=[1,2,3,4,5,6,7,8,9]
  return (
    <div>
        {arry.map((item, key)=>(
            <ul>
                <li key={key}>{item}</li>
            </ul>
        ))}

    </div>)
}

export default Header