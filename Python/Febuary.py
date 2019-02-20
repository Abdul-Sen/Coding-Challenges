'''
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side.
DNA strand is never empty or there is no DNA at all (again, except for Haskell).
'''
def DNA_strand(dna): #func declare
    my_str = ""
    for c in dna:
        if c == "A":
            my_str += "T"
        elif c == "T":
            my_str += "A"
        elif c == "G":
            my_str += "C"
        elif c == "C":
            my_str += "G"
    return my_str
'''
    Q- Write a function that produces following output:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
'''
def accum(givenString):
    result = ""
    index = 0
    while index < len(givenString): #
        result += givenString[index].upper()
        curr = 0
        while curr < index:
            result += givenString[index].lower()
            curr = curr + 1
        if index != len(givenString) -1:
            result += "-"
        index = index + 1
    return result
'''
    # ALTERNATIVE DONE BY SOMEONE ELSE

def accum(givenString):
    result = ""
    for index in range(len(givenString)): #
        result += givenString[index].upper()
        for curr in range(index):
            result += givenString[index].lower()
        if index != len(givenString) -1:
            result += "-"
    return result

def accum(givenString):
    result = ""
    for idx, ele in enumerate(givenString):
        result += ele.upper()
        for _ in range(idx):
            result += ele.lower()
        if idx < len(givenString) - 1:
            result += "-"
    return result

'''

'''
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
'''
def make_negative( number ):
    if number == 0:
        return number
    elif number < 0:
        return number
    else:
        return number * (-1)    

'''
Remove all spaces from a string
'''
def no_space(x):
    result = ""
    for currentChar in x:
        if currentChar != " ":
            result += currentChar
    return result