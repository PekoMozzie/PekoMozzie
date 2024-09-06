import HungryMeter from "../components/HungryMeter"



export default function Home () {
  return (
    <section className ="py-24">
      <div className="container">
        <h1 className="text.3xl.font-b">PekoMozzie!</h1>
        <HungryMeter></HungryMeter>
      </div>
    </section>
  )
}