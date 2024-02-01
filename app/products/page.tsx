import ProductList from "@/components/product-list";
import Sidebar from "@/components/sidebar";


export default function Shop () {

    return (
        <>
            <h1>Shop Page</h1>
                <div>
                    <Sidebar />
                    <ProductList />
                </div>
        </>
    )
}