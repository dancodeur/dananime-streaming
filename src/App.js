import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './page/Home';
import Streaming from './page/Streaming';
import { useState } from 'react';
import MobileHeader from './component/MobileHeader';
import SideBar from './component/SideBar';

function App() {

const [darkMode,setDarkMode]=useState(false);

const IsDark=()=>{
  setDarkMode(!darkMode);
}

const Light=(
  <svg onClick={IsDark} className={darkMode===false?"block":"hidden"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 cursor-pointer hover:animate-pulse">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
);

const Dark=(
  <svg onClick={IsDark} className={darkMode===true?"block":"hidden"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 cursor-pointer hover:animate-pulse">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
);

  return (
    <div className="App">

      <div className=''>
           
        
            <div className='grid mb-3 md:grid-cols-12'>
              {/**Header ---- Mobile */}
                <MobileHeader/>
                <SideBar/>

                {/***Pages... */}
                <section className=' bg-slate-50 md:col-span-10 p-2 md:p-5'>
                     {/**Header content page */}
                    <section className='hidden md:block  sticky top-2'>
                        <div className='flex w-full justify-end space-x-4 '>

                        <svg onClick={()=>alert("Search no avilable")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                         </svg>

                         {/**dark-and light mode */}

                          <div className=''> 
                              {darkMode==false?Dark:Light}
                          </div>

                        </div>
                    </section>

                    <BrowserRouter>
                        <Routes>
                          <Route path='/' element={<Home/>} />
                          <Route path='Streaming/' element={<Streaming/>} />
                        </Routes>
                    </BrowserRouter>

                </section>
            </div>
      </div>

        
    </div>
  );
}

export default App;
