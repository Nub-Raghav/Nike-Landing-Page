import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants';


const NavBar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='max-container flex justify-between items-center'>
            <a href="/">
                <img src={headerLogo} alt="logo" />
            </a>

            <ul className='flex justify-between items-center max-lg:hidden gap-14'>
                {navLinks.map((item) => (
                    <li key={item.label}> 
                        <a href={item.href} className='font-montserrat text-lg leading-normal text-slate-gray'> {item.label} </a>
                    </li>
                ))}
            </ul>

            <div>
                <img src={hamburger} alt="menu" className='w-7 h-7 hidden max-lg:block'/>
            </div>
        </nav>
    </header>
  )
}

export default NavBar;