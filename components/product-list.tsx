"use client"
import { useEffect, useState } from "react";
import ProductCard from "./product-card";
import { Loader } from "@/lib/loader";
import { IProduct } from "@/app/types/types"; 



export default function ProductList() {
  const [products, setProducts] = useState<IProduct[]>([]);
  // const [loadingProducts, setLoadingProducts] = useState<boolean[]>([]);
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    const signal = new AbortController();

    const getProducts = async () => {
    setIsLoading(true)
      try {
        const response = await fetch("/api/products", {
          method: 'GET'
        });
        const data = await response.json();
        setProducts(data);
        // setLoadingProducts(new Array(data.length).fill(false)); // Initialize loading state for each product
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
    setIsLoading(false)
    // Cleanup function
    return () => {
      signal.abort();
    };
  }, []);

  return (
    <div className="w-full p-5 mt-10">
      <div className="grid grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div key={index} className="relative">
            {/* {loadingProducts[index] && <Loader />}
            <ProductCard productDetails={product} /> */}
            {isLoading ? <Loader /> : <ProductCard productDetails={product} />}
          </div>
        ))}
      </div>
    </div>
  );
}
