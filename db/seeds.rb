# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
movies = Movie.create([
{ title: 'Green Book', year: 2018, director: 'Peter Farrelly', plot: 'A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South..' },
{ title: 'Lord of the Rings', year: 2001, director: 'Peter Jackson', plot: 'A meek Hobbit from the Shire set out on a journey.' },
{ title: 'Matrix', year: 1999, director: 'Lana Wachowski', plot: 'A computer hacker learns about the true nature of his reality.' },
{ title: 'Call Me By Your Name', year: 2017, director: 'Luca Guadagnino', plot: 'In 1980s Italy, a romance blossoms between a student and an older man.' }
])