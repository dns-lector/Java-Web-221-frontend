import { useContext, useEffect, useState } from "react";
import AppContext from "../../AppContext";

export default function Admin() {  
    const [categories, setCategories] = useState([]);
    const {request} = useContext(AppContext);
    useEffect( () => {
        request('/product?type=categories')
        .then(setCategories)
        .catch(console.log);
    }, [] );

    const formSubmit = e => {
        e.preventDefault();
        console.log("Intercepted");
        // fetch("http://localhost:8080/Java-Web-221/product", {
        //     method: 'POST',
        //     body: new FormData(e.target)
        // }).then(r=>r.text()).then(console.log);
        request('/product', {
            method: 'POST',
            body: new FormData(e.target)
        }).then(console.log)
        .catch(console.error);
    }

    return <>
    <h1>Admin</h1>
    <form onSubmit={formSubmit} encType="multipart/form-data">
        <input name="product-title" placeholder="Назва"/><br/>
        <input name="product-description" placeholder="Опис"/><br/>
        <input name="product-price" placeholder="Ціна" type="number" step="0.01"/><br/>
        <input name="product-stock" placeholder="Кількість" type="number"/><br/>
        <input name="product-code" placeholder="Код"/><br/>
        <input name="product-image" type="file" /><br/>
        <select name="category-id">
            {categories.map(c => <option key={c.categoryId} value={c.categoryId}>{c.categoryTitle}</option>)}
        </select>
        <br/>
        <button type="submit">Додати продукт</button>
    </form>
    </>;
}