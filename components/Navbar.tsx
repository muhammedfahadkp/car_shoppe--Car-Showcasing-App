import Link from "next/link"
import Image from "next/image"
import { CustomButton } from "."

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <div className="flex flex-raw items-center gap-5">
            <Link href='/' className="flex justify-center items-center">
                <Image 
                src="/logo.png"
                width={45}
                height={18}
                className="object-contain"
                />
            </Link>
            <p className="text-[#1877F2] font-extrabold">Car Shoppe</p>
            </div>

            <CustomButton 
                title="Sign in"
                btnType = "button"
                containerStyle="text-primary-blue rounded-full bg-white min-w-[130px]"
            />
        </nav>
    </header>
  )
}

export default Navbar
