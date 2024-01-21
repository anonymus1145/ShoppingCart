import { Link } from "react-router-dom"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./button"
import { ShoppingCart } from "lucide-react"
import { useContext } from "react"
import { CartItemsContext } from "@/hooks/useContext"


export const NavBar = () => {

    const products = useContext(CartItemsContext) || [];

    return (
        <div className="flex grid-rows-start-0 grid-rows-end-1 border-b-4 border-gray-400 py-4 px-4 mx-10 text-white font-bold text-lg gap-4">
            <ul className="flex gap-4 mx-auto ml-10">
                <Link to="/" className="hover:underline underline-offset-4">Home</Link>
                <Link to="/items" className="hover:underline underline-offset-4">Items</Link>
            </ul>
            <Sheet>
                <SheetTrigger className="flex mx-auto mr-10 hover:underline underline-offset-4"><span className="material-symbols-outlined">
                    shopping_bag
                </span></SheetTrigger>
                <SheetContent>
                    <SheetHeader> 
                        <SheetTitle><ShoppingCart /></SheetTitle>
                        <SheetDescription>
                            Here are all the items you have added to your cart!
                        </SheetDescription>
                    </SheetHeader>
                    <br/>
                    <p>Items added to cart: {products.length}</p>
                    <br/>
                    <Button>Checkout</Button>
                </SheetContent>
            </Sheet>
        </div>
    )
} 