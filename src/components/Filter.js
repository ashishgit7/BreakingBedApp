import React, { useState } from 'react'

const Filter = ({ getQuery,paginate }) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    paginate(1)
    getQuery(q)
  }

  return (
    <section className='search'>
      <form className="mt-3 mb-3">
        <input style = {{width:"50%"}}
          type='text'
          className='form-control m-auto '
          placeholder='Search characters'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Filter