def register(in_name, in_password):
    n = len(in_name)
    if n < 1 or n > 20:
        print('Username is too short or too long')
        new_username = input('Please enter your username:')
        register(new_username, in_password)

    n = len(in_password)
    if n < 6 or n > 20:
        print('Password is too short or too long, please re-enter')
        new_password = input('Please enter your password:')
        register(in_name, new_password)
    return 'Successfully registered!'


name = input('Please enter your username:')
password = input('Please enter your password:')
user = register(name, password)
print(user)





