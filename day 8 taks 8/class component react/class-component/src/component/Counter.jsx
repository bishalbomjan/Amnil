import { Component } from "react"
import styles from './counter.module.css'
class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    render(){
        return(
            <div className={styles.container}>
            <h1>Counter Component</h1>
            <p className={styles.count}>{this.state.count}</p>
            <div className={styles.buttonContainer}>
                <button className={`${styles.btn} ${styles['btn-add']}`} onClick={()=>this.setState({count:this.state.count+1})}>+</button>
                <button className={`${styles.btn} ${styles['btn-danger']}`} onClick={()=>{
                    if(this.state.count===0)
                        return
                    else
                    return this.setState({count:this.state.count-1})}
                }>-</button>
            </div>
            </div>
        )
    }
}
export default Counter