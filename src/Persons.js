import React from 'react'
import User from './User'

const Persons = () => {
    const list=[
        {
            name: 'john',
            email: "joniemwash4@gmail.com",
            phoneNumber: '0711381285',
            location: 'kimotho'
        },
        {
            name: 'simon',
            email: "simonnjoroge@gmail.com",
            phoneNumber: '072888289',
            location: 'nairobi'
        },
        {
            name: 'thomas',
            email: "thomaswachiuri4@gmail.com",
            phoneNumber: '072776262662',
            location: 'nyandrua'
        },
        {
            name: 'kamau',
            email: "amesmkmau@gmail.com",
            phoneNumber: '0709911787',
            location: 'thika'
        },

    ]
  return (
    <>
    <User list= {list}/>
    </>
  )
}

export default Persons