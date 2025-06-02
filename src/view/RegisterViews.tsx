import {Link} from "react-router-dom";

export default function RegisterViews(){
    return(
        <>
            <div>Register</div>
            <nav>
                <Link to='/auth/login'>
                    ya tienes cuenta? inicia sesion aqui
                </Link>
            </nav>
        </>
    )
}