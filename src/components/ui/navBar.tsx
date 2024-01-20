import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <div className="flex grid-rows-start-0 grid-rows-end-1 border-b-4 border-gray-400 py-4 px-4 mx-10 text-white font-bold text-lg gap-4">
            <ul className="flex gap-4 mx-auto ml-10">
                <Link to="/">Home</Link>
                <Link to="/items">Items</Link>
            </ul>
            <Link to="/cart" className="flex mx-auto mr-10"><span className="material-symbols-outlined">
                shopping_bag
            </span></Link>
        </div>
    )
}