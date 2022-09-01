import React, {Fragment, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";
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
