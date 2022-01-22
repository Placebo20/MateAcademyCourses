def print_numbers(n: int) -> None:
    for i in range(0, n):
        print(i)

def get_drinks(number_of_guests: int) -> int:
    countOfDrinks = 0
    for i in range(1, number_of_guests + 1):
        countOfDrinks += i
        print(countOfDrinks)
    return countOfDrinks

def get_drinks_with_step(number_of_guests: int, step: int) -> int:
    countOfDrinks = 0
    for i in range(1, number_of_guests + 1, step):
        countOfDrinks += i
    return countOfDrinks

def calculate_profit(amount: int, percent: float, period: int) -> float:
    fix = amount
    for i in range(period):
        amount = amount / 100 * percent + amount
    return (amount-fix) * 100 / 100
