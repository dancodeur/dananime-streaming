import { useState } from 'react';
function MobileHeader(){
    const [ iconBurger,setIconBurger]=useState(false);
    const MenuBurger=()=>{ 
      setIconBurger(!iconBurger)
    }
    
    const NavLink=(
      <div className='bg-slate-900  text-center p-[0.3rem] mt-[0.3rem]'>
          <ul>
             <li className='text-slate-100'>Home</li>
             <li className='text-slate-100'>Home</li>
             <li className='text-slate-100'>Home</li>
          </ul>
      </div>
    )
    
    const BurgerOpen=(
      <svg onClick={MenuBurger} className={iconBurger===false?"block":"hidden"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    
    );
    const BurgerClose=(
         <svg onClick={MenuBurger} className={iconBurger===true?"block":"hidden"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
         </svg>);
    return (
        <>
        <header className='md:hidden lg:hidden'>
                  <nav>
                        <div className='flex justify-between'>
                           <h1 className='text-2xl font-bold text-slate-900'>Dananime.</h1>
                           <section>
                              {iconBurger==false?BurgerOpen:BurgerClose }
                           </section>

                        </div>

                       {iconBurger==false?'':NavLink}
                  </nav>
                </header>
        
        </>
    )
}

export default MobileHeader;