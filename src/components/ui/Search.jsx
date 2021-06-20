import { getSuggestedQuery } from '@testing-library/react'
import React, { useState } from 'react'

function Search({getQuery}) {
    const [text,setText] =useState("")
    const onChange =(q)=>{
        setText(q)
        getQuery(q)
    }

    return (
        <div>
            <section className="search">
                <form action="">
                    <input type="text" 
                    className="form-control"
                    placeholder="Search charachter"
                    autoFocus
                    value={text}
                    onChange={e=>{onChange(e.target.value)}}
                     />
                </form>
            </section>
        </div>
    )
}

export default Search
