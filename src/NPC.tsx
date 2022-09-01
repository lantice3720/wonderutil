import React from "react";
import NPCList from './resources/NPCList.json';

export type NPC = {
    name: string | undefined;
    description?: string | undefined;
    x: number | undefined;
    y: number | undefined;
    z: number | undefined;
};

export function NPCSearch(toSearch: string | undefined): NPC {
    const toReturn = NPCList.filter(npc => {
        return npc.name == toSearch;
    })[0];

    return toReturn;
}