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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Modal from "./modal"


interface Product {
    id: string,
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

    const { name, price, image, id } = productDetails
    const { original } = image
    return (
        <>
        <AlertDialog>
        <div className="bg-white h-auto relative flex items-start flex-col p-8">
            <Badge className="bg-green-500 rounded-sm absolute top-5 left-60">20%</Badge>
            <div className="w-full h-64">
                <Image src={original} alt={name} height={250} width={250} objectFit="cover" className='mb-5'/>
            </div>
            <AlertDialogTrigger>
                <div className="d-block cursor-pointer">
                    <h1>{name}</h1>
                    <h3>${price}000</h3>
                </div>
            </AlertDialogTrigger>
            <div className="flex mt-3">
                <Button className="block w-[200px] p-2 rounded-r-none rounded-l-sm bg-gray-100 text-black font-bold hover:text-white hover:bg-green-600">Add</Button>
                <Button className="w-auto px-6 rounded-l-none rounded-r-sm bg-gray-100 text-black font-bold hover:text-white hover:bg-green-700">+</Button>
            </div>
        </div>
        <AlertDialogContent>
            <Modal modalDetails={{id}}/>
            {/* <AlertDialogHeader> */}
            {/* <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </AlertDialogDescription> */}
            {/* </AlertDialogHeader> */}
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            {/* <AlertDialogAction>Continue</AlertDialogAction> */}
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>

        </>
    )
}

export default ProductCard


