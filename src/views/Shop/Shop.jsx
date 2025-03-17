import { useContext, useEffect, useState } from "react";
import AppContext from "../../AppContext";
import './Shop.css'
import { Link } from "react-router-dom";

export default function Shop() { 
    const [categories, setCategories] = useState([]);
    const {request} = useContext(AppContext);
    useEffect( () => {
        request('/product?type=categories')
        .then(setCategories)
        .catch(console.log);
    }, [] );

    return <>
    <h1>Крамниця</h1>
    <div className="categories">
        {categories.map(c => <Link to={"/category/" + c.categorySlug} key={c.categoryId} className="category-card">
            <img src={c.categoryImageId} alt="Logo" />
            {c.categoryTitle}
        </Link>)}
    </div>
    </>;
}