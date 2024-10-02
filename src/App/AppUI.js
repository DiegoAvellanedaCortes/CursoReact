import { NewTaksContainer } from '../newTaks';
import { TaksInfo } from '../TaksInfo';
import { TaksSearch } from '../TaksSearch';
import { PanelTask } from '../PanelTask';
import { TaksItem } from '../TaksItem';
import { TaksLoading } from '../TaksLoading';
import { TaksError } from '../TaksError';
import { TaksEmpty } from '../TaksEmpty';
import { TaksContext } from '../TaksContext';
import { Modal } from '../Modal';
import React from 'react';

function AppUI() {

    const { 
        taks,
        searchTaks,
        completeTaks,
        deleteTaks,
        loading,
        error,
        openModal,
    } = React.useContext(TaksContext);
    
    return (
        <div className='containerApp'>
            <NewTaksContainer />
            <TaksInfo>
                <TaksSearch />

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
                    {(!loading && taks.length === 0 && error !== true) && <TaksEmpty />}

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
            {openModal && (
                <Modal>
                    Alguito de prueba
                </Modal>
            )}
        </div>
    );
}

export { AppUI }