import { NewTaksContainer } from '../newTaks';
import { TaksInfo } from '../TaksInfo';
import { TaksSearch } from '../TaksSearch';
import { PanelTask } from '../PanelTask';
import { TaksItem } from '../TaksItem';
import { TaksLoading } from '../TaksLoading';
import { TaksError } from '../TaksError';
import { TaksEmpty } from '../TaksEmpty';

function AppUI({
    countTaksCompleted,
    searchValue,
    setSearchValueSearch,
    taks,
    searchTaks,
    completeTaks,
    deleteTaks,
    loading,
    error
}) {
    return (
        <div className='containerApp'>
            <NewTaksContainer />
            <TaksInfo>
                <TaksSearch
                    totalTaks={taks.length}
                    taksComplete={countTaksCompleted}
                    searchValue={searchValue}
                    setSearchValueSearch={setSearchValueSearch}
                />
                <PanelTask>
                    {loading && (
                        <>
                            <TaksLoading />
                            <TaksLoading />
                            <TaksLoading />
                            <TaksLoading />
                            <TaksLoading />
                        </>
                    )
                    }

                    {error && <TaksError />}
                    {(!loading && taks.length === 0) && <TaksEmpty />}

                    {searchTaks.map(tak => (
                        <TaksItem
                            key={tak.taks_name}
                            name={tak.taks_name}
                            completed={tak.completed}
                            onComplete={() => completeTaks(tak.taks_name)}
                            onDelete={() => deleteTaks(tak.taks_name)} //  Encapsular función para enviar como prop ()=>deleteTaks(tak.taks_name)
                        />
                    ))}
                </PanelTask>
            </TaksInfo>
        </div>
    );
}

export { AppUI }