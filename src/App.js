import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Signin from './componenets/Signup/Signin/Signin.js'
import Signup from './componenets/Signup/Signup.js';
import Details from './componenets/Signup/Details.js';
import Errror from './componenets/Errrror.js';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
  
    <div className='flex items-center justify-center max-w-screen-xl mx-auto flex-col  '>  
       
       <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Errror />} />
    </Routes>
    

    </div>
  
  );
}

export default App;