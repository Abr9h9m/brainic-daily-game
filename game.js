const PUZZLES = {
  beginner: [
    { word:'APPLE', odd:{items:['Cat','Dog','Horse','Duck','Chair'],answer:4,group:'Cat, dog, horse, and duck are animals.'}, country:{answer:'Japan',continent:'Asia',flagColors:['White','Red'],clues:['This island country is famous for sushi and Mount Fuji.','Its capital city is Tokyo.','Its flag is a red circle on a white background.']} },
    { word:'HOUSE', odd:{items:['Red','Blue','Green','Yellow','Table'],answer:4,group:'Red, blue, green, and yellow are colors.'}, country:{answer:'France',continent:'Europe',flagColors:['Blue','White','Red'],clues:['The Eiffel Tower is in this country.','Its capital is Paris.','Its flag has vertical blue, white, and red stripes.']} },
    { word:'SMILE', odd:{items:['Monday','Tuesday','Friday','Sunday','January'],answer:4,group:'Monday, Tuesday, Friday, and Sunday are days of the week.'}, country:{answer:'Brazil',continent:'South America',flagColors:['Green','Yellow','Blue','White'],clues:['Soccer and the Amazon rainforest are strongly associated with this country.','Its largest city is São Paulo, and its capital is Brasília.','Its green flag has a yellow diamond and a blue globe.']} },
    { word:'BEACH', odd:{items:['Circle','Square','Triangle','Rectangle','Apple'],answer:4,group:'Circle, square, triangle, and rectangle are shapes.'}, country:{answer:'Canada',continent:'North America',flagColors:['Red','White'],clues:['This country is known for maple syrup and has the longest coastline in the world.','Its capital is Ottawa.','Its flag has a red maple leaf between two red bars on white.']} },
    { word:'GREEN', odd:{items:['Spring','Summer','Autumn','Winter','Tuesday'],answer:4,group:'Spring, summer, autumn, and winter are seasons.'}, country:{answer:'Egypt',continent:'Africa',flagColors:['Red','White','Black','Gold'],clues:['The Great Pyramid of Giza stands in this country.','The Nile River flows through it.','Its capital city is Cairo.']} }
  ],
  intermediate: [
    { word:'PLANT', odd:{items:['Bass','Trout','Salmon','Tuna','River'],answer:4,group:'Bass, trout, salmon, and tuna are all fish.'}, country:{answer:'Bhutan',continent:'Asia',flagColors:['Yellow','Orange','White'],clues:['This landlocked Himalayan kingdom measures national success with a well-being index.','Its capital, Thimphu, is the world’s only national capital without traffic lights.','The Tiger’s Nest monastery clings to a cliff above the Paro Valley.']} },
    { word:'CLOUD', odd:{items:['Mercury','Venus','Mars','Jupiter','Moon'],answer:4,group:'Mercury, Venus, Mars, and Jupiter are planets.'}, country:{answer:'Madagascar',continent:'Africa',flagColors:['White','Red','Green'],clues:['This island nation broke away from the Indian subcontinent roughly 88 million years ago.','Its unique wildlife includes many species of lemur found nowhere else in the wild.','It is the world’s fourth-largest island, off the southeastern coast of Africa.']} },
    { word:'BRICK', odd:{items:['Violin','Cello','Viola','Harp','Flute'],answer:4,group:'Violin, cello, viola, and harp are string instruments.'}, country:{answer:'Kyrgyzstan',continent:'Asia',flagColors:['Red','Yellow'],clues:['A tradition here involves a long epic poem called the Manas, passed down by oral storytellers.','The national flag’s sun has forty rays, said to represent forty united tribes.','This mountainous Central Asian country is home to Lake Issyk-Kul.']} },
    { word:'SHARE', odd:{items:['April','June','September','November','October'],answer:4,group:'April, June, September, and November each have 30 days.'}, country:{answer:'Suriname',continent:'South America',flagColors:['Green','White','Red','Yellow'],clues:['More than 90 percent of this country is covered by tropical rainforest.','It is the smallest sovereign country in South America by both area and population.','Dutch is its official language, and its capital is Paramaribo.']} },
    { word:'STONE', odd:{items:['Square','Triangle','Pentagon','Hexagon','Sphere'],answer:4,group:'Square, triangle, pentagon, and hexagon are two-dimensional polygons.'}, country:{answer:'Lesotho',continent:'Africa',flagColors:['Blue','White','Green','Black'],clues:['Every part of this country lies more than 1,000 meters above sea level.','It is a high-altitude enclave completely surrounded by one other country.','This kingdom is entirely surrounded by South Africa.']} }
  ],
  expert: [
    { word:'GLYPH', odd:{items:['Celsius','Kelvin','Fahrenheit','Rankine','Pascal'],answer:4,group:'Celsius, Kelvin, Fahrenheit, and Rankine are temperature scales; pascal measures pressure.'}, country:{answer:'Suriname',continent:'South America',flagColors:['Green','White','Red','Yellow'],clues:['The upper reaches of one of its rivers lend their name to a famous reservoir built for hydroelectric power.','Its capital’s historic inner city is a UNESCO World Heritage Site, known for timber colonial architecture.','It is the only sovereign country in South America where Dutch is the official language.']} },
    { word:'NYMPH', odd:{items:['Osprey','Falcon','Eagle','Hawk','Heron'],answer:4,group:'Osprey, falcon, eagle, and hawk are birds of prey; herons are wading birds.'}, country:{answer:'Kyrgyzstan',continent:'Asia',flagColors:['Red','Yellow'],clues:['A high mountain lake in this country has no outlet and remains unfrozen through much of the winter.','Its traditional felt dwelling, the yurt, appears at the center of its flag’s sun.','It is the Central Asian home of Lake Issyk-Kul and the epic of Manas.']} },
    { word:'QUOTA', odd:{items:['Bach','Handel','Vivaldi','Telemann','Beethoven'],answer:4,group:'Bach, Handel, Vivaldi, and Telemann were Baroque composers; Beethoven belongs to the later Classical and Romantic eras.'}, country:{answer:'Bhutan',continent:'Asia',flagColors:['Yellow','Orange','White'],clues:['Its highest unclimbed peak is Gangkhar Puensum, protected by a longstanding ban on mountaineering.','The national sport is archery, and its dzong architecture combines administrative and religious functions.','It is the Himalayan kingdom whose development philosophy is called Gross National Happiness.']} },
    { word:'ABYSS', odd:{items:['Sonnet','Haiku','Limerick','Elegy','Chapter'],answer:4,group:'Sonnet, haiku, limerick, and elegy are poetic forms; a chapter is a section of a book.'}, country:{answer:'Madagascar',continent:'Africa',flagColors:['White','Red','Green'],clues:['The island’s eastern escarpment separates humid lowlands from a drier central plateau.','Its baobab avenue is a protected landscape in the Menabe region.','It is the large Indian Ocean island where lemurs evolved in isolation.']} },
    { word:'VIGOR', odd:{items:['Mercury','Uranium','Neptunium','Plutonium','Titanium'],answer:0,group:'Uranium, neptunium, plutonium, and titanium take their names from Uranus, Neptune, Pluto, and Titan; Mercury does not follow that naming pattern.'}, country:{answer:'Lesotho',continent:'Africa',flagColors:['Blue','White','Green','Black'],clues:['Its lowest point is higher than the highest point of any other country.','The Orange River has its source in this mountain kingdom.','It is the fully enclosed, high-altitude kingdom inside South Africa.']} }
  ]
};

const CONNECTION_SETS = {
  beginner: [
    [{category:'Fruits',words:['Apple','Mango','Peach','Grape']},{category:'Pets',words:['Cat','Dog','Hamster','Rabbit']},{category:'Colors',words:['Red','Blue','Green','Yellow']},{category:'Beach things',words:['Towel','Shell','Bucket','Sunscreen']}],
    [{category:'Months with 31 days',words:['January','March','May','July']},{category:'Inner planets',words:['Mercury','Venus','Earth','Mars']},{category:'Musical instruments',words:['Guitar','Piano','Drum','Violin']},{category:'School supplies',words:['Pencil','Ruler','Eraser','Notebook']}],
    [{category:'Seasons',words:['Spring','Summer','Autumn','Winter']},{category:'Shapes',words:['Circle','Square','Triangle','Rectangle']},{category:'Breakfast foods',words:['Cereal','Toast','Pancakes','Eggs']},{category:'Sea animals',words:['Dolphin','Shark','Whale','Octopus']}],
    [{category:'Farm animals',words:['Cow','Pig','Sheep','Goat']},{category:'Ways to travel',words:['Car','Bus','Train','Bicycle']},{category:'Weather words',words:['Rain','Snow','Wind','Cloud']},{category:'Body parts',words:['Elbow','Knee','Ankle','Wrist']}],
    [{category:'Birds',words:['Robin','Eagle','Duck','Owl']},{category:'Fruits',words:['Orange','Pear','Kiwi','Plum']},{category:'Tools',words:['Hammer','Wrench','Screwdriver','Pliers']},{category:'Bathroom items',words:['Soap','Shampoo','Towel','Toothbrush']}]
  ],
  intermediate: [
    [{category:'___ ball',words:['Basket','Foot','Base','Volley']},{category:'Parts of a tree',words:['Bark','Root','Leaf','Branch']},{category:'Music notation',words:['Clef','Staff','Rest','Note']},{category:'Winter activities',words:['Ski','Sled','Skate','Snowboard']}],
    [{category:'Metals',words:['Gold','Silver','Copper','Tin']},{category:'Ways to cut food',words:['Chop','Dice','Mince','Slice']},{category:'Mystery terms',words:['Clue','Suspect','Motive','Alibi']},{category:'Times of day',words:['Dawn','Noon','Dusk','Midnight']}],
    [{category:'Polygons',words:['Triangle','Rectangle','Hexagon','Octagon']},{category:'Kitchen utensils',words:['Whisk','Spatula','Ladle','Tongs']},{category:'Space terms',words:['Orbit','Comet','Galaxy','Nebula']},{category:'Literary forms',words:['Novel','Poem','Essay','Play']}],
    [{category:'Major rivers',words:['Nile','Amazon','Danube','Mekong']},{category:'Hair and skin products',words:['Shampoo','Conditioner','Soap','Lotion']},{category:'String instruments',words:['Violin','Cello','Viola','Double bass']},{category:'Trees',words:['Pine','Maple','Oak','Birch']}],
    [{category:'Units of mass',words:['Pound','Ounce','Gram','Kilogram']},{category:'Planets',words:['Mercury','Venus','Mars','Saturn']},{category:'Woodwind instruments',words:['Flute','Clarinet','Oboe','Bassoon']},{category:'Pasta shapes',words:['Penne','Fusilli','Rigatoni','Farfalle']}]
  ],
  expert: [
    [{category:'Temperature scales',words:['Celsius','Kelvin','Fahrenheit','Rankine']},{category:'Birds of prey',words:['Osprey','Harrier','Kestrel','Kite']},{category:'Baroque composers',words:['Bach','Handel','Vivaldi','Telemann']},{category:'Billiards terms',words:['Cue','Ball','Pocket','Rack']}],
    [{category:'Voice ranges',words:['Soprano','Alto','Tenor','Bass']},{category:'Zodiac signs',words:['Aries','Taurus','Leo','Virgo']},{category:'Four-color printing',words:['Cyan','Magenta','Yellow','Black']},{category:'Scale degrees',words:['Tonic','Dominant','Subdominant','Mediant']}],
    [{category:'Poetic feet',words:['Iamb','Trochee','Dactyl','Spondee']},{category:'Herbs',words:['Dill','Thyme','Sage','Oregano']},{category:'Golf scores',words:['Birdie','Bogey','Eagle','Par']},{category:'Communication systems',words:['Morse','Braille','Semaphore','Fingerspelling']}],
    [{category:'Parts of a flower',words:['Stamen','Pistil','Sepal','Petal']},{category:'Short story traditions',words:['Myth','Fable','Legend','Parable']},{category:'Units of liquid volume',words:['Pint','Quart','Gallon','Cup']},{category:'Knitting terms',words:['Knit','Purl','Cast-on','Bind-off']}],
    [{category:'Frozen precipitation',words:['Sleet','Hail','Graupel','Snow']},{category:'Fish species',words:['Mackerel','Cod','Haddock','Pollock']},{category:'Ancient epics',words:['Iliad','Odyssey','Aeneid','Mahabharata']},{category:'Cloud types',words:['Cirrus','Cumulus','Stratus','Nimbus']}]
  ]
};

const MATRIX_SETS = {
  beginner: [
    { cells:['●','●●','●●●','■','■■','■■■','▲','▲▲'], answer:'▲▲▲', options:['▲▲▲','▲▲','◆◆◆','●●●'], explanation:'Each row keeps the same shape, while the number of shapes increases from one to two to three across the row.' },
    { cells:['◆','◆◆','◆◆◆','●','●●','●●●','■','■■'], answer:'■■■', options:['■■','■■■','▲▲▲','●●●'], explanation:'The shape changes from row to row; across each row, the count goes one, two, three.' },
    { cells:['▲','▲▲','▲▲▲','◆','◆◆','◆◆◆','●','●●'], answer:'●●●', options:['●●','●●●','■■■','◆◆◆'], explanation:'Read each row: it uses one shape, and each step to the right adds one more.' },
    { cells:['■','■■','■■■','▲','▲▲','▲▲▲','◆','◆◆'], answer:'◆◆◆', options:['◆◆◆','◆◆','●●●','▲▲▲'], explanation:'The rows use a different shape, and each row follows the same one-two-three count pattern.' },
    { cells:['●','●●','●●●','◆','◆◆','◆◆◆','▲','▲▲'], answer:'▲▲▲', options:['▲▲','▲▲▲','■■■','●●●'], explanation:'Every row follows the same count pattern: one, then two, then three.' }
  ],
  intermediate: [
    { cells:['●','●●','●●●','■■','■■■','■','▲▲▲','▲'], answer:'▲▲', options:['▲','▲▲','▲▲▲','◆◆'], explanation:'The shape changes by row. The counts shift one place each row: 1–2–3, then 2–3–1, then 3–1–2.' },
    { cells:['◆','◆◆','◆◆◆','▲▲','▲▲▲','▲','●●●','●'], answer:'●●', options:['●','●●','●●●','■■'], explanation:'Across each row the count rises by one, wrapping back to one after three; each new row changes the shape.' },
    { cells:['■■■','■','■■','●●','●●●','●','◆','◆◆'], answer:'◆◆◆', options:['◆','◆◆','◆◆◆','▲▲▲'], explanation:'The count pattern shifts across each row: 3–1–2, then 2–3–1, then 1–2–3.' },
    { cells:['▲▲','▲▲▲','▲','◆◆◆','◆','◆◆','●','●●'], answer:'●●●', options:['●','●●','●●●','■■'], explanation:'Each row shifts the one-two-three count pattern one position to the left.' },
    { cells:['●●●','●','●●','◆◆','◆◆◆','◆','▲','▲▲'], answer:'▲▲▲', options:['▲','▲▲','▲▲▲','■■■'], explanation:'The rows rotate the count order: 3–1–2, 2–3–1, then 1–2–3.' }
  ],
  expert: [
    { cells:['●','○○','●●●','□□','■■■','□','△△△','△'], answer:'▲▲', options:['▲','▲▲','▲▲▲','△△'], explanation:'Two rules work together: counts cycle across the rows (1–2–3, 2–3–1, 3–1–2), and the fill alternates like a checkerboard. The missing tile needs two filled triangles.' },
    { cells:['◆','◇◇','◆◆◆','△△','▲▲▲','△','●●●','○'], answer:'●●', options:['○','○○','●●','○○○'], explanation:'Counts cycle one-two-three across each row, shifting the start by one in each new row. Filled and outline shapes alternate by position.' },
    { cells:['□','■■','□□□','△△','▲▲▲','△','●●●','○'], answer:'●●', options:['○','○○','●●','○○○'], explanation:'Follow both patterns: the count shifts across rows, and fill alternates between neighboring cells. The final cell takes two filled circles.' },
    { cells:['△△△','▲','△△','●●','●●●','●','◇','◆◆'], answer:'◇◇◇', options:['◇','◇◇','◇◇◇','◆◆◆'], explanation:'The counts rotate through 3–1–2, 2–3–1, then 1–2–3. The shape changes by row and the fill alternates across adjacent tiles.' },
    { cells:['○','●●','○○○','■■','□□□','■','◆◆◆','◇'], answer:'◇◇', options:['◇','◇◇','◆◆','◇◇◇'], explanation:'Each row shifts the count cycle one place, and alternating fill switches between outline and solid. The missing cell has two outline diamonds.' }
  ]
};

const today = new Date();
const dayKey = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
const epoch = Date.UTC(2026, 0, 1);
const dayNumber = Math.floor((Date.UTC(today.getFullYear(),today.getMonth(),today.getDate()) - epoch) / 86400000);
const puzzleIndex = ((dayNumber % 5) + 5) % 5;
const storageKey = `brainic:${dayKey}`;
const badgeStorageKey = 'brainic:badges';
const themeStorageKey = 'brainic:theme';
const BADGE_DEFINITIONS = {
  word: { name:'Word Whiz', icon:'🧠', description:'Solved the daily word.' },
  connections: { name:'Pattern Finder', icon:'🔗', description:'Found all four word groups.' },
  country: { name:'World Scout', icon:'🌍', description:'Guessed today’s country.' },
  matrix: { name:'Pattern Seeker', icon:'🔷', description:'Solved the daily pattern matrix.' }
};
function readBadges() {
  try { const badges=JSON.parse(localStorage.getItem(badgeStorageKey)||'[]'); return Array.isArray(badges)?badges.filter(badge=>badge&&typeof badge.id==='string'):[]; }
  catch { return []; }
}
function syncEarnedBadges() {
  if (state.started && state.difficulty) {
    const earned=[];
    if (state.wordWon) earned.push('word');
    if (state.connectionsSolved.length===4) earned.push('connections');
    if (state.countryWon) earned.push('country');
    if (state.matrixWon) earned.push('matrix');
    const badges=readBadges();
    earned.forEach(stage=>{
      const id=`${dayKey}:${state.difficulty}:${stage}`;
      if (!badges.some(badge=>badge.id===id)) badges.push({id,date:dayKey,difficulty:state.difficulty,stage,...BADGE_DEFINITIONS[stage]});
    });
    if (badges.length!==readBadges().length) localStorage.setItem(badgeStorageKey,JSON.stringify(badges));
  }
  $('badge-count').textContent=readBadges().length;
}
function renderBadgeInventory() {
  const badges=readBadges().sort((a,b)=>b.date.localeCompare(a.date)||a.name.localeCompare(b.name));
  $('badge-summary').textContent=badges.length?`${badges.length} ${badges.length===1?'badge':'badges'} collected`:'Solve a stage to earn your first badge.';
  const inventory=$('badge-inventory');inventory.innerHTML='';
  if(!badges.length){const empty=document.createElement('p');empty.className='badge-empty';empty.textContent='Your collection is waiting for its first achievement.';inventory.append(empty);return;}
  badges.forEach(badge=>{
    const card=document.createElement('article');card.className='badge-entry';
    const icon=document.createElement('span');icon.className='badge-entry-icon';icon.setAttribute('aria-hidden','true');icon.textContent=badge.icon||'✦';
    const copy=document.createElement('span');copy.className='badge-entry-copy';
    const title=document.createElement('strong');title.textContent=badge.name;
    const description=document.createElement('span');description.textContent=badge.description;
    const date=document.createElement('span');date.className='badge-entry-meta';
    const parsed=new Date(`${badge.date}T12:00:00`);date.textContent=`${Number.isNaN(parsed.getTime())?badge.date:new Intl.DateTimeFormat('en',{month:'short',day:'numeric',year:'numeric'}).format(parsed)} · ${badge.difficulty||'daily'}`;
    copy.append(title,description,date);card.append(icon,copy);inventory.append(card);
  });
}
const fresh = () => ({ gameVersion:4, difficulty:null, started:false, stage:0, wordGuesses:[], wordDone:false, wordWon:false, wordCelebrationSeen:false, connectionsBoard:[], connectionsSelected:[], connectionsSolved:[], connectionsMistakes:4, connectionsDone:false, connectionsMessage:'', countryTries:0, countryDone:false, countryWon:false, countryHint:null, matrixDone:false, matrixWon:false, matrixChoice:null });
let state;
try {
  const stored=JSON.parse(localStorage.getItem(storageKey)||'{}');
  state={...fresh(),...stored};
  if (![3,4].includes(state.gameVersion)||!state.difficulty) state=fresh();
  else state.gameVersion=4;
} catch { state = fresh(); }
const $ = id => document.getElementById(id);
let activeTheme=localStorage.getItem(themeStorageKey)==='dark'?'dark':'light';
function applyTheme(){
  document.documentElement.dataset.theme=activeTheme;
  const dark=activeTheme==='dark';
  $('theme-toggle').setAttribute('aria-label',`Switch to ${dark?'light':'dark'} mode`);
  $('theme-icon').textContent=dark?'☀':'☾';
  $('theme-label').textContent=dark?'Light':'Dark';
}
const save = () => localStorage.setItem(storageKey, JSON.stringify(state));
const currentPuzzle = () => state.difficulty ? { ...PUZZLES[state.difficulty][puzzleIndex], connections:CONNECTION_SETS[state.difficulty][puzzleIndex], matrix:MATRIX_SETS[state.difficulty][puzzleIndex] } : null;

function render() {
  syncEarnedBadges();
  applyTheme();
  $('date-label').textContent = new Intl.DateTimeFormat('en', { weekday:'long', month:'long', day:'numeric' }).format(today);
  $('difficulty-screen').classList.toggle('hidden', state.started);
  $('stage-nav').classList.toggle('hidden', !state.started);
  $('game-card').classList.toggle('hidden', !state.started);
  $('below-card').classList.toggle('hidden', !(state.started && state.stage===3 && state.matrixDone));
  document.querySelectorAll('.difficulty-option').forEach(button => {
    const selected = button.dataset.difficulty === state.difficulty;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  if (!state.started) return;

  const puzzle = currentPuzzle();
  document.querySelectorAll('[data-stage-tab]').forEach((tab, i) => {
    tab.classList.toggle('active', i === state.stage);
    tab.classList.toggle('complete', (i === 0 && state.wordDone) || (i === 1 && state.connectionsDone) || (i === 2 && state.countryDone) || (i === 3 && state.matrixDone));
    tab.disabled = i > state.stage;
  });
  $('progress-pill').textContent = `${state.stage + 1} of 4`;
  $('stage-kicker').textContent = `STAGE 0${state.stage + 1} · ${['WORD','CONNECTIONS','COUNTRY','PATTERN MATRIX'][state.stage]}`;
  $('word-panel').classList.toggle('hidden', state.stage !== 0);
  $('connections-panel').classList.toggle('hidden', state.stage !== 1);
  $('country-panel').classList.toggle('hidden', state.stage !== 2);
  $('matrix-panel').classList.toggle('hidden', state.stage !== 3);
  const titles = ['Find the five-letter word','Connect the words','Name the country','Complete the pattern'];
  const descriptions = ['You have six tries. Each guess must be a five-letter word.','Sort all 16 words into four groups of four.','Three clues, three guesses, and one optional hint.','Find the rule that connects the shapes in the grid.'];
  $('stage-title').textContent = titles[state.stage]; $('stage-description').textContent = descriptions[state.stage];
  $('footer-hint').textContent = ['Green means right letter, right place.','Each word belongs to exactly one group.','Reveal the continent or flag colors if you need a nudge.','Look for changes in shape, count, position, or fill.'][state.stage];
  const stageComplete=[state.wordDone,state.connectionsDone,state.countryDone,state.matrixDone];
  $('continue-button').classList.toggle('hidden', !(state.stage<3 && stageComplete[state.stage]));
  $('continue-button').textContent = `Continue to stage ${state.stage+2} →`;
  drawWord(puzzle); drawConnections(puzzle); drawCountry(puzzle); drawMatrix(puzzle);
  $('word-input').disabled = state.wordDone; $('country-input').disabled = state.countryDone;
}

function drawMatrix(puzzle) {
  const matrix=puzzle.matrix;
  const grid=$('matrix-grid');grid.innerHTML='';
  [...matrix.cells,null].forEach((symbols,index)=>{
    const tile=document.createElement('div');tile.className='matrix-tile';
    if(index===8){tile.classList.add('matrix-missing');tile.textContent=state.matrixDone?matrix.answer:'?';tile.setAttribute('aria-label',state.matrixDone?`Answer: ${matrix.answer}`:'Missing tile');}
    else{tile.textContent=symbols;tile.setAttribute('aria-label',`${symbols.length} ${symbols[0]}`);}
    grid.append(tile);
  });
  const options=$('matrix-options');options.innerHTML='';
  matrix.options.forEach((value,index)=>{
    const button=document.createElement('button');button.type='button';button.className='matrix-option';button.textContent=value;
    button.setAttribute('aria-label',`Option ${String.fromCharCode(65+index)}: ${value}`);
    button.setAttribute('aria-pressed',String(state.matrixChoice===value));
    button.classList.toggle('selected',state.matrixChoice===value);
    button.classList.toggle('correct',state.matrixDone&&value===matrix.answer);
    button.classList.toggle('incorrect',state.matrixDone&&state.matrixChoice===value&&!state.matrixWon);
    button.disabled=state.matrixDone;
    button.addEventListener('click',()=>chooseMatrixAnswer(value));options.append(button);
  });
  $('matrix-message').textContent=state.matrixDone?(state.matrixWon?'Correct! You found the pattern and earned the Pattern Seeker badge.':`Not quite — the answer is ${matrix.answer}.`):'Choose the tile that completes the grid.';
  $('matrix-message').classList.toggle('error',state.matrixDone&&!state.matrixWon);
  $('matrix-explanation').textContent=matrix.explanation;
  $('matrix-explanation').classList.toggle('hidden',!state.matrixDone);
}

function chooseMatrixAnswer(value){
  if(state.matrixDone)return;
  state.matrixChoice=value;state.matrixWon=value===currentPuzzle().matrix.answer;state.matrixDone=true;save();render();
}

function drawWord(puzzle) {
  if(!Array.isArray(state.wordGuesses)) state.wordGuesses=[];
  state.wordGuesses=state.wordGuesses.filter(guess=>typeof guess==='string'&&/^[A-Z]{5}$/.test(guess)).slice(0,6);
  const grid = $('word-grid'); grid.innerHTML = '';
  for (let r=0;r<6;r++) for (let c=0;c<5;c++) {
    const tile = document.createElement('div'); tile.className='tile';
    const guess = state.wordGuesses[r];
    if (guess) { tile.textContent=guess[c]; tile.classList.add('filled'); const answer=puzzle.word; if (guess[c]===answer[c]) tile.classList.add('correct'); else if (answer.includes(guess[c])) tile.classList.add('present'); else tile.classList.add('absent'); }
    grid.append(tile);
  }
  const award = $('word-award');
  award.classList.toggle('hidden', !state.wordWon);
  const celebrateNow = state.wordWon && !state.wordCelebrationSeen;
  award.classList.toggle('celebrate', celebrateNow);
  if (celebrateNow) { state.wordCelebrationSeen = true; save(); }
  if (state.wordDone) $('word-message').textContent = state.wordWon ? `Lovely. The word was ${puzzle.word}.` : `The word was ${puzzle.word}.`;
}

function shuffle(items) {
  const result=[...items];
  for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
  return result;
}

function drawConnections(puzzle) {
  if(!Array.isArray(state.connectionsBoard)||state.connectionsBoard.length!==16){state.connectionsBoard=shuffle(puzzle.connections.flatMap(group=>group.words));save();}
  const solved=$('solved-groups');solved.innerHTML='';
  const revealAll=state.connectionsDone&&state.connectionsMistakes===0;
  puzzle.connections.forEach((group,index)=>{
    if(!state.connectionsSolved.includes(index)&&!revealAll)return;
    const row=document.createElement('div');row.className=`solved-group group-color-${index}`;
    const category=document.createElement('strong');category.textContent=group.category;
    const words=document.createElement('span');words.textContent=group.words.join(' · ');
    row.append(category,words);solved.append(row);
  });
  $('connections-progress').textContent=`${state.connectionsSolved.length} OF 4 GROUPS FOUND`;
  $('connections-mistakes').textContent=revealAll?'ANSWERS REVEALED':`${state.connectionsMistakes} ${state.connectionsMistakes===1?'MISTAKE':'MISTAKES'} LEFT`;
  const grid=$('connections-grid');grid.innerHTML='';
  const removed=new Set(state.connectionsSolved.flatMap(index=>puzzle.connections[index].words));
  if(revealAll)puzzle.connections.forEach(group=>group.words.forEach(word=>removed.add(word)));
  state.connectionsBoard.filter(word=>!removed.has(word)).forEach(word=>{
    const button=document.createElement('button');button.type='button';button.className='connection-tile';button.textContent=word;
    const selected=state.connectionsSelected.includes(word);button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',String(selected));button.disabled=state.connectionsDone;
    button.addEventListener('click',()=>toggleConnectionWord(word));grid.append(button);
  });
  $('selection-count').textContent=`${state.connectionsSelected.length} selected`;
  $('clear-selection').disabled=state.connectionsSelected.length===0||state.connectionsDone;
  $('submit-group').disabled=state.connectionsSelected.length!==4||state.connectionsDone;
  $('connections-message').textContent=state.connectionsMessage;
  grid.classList.toggle('hidden',revealAll);
  $('connections-actions').classList.toggle('hidden',revealAll);
}

function toggleConnectionWord(word) {
  if(state.connectionsDone)return;
  if(state.connectionsSelected.includes(word))state.connectionsSelected=state.connectionsSelected.filter(item=>item!==word);
  else if(state.connectionsSelected.length<4)state.connectionsSelected.push(word);
  state.connectionsMessage='';save();render();
}

function submitConnectionGroup() {
  if(state.connectionsDone||state.connectionsSelected.length!==4)return;
  const puzzle=currentPuzzle();const selected=new Set(state.connectionsSelected);
  const match=puzzle.connections.findIndex((group,index)=>!state.connectionsSolved.includes(index)&&group.words.every(word=>selected.has(word)));
  if(match>=0){
    state.connectionsSolved.push(match);state.connectionsSelected=[];
    state.connectionsDone=state.connectionsSolved.length===4;
    state.connectionsMessage=state.connectionsDone?'All four connections found. Brilliant!':'Nice connection! Find the next group.';
  }else{
    state.connectionsMistakes--;
    const oneAway=puzzle.connections.some((group,index)=>!state.connectionsSolved.includes(index)&&group.words.filter(word=>selected.has(word)).length===3);
    state.connectionsMessage=oneAway?'One away! Those words are almost a group.':`Not quite. ${state.connectionsMistakes} ${state.connectionsMistakes===1?'mistake':'mistakes'} left.`;
    state.connectionsSelected=[];
    if(state.connectionsMistakes===0){state.connectionsDone=true;state.connectionsMessage='Out of mistakes — the remaining connections are revealed.';}
  }
  save();render();
}

function clearConnectionSelection(){state.connectionsSelected=[];state.connectionsMessage='';save();render();}

function drawCountry(puzzle) {
  const tries=Math.min(state.countryTries,2); $('country-clue').textContent=puzzle.country.clues[tries];
  $('clue-count').querySelectorAll('.clue-dot').forEach((dot,i)=>{dot.classList.toggle('used',i<state.countryTries);dot.classList.toggle('current',i===tries&&!state.countryDone)});
  $('clue-count').querySelector('.clue-caption').textContent=state.countryDone?'ANSWER REVEALED':`CLUE ${tries+1} OF 3`;
  if(state.countryDone) $('country-clue').textContent=`${puzzle.country.clues[tries]} Answer: ${puzzle.country.answer}.`;
  $('country-message').textContent=state.countryDone?(state.countryWon?`Correct! You found ${puzzle.country.answer}.`:`The answer was ${puzzle.country.answer}.`):'';
  const hintAvailable = !state.countryHint && !state.countryDone;
  $('continent-hint').disabled = !hintAvailable;
  $('flag-hint').disabled = !hintAvailable;
  $('continent-value').textContent = state.countryHint === 'continent' ? puzzle.country.continent : state.countryHint ? 'Your one hint has been used' : 'Tap to reveal';
  $('flag-value').textContent = state.countryHint === 'flag' ? puzzle.country.flagColors.join(' · ') : state.countryHint ? 'Your one hint has been used' : 'Colors only, no flag';
  $('continent-action').textContent = state.countryHint === 'continent' ? 'Revealed ✓' : state.countryHint ? 'Used' : 'Reveal →';
  $('flag-action').textContent = state.countryHint === 'flag' ? 'Revealed ✓' : state.countryHint ? 'Used' : 'Reveal →';
  $('continent-hint').classList.toggle('revealed', state.countryHint === 'continent');
  $('flag-hint').classList.toggle('revealed', state.countryHint === 'flag');
}

document.querySelectorAll('.difficulty-option').forEach(button=>button.addEventListener('click',()=>{state.difficulty=button.dataset.difficulty;state.started=true;save();render();}));
$('word-form').addEventListener('submit', e=>{
  e.preventDefault(); if(state.wordDone)return; const guess=$('word-input').value.trim().toUpperCase();
  if(!/^[A-Z]{5}$/.test(guess)){ $('word-message').textContent='Enter a five-letter word to guess.'; $('word-message').classList.add('error'); return; }
  $('word-message').classList.remove('error'); state.wordGuesses.push(guess); $('word-input').value='';
  const answer=currentPuzzle().word;
  if(guess===answer || state.wordGuesses.length>=6){state.wordDone=true;state.wordWon=guess===answer;if(guess!==answer)$('word-message').textContent=`The word was ${answer}.`;}
  save();render();
});
$('clear-selection').addEventListener('click',clearConnectionSelection);
$('submit-group').addEventListener('click',submitConnectionGroup);
$('country-form').addEventListener('submit', e=>{
  e.preventDefault(); if(state.countryDone)return; const guess=$('country-input').value.trim().toLowerCase();
  if(!guess){$('country-message').textContent='Enter a country name to guess.';$('country-message').classList.add('error');return;}
  $('country-message').classList.remove('error'); state.countryTries++; state.countryWon=guess===currentPuzzle().country.answer.toLowerCase(); state.countryDone=state.countryWon||state.countryTries>=3; $('country-input').value=''; save();render();
  if(!state.countryDone) $('country-message').textContent='Not quite. Here’s another clue.';
});
document.querySelectorAll('[data-hint]').forEach(button=>button.addEventListener('click',()=>{if(state.countryHint||state.countryDone)return;state.countryHint=button.dataset.hint;save();render();}));
$('continue-button').addEventListener('click',()=>{state.stage=Math.min(state.stage+1,3);save();render();window.scrollTo({top:0,behavior:'smooth'});});
document.querySelectorAll('[data-stage-tab]').forEach(tab=>tab.addEventListener('click',()=>{const target=Number(tab.dataset.stageTab);if(target<=state.stage){state.stage=target;save();render();}}));
$('help-button').addEventListener('click',()=>$('help-dialog').showModal()); $('close-help').addEventListener('click',()=>$('help-dialog').close());
$('theme-toggle').addEventListener('click',()=>{activeTheme=activeTheme==='dark'?'light':'dark';localStorage.setItem(themeStorageKey,activeTheme);applyTheme();});
$('badges-button').addEventListener('click',()=>{renderBadgeInventory();$('badge-dialog').showModal();}); $('close-badges').addEventListener('click',()=>$('badge-dialog').close());
$('share-button').addEventListener('click',async()=>{
  const result=`Brainic ${dayKey} · ${state.difficulty}\n${state.wordDone?(state.wordWon?'🟩':'🟨'):'⬜'} Word  ·  ${state.connectionsDone?(state.connectionsMistakes>0?'🟩':'🟨'):'⬜'} Connections  ·  ${state.countryDone?(state.countryWon?'🟩':'🟨'):'⬜'} Country  ·  ${state.matrixDone?(state.matrixWon?'🟩':'🟨'):'⬜'} Pattern`;
  try { await navigator.clipboard.writeText(result); $('share-button').innerHTML='Copied! ✓'; setTimeout(()=>$('share-button').innerHTML='Share result <span>↗</span>',1600); } catch { window.prompt('Copy your result:',result); }
});

render();
