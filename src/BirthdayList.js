import React, { useState } from 'react'

import { data } from './data'

function BirthdayList() {
    const [people, setPeople] = useState(data)
    return (
        <>  
        <p>{people.length} birthdays today</p>
            {people.map((person) => {
                const {id, name, age, image} = person
                return (<article key={id} className='person'>
                    <img src={image} alt={name} />
                    <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                    </div>
                </article>)
            })
            }
            <button className='btn' type='button' onClick={() => setPeople([] )}>Clear</button>
        </>
    )
    }

export default BirthdayList
