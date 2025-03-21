import { Link, Outlet } from "react-router-dom";
import "./Layout.css"
import { useContext } from "react";
import AppContext from "../../AppContext";

export default function Layout() {
    const {cart} = useContext(AppContext);
    
    const cartItemsCount = !cart ? 0 :
        cart.cartItems.reduce((cnt, ci) => cnt += ci.quantity, 0); 

    const cartTotal = !cart ? 0 :
        cart.cartItems.reduce((cnt, ci) => cnt += ci.cartItemPrice, 0); 

    return <div className="main-container">
        <header>
            <h3>Вітаємо у крамниці!</h3>
            <Link className="nav-item" to="/signup">Sign Up</Link>
            <Link className="nav-item" to="/signin">Sign In</Link>
            <Link className="nav-item" to="/profile">Profile</Link>
            <Link className="nav-item" to="/admin">Admin</Link>
            <Link className="nav-item" to="/shop">Shop</Link>
            <div>cart: [{cartItemsCount}] ({cartTotal})</div>
        </header>
        <main><Outlet /></main>
        <footer>&copy; IT Step Academy, 2025</footer>
    </div>;
}