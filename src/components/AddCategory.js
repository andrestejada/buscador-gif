import React , {useState}from 'react'
import PropTypes from 'prop-types'


const AddCategory = ({setCategorias}) => {
    const [inputValue, setInputValue] = useState('')

    const handleOnChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleOnSubmit = e=>{
        e.preventDefault()

        if(inputValue.trim().length > 1){
            setCategorias( cat=> [inputValue,...cat ] )
            setInputValue('')
        }
        
    }

    return (
       <form
            onSubmit={handleOnSubmit}
       >
           <input
                value={inputValue}
                type='text'
                onChange={ handleOnChange }
           />
       </form>
    )
}

export default AddCategory

AddCategory.propTypes={
    setCategorias: PropTypes.func.isRequired
} 