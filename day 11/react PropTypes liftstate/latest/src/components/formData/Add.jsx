import { useState } from 'react'
import styles from './styles.module.css'
import PropTypes, { string } from 'prop-types'
const Add = ({labelName,labelEmail,buttonText,onPass}) => {
        const [person,setPerson] = useState({name:'',email:''})
        const [animate,setAnimate] = useState(false)
  return (
    <>
    <form onSubmit={(e)=>{
        e.preventDefault()
        onPass(person)
document.getElementById('name').value = '';
document.getElementById('email').value = '';
setAnimate(true)
setTimeout(()=>{
setAnimate(false)
},3000)
    }}>
<div className={styles.formGroup}>
        <label  className={styles.label} htmlFor="name">{labelName}</label>
        <input className={styles.name}  type="text" id='name' onChange={(e)=>setPerson({...person,name:e.target.value})} placeholder={`Enter ${labelName}`} />
</div>
<div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">{labelEmail}</label>
        <input className={styles.name}  type="email" id='email' onChange={(e)=>{setPerson({...person,email:e.target.value})}} placeholder={`Enter ${labelEmail}`} />
</div>
        <button className={styles.btn}>{buttonText}</button>
    </form>
    <div className={animate?styles.active:styles.noActive}>Form Submitted.</div>
    </>
  )
}
Add.PropTypes ={
        labelName:string,
        labelEmail:string,
        buttonText:string,
        onPass:PropTypes.func
}
export default Add