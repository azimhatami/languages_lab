import random
import os


class RPSGame:
    def __init__(self, name):
        self.name = name
        self.choices = ['r', 'p', 's']
        self.choice_meaning = {
            'r': 'Rock',
            'p': 'Paper',
            's': 'Scissors',
        }

    def clear_screen(self):
        os.system('clear')

    def welcome_message(self):
        print(f'Welcome {self.name} to Rock Paper Scissors game!')
        print('\n', f'Let\'s Gooo >>> {self.name}')
        print('\n', '-' * 15, '\n')

    def get_user_choice(self):
        user_choice = input('Select from Rock, Paper, Scissors: [r/p/s] ')

        while user_choice not in self.choices:
            print('Invalid input!')
            user_choice = input('Select from Rock, Paper, Scissors: [r/p/s] ')

        return user_choice

    def get_ai_choice(self):
        ai_choice = random.choice(self.choices)

        return ai_choice

    def find_winner(self, user_choice, ai_choice):
        if user_choice == ai_choice:
            return 'Tie'
        # r > s - p > r - s > p
        elif (user_choice == 'r' and ai_choice == 's') or \
             (user_choice == 'p' and ai_choice == 'r') or \
             (user_choice == 's' and ai_choice == 'p'):
            return f'{self.name} Winnnn!!!'

        else:
            return 'Ai WOnnn!!!'

    def play(self):
        self.clear_screen()
        self.welcome_message()

        while True:
            user_choice = self.get_user_choice()
            ai_choice = self.get_ai_choice()
            print(f'{self.name} choice is: {self.choice_meaning[user_choice]}')
            print(f'Ai choice is : {self.choice_meaning[ai_choice]}')
            result = self.find_winner(user_choice, ai_choice)
            print(result)


if __name__ == '__main__':
    game = RPSGame('Azim')
    print(game.play())
