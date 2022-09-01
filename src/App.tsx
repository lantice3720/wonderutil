import React, {Fragment, useState} from 'react';
import './App.css';
import {NPC, NPCSearch} from "./NPC";
import NPCUtil from "./NPCUtil";

function App() {
    let [npc, setnpc] = useState<NPC>();

    const onSubmit = (search: string) => {
        setnpc(NPCSearch(search));
        console.log(npc)
    };

    return (
        <Fragment>
            <NPCUtil npc={npc} onSubmit={onSubmit}/>
        </Fragment>
    );
}

export default App;
