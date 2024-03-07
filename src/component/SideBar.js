import { useState } from 'react';

 
function SideBar(){
    
    // const [categorie,setCategorie] = useState(false);
    // const IsCategorieFilter=()=>{
    //     setCategorie(!categorie);
    // }

    return (
        <>
          <nav className="p-3 md:col-span-2 md:h-screen">

            <div className="hidden md:block fixed top-0">
                <section className="mb-3 border-b-2 p-2">
                    <h1 className='text-2xl font-bold text-slate-900'>Dananime.</h1>
                </section>

                <section className="">
                        <ul>
                            <li className="flex items-center space-x-8 group hover:cursor-pointer rounded-md hover:bg-slate-300 p-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 transition ease-in-out duration-100 group-hover:stroke-blue-400 ">
                                     <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                 </svg>
                                 <p className="group-hover:text-blue-400">Accueil</p>
                            </li>

                            <li className="flex items-center space-x-8 group hover:cursor-pointer  rounded-md hover:bg-slate-300 p-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 transition ease-in-out duration-100 group-hover:stroke-blue-400 ">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                                </svg>
                                 <p className="group-hover:text-blue-400">Catalogue</p>

                            </li>

                            <li className="flex items-center space-x-8 group hover:cursor-pointer  rounded-md hover:bg-slate-300 p-2  mb-2">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 transition ease-in-out duration-100 group-hover:stroke-blue-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                              </svg>
                                 <p className="group-hover:text-blue-400">Catégories</p>
                            </li>

                        </ul>
                </section>

                <section className='mt-[400px]'>
                        <ul>
                            <li className="flex items-center space-x-8 group hover:cursor-pointer  rounded-md hover:bg-slate-800  p-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-5 h-5 transition ease-in-out duration-100 group-hover:stroke-slate-100">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                <p className="group-hover:text-slate-400">Se connecter</p>
                            </li>
                       </ul>
                </section>
            </div>
              
          </nav>
        </>
    )
}

export default SideBar;