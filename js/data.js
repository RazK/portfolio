let blocks = [{
  title: 'Bottle Plus Plus',
  location: {x: 2, y:3},
  size: 3,
  type: 'physical',
  icon: 'images/bottleplusplus.png',
  hero: 'images/bottleplusplus-hero.png',
  text: `
<p>Can we augment single-use plastic bottles with new aesthetics and functional features that increase their value, extend their lifespan and reduce their consumption?</p>

<p>During a studio course on water bottle design guided by <a href="https://www.mayabendavid.com/">Maya Ben David</a> at Bezalel Academy, I envisioned a system for designing personalized water bottles by reusing plastic bottles enhanced with 3D printing: Bottle++</p>

<p>The system profiles a user through a series of questions, selects a combination of features and bottle parameters that best meet their scenario, and generates a 3D model that wraps around a plastic bottle they already have.</p>

<p>To develop this project I utilized parametric design platforms like <a href="https://www.openscad.org/">OpenSCAD</a>, <a href="https://www.autodesk.com/products/fusion-360/overview">Fusion360</a>, <a href="https://www.grasshopper3d.com/">Grashopper</a> and <a href="https://www.onshape.com/">Onshape.</a></p>

<p>The full project report can be found <a href="https://drive.google.com/file/d/1h1F9ESHrTUVvLHeFU092ODYwK4JImCSn/view?usp=sharing">here</a>, and you’re welcome to watch my presentation recording <a href="https://photos.app.goo.gl/4PjSrggqUnSHDozDA">here</a> (it’s in hebrew). If you’re into 3D stuff, check out my models <a href="https://cad.onshape.com/documents/2e6ede89f1e95ce92f170286/w/b5ec4dcd4238ea8f29b5177b/e/bcaee535ab8dd33021c76aa9?configuration=Texture_Patterns%3D60.0%3Bdaim_body%3D0.001%2Bmeter%3Bdiam_lid%3D0.001%2Bmeter%3Btexture_thickness%3D8.0E-4%2Bmeter%3Btolerance_move%3D4.0E-4%2Bmeter">here</a></p>
`
},
{
  title: 'Q-Crawler',
  location: {x: -2, y:-4},
  size: 2,
  type: 'virtual',
  icon: 'images/qcrawler-icon.png',
  hero: 'images/qcrawler-hero.png',
  text: `
<p>This is a collaborative research conducted with David Ginzbourg, Roi Aharonson and Hadar Eliyahu in the Hebrew University as the final project in the course <a href="https://shnaton.huji.ac.il/index.php/NewSyl/67842/2/2018/">Introduction To Artificial Intelligence</a> instructed by Prof. Jeff Rosenschein.</p>

<p>Our research focused on the application of reinforcement learning to a crawling robot. By implementing derivations of the Q-learning algorithm, we were able to teach an incognizant crawler how to use any configuration of limbs to advance forward.</p>

<p>Most notably, we’ve devised and implemented two new learning techniques: Q-Unification and Guided Q-Learning, which yielded faster learning rates than the standard Q-learning algorithm.</p>
<img src="images/qcrawler-fig1.png" />
<p>The full project report is available <a href="https://drive.google.com/file/d/11qOjj48uEfay0eC7ywqIJN5D9jTFvRJS/view?usp=sharing">here</a>. A complete virtual simulation of the crawler was implemented for the purpose of this research and is available at our <a href="https://github.cs.huji.ac.il/dginzbourg/intro2ai-final">Github repository</a>.</p>
`
},
{
  title: 'Kawaz',
  location: {x: 3, y:-4},
  size: 3,
  type: 'design',
  icon: 'images/kawaz-icon.png',
  hero: 'images/kawaz-hero.png',
  text: `
<p align=center>Can we construct every object from any set of building blocks?</p>

<p>Inspired by the Japanese joint <a href="https://woodgears.ca/puzzles/3way_joint.html">‘Kawai Tsugite’</a>, I designed the Kawaz universal building block - and implemented an algorithm that generates assembly instructions for any object using the minimal number of its instances.</p>

<img src="images/kawaz-fig1.png" />

<p>To solve the construction problem I conceived and implemented an admissible heuristic for the <a href="https://en.wikipedia.org/wiki/A*_search_algorithm">A* search algorithm</a> over the Kawaz construction space, which proved to find optimal solutions faster than the classic Dijkstra’s algorithm by orders of magnitude.</p>

<p>The project was implemented in python and visualized using <a href="https://matplotlib.org/mpl_toolkits/mplot3d/tutorial.html">mplot3d</a>.</p>

<p>More slides about the project can be found <a href="https://docs.google.com/presentation/d/1zcPoMCczcmRIWzw5J0D_lKouO81jYo1zkgQz83K1Z-c/edit?usp=sharing">here</a>, and if you speak Hebrew you can listen to my presentation <a href="https://photos.app.goo.gl/78j3sD1gqBsGuRp56">here</a>. The code is available <a href="https://github.com/heimy4prez/3DBlockSearch/tree/raz_good_old">here</a>, and if you like 3D stuff you can find the Kawaz model <a href="https://cad.onshape.com/documents/ae720a0a32a938773e0f9e5f/w/7a891a8e2963cb84f20f267c/e/6b9f6a55502ea8277a4a9da7">here</a>.</p>
`
},
{
  title: 'Smart Knife Handle',
  location: {x: -3, y:2},
  size: 3,
  type: 'physical',
  icon: 'images/knife-icon2.png',
  hero: 'images/knife-hero.jpg',
  text: `
<p align=center>Can any novice use a knife like a professional chef?</p>

<p>On the first week of my 2nd year studying industrial design at Bezalel Academy, my class was challenged by the German cutlery manufacturer <a href="https://www.dick.de/en/">Friedr. DICK</a> to design innovative handles for their ‘Superior Chef’s Knife’.</p>

<p>Within the 5 days timeframe, I designed and prototyped a smart knife  handle with embedded sensors that responds to movements with vibration feedback and guides the user through precise cutting motions.</p>

<img src="images/knife-fig1.png" />

The handle’s design process spanned from sketches on the drawing board to carving polyurethane foam followed by CAD modeling, Arduino programming, delicate soldering and 3D printing, all of which took place in my self-built workshop.

If you’re curious about the handle’s CAD model, you can find it <a href="https://cad.onshape.com/documents/4659779b536c7b35fad3c3bd/w/366ffcfa222cbc9cf2effb1e/e/af0e3d7886a6e6733b3d012f">here</a>.

`
},
{
  title: 'Kinder Star Wars - CONFIDENTIAL',
  location: {x: 0, y:-1},
  size: 3,
  type: 'none',
  icon: 'images/starwars-kinder-icon.png',
  hero: 'images/starwars-kinder-hero.png',
  text: `
<p>This is a novel immersive-reality game which I developed in a course about toy design, mentored by <a href="https://www.loubaton.com/">Yaron Loubaton</a> in a collaboration between Bezalel Academy and Kinder™.</p>

<p>Our class was challenged to design a new toy for <a href="https://www.kinder.com/uk/en/kinder-surprise">Kinder</a> Surprise using one of their licensed brands. Inspired by StarWars’ <a href="https://starwars.fandom.com/wiki/Millennium_Falcon">Millennium Falcon</a>, I designed and fabricated a spaceship toy that functions as a physical agent in a virtual mobile game of <a href="https://en.wikipedia.org/wiki/Asteroids_(video_game)">asteroids</a>, which I created with my friend <a href="https://il.linkedin.com/in/omer-zadok">Omer Zadok</a>.</p>

<p>The spaceship was selected by Kinder™ for further development in their studios.</p>
<img src="images/starwars-fig1.png"/>
`
}]
