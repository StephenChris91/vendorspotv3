import * as React from "react"
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

import offer1 from '@/public/offer-1.png'
import offer2 from '@/public/offer-2.png'
import offer3 from '@/public/offer-3.png'
import offer4 from '@/public/offer-4.png'
import offer5 from '@/public/offer-5.png'


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const imgs = [
    offer1, offer2, offer3, offer4, offer5
]

export default function FeatureSlider() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className='bg-white p-7'>
        {imgs.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 pl-1 rounded-sm">
            <Image src={item} alt='...' className='rounded-sm'/>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
