import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmitInput = (event) => {
        event.preventDefault()
        
        const newInputValue  = inputValue.trim()
        
        if (newInputValue.length <= 1) return;

        onNewCategory(newInputValue);
        setInputValue('')
    }
    return (
        <form onSubmit={onSubmitInput}>
            <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={onInputChange}></input>
        </form>

    )
}
