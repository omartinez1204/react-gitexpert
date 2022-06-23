
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);
    
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; // validando si ya existe el item.
        setCategories([newCategory, ...categories])
    }

    return (<>
        <h3>GifExpertApp</h3>
        <AddCategory
            onNewCategory={onAddCategory}
        />
        {
            categories.map(category => (
                <GifGrid key={category} category={category} />
            ))
        }
    </>)
}