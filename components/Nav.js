import Link from "next/link"
import { Menu } from "@headlessui/react"


const Nav = () => {
  return (
    <nav className="
    flex
    fixed
    w-full
    h-16
    justify-between
    z-10
    backdrop-blur-sm
    2xl:justify-evenly">
        <Link href='/'>
            <h1 className="my-auto ml-20">B.O.M Reptiles</h1>
        </Link>
        <ul className="flex my-auto justify-end justify-between">
            <li className="pr-4">
                <Link href='/'>Home</Link>
            </li>
            <li className="pr-4">
                <Link href='/feeders'>Feeders</Link>
            </li>
            <li className="pr-4">
                <Link href='/supplies'>Supplies</Link>
            </li>
            <li className="pr-4">
                <Link href='/merch'>Merch</Link>
            </li>
            <li className="pr-4">
                <Link href='/services'>Services</Link>
            </li>
            <li className="pr-5">
                <Link href='/education'>Education</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav