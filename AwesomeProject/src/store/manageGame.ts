interface Resources {
    money: number;
    power: number;
    fuel: number;
    steel: number;
    circuits: number;
    pollution: number;
}

export interface GameState {
    resources: Resources;
    board: number[];
}
