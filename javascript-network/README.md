

Curriculum
Introduction to SWE Average: 86.0%
Project badge
JavaScript - Network
JavaScript

    Amateur
    By: Guillaume, CTO at Holberton School
    Weight: 1
    Your score will be updated once you launch the project review.
    Project will start Feb 3, 2024 12:00 AM, must end by Feb 8, 2024 11:59 PM

Resources

Read or watch:

    Working with JSON data
    request module
    Modern JS

Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
General

    Why JavaScript programming is amazing
    How to manipulate JSON data
    How to use request and fetch API
    How to read and write a file using fs module

Requirements
General

    Recommended editors: Visual studio code
    All your files will be interpreted on Ubuntu 20.04 LTS using node (version 14.x)
    All your files should end with a new line
    A README.md file, at the root of the folder of the project, is mandatory
    Your code should be semistandard compliant. Rules of Standard + semicolons on top. Also as reference: AirBnB style
    The length of your files will be tested using wc
    You are not allowed to use var

Intro Session for this project
Tasks
0. Status code
mandatory

Write a script that display the status code of a GET request.

    The first argument is the URL to request (GET)
    The status code must be printed like this: code: <status code>
    You must use the module request (NB: It must be installed if you haven’t already installed it)

guillaume@ubuntu:~/$ node 0-statuscode.js https://intranet.alxswe.com/status
code: 200
guillaume@ubuntu:~/$ node 0-statuscode.js https://intranet.alxswe.com/doesnt_exist
code: 404
guillaume@ubuntu:~/$ 

Repo:

    GitHub repository: alx_javascript
    Directory: javascript-network
    File: 0-statuscode.js

0/8 pts
1. Star wars movie title
mandatory

Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.

    The first argument is the movie ID
    You must use the Star wars API with the endpoint https://swapi-api.alx-tools.com/api/films/:id
    You must use the module request

guillaume@ubuntu:~/$ node 1-starwars_title.js 1
A New Hope
guillaume@ubuntu:~/$ node 1-starwars_title.js 5
Attack of the Clones
guillaume@ubuntu:~/$ 

Hint: You must access the endpoint and figure out how the output from the endpoint is displayed. Based on that knowledge, you would then have to figure out how to access the title of the movie

Repo:

    GitHub repository: alx_javascript
    Directory: javascript-network
    File: 1-starwars_title.js

0/8 pts
2. Star wars Wedge Antilles
mandatory

Write a script that prints the number of movies where the character “Wedge Antilles” is present.

    The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
    Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
    You must use the module request

guillaume@ubuntu:~/$ node 2-starwars_count.js https://swapi-api.alx-tools.com/api/films
3
guillaume@ubuntu:~/$ 

Repo:

    GitHub repository: alx_javascript
    Directory: javascript-network
    File: 2-starwars_count.js

0/9 pts
3. Loripsum
mandatory

Write a script that gets the contents of a webpage and stores it in a file.

    The first argument is the URL to request
    The second argument the file path to store the body response
    The file must be UTF-8 encoded
    You must use the module request

guillaume@ubuntu:~/$ node 3-request_store.js http://loripsum.net/api loripsum
guillaume@ubuntu:~/$ cat loripsum
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec quo modo conveniant, non sane intellego. Nam memini etiam quae nolo, oblivisci non possum quae volo. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Terram, mihi crede, ea lanx et maria deprimet. Deinde prima illa, quae in congressu solemus: Quid tu, inquit, huc? Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. </p>

<p>Ad eos igitur converte te, quaeso. Pudebit te, inquam, illius tabulae, quam Cleanthes sane commode verbis depingere solebat. Sic enim censent, oportunitatis esse beate vivere. Quo studio Aristophanem putamus aetatem in litteris duxisse? Aeque enim contingit omnibus fidibus, ut incontentae sint. Ut aliquid scire se gaudeant? Qui enim existimabit posse se miserum esse beatus non erit. Putabam equidem satis, inquit, me dixisse. </p>

<p>Duo Reges: constructio interrete. Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere? Illud non continuo, ut aeque incontentae. Illa videamus, quae a te de amicitia dicta sunt. At ille pellit, qui permulcet sensum voluptate. Tamen aberramus a proposito, et, ne longius, prorsus, inquam, Piso, si ista mala sunt, placet. </p>

<p>Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. Nos cum te, M. Quem si tenueris, non modo meum Ciceronem, sed etiam me ipsum abducas licebit. Apparet statim, quae sint officia, quae actiones. Ergo instituto veterum, quo etiam Stoici utuntur, hinc capiamus exordium. Eadem nunc mea adversum te oratio est. Quid, si etiam iucunda memoria est praeteritorum malorum? Hoc enim constituto in philosophia constituta sunt omnia. </p>

guillaume@ubuntu:~/$ 

Repo:

    GitHub repository: alx_javascript
    Directory: javascript-network
    File: 3-request_store.js

0/9 pts
4. How many completed?
mandatory

Write a script that computes the number of tasks completed by user id.

    The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
    Only print users with completed task
    You must use the module request

guillaume@ubuntu:~/$ node 4-completed_tasks.js https://jsonplaceholder.typicode.com/todos
{ '1': 11,
  '2': 8,
  '3': 7,
  '4': 6,
  '5': 12,
  '6': 6,
  '7': 9,
  '8': 11,
  '9': 8,
  '10': 12 }
guillaume@ubuntu:~/$

Repo:

    GitHub repository: alx_javascript
    Directory: javascript-network
    File: 4-completed_tasks.js

0/10 pts
5. Who was playing in this movie?
mandatory

Write a script that prints all characters of a Star Wars movie:

    The first argument is the Movie ID - example: 3 = “Return of the Jedi”
    Display one character name by line
    You must use the Star wars API
    You must use the module request

guillaume@ubuntu:~/$ node 5-starwars_characters.js 3
Darth Vader
R2-D2
Luke Skywalker
Han Solo
Leia Organa
Chewbacca
Palpatine
Obi-Wan Kenobi
Jabba Desilijic Tiure
Wedge Antilles
Yoda
Boba Fett
Ackbar
Arvel Crynyd
Mon Mothma
Nien Nunb
Wicket Systri Warrick
Bib Fortuna
C-3PO
Lando Calrissian
guillaume@ubuntu:~/$ 

Repo:

    GitHub repository: alx_javascript
    Directory: javascript-network
    File: 5-starwars_characters.js

0/9 pts
Score
Project badge

Your score will be updated once you launch the project review.

Please review all the tasks before you start the peer review.
Previous project
Copyright © 2024 ALX, All rights reserved.
