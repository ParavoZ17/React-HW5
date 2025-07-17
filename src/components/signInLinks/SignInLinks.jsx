import sprite from '../../assets/symbol-defs.svg'
import style from './SignInLinks.module.css'

function SignInLinks() {



  return (
    <div className={style.wraper}>
    <div className={style.links}>
<svg  width='97' height='97'className={style.svg}><use href={`${sprite}#icon-apple`}/></svg>
<svg  width='97' height='97'className={style.svg}><use href={`${sprite}#icon-google`}/></svg>
<svg  width='97' height='97' className={style.svg}><use href={`${sprite}#icon-x`}/></svg>
    </div>
    </div>
  )
}   

export default SignInLinks;