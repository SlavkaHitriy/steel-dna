import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Login } from './modules/Login';

export const App = () => {
    const location = useLocation();

    return (
        <div className={'app'}>
            {!location.pathname.includes('auth') && <Header />}
            <main className={'main'}>
                <Routes>
                    <Route path='/auth/login' element={<Login />} />
                    <Route path='*' element={<Navigate to='/auth/login' replace />} />
                </Routes>
            </main>
            {!location.pathname.includes('auth') && <Footer />}
        </div>
    );
};
