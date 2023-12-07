import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "@/constants"
import { link } from "fs"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-raw items-center gap-6">
            <Image src="/logo.png" alt="logo" width={65} height={35} className="object-contain" />
            <p className="text-[#4B72FF] font-extrabold">Car Shoppe</p>
        </div>

        <div className="footer__links">
            {footerLinks.map((link) => (
                <div key={link.title}
                className="footer__link"
                >
                    <h3 className="font-600">{link.title}</h3>
                    {link.links.map((item) => (
                        <Link 
                        key={item.title}
                        href= {item.url}
                        className= "text-gray-500"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            ))}
        </div>
        
        </div>

        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 sm:text-base px-6 py-10 gap-10 ">

        <p> 
          2023 Car Shoppe &copy;. All Right Reserved        
        </p>

              <div className="footer__copyrights-link">
                <Link href='/' className="text-gray-500">
                   Privacy Policy
                </Link>
                <Link href='/' className="text-gray-500">
                  Terms and Condition
                </Link>
                <Link href='https://github.com/muhammedfahadkp' className="text-gray-500">
                  Designed by Fahad
                </Link>
              </div>
        </div>

    </footer>
  )
}

export default Footer
