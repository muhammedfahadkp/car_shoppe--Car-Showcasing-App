import { CarProps } from '@/types';
import Image from 'next/image';
import {Fragment} from 'react'
import {Dialog, Transition} from '@headlessui/react'

interface CarDetailsProps {
    isOpen: boolean;
    closeModel: () => void;
    car: CarProps;
}

const CarDetails = ({isOpen, closeModel, car} : CarDetailsProps ) => {
  return (
    <div>
       
    </div>
  )
}

export default CarDetails
