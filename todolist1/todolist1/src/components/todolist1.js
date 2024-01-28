import React from 'react'



export default function Todo(props) {

    return (
        <div>
            <h1>Todo</h1>
            {/* form = collects user input, more than one, includes a submit button */}
            <form>
                <h2>
                    <label>
                        what needs to be done?

                    </label>
                </h2>
                <input
                    type='text'
                    id='new-todo'
                    className='input'
                    name='text'
                    autoComplete='off'
                />
                <button>Add</button>
            </form>
<div>
{/* the btn = generic button styling toggle-btn = more specific styling for toggle buttongit  */}
    <button type='button' className='btn toggle-btn'> 
        <span className='visual'>Show</span>
    <span>all</span>
    </button>
</div>
        </div>
    )
}