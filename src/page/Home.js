import { Carousel,Breadcrumb } from 'rsuite';
import demonslayer from  "../images/demonslayer.jpeg";
import Z859804 from  "../images/Z859804.png";
import M1032883 from  "../images/M1032883.jpg";
import C1185026 from  "../images/C1185026.jpg";
import B1330510 from  "../images/B1330510.jpeg";
import S1342304 from  "../images/S1342304.jpeg";

function Home(){

    return (
        <>
          <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
         </Breadcrumb>

         <section className='grid md:grid-cols-2 md:gap-2'>

            <Carousel autoplay className="custom-slider mt-3 rounded">
                <img src={B1330510} height="250" />
                <img src={C1185026} height="250" />
                <img src={M1032883} height="250" />
                <img src={Z859804} height="250" />
                <img src={S1342304} height="250" />
            </Carousel>

            <div className='mt-3 md:flex md:flex-col justify-center '>
                   <section>
                     <h1 className='text-sm md:text-xl text-slate-900'>Animé populaire</h1>
                   </section>
                   <section className='grid md:grid-rows-2 md:grid-flow-col md:gap-3 mt-1 '>
                        <div className='bg-slate-50 h-44 w-36  shadow border-none rounded-md'>
                            <section className='text-center md:text-xs text-slate-700 pt-3'>L'attaque des titans</section>
                        </div>
                        <div className='bg-slate-50 h-44 w-36  shadow border-none rounded-md'>
                            <section className='text-center md:text-xs text-slate-700 pt-3'>My Hero Académia</section>
                        </div>
                        <div className='bg-slate-50 h-44 w-36  shadow border-none rounded-md'>
                            <section className='text-center md:text-xs text-slate-700 pt-3'>Jujustsu Kaisen</section>
                        </div>
                        <div className='bg-slate-50 h-44 w-36 shadow border-none rounded-md'>
                            <section className='text-center md:text-xs text-slate-700 pt-3'>Démon slayer: Kimitsu no Yaiba</section>
                        </div>
                        <div className='bg-slate-50 h-44 w-36  shadow border-none rounded-md'>
                            <section className='text-center md:text-xs text-slate-700 pt-3'>One Piece</section>
                        </div>
                        <div className='bg-slate-50 h-44 w-36  shadow border-none rounded-md'>
                            <section className='text-center md:text-xs text-slate-700 pt-3'>Haikyui</section>
                        </div>
                        <div className='bg-slate-50 h-44 w-36  shadow border-none rounded-md'>
                            <section className='text-center md:text-xs text-slate-700 pt-3'>Black Clover</section>
                        </div>
                        <div className='bg-slate-50 h-44 w-36  shadow border-none rounded-md'>
                            <section className='text-center md:text-xs text-slate-700 pt-3'>Tokyo Revengers</section>
                        </div>
                   </section>
            </div>



         </section>

         {/**Section 2 */}

         <section className='mt-3'>
             <img src={demonslayer} alt='Annonce_demon_slayer' />
         </section>
         

        </>
    )
}

export default Home;