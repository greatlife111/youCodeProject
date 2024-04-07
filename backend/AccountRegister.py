import re


def register(in_name, in_password):
    n = len(in_name)
    if n < 1 or n > 20:
        print('Username is too short or too long')
        new_username = input('Please enter your username:')
        register(new_username, in_password)

    regExp = r'^(\d|\s)'
    isValidFormat = re.search(regExp, in_name)
    if isValidFormat:
        print('False: Username cannot start with a number or space')
        new_username = input('Please enter your username:')
        register(new_username, in_password)

    keywords = ['fuck', 'bitch']
    for key in keywords:
        pos = in_name.find(key)
        if pos != -1:
            print('False: Username cannot contain: ' + key )
            new_username = input('Please enter your username:')
            register(new_username, in_password)
    
    n = len(in_password)
    if n < 6 or n > 20:
        print('Password is too short or too long, please re-enter')
        new_password = input('Please enter your password:')
        register(in_name, new_password)




name = input('Please enter your username:')
password = input('Please enter your password:')
email = input("Enter an email address: ")
user = register(name, password, email)
print(user)





