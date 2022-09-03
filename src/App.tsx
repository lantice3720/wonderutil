import React, {Fragment, useState} from 'react';
import './App.css';
import {NPC, NPCSearch} from "./NPC";
import NPCUtil from "./NPCUtil";
import wonderFlag from "./resources/wonderland-flag.png"
// import {Link, Route} from "react-router-dom";

function App() {
    let [npc, setNpc] = useState<NPC>();

    const onSubmit = (search: string) => {
        setNpc(NPCSearch(search));
    };

    return (
        <Fragment>
            <div id="toolbar">
                {/*상단 툴바*/}
                <span id='title'>
                    <img src={wonderFlag} alt=""/>
                    Wonder Util
                    <img src={wonderFlag} alt=""/>
                </span>
                <nav>
                    {/*추후 기능추가시 이곳에 링크*/}
                    {/*<Route path="/"/>*/}
                </nav>
            </div>
            <div id="main">
                {/*NPC 찾기 서비스*/}
                <NPCUtil npc={npc} onSubmit={onSubmit}/>
                {/*<div id="blank"></div>*/}
            </div>
        </Fragment>
    );
}

export default App;
