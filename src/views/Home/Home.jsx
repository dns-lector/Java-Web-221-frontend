import { Link } from "react-router-dom";

export default function Home() {
    return <>
        <Link to="/signup">Sign Up</Link>
        <br/><br/>
        <Link to="/signin">Sign In</Link>
        <br/><br/>
        <Link to="/profile">Profile</Link>
        <br/><br/>
        <Link to="/admin">Admin</Link>
        <br/><br/>
        <Link to="/shop">Shop</Link>
    </>;
}