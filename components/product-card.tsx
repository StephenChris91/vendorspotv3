//write a function that returns a productcard using shadcnui

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
  import { Badge } from "@/components/ui/badge"
import { Button } from "./ui/button"

interface Product {
    name: string,
    price: number,
    image: {
        original: string
    }
}

interface ProductCardProps {
    productDetails: Product
}
  

const ProductCard: React.FC<ProductCardProps> = ({ productDetails }): JSX.Element => {

    const { name, price, image } = productDetails
    const { original } = image
    return (
        <div className="bg-white h-auto relative flex items-start flex-col p-8">
            <Badge className="bg-green-500 rounded-sm absolute top-5 left-60">20%</Badge>
            <div className="w-full h-64">
                <Image src={original} alt={name} height={250} width={250} objectFit="cover" className='mb-5'/>
            </div>
            <h1>{name}</h1>
            <h3>${price}000</h3>
            <div className="flex mt-3">
                <Button className="d-block w-[200px] p-2 rounded-r-none rounded-l-sm bg-gray-100 text-black font-bold hover:text-white hover:bg-green-600">Add</Button>
                <Button className="w-auto px-6 rounded-l-none rounded-r-sm bg-gray-100 text-black font-bold hover:text-white hover:bg-green-700">+</Button>
            </div>
        </div>
    )
}

export default ProductCard


