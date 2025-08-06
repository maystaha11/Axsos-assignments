from user import User

mays= User("mays", "M.a@gmaail.com" , 5000)
Sahar= User( "Sahar", "s.k@gmail.com", 1000)
ahmad=User("ahmad", "A.s@gmail.com", 2000)

mays.make_deposit(4000)
mays.make_deposit(300)
mays.make_deposit(200)

mays.make_withdrawl(3000)

mays.display_user_balance()

Sahar.make_deposit(5000)
Sahar.make_deposit(330)

Sahar.make_withdrawl(1000)
Sahar.make_withdrawl(300)

Sahar.display_user_balance()

ahmad.make_deposit(290)
ahmad.make_withdrawl(100)
ahmad.make_withdrawl(1000)
ahmad.make_withdrawl(300)

ahmad.display_user_balance()

mays.transfer_money(ahmad, 400)

mays.display_user_balance()
ahmad.display_user_balance()