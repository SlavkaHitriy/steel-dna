import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Inventory } from '@/modules/Inventory';
import { InventoryDetails } from '@/modules/InventoryDetails';
import { PipeProfiles } from '@/modules/PipeProfiles';
import { PipeProfilesDetails } from '@/modules/PipeProfilesDetails';
import { PipeTally } from '@/modules/PipeTally';
import { PipeTallyDetails } from '@/modules/PipeTallyDetails';
import { PipeTallyNew } from '@/modules/PipeTallyNew';

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

                        <Route path='/pipe-tally' element={<PipeTally />} />
                        <Route path='/pipe-tally/new' element={<PipeTallyNew />} />
                        <Route path='/pipe-tally/:id' element={<PipeTallyDetails />} />

                        <Route path='/pipe-profiles' element={<PipeProfiles />} />
                        <Route path='/pipe-profiles/new' element={<PipeProfiles />} />
                        <Route path='/pipe-profiles/:id' element={<PipeProfilesDetails />} />

                        <Route path='*' element={<Navigate to='/inventory' replace />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};
