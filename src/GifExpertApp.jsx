import { useState } from "react";
import { AddCategory , GifGrid } from "./components";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Dragon Ball'])
    
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;

        //categories.push(newCategory);
        setCategories([ newCategory, ...categories ])
        //setCategories(cat => [...categories, 'Los Simpsons']);
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Imput */}
            <AddCategory 
                //setCategories={setCategories}
                onNewCategory = {event => onAddCategory(event)}
            
            />

            {/* Listado de Gif */}
            {
                categories.map((category) => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />    
                ))
            }
            {/* Gif Item */}



        </>
    )
};