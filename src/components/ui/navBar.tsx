import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <div className="flex grid-rows-start-0 grid-rows-end-1 border-b-4 border-gray-400 py-4 px-4 mx-10 text-white font-bold text-lg">
            <ul className="flex gap-4 mx-24 hover:text-xl">
                <Link to="/">Home</Link>
                <Link to="/items">Items</Link>
            </ul>
            <h1 className="flex gap-4 mx-24 absolute right-0">Shopping Cart</h1>
        </div>
    )
}