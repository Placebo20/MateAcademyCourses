def can_buy_beer(age: int) -> str:
    if(age >= 18):
        return "You can buy beer"
    return "You can not buy beer"

def get_tips_rating(amount: int) -> str:
    if amount == 0:
        return "terrible"
    elif (amount > 0 and amount <= 10):
        return "poor"
    elif (amount > 10 and amount <= 20):
        return "good"
    elif (amount > 20 and amount <= 50):
        return "great" 
    else:
        return "excellent"

def calculate_taxes(income: int) -> float:
    if(income <= 1000):
        return income * 0.02
    elif(income > 1000 and income <= 10000):
        return income * 0.03
    else:
        return income * 0.05 

def get_largest_expression_result(a, b):
    addition = a + b
    subtraction = a - b
    division = a / b
    multiplication = a * b
    maxResult = 0
    if(maxResult < addition):
        maxResult = addition
    if(maxResult < subtraction):
        maxResult = subtraction
    if(maxResult < division):
        maxResult = division
    if(maxResult < multiplication):
        maxResult = multiplication
    return maxResult