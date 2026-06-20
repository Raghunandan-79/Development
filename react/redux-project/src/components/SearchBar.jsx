import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
    return (
        <div>
            <Form />
        </div>
    )
}

function Form() {
    const [text, setText] = useState("")

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
        setText("")
    }

    return <form
        className='flex bg-gray-900 gap-5 p-10'
        onSubmit={(e) => {
            submitHandler(e)
        }}>

        <input
            value={text}
            onChange={(e) => {
                setText(e.target.value)
            }}
            required
            className='border-2 w-full px-4 py-2 text-xl rounded outline-none'
            type="text"
            placeholder='Search anything...'
        />

        <Button />
    </form>
}

const Button = memo(function Button() {
    return <button
        className='active:scale-95 cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none'
    >Search</button>
})

export default SearchBar