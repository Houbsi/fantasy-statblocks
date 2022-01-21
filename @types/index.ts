export type ability =
    | "strength"
    | "dexterity"
    | "constitution"
    | "intelligence"
    | "wisdom"
    | "charisma";
export type fage_ability =
    | "accuracy"
    | "communication"
    | "constitution"
    | "dexterity"
    | "fighting"
    | "intelligence"
    | "perception"
    | "strength"
    | "willpower";

export interface Monster {
    image?: string;
    name: string;
    size: string;
    type: string;
    subtype: string;
    alignment: string;
    ac: number;
    hp: number;
    hit_dice?: string;
    speed: string;
    stats: [number, number, number, number, number, number];
    fage_stats?: [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
    ];
    saves?: { [K in ability]?: number }[];
    skillsaves?: { [key: string]: number }[];
    damage_vulnerabilities: string;
    damage_resistances: string;
    damage_immunities: string;
    condition_immunities: string;
    senses: string;
    languages: string;
    cr: string | number;
    traits?: Trait[];
    spells?: Spell[];
    actions?: Trait[];
    legendary_actions?: Trait[];
    reactions?: Trait[];
    monster?: string;
    creature?: string;
    source?: string;

    /** Statblock Parameters */
    export?: boolean;
    dice?: boolean;
    render?: boolean;
    layout?: string;
    statblock?: string;
    columns?: number;
    columnWidth?: number;
    columnHeight?: number;
    forceColumns?: boolean;

    note?: string;
}

export interface StatblockParameters
    extends Omit<
        Monster,
        "traits" | "actions" | "legendary_actions" | "reactions"
    > {
    traits?: { desc: string; name: string }[] | [string, string][];
    actions?: Trait[] | [string, string][];
    legendary_actions?: Trait[] | [string, string][];
    reactions?: Trait[] | [string, string][];
}

export type Spell = string | { [key: string]: string };

export interface Trait {
    name: string;
    desc: string;
    [key: string]: any;
}
