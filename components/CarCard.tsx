"use client";

import {useState} from  'react';
import Image from 'next/image';
import { CarProps } from '@/types';
import { CarDetails, CustomButton } from '.'; 
import { calculateCarRent, generateCarImageUrl } from '@/utils';

interface CarCardProps {
    car : CarProps;
}

const CarCard = ({car} : CarCardProps) => {

    const {city_mpg, year, make, model, transmission, drive, fuel_type} = car;
    const  carRent = calculateCarRent (city_mpg, year);

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='car-card group'>
      <div className="card-card__content">
        <h2 className='car-card__content-title'>
            {make} {model}
        </h2>
      </div>

        <p className='flex mt-6 text-[32px] gap-2'>
            <span className='self-start text-[14px] font-semibold'>
            ₹
            </span>

         {carRent} 

            <span className='self-end text-[14px] font-medium'>
             / Day
            </span>
        </p>

        <div className='relative w-full h-40 my-3 object-contain hover:scale-125 transition duration-500'>
            <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain' />
        </div>
      
        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/steering.png" width={20} height={20} alt='steering-wheel'/>
                    <p className='text-[14px]'>
                        {transmission === 'a' ? 'Automatic' : 'Manual'}
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/tire.png" width={20} height={20} alt='tire'/>
                    <p className='text-[14px]'>
                        {drive.toUpperCase()}
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/flash.png" width={20} height={20} alt='tire'/>
                    <p className='text-[14px]'>
                        {fuel_type.toUpperCase()}
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/gas.png" width={20} height={20} alt='gas'/>
                    <p className='text-[14px]'>
                        {city_mpg} KMP
                    </p>
                </div>
            </div>

            <div className="car-card__btn-container transition-transform duration-300 ease-in-out transform hover:scale-105 ">
                <CustomButton 
                    title='View More'
                    containerStyle='w-[325px] py-[16px] rounded-full bg-primary-blue'
                    textStyle= "text-white text-[14px] leading-[17px] font-bold" 
                    rightIcon="/right-arrow.svg"
                    handleClick={ () =>setIsOpen(true)}
                />
            </div>

        </div>

        <CarDetails
            isOpen={isOpen} 
            closeModal={() => setIsOpen(false)} 
            car={car}
        />

    </div>
  )
}

export default CarCard
