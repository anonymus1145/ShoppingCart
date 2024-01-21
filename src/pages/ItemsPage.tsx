import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { CartItemsContext } from "@/hooks/useContext"
import { useContext, useEffect, useRef } from "react"


export type Product = {
    id: number
    title: string
    price: number
    description: string
    image: string
}

export let itemsForCart: Product[] = []


export const ItemsPage = () => {

    const products = useContext(CartItemsContext) || [];

    const { toast } = useToast()

    function handleClick() {
        toast({ description: "Added to cart." })
    }

    return (
        <div className="grid grid-rows-start-1 grid-rows-end-2 place-items-center gap-4 px-6 py-24 sm:py-32 lg:px-8 flex-wrap">
            <div className="grid auto-rows-fr grid-cols-4 gap-8">
                {products.map((product) => (
                    <Card key={product.id} className="w-72 max-h-max p-2 sm:p-4 hover:scale-105">
                        <CardHeader className="text-center gap-2">
                            <CardTitle>{product.title}</CardTitle>
                            <CardDescription>{product.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center gap-2">
                            <p className="text-2xl text-black">$ {product.price}</p>
                            <p className="text-md text-black">Quantity<input id="${count}" type="number" min={0} max={10} className="w-12 border-2 mx-2" /></p>
                        </CardContent>
                        <CardFooter className="items-center justify-center bottom-0">
                            <Button onClick={handleClick}>Add to cart</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <Toaster />
        </div>
    )

}