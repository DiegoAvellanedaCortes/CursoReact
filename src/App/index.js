import './App.css';
import { NewTaksContainer } from '../newTaks';
import { TaksInfo } from '../TaksInfo';
import { TaksSearch } from '../TaksSearch';
import { PanelTask } from '../PanelTask';
import { TaksItem } from '../TaksItem';
import { TaksContext } from '../TaksContext';

function App() {
  const taks=[
    {
      taks_name:"Tender Cama",
      completed:true
    },
    {
      taks_name:"Leer",
      completed:true
    },
    {
      taks_name:"Escribir",
      completed:true
    },
    {
      taks_name:"Actualizar",
      completed:false
    },

]

  return (
    <div className='containerApp'>
      <NewTaksContainer/>
      <TaksInfo>
        <TaksSearch totalTaks={taks.length}/>
        <PanelTask>
          {taks.map(tak=>(
          <TaksItem 
            key={tak.taks_name} 
            name={tak.taks_name}
            completed={tak.completed}
          /> 
          ))}
        </PanelTask>
      </TaksInfo>
    </div>
  );
}

export default App;
