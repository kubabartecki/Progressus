import json
from enum import Enum, auto
from os import get_inheritable
from types import BuiltinMethodType

SIZE = 5

class GameStates(Enum):
    GAME_START = auto()
    EVENT_RANDOMIZE = auto()
    PLAYER_1_TURN = auto()
    PLAYER_2_TURN = auto()
    EVENT_OCCURS = auto()
    UPDATE_GAME_STATE = auto()


class Buildings(Enum):
    EMPTY = auto()
    CIRCUIT_FACTORY  = auto()
    PARK = auto()
    WINDMILL = auto()
    COAL_POWER_PLANT = auto()
    OIL_RIG = auto()
    SMELTERY = auto()
    SHOP = auto()
    DEMOMAN_OFFICE = auto()
    AIR_CONDITIONER = auto()
    LABORATORY = auto()
    SUPPLY_LINE_TRUCK = auto()
    SUPPLY_LINE_AIRPLANE = auto()


class Experts(Enum):
    ECOLOGIST = auto()
    METALURGIST = auto()
    SCIENCETIST = auto()
    ARCHITECT = auto()
    SOFTWARE_ENGINEER = auto()
    LOGISTICIAN = auto()
    LIAR = auto()
    SENSEI = auto()
    DRIVER = auto()
    DEMOMAN = auto()
    CHEMIST = auto()
    MINER = auto()


class GameEvents(Enum):
    NONE = auto()
    TSUNAMI = auto()
    LANDSLIDE = auto()
    VOLCANO_ERUPTION = auto()
    STRIKE = auto()
    CLEAR_SKY = auto()
    TORNADO = auto()
    EPIDEMIC = auto()
    TRAFFIC = auto()


class GameState():
    board = [SIZE * [SIZE * [Buildings.EMPTY]]] 
    state = GameStates.GAME_START
    current_turn = 0
    resources = {
        'circuits' : 0,
        'fuel' : 0,
        'steel' : 0,
        'power' : 0,
        'money' : 0,
        'pollution' : 0,
    }

    def __init__(self) -> None:
        pass

    def GetNeighbours(self, x, y, building):
        n = 0
        for i in range(3):
            pass
        return n

    
    def CalculateBuildingGain(self, x, y):
        building = self.board[x][y]

        circuit_gain = 0
        fuel_gain = 0
        steel_gain = 0
        money_gain = 0
        pollution_gain = 0
        power_gain = 0

        if building == Buildings.EMPTY:
            pass

        elif building == Buildings.CIRCUIT_FACTORY:
            circuit_gain = 1
            pollution_gain = 1
            circuit_gain += self.GetNeighbours(x,y,Buildings.SMELTERY)

        elif building == Buildings.PARK:
            pollution_gain = -3

        elif building == Buildings.WINDMILL:
            power_gain = 1 + self.GetNeighbours(x,y,Buildings.EMPTY)

        elif building == Buildings.COAL_POWER_PLANT:
            power_gain = 1 + self.GetNeighbours(x,y,Buildings.OIL_RIG)
            pollution_gain = 1

        elif building == Buildings.OIL_RIG:
            fuel_gain = 1
            pollution_gain = 1

        elif building == Buildings.SMELTERY:
            steel_gain = 1
            pollution_gain = 1

        elif building == Buildings.SHOP:
            money_gain = 1 + self.GetNeighbours(x,y,Buildings.CIRCUIT_FACTORY) + self.GetNeighbours(x,y,Buildings.SMELTERY)

        elif building == Buildings.DEMOMAN_OFFICE:
            pass

        elif building == Buildings.AIR_CONDITIONER:
            pollution_gain = - self.GetNeighbours(x,y,Buildings.CIRCUIT_FACTORY) \
                             - self.GetNeighbours(x,y,Buildings.COAL_POWER_PLANT) \
                             - self.GetNeighbours(x,y,Buildings.OIL_RIG) \
                             - self.GetNeighbours(x,y,Buildings.SMELTERY)

        elif building == Buildings.LABORATORY:
            pass
        elif building == Buildings.SUPPLY_LINE_TRUCK:
            pollution_gain = 1
        elif building == Buildings.SUPPLY_LINE_AIRPLANE:
            pollution_gain = 1

        self.resources['circuits'] += circuit_gain
        self.resources['fuel'] += fuel_gain
        self.resources['steel'] += steel_gain
        self.resources['money'] += money_gain
        self.resources['pollution'] += pollution_gain
        self.resources['power'] += power_gain

def Player1Turn():
    pass

def Player2Turn():
    pass

def EventRandomize():
    pass

def EventOccurs():
    pass

def UpdateGameState():
    pass

if __name__ == '__main__':
    GAME_STATE = GameState()


    while True:
        EventRandomize()

        Player1Turn()

        Player2Turn()

        EventOccurs()

        UpdateGameState()


