import Add from './components/formData/Add'
import './App.css'

const App = () => {
  const handlePass = (obj)=>{
console.log(obj)
  }
  return (
    <div><Add labelEmail={'Email'} labelName={"Name"} buttonText={'Submit'} onPass={handlePass} /></div>
  )
}

export default App