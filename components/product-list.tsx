"use client"

import { useEffect, useState } from "react"
import ProductCard from "./product-card"


export default function ProductList() {

  const [Products, setProducts] = useState([])

  

  useEffect(() => {
    const signal = new AbortController()

    const getProduct = async () => {

      const response = await fetch("/api/products", {
        method: 'GET'
      })
      const products = await response.json()
      console.log(products)
      setProducts(products)
      console.log(Products)
  
  
    }
    console.log(Products)
    getProduct()
    
    //return a function to clean up
    return () => {
      signal.abort()
    }
  }, [])

  return (
    <div className="w-full p-5 mt-10">
      <div className="grid grid-cols-5 gap-4">
        {Products?.map((product, index) => (
          <>
          {/* <h1 key={index}>{pd.name}</h1>   */}
          <ProductCard productDetails={product} key={index}/>
          </>
        ))}
    </div>
    </div>
  )
}