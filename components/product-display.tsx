import ProductList from "@/components/product-list";
import Sidebar from "@/components/sidebar";


export default function ProductDisplay () {

    return (
        <>
                <div className="flex space-x-10">
                    <Sidebar />
                    <ProductList />
                </div>
        </>
    )
}