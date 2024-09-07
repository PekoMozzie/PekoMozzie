import AppForm from "./components/AppForm/AppForm";
import Modal from '@/app/components/Modal';
import HungryMeter from '@/app/components/HungryMeter';

 export default function Home ({searchParams}) {

  const modal = searchParams?.modal;

  console.log("MODAL", modal)

  return (
    <section className ="py-24">
      <div className="container">
        {/* <HungryMeter />  */}
        <img id='happyPeko' src='/happyPeko.png' alt='PekoMozzie is content & full'/>
        <img src='/placeSetting.png'alt='Cartoon Place Setting' className="top-9 h-96 w-[124] relative left-2/4"/>
        <div id='appForm' className='absolute'>
          <AppForm />
        </div>
        {modal && <Modal modal={modal}/>}
      </div>
    </section>
  )
}