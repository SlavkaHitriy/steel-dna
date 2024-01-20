import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Inventory } from '@/modules/Inventory';
import { InventoryDetails } from '@/modules/InventoryDetails';

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Login } from './modules/Login';
import { InventoryNew } from '@/modules/InventoryNew';

export const App = () => {
    const location = useLocation();

    return (
        <div className={'app'}>
            {!location.pathname.includes('auth') && <Sidebar />}
            <div className={'app-inner'}>
                {!location.pathname.includes('auth') && <Header />}
                <main className={'main'}>
                    <Routes>
                        <Route path='/auth/login' element={<Login />} />

                        <Route path='/inventory' element={<Inventory />} />
                        <Route path='/inventory/new' element={<InventoryNew />} />
                        <Route path='/inventory/:id' element={<InventoryDetails />} />

                        <Route path='*' element={<Navigate to='/inventory' replace />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};
