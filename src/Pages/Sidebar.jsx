import Comming_Soon from '../assets/icons/commingSoon.svg'
import Favourites from '../assets/icons/favourite.svg'
import New_Releases from '../assets/icons/newRelease.svg'
import TrendingImg from '../assets/icons/trending.svg'
import Watch_Leter from '../assets/icons/watchLater.svg'
const Sidebar = () => {
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
                        <img src={TrendingImg} width="24" height="24" alt="" />
                        <span>Trending</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <img src={New_Releases} width="24" height="24" alt="" />
                        <span>New Releases</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <img src={Comming_Soon} width="24" height="24" alt="" />
                        <span>Coming Soon</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <img src={Favourites} width="24" height="24" alt="" />
                        <span>Favourites</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <img src={Watch_Leter} width="24" height="24" alt="" />
                        <span>Watch Later</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;