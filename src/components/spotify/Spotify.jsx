import Logo from "../logo/Logo";
import style from './Spotify.module.css'
import SignInLinks from '../signInLinks/SignInLinks'

function Spotify() {



  return (
    <>
  <Logo/>
  <h1 className={style.theme}>LIFE IS WASTED ON THE LIVING</h1>
  <p className={style.theme}>Sign in</p>
  <p className={style.theme}>with</p>
  <SignInLinks className={style.links}/>
    </>
  )
}

export default Spotify;