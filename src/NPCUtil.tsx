import React, {useState} from "react";
import NPCList from "./resources/NPCList.json"
import {NPC} from "./NPC";

type NPCUtilProps = {
    npc: NPC | undefined;
    onSubmit: (search: string) => void;
}

function NPCUtil({npc, onSubmit}: NPCUtilProps) {
    const [search, setSearch] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(search);
        setSearch('');
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    NPCList.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    return (
        <div id='NPCUtil'>
            <form onSubmit={handleSubmit}>
                <datalist id='NPCData'>
                    {NPCList.map(npc => (
                        <option key={npc.name}>{npc.name}</option>
                    ))}
                </datalist>
                <input list='NPCData' autoCorrect='false' onChange={onChange} value={search}/>
                <input type='submit' value='찾기'/>
            </form>
            {npc===undefined ?
                <div>
                    NPC 이름을 위 검색창에서 찾아주세요.
                </div> :
                <div>
                    {npc.name} 은 ({npc.x}, {npc.y}, {npc.z}) 에 있습니다.
                    {npc.description && <div>{npc.description}</div> }
                </div>
            }
        </div>
    );
}

export default NPCUtil;