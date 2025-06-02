import {Link} from 'react-router-dom'

export default function LoginViews(){
    return(
        <>
            <nav>
                <Link to='/auth/register'>
                    No tienes cuenta? registrate aqui
                </Link>
            </nav>
        </>
    )
}