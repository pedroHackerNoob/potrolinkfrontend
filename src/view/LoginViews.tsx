import {Link} from 'react-router-dom'

export default function LoginViews(){
    return(
        <>
            <div>Login</div>
            <nav>
                <Link to='/auth/register'>
                    No tienes cuenta? registrate aqui
                </Link>
            </nav>
        </>
    )
}