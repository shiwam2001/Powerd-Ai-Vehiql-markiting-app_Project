"use client"

import React, { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { CarIcon, Heart } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { useRouter } from 'next/navigation'

const car_card = ({ car }) => {

    const [isSaved, setIsSaved] = useState(car.wishlisted)

   let router=useRouter()

    let handleToggleSaved = async (e) => {

    }

    return (
        <Card className="mx-3 py-0 overflow-hidden hover:shadow-lg transition group ">
            <div className='relative h-58'>
                {car.images && car.images.length > 0 ? (
                    <Image
                        src={car.images[0]}
                        alt={`${car.make} ${car.model}`}
                        fill
                        className='object-cover group-hover:scale-105 transition duration-300'
                    />
                ) : (
                    <div className='w-full h-full bg-gray-200 flex items-center justify-center'>
                        <CarIcon className='h-12 w-12 text-gray-400' />

                    </div>
                )}

                <Button variant="ghost" size="icon" className={`absolute top-2 right-2 bg-white/90  rounded-full p-1.5 ${isSaved ? "text-red-500 hover:text-red-600" : "text-gray-600 hover:text-gray-900"
                    } `}
                    onClick={handleToggleSaved}
                >
                    <Heart className={isSaved ? "fill-current" : ""} size={20} />
                </Button>

            </div>

            <CardContent className="p-4" >
                <div className='text flex-col mb-2'>
                    <h3 className='text-lg font-bold line-clamp-1'>
                        {car.makes} {car.model}
                    </h3>
                    <span className='text-xl font-bold text-blue-600 ' >${car.price.toLocaleString()}</span>
                </div>

                <div className='text-gray-600 mb-2 flex items-center'>
                    <span>{car.year}</span>
                    <span className='mx-2'>-</span>
                    <span>{car.transmission}</span>
                    <span className='mx-2'>-</span>
                    <span>{car.fuelType}</span>
                </div>

                <div className='flex flex-wrap gap-1 mb-4'>
                    <Badge variant="outline" className='bg-gray-50'>
                        {car.bodyType}
                    </Badge>

                    <Badge variant="outline" className='bg-gray-50'>
                        {car.mileage.toLocaleString()}
                    </Badge>

                    <Badge variant="outline" className='bg-gray-50'>
                        {car.color}
                    </Badge>

                </div>

                <div className='flex justify-between'>
                    <Button className="flex-1"
                        onClick={() => router.push(`/cars/${car.id}`)}
                    >View Car
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default car_card
