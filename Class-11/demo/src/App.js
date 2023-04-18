
import FirstCom from './components/FirstCom';
import Welcome from './components/Welcome.js'
import MemesList from './components/MemesList';
const data = require('../src/data.json');
function App() {

  return (
    <>
      {/* <FirstCom />
      <FirstCom />
      <FirstCom />
      <FirstCom /> */}
      {/* <img src="""/> */}
      {/* <Welcome name="shihab" favFood="mansaf" />
      <Welcome name="laith" favFood="shawrmeh" />
      <Welcome name="natali" favFood="burger" /> */}
      <MemesList arrayData={data} />
    </>
  );
}

export default App;
