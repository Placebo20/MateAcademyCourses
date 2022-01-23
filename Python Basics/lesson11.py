def split_string(string: str) -> list:
    resultStr = []
    lastChar = ''
    if len(string) % 2 != 0:
        lastChar = string[len(string) - 1]
        string = string[0:len(string)-1]

    for i in range(0, len(string), 2):
        resultStr.append(string[i:i+2])
    if lastChar != '':
        resultStr.append(lastChar + '_')
    return resultStr

def scrolling_text(string: str) -> list:
    result = []
    if(len(string) != 0):
        result.append(string.upper())
        for i in range(len(string)- 1):
            string += string[0]
            string = string[1:len(string)]
            result.append(string.upper())
    return result

def check_number(number: int) -> list:
    results = []
    results.append(True if number > 0 else False)
    results.append(True if number % 2 == 0 else False)
    results.append(True if number % 10 == 0 else False)
    return results

def get_lists_sum(ls1: list, ls2: list) -> int:
    result = 0
    for i in range(len(ls1)):
        result += ls1[i]
    for i in range(len(ls2)):
        result += ls2[i]
    return result

def combine_lists(ls1: list, ls2: list) -> list:
    result_list = []
    for i in range(len(ls1)):
        result_list.append(ls1[i] + ls2[i])
    return result_list

def is_jumping(number: int) -> str:
    numArray = []
    while(number > 0):
        numArray.append(number % 10)
        number = number // 10
    numArray = numArray[::-1]
    flag = False
    if(len(numArray) > 1):
        for i in range(1, len(numArray)):
            if abs(numArray[i] - numArray[i-1]) == 1:
                flag = True
            else:
                flag = False
                break
    else:
        flag = True
    if flag:
        return "JUMPING"
    else:
        return "NOT JUMPING"

def is_special_number(number: int) -> str:
    flag = True
    strNum = str(number)
    for i in range(len(strNum)):
        if int(strNum[i]) > 5:
            flag = False
            break
    if flag:
        return "Special!!"
    else:
        return "NOT!!"

def is_tidy(number: int) -> bool:
    numStr = str(number)
    for i in range(1, len(numStr)):
        if numStr[i-1] > numStr[i]:
            return False
    return True