def schedule(in_activity, in_people, available_activities):
    if in_activity not in available_activities:
        print('Activity is not available, please re-enter')
        new_activity = input('Please select your interested activity:')
        schedule(new_activity, in_people, available_activities)
        

    n = int(in_people)
    if n < 0 or n > 8:
        print('Too less or too many partners, please re-enter')
        new_num_people = input('How many people do you want to be with:')
        schedule(in_activity, new_num_people, available_activities)

    return 'Successfully scheduled!'

available_activities = {
    "Hiking",
    "Camping",
    "Cycling",
    "Running",
    "Rock climbing",
    "Kayaking",
    "Fishing",
    "Nature photography",
    "Horseback riding",
    "Swimming",
    "Skiing",
    "Snowboarding",
    "Rafting",
    "Surfing"
    
}

activity_list_string = '\n'.join([f"{index + 1}. {activity}" for index, activity in enumerate(available_activities)])

chosen_activity = input(f'Please select your interested activity from the following list:\n{activity_list_string}\n')
num_people = input('How many people do you want to be with:')
plan = schedule(chosen_activity, num_people, available_activities)
print(plan)