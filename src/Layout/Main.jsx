import { Outlet } from 'react-router-dom';
import TakeHeader from '../Components/Take/TakeHeader';
import TakeFooter from '../Components/Take/TakeFooter';

const Main = () => {
    return (
        <div className='main-page-area'>
            <TakeHeader />
            <Outlet></Outlet>
            <TakeFooter />
        </div>
    );
};

export default Main;


