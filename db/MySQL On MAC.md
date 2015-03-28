Here are the three basic commands to start, stop, and restart MySQL in OS X, including Yosemite. Be sure to enter the command onto a single line, sudo obviously requires an administrator password to be entered.

Start MySQL

sudo /usr/local/mysql/support-files/mysql.server start

Stop MySQL

sudo /usr/local/mysql/support-files/mysql.server stop

Restart MySQL

sudo /usr/local/mysql/support-files/mysql.server restart

Resetting Your Forgotten MySQL Password

Stopping MySQL
First stop the service.  You can either do this using the preference pane if you have that installed if you don’t, your likely well aware of doing it from the terminal. Though this should work for most users.

sudo /usr/local/mysql/support-files/mysql.server stop

You can restart using:

sudo /usr/local/mysql/support-files/mysql.server start

Skipping Access Tables
Alright – so open up a Terminal window and execute:

/usr/local/mysql/bin/safe_mysqld --skip-grant-tables

For MySQL 5 Installations do:
/usr/local/mysql/bin/mysqld_safe --skip-grant-tables

Running the Reset
Ok – so you have safe_mysqld running in one Terminal window, now open up another one and execute “/usr/local/mysql/bin/mysql mysql” (no quotes).  If you aren’t familiar you are opening up the MySQL console and opening the mysql table.

Write the reset query into the console as follows:

UPDATE user SET Password=PASSWORD('YOUR_PASSWORD')
WHERE Host='localhost' AND User='root';

Replacing “YOUR_PASSWORD” with your desired password of course.  Once you’ve done that just exit the console “exit;” close the safe_mysqld execution and restart your MySQL server in normal mode.
