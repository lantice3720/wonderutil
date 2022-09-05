import React, {Fragment, useState} from 'react';
import './App.css';
import {NPC, NPCSearch} from "./NPC";
import NPCUtil from "./NPCUtil";
import wonderFlag from "./resources/wonderland-flag.png"
import {Link, Route, Routes} from "react-router-dom";
// import qs from 'qs';

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
                    {/*제목*/}
                    <Link to="/">
                        <img src={wonderFlag} alt=""/>Wonder Util<img src={wonderFlag} alt=""/>
                    </Link>
                </span>
                <nav>
                    {/*메뉴*/}
                    <Link to="/npc">NPC 찾기</Link>
                </nav>
            </div>
            <div id="main">
                <Routes>
                    {/*NPC 찾기 서비스*/}
                    <Route path="/" element={<div>Wonder Util 은 여러분의 원더랜드 생활을 더욱 편리하게 하기 위해 최선을 다합니다.</div>}/>
                    <Route path="/npc" element={<NPCUtil npc={npc} onSubmit={onSubmit}/>}/>
                </Routes>
            </div>
        </Fragment>
    );
}

export default App;
