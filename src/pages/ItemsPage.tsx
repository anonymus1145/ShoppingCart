import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export const ItemsPage = () => {
    return (
        <div className="grid-rows-start-1 grid-rows-end-2 place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <Card className="w-72 h-96 p-6 sm:p-10">
                <CardHeader className="text-center">
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <input type="number" min={0} max={10} className="w-12 border-2"/>
                </CardContent>
                <CardFooter className="items-center justify-center">
                    <Button>Add to cart</Button>
                </CardFooter>
            </Card>
        </div>
    )
}