import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginView} from "./view/LoginViews.tsx";
import {RegisterViews} from "./view/RegisterViews.tsx";

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path='/auth/login' element={<LoginView/>}></Route>
                    <Route path='/auth/register' element={<RegisterViews/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}