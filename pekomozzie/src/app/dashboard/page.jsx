import AppForm from "./components/AppForm/AppForm";
import Modal from '@/app/components/Modal';

 export default function Home ({searchParams}) {

  const modal = searchParams?.modal;

  console.log("MODAL", modal)

  return (
    <section className ="py-24">
      <div className="container">
        <AppForm />
        {modal && <Modal modal={modal}/>}
      </div>
    </section>
  )
}