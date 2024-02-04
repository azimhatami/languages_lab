import tkinter as tk
from tkinter import E, W, N, S

window = tk.Tk()

label_title = tk.Label(
    master=window,
    text='Enter your data: '
)

label_title.grid(row=0, column=0, columnspan=2)

label_input_name = tk.Label(
    master=window,
    text='First name: ',
)

entry_name = tk.Entry(
    master=window,
    width=12,
)

label_input_last_name = tk.Label(
    master=window,
    text='Last name: ',
    height=3,
)

entry_last_name = tk.Entry(
    master=window,
)

label_input_age = tk.Label(
    master=window,
    text='Age: ',
)

entry_age = tk.Entry(
    master=window,
    width=12,
)

label_print = tk.Label(
    master=window,
)

def button_clicked():
    label_print['text'] = 'Hello ' + entry_name.get() + ' ' +\
        entry_last_name.get() + ', I am ' + entry_age.get() + ' yers old.'

btn = tk.Button(
    master=window,
    text='Submit',
    command=button_clicked,
)

label_input_name.grid(row=1, column=0, sticky=(W, ))
entry_name.grid(row=1, column=1, sticky=(W, ))

label_input_last_name.grid(row=2, column=0, sticky=(W, ))
entry_last_name.grid(row=2, column=1, sticky=(N, S))

label_input_age.grid(row=3, column=0, sticky=(W, ))
entry_age.grid(row=3, column=1, sticky=(E, ))

btn.grid(row=4, column=1, sticky=(E, W))

label_print.grid(row=5, column=0, columnspan=2)

# label_input_name.pack(side=tk.LEFT)
# entry_name.pack()

window.mainloop()
