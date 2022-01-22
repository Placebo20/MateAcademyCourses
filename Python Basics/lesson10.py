def make_stickers(details_count: int, robot_part: str) -> list:
    strArray = []
    for i in range(details_count):
        strArray.append(f"{robot_part} detail #{i+1}")
    return strArray

def double_power(current_powers: list) -> list:
    doubleArray = []
    for i in range(len(current_powers)):
        doubleArray.append(current_powers[i]*2)
    return doubleArray

def is_sorted(box_numbers: list) -> bool:
    if len(box_numbers) <= 1:
        return True
    
    for i in range(len(box_numbers)):
        if len(box_numbers) == i+1:
            return True
        if box_numbers[i] > box_numbers[i+1]:
            return False

def get_location(coordinates: list, commands: list) -> list:
    x = coordinates[0]
    y = coordinates[1]
    for i in range(len(commands)):
        if(commands[i] == 'left'):
            x -= 1
        elif(commands[i] == 'right'):
            x += 1
        elif(commands[i] == 'forward'):
            y += 1
        else:
            y -= 1
    coordinates[0] = x
    coordinates[1] = y
    return coordinates

import math
def get_plan(current_production: int, month: int, percent: int):
    array = []
    for i in range(month):
        current_production = math.floor(current_production *(100 + percent)/100)
        array.append(current_production)
    return array

from math import floor
def get_speed_statistic(test_results: list) -> list:
    statistics = []
    if len(test_results) == 0:
        statistics.append(0)
        statistics.append(0)
        statistics.append(0)
        return statistics
    min = test_results[0]
    max = test_results[0]
    quantity = test_results[0]
    for i in range(1, len(test_results)):
        if test_results[i] > max:
            max = test_results[i]
        if test_results[i] < min:
            min = test_results[i]
        quantity += test_results[i]
    statistics.append(min)
    statistics.append(max)
    statistics.append(floor(quantity/len(test_results)))
    return statistics
