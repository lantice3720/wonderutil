import React from "react";
import NPCList from './resources/NPCList.json';

export type NPC = {
    name: string;
    description?: string | undefined;
    x: number
    y: number;
    z: number;
};

export function NPCSearch(toSearch: string): NPC | undefined {
    return NPCList.filter(npc => {
        return npc.name == toSearch;
    })[0];
}