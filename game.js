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

const today = new Date();
const dayKey = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
const epoch = Date.UTC(2026, 0, 1);
const dayNumber = Math.floor((Date.UTC(today.getFullYear(),today.getMonth(),today.getDate()) - epoch) / 86400000);
const puzzleIndex = ((dayNumber % 5) + 5) % 5;
const storageKey = `brainic:${dayKey}`;
const fresh = () => ({ difficulty:null, started:false, stage:0, wordGuesses:[], wordDone:false, wordWon:false, oddDone:false, oddWon:false, countryTries:0, countryDone:false, countryWon:false, countryHint:null, oddSelected:null });
let state;
try {
  state = { ...fresh(), ...JSON.parse(localStorage.getItem(storageKey) || '{}') };
  if (!state.difficulty) state = fresh();
} catch { state = fresh(); }
const $ = id => document.getElementById(id);
const save = () => localStorage.setItem(storageKey, JSON.stringify(state));
const currentPuzzle = () => state.difficulty ? PUZZLES[state.difficulty][puzzleIndex] : null;

function render() {
  $('date-label').textContent = new Intl.DateTimeFormat('en', { weekday:'long', month:'long', day:'numeric' }).format(today);
  $('difficulty-screen').classList.toggle('hidden', state.started);
  $('stage-nav').classList.toggle('hidden', !state.started);
  $('game-card').classList.toggle('hidden', !state.started);
  $('below-card').classList.toggle('hidden', !state.started);
  document.querySelectorAll('.difficulty-option').forEach(button => {
    const selected = button.dataset.difficulty === state.difficulty;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  if (!state.started) return;

  const puzzle = currentPuzzle();
  document.querySelectorAll('[data-stage-tab]').forEach((tab, i) => {
    tab.classList.toggle('active', i === state.stage);
    tab.classList.toggle('complete', (i === 0 && state.wordDone) || (i === 1 && state.oddDone) || (i === 2 && state.countryDone));
    tab.disabled = i > state.stage;
  });
  $('progress-pill').textContent = `${state.stage + 1} of 3`;
  $('stage-kicker').textContent = `STAGE 0${state.stage + 1} · ${['WORD','ODD ONE OUT','COUNTRY'][state.stage]}`;
  $('word-panel').classList.toggle('hidden', state.stage !== 0);
  $('odd-panel').classList.toggle('hidden', state.stage !== 1);
  $('country-panel').classList.toggle('hidden', state.stage !== 2);
  const titles = ['Find the five-letter word','Which one doesn’t belong?','Name the country'];
  const descriptions = ['You have six tries. Each guess must be a five-letter word.','Find the item that doesn’t share the connection.','Three clues, three guesses, and one optional hint.'];
  $('stage-title').textContent = titles[state.stage]; $('stage-description').textContent = descriptions[state.stage];
  $('footer-hint').textContent = ['Green means right letter, right place.','Select the odd one out.','Reveal the continent or flag colors if you need a nudge.'][state.stage];
  $('continue-button').classList.toggle('hidden', !((state.stage === 0 && state.wordDone) || (state.stage === 1 && state.oddDone)));
  $('continue-button').textContent = state.stage === 0 ? 'Continue to stage 2 →' : 'Continue to stage 3 →';
  drawWord(puzzle); drawOdd(puzzle); drawCountry(puzzle);
  $('word-input').disabled = state.wordDone; $('country-input').disabled = state.countryDone;
}

function drawWord(puzzle) {
  const grid = $('word-grid'); grid.innerHTML = '';
  for (let r=0;r<6;r++) for (let c=0;c<5;c++) {
    const tile = document.createElement('div'); tile.className='tile';
    const guess = state.wordGuesses[r];
    if (guess) { tile.textContent=guess[c]; tile.classList.add('filled'); const answer=puzzle.word; if (guess[c]===answer[c]) tile.classList.add('correct'); else if (answer.includes(guess[c])) tile.classList.add('present'); else tile.classList.add('absent'); }
    grid.append(tile);
  }
  if (state.wordDone) $('word-message').textContent = state.wordWon ? `Lovely. The word was ${puzzle.word}.` : `The word was ${puzzle.word}.`;
}

function drawOdd(puzzle) {
  const box=$('odd-options'); box.innerHTML='';
  puzzle.odd.items.forEach((item,i)=>{ const button=document.createElement('button'); button.className='odd-option'; button.textContent=item; button.disabled=state.oddDone; if(state.oddSelected===i) button.classList.add('selected'); if(state.oddDone&&i===puzzle.odd.answer) button.classList.add('reveal'); button.onclick=()=>selectOdd(i,puzzle); box.append(button); });
  if(state.oddDone) $('odd-message').textContent = state.oddWon ? `That's it! ${puzzle.odd.group}` : `The answer was ${puzzle.odd.items[puzzle.odd.answer]}. ${puzzle.odd.group}`;
}

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

function selectOdd(i,puzzle) {
  state.oddSelected=i; state.oddDone=true; state.oddWon=i===puzzle.odd.answer; save(); render();
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
$('country-form').addEventListener('submit', e=>{
  e.preventDefault(); if(state.countryDone)return; const guess=$('country-input').value.trim().toLowerCase();
  if(!guess){$('country-message').textContent='Enter a country name to guess.';$('country-message').classList.add('error');return;}
  $('country-message').classList.remove('error'); state.countryTries++; state.countryWon=guess===currentPuzzle().country.answer.toLowerCase(); state.countryDone=state.countryWon||state.countryTries>=3; $('country-input').value=''; save();render();
  if(!state.countryDone) $('country-message').textContent='Not quite. Here’s another clue.';
});
document.querySelectorAll('[data-hint]').forEach(button=>button.addEventListener('click',()=>{if(state.countryHint||state.countryDone)return;state.countryHint=button.dataset.hint;save();render();}));
$('continue-button').addEventListener('click',()=>{state.stage=Math.min(state.stage+1,2);save();render();window.scrollTo({top:0,behavior:'smooth'});});
document.querySelectorAll('[data-stage-tab]').forEach(tab=>tab.addEventListener('click',()=>{const target=Number(tab.dataset.stageTab);if(target<=state.stage){state.stage=target;save();render();}}));
$('help-button').addEventListener('click',()=>$('help-dialog').showModal()); $('close-help').addEventListener('click',()=>$('help-dialog').close());
$('share-button').addEventListener('click',async()=>{
  const result=`Brainic ${dayKey} · ${state.difficulty}\n${state.wordDone?(state.wordWon?'🟩':'🟨'):'⬜'} Word  ·  ${state.oddDone?(state.oddWon?'🟩':'🟨'):'⬜'} Odd one out  ·  ${state.countryDone?(state.countryWon?'🟩':'🟨'):'⬜'} Country`;
  try { await navigator.clipboard.writeText(result); $('share-button').innerHTML='Copied! ✓'; setTimeout(()=>$('share-button').innerHTML='Share result <span>↗</span>',1600); } catch { window.prompt('Copy your result:',result); }
});

render();
