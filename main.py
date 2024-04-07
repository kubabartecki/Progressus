import json
from enum import Enum
from os import get_inheritable
from types import BuiltinMethodType

SIZE = 12

""" ENUM BUDYNKÓW """

class GameStates(Enum):
    PLAYER_1_TURN = 2

class Building(Enum):
    EMPTY = 0
    CIRCUIT_FACTORY  = 1
    PARK = 2
    WINDMILL = 3
    COAL_POWER_PLANT = 4
    OIL_RIG = 5
    SMELTERY = 6
    SHOP = 7
    DEMOMAN_OFFICE = 8
    AIR_CONDITIONER = 9
    LABORATORY = 10
    SUPPLY_LINE_TRUCK = 11
    SUPPLY_LINE_AIRPLANE = 12


class Experts(Enum):
    ECOLOGIST = 0
    METALURGIST = 1
    SCIENCETIST = 2
    ARCHITECT = 3
    SOFTWARE_ENGINEER = 4
    LOGISTICIAN = 5
    LIAR = 6
    SENSEI = 7
    DRIVER = 8
    DEMOMAN = 9
    CHEMIST = 10
    MINER = 11

class Events(Enum):
    NONE = 0
    TSUNAMI = 1
    LANDSLIDE = 2
    VOLCANO_ERUPTION = 3
    STRIKE = 4
    CLEAR_SKY = 5
    TORNADO = 6
    EPIDEMIC = 7
    TRAFFIC = 8

    RABBIT_HOLE = 69
    

def ReadCard():
    pass

def ReadPositionX():
    pass

def ReadPositionY():
    pass


class GameState():
    board = [SIZE * [SIZE * [None]]] 
    next_event = None
    current_turn = 0
    player_turn = 0
    state = 0
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
        return n

    
    def CalculateBuildingGain(self, x, y):
        building = self.board[x][y]

        circuit_gain = 0
        fuel_gain = 0
        steel_gain = 0
        money_gain = 0
        pollution_gain = 0
        power_gain = 0

        if building == Building.EMPTY:
            pass

        elif building == Building.CIRCUIT_FACTORY:
            circuit_gain = 1
            pollution_gain = 1
            circuit_gain += self.GetNeighbours(x,y,Building.SMELTERY)

        elif building == Building.PARK:
            pollution_gain = -3

        elif building == Building.WINDMILL:
            power_gain = 1 + self.GetNeighbours(x,y,Building.EMPTY)

        elif building == Building.COAL_POWER_PLANT:
            power_gain = 1 + self.GetNeighbours(x,y,Building.OIL_RIG)
            pollution_gain = 1

        elif building == Building.OIL_RIG:
            fuel_gain = 1
            pollution_gain = 1

        elif building == Building.SMELTERY:
            steel_gain = 1
            pollution_gain = 1

        elif building == Building.SHOP:
            money_gain = 1 + self.GetNeighbours(x,y,Building.CIRCUIT_FACTORY) + self.GetNeighbours(x,y,Building.SMELTERY)

        elif building == Building.DEMOMAN_OFFICE:
            pass

        elif building == Building.AIR_CONDITIONER:
            pollution_gain = - self.GetNeighbours(x,y,Building.CIRCUIT_FACTORY) \
                             - self.GetNeighbours(x,y,Building.COAL_POWER_PLANT) \
                             - self.GetNeighbours(x,y,Building.OIL_RIG) \
                             - self.GetNeighbours(x,y,Building.SMELTERY)

        elif building == Building.LABORATORY:
            pass
        elif building == Building.SUPPLY_LINE_TRUCK:
            pollution_gain = 1
        elif building == Building.SUPPLY_LINE_AIRPLANE:
            pollution_gain = 1

        self.resources['circuits'] += circuit_gain
        self.resources['fuel'] += fuel_gain
        self.resources['steel'] += steel_gain
        self.resources['money'] += money_gain
        self.resources['pollution'] += pollution_gain
        self.resources['power'] += power_gain

    def Player1Turn():
        buildingPlayed = ReadCard()
        buildingX = ReadPositionX()
        buildingY = ReadPositionY()
        self.board[X][Y] = buildingPlayed()


    def Player2Turn():
        buildingPlayed = ReadCard()
        buildingX = ReadPositionX()
        buildingY = ReadPositionY()
        self.board[X][Y] = buildingPlayed()

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


