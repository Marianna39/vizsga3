import React from 'react'

const books = [
  "Én, a robot",
  "Alapítvány",
  "Alapítvány és Birodalom",
  "Második Alapítvány",
  "Az Alapítvány pereme",
  "Alapítvány és Föld",
  "Az Alapítvány előtt"
]



export default function Scifi() {
  return (
    <div className='container'>
      <div className="row">
        Sci-Fi:
      </div>
      <ul>
        {books.map((book, index) => (
          <li
            key={index}
          >{book}</li>
        ))}
      </ul>



    </div>
  )
}
