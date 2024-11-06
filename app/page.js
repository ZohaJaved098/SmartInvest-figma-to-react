import TopBar from './ui/top-bar'
import Main from './ui/main'
import Statistics from './ui/statistics';
import About from './ui/about';
import Choose from './ui/choose-us';
import Benefits from './ui/benefits';
import Income from './ui/income-chart';
export default function Home() {
  return (
    <>
      <TopBar/>
      <Main/>
      <Statistics/>
      <About/>
      <Choose/>
      <Benefits/>
      <Income/>
    </>
  );
}
