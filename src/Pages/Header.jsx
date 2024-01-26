import { useContext, useState } from 'react';
import Moon from '../assets/icons/moon.svg';
import Sun from '../assets/icons/sun.svg';
import Logo from '../assets/logo.svg';
import Ring from '../assets/ring.svg';
import Shopping_Card from '../assets/shopping-cart.svg';
import CartDetails from '../cine/CartDetails';
import { MovieContext, ThemContext } from '../context/Index';
const Header = () => {
    const { cartDta } = useContext(MovieContext)
    const { darkMode, setDarkMode } = useContext(ThemContext)
    const [showCart, setShowCart] = useState(false)
    function handleCartShow() {

        setShowCart(true)
    }
    return (
        <header>
            {
                showCart && <CartDetails onClose={() => setShowCart(false)} />
            }
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src={Logo} width="139" height="26" alt="Logo" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={Ring} width="24" height="24" alt="Ring" />
                        </a>
                    </li>
                    <li>
                        <a onClick={() => setDarkMode(darkMode => !darkMode)} className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={darkMode ? Sun : Moon} width="24" height="24" alt="Moon" />
                        </a>
                    </li>
                    <li>
                        <a onClick={handleCartShow} className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={Shopping_Card} width="24" height="24" alt="Cart" />
                            {
                                cartDta.length > 0 && (
                                    <span className="rounded-full absolute top-[-12px] left-[28px] bg-black text-white text-center p-[2px] w-[30px] h-[30px]">
                                        {cartDta.length}
                                    </span>
                                )
                            }
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;