from enum import Enum, auto

SIZE = 5

class GameStates(Enum):
    GAME_START = auto()
    EVENT_RANDOMIZE = auto()
    PLAYER_1_TURN = auto()
    PLAYER_2_TURN = auto()
    EVENT_OCCURS = auto()
    UPDATE_GAME_STATE = auto()
    GAME_OVER = auto()


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


def ReadCard() -> Buildings:
    return Buildings.WINDMILL

def ReadPositionX():
    return int(input("Enter X coord"))

def ReadPositionY():
    return int(input("Enter Y coord"))


class Game():
    board = SIZE * [SIZE * [Buildings.EMPTY]]
    state = GameStates.GAME_START
    current_turn = 0
    resources = {
        'money' : 0,
        'power' : 0,
        'fuel' : 0,
        'steel' : 0,
        'circuits' : 0,
        'pollution' : 0,
    }

    def __init__(self) -> None:
        pass

    def GetNeighbours(self, x, y, building):
        n = 0
        for i in range(-1,1):
            for j in range(-1,1):
                if i is not x and j is not y:
                    if self.board[x+i][x+j] == building:
                        n += 1
        for i in range(0,SIZE-1):
            if self.board[i][y] == Buildings.SUPPLY_LINE_TRUCK and building == Buildings.SUPPLY_LINE_TRUCK:
                n += 1
        for i in range(0,SIZE-1):
            if self.board[x][i] == Buildings.SUPPLY_LINE_AIRPLANE and building == Buildings.SUPPLY_LINE_AIRPLANE:
                n += 1
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
            circuit_gain += self.GetNeighbours(x,y,Buildings.SMELTERY) + self.GetNeighbours(x,y,Buildings.SUPPLY_LINE_TRUCK)

        elif building == Buildings.PARK:
            pollution_gain = -3

        elif building == Buildings.WINDMILL:
            power_gain = 1 + self.GetNeighbours(x,y,Buildings.EMPTY)

        elif building == Buildings.COAL_POWER_PLANT:
            power_gain = 1 + self.GetNeighbours(x,y,Buildings.OIL_RIG) + self.GetNeighbours(x,y,Buildings.SUPPLY_LINE_TRUCK)
            pollution_gain = 1

        elif building == Buildings.OIL_RIG:
            fuel_gain = 1
            pollution_gain = 1

        elif building == Buildings.SMELTERY:
            steel_gain = 1
            pollution_gain = 1

        elif building == Buildings.SHOP:
            money_gain = 1 + self.GetNeighbours(x,y,Buildings.CIRCUIT_FACTORY) + self.GetNeighbours(x,y,Buildings.SMELTERY)+ self.GetNeighbours(x,y,Buildings.SUPPLY_LINE_TRUCK)

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

        return money_gain, power_gain, fuel_gain, circuit_gain, steel_gain, pollution_gain


    def Player1Turn(self):
        print("Player 1")
        buildingPlayed = ReadCard()
        buildingX = ReadPositionX()
        buildingY = ReadPositionY()
        self.board[buildingX][buildingY] = buildingPlayed


    def Player2Turn(self):
        print("Player 2")
        buildingPlayed = ReadCard()
        buildingX = ReadPositionX()
        buildingY = ReadPositionY()
        self.board[buildingX][buildingY] = buildingPlayed


    def UpdateGameState(self):
        total_circuit_gain = 0
        total_fuel_gain = 0
        total_steel_gain = 0
        total_money_gain = 0
        total_pollution_gain = 0
        total_power_gain = 0

        for x, row in enumerate(self.board):
            for y, _ in enumerate(row): 
                money_gain, power_gain, fuel_gain, circuit_gain, steel_gain, pollution_gain = self.CalculateBuildingGain(x,y)
                total_circuit_gain += circuit_gain
                total_fuel_gain += fuel_gain
                total_steel_gain += steel_gain
                total_money_gain = money_gain
                total_pollution_gain += pollution_gain
                total_power_gain +=  power_gain
                    
        self.resources['money'] += total_money_gain
        self.resources['power'] += total_power_gain
        self.resources['fuel'] += total_fuel_gain
        self.resources['circuits'] += total_circuit_gain
        self.resources['steel'] += total_steel_gain
        self.resources['pollution'] += total_pollution_gain

    def DrawGame(self):
        for key, value in self.resources.items():
            print(key, ": ", value)


def EventRandomize():
    pass


def EventOccurs():
    pass


if __name__ == '__main__':
    game = Game()
    game.board[0][0] = Buildings.COAL_POWER_PLANT

    while True:
        EventRandomize()

        for i in range(0,2):
            game.Player1Turn()
            game.Player2Turn()

        EventOccurs()

        game.UpdateGameState()
        game.DrawGame()


