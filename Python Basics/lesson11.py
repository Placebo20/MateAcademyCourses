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
