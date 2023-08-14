import { FC } from 'react';
import Footer from '@/components/Footer';
import { observer } from 'mobx-react-lite';

const Home: FC = () => {
    return (
        <>
            Home
            <Footer />
        </>
    );
};
export default observer(Home);
