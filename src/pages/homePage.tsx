import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const HomePage = () => {
    return (
        <section aria-labelledby="sale-heading" className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
                <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl lg:text-6xl">Get 25% off during our one-time sale</h2>
                <p className="mx-auto mt-4 max-w-xl text-xl text-gray-200">Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.</p>
                <Button className="mt-6 font-semibold" variant="outline"><Link to="/items">Get access to our products</Link></Button>
            </div>
        </section>
    )
}