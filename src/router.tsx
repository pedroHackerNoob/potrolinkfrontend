import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginView from "./view/LoginViews.tsx";
import RegisterViews from "./view/RegisterViews.tsx";
import AuthLayout from "./layout/AuthLayout.tsx";
import LinkTreeViews from "./view/LinkTreeViews.tsx";
import ProfileView from "./view/ProfileView.tsx";
import AppLayout from "./layout/AppLayout.tsx";

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path='/auth/login' element={<LoginView />}></Route>
                    <Route path='/auth/register' element={<RegisterViews />}></Route>
                </Route>
                <Route path='/admin' element={<AppLayout />}>
                    <Route index={true} element={<LinkTreeViews />} />
                    <Route path='profile' element={<ProfileView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}