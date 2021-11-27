import OurMission from './OurMission';
import TodayIdeas from './Home/TodayIdeas/TodayIdeas';
import LatestRecipes from './Home/LatestRecipes/LatestRecipes'

function Main(){
    return (
      <main id="main">
          <OurMission/>
          <TodayIdeas/>
          
          <LatestRecipes/>
      </main>
    )
}

export default Main;