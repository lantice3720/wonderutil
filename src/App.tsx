import React, {Fragment, useState} from 'react';
import './App.css';
import {NPC, NPCSearch} from "./NPC";
import NPCUtil from "./NPCUtil";
import wonderFlag from "./resources/wonderland-flag.png"

function App() {
    let [npc, setnpc] = useState<NPC>();

    const onSubmit = (search: string) => {
        setnpc(NPCSearch(search));
    };

    return (
        <Fragment>
            <div>
                {/*상단 툴바*/}
                <span id='title'>WonderUtil<img src={wonderFlag}/></span>
                <nav>
                    {/*추후 기능추가시 이곳에 링크*/}
                </nav>
            </div>
            <hr/>
            {/*NPC 찾기 서비스*/}
            <NPCUtil npc={npc} onSubmit={onSubmit}/>
        </Fragment>
    );
}

export default App;
