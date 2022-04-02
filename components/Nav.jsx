import Link from "next/link"
import { Menu } from "@headlessui/react"


const Nav = () => {
  return (
    <nav className="flex">
        <Menu>
        <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/merch"
            >
              Account settings
            </a>
          )}
        </Menu.Item> 
        </Menu.Items>
        </Menu>
        <ul className="flex">
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/feeders'>Feeders</Link>
            </li>
            <li>
                <Link href='/supplies'>Supplies</Link>
            </li>
            <li>
                <Link href='/merch'>Merch</Link>
            </li>
            <li>
                <Link href='/services'>Services</Link>
            </li>
            <li>
                <Link href='/education'>Education</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav