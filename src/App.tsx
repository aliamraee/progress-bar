
import './App.css'
import ProgressBar from './components/ProgressBar'

function App() {

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className="w-96 flex ">
        <ProgressBar type='info' progress={80} title='Progress' description='this is test description' />


      </div>
    </div>
  )
}

export default App
