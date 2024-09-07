import JobHistory from '../components/JobHistory'

 export default function HistoryPage () {

  return (
    <section classname ="py-24">
      <div classname="container">
        <JobHistory />
        <img id='happyPekoLookingUp' src='/happyPekoLookingUp.png' alt='Content PekoMozzie is looking up at past feasts'/>
      </div>
    </section>
  )
}