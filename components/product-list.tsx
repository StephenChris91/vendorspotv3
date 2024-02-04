"use client"

import { useEffect, useState } from "react"
import ProductCard from "./product-card"


export default function ProductList() {

  const [Products, setProducts] = useState([])

  

  useEffect(() => {
    const signal = new AbortController()

    const getProduct = async () => {

      const response = await fetch(`/api/products`)
      const prod = await response.json()
      setProducts(prod)
      console.log(Products)
  
  
    }
    getProduct()
    
    //return a function to clean up
    return () => {
      signal.abort()
    }
  }, [])

  return (
    <div className="w-full p-5 mt-10">
      <div className="grid grid-cols-6 gap-4">
        {Products.map((pd, index) => (
          <ProductCard key={index} productDetails={pd}/>
        ))}
    </div>
    </div>
  )
}