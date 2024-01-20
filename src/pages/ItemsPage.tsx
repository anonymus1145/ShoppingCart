import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from "react"
import { fetchProduct, Product } from "@/services/fetchProducts"

export const ItemsPage = () => {
    const [products, setProducts] = useState([{} as Product])
    const productList: Product[] = []

    useEffect(() => {
        const getData = async () => {
            try {
                for (let i = 0; i < 8; i++) {
                    const fetchItem = await fetchProduct(i);
                    productList.push(fetchItem)
                }
                setProducts(productList)
            } catch (error) {
                console.error('Error fetching objects:', error);
            }
        }
        getData()
    }, []) // Empty dependency array ensures useEffect runs only once!!

    return (
        <div className="grid grid-rows-start-1 grid-rows-end-2 place-items-center gap-4 px-6 py-24 sm:py-32 lg:px-8 flex-wrap">
            <div className="grid auto-rows-fr grid-cols-4 gap-8">
                {products.map((product) => (
                    <Card className="w-72 max-h-max p-2 sm:p-4 hover:scale-105">
                        <CardHeader className="text-center gap-2">
                            <CardTitle>{product.title}</CardTitle>
                            <CardDescription>{product.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center gap-2">
                            <p className="text-2xl text-black">$ {product.price}</p>
                            <p className="text-md text-black">Quantity<input type="number" min={0} max={10} className="w-12 border-2 mx-2" /></p>
                        </CardContent>
                        <CardFooter className="items-center justify-center">
                            <Button>Add to cart</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}