from tkinter import *

root = Tk()


lable1 = Label(root, text="Hello World")
lable2 = Label(root, text="Hello World")

lable1.grid(row=0, column=0)
lable2.grid(row=0, column=1)

root.mainloop()