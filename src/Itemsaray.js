import React from 'react'

const Itemsaray = () => {
    const items=['john', 'chege','korir']
  return (
    <div>
        {items.length>0 && <h1>there is A list of {items.length} items</h1>}
    </div>
  )
}

export default Itemsaray