import JobHistory from '../components/JobHistory'

 export default function HistoryPage () {

  return (
    <section classname ="py-24">
      <div classname="container">
        <JobHistory />
        <img id='happyPekoLongEarsLookingUp' src='/happyPekoLongEarsLookingUp.png' alt='PekoMozzie with long ears is content and full but still staring at the past feasts'/>
        <img id='peckishPeko3EyesLookingUp' src='/peckishPeko3EyesLookingUp.png' alt='3 Eyed PekoMozzie is peckish and staring at the past feasts'/>
        <img id='hungryPeko1EyeLookingUp' src='/hungryPeko1EyeLookingUp.png' alt='1 Eyed PekoMozzie is hungry and staring at the past feasts'/>
        <img id='hangryDinoLookingUp' src='/hangryDinoPekoLookingUp.png' alt='Dino PekoMozzie is hangry and staring at the past feasts'/>
      </div>
    </section>
  )
}