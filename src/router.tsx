import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginView from "./view/LoginViews.tsx";
import RegisterViews from "./view/RegisterViews.tsx";
import AuthLayout from "./layout/AuthLayout.tsx";

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path='/auth/login' element={<LoginView />}></Route>
                    <Route path='/auth/register' element={<RegisterViews />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}