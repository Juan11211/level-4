import React from 'react'


export default function Contact() {
    return ( 
        <div className='contact'>
           <form> 
               <input className='input'
                    type="text"
                    placeholder="First Name"
                />
                <input className='input'
                    type="email"
                    placeholder="Phone Number"
                />
            <button>Submit</button>
           </form>
        </div>
    )
}