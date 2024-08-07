import './App.css';
import { NewTaksContainer } from '../newTaks';
import { TaksInfo } from '../TaksInfo';
import { TaksSearch } from '../TaksSearch';
import { PanelTask } from '../PanelTask';
import { TaksItem } from '../TaksItem';

function App() {
  return (
    <div className='containerApp'>
      <NewTaksContainer/>
      <TaksInfo>
        <TaksSearch/>
        <PanelTask>
          <TaksItem/>
        </PanelTask>
      </TaksInfo>
    </div>
  );
}

export default App;
