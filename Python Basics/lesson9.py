def get_string_length(string: str) -> int:
    return len(string)

def remove_vowels(document: str) -> str:
    vowels = "aeiouy"
    for i in range(len(vowels)):
        document = document.lower().replace(vowels[i], "")
    return document

def make_abbr(words: str) -> str:
    if(len(words) == 0):
        return ""
    abbr = words[0]
    for i in range(len(words)):
        if words[i] == ' ':
            abbr += words[i+1]
    return  abbr.upper()

def decrypt_message(message: str) -> str:
    decrypted = ""
    for i in range(len(message)-1, -1, -1):
        decrypted += message[i]
    return decrypted

def is_werewolf(target: str) -> bool:
    target = target.replace(' ', '')
    target = target.replace('?', '')
    direct = target
    reverse = target[::-1]
    flag = True
    for i in range(len(target)):
        if(direct[i].lower() != reverse[i].lower()):
            flag = False
            break
    
    return flag

def happy_birthday() -> None:
    name = input("What's your name?")
    print(f"Happy birthday, {name}!")

def parity_checker() -> None:
    number = int(input("What number do you want to check?"))
    if(number % 2 == 0):
        print("Even")
    else:
        print("Odd")
