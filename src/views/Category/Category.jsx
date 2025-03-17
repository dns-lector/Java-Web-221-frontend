import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AppContext from "../../AppContext";
import "./Category.css"

export default function Category() { 
    const {id} = useParams();
    const [category, setCategory] = useState({
        "categoryId": "",
        "categorySlug": id,
        "categoryTitle": "",
        "categoryDescription": "",
        "categoryImageId": "",
        "products": []
    });
    const {request} = useContext(AppContext);

    useEffect( () => {
        request('/product?type=category&slug=' + id)
        .then(setCategory)
        .catch(console.log);
    }, [id] );

    return <>
    <h1>Розділ {id}</h1>
    <div className="product-cards-container">
    {category.products.map(p => <ProductCard key={p.productId} product={p} />)}
    </div>
    </>;
}

function ProductCard({product}) {

    const toCartClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log(product.productTitle);
    };

    return <Link to={"/product/" + product.productSlug} className="product-card">
        <img className="product-card-image" src={product.productImageId} alt="productImageId" />
        <div className="product-card-body">
            <span className="product-card-fab" onClick={toCartClick}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#800000"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg></span>
            <h2 className="product-card-title">{product.productTitle}</h2>
            <p className="product-card-text" title={product.productDescription}>{product.productDescription}</p>
            <span className="product-card-footer">{product.price.toFixed(2)}</span>
        </div>
    </Link>;
}
/* 🛒

Д.З. Забезпечити відображення на сторінках категорій
- переліку інших (всіх) категорій з можливістю переходу на них
* breadcrumbs (хлібні кріхти) - адреси даної сторінки з 
   можливістю переходу на різні рівні
   /Магазин/Скло/Виріб 115
    ______  ____  
*/