import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); //PARA EVITAR QUE SE HAGA UN REFRESH DEL NAVEGADOR
        console.log(inputValue)

        if(inputValue.trim().length <= 1) return; 
        // setCategories(categories =>[ inputValue, ...categories ]);
        onNewCategory(inputValue.trim().toUpperCase());
        setInputValue('');

    }

    return (

        <form onSubmit={ (event) => onSubmit(event) }>

            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            /> 

        </form>

    );
};
