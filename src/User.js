import React from 'react'

const User = ({ list }) => {
  return (
    <div>
      {list.map((person, key) => (
        <ol key={key}>
          <li><strong>Name:</strong> {person.name}</li>
          <li><strong>Email:</strong> {person.email}</li>
          <li><strong>Phone:</strong> {person.phoneNumber}</li>
          <li><strong>Location:</strong> {person.location}</li>
          <hr />
        </ol>
      ))}
    </div>
  )
}

export default User
