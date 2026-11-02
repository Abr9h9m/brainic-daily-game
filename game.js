const PUZZLES = [
  { word: 'PLANT', odd: { items: ['Bass', 'Trout', 'Salmon', 'Tuna', 'River'], answer: 4, group: 'Bass, trout, salmon, and tuna are all fish.' }, country: { answer: 'Bhutan', clues: ['This landlocked Himalayan kingdom measures national success with a well-being index.', 'Its capital, Thimphu, is the world’s only national capital without traffic lights.', 'The Tiger’s Nest monastery clings to a cliff above the Paro Valley.'] } },
  { word: 'CLOUD', odd: { items: ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Moon'], answer: 4, group: 'Mercury, Venus, Mars, and Jupiter are planets.' }, country: { answer: 'Madagascar', clues: ['This island nation broke away from the Indian subcontinent roughly 88 million years ago.', 'Its unique wildlife includes many species of lemur found nowhere else in the wild.', 'It is the world’s fourth-largest island, off the southeastern coast of Africa.'] } },
  { word: 'BRICK', odd: { items: ['Violin', 'Cello', 'Viola', 'Harp', 'Flute'], answer: 4, group: 'Violin, cello, viola, and harp are string instruments.' }, country: { answer: 'Kyrgyzstan', clues: ['A tradition here involves a long epic poem called the Manas, passed down by oral storytellers.', 'The national flag’s sun has forty rays, said to represent forty united tribes.', 'This mountainous Central Asian country is home to Lake Issyk-Kul.'] } },
  { word: 'SHARE', odd: { items: ['April', 'June', 'September', 'November', 'October'], answer: 4, group: 'April, June, September, and November each have 30 days.' }, country: { answer: 'Suriname', clues: ['More than 90 percent of this country is covered by tropical rainforest.', 'It is the smallest sovereign country in South America by both area and population.', 'Dutch is its official language, and its capital is Paramaribo.'] } },
  { word: 'STONE', odd: { items: ['Square', 'Triangle', 'Pentagon', 'Hexagon', 'Sphere'], answer: 4, group: 'Square, triangle, pentagon, and hexagon are two-dimensional polygons.' }, country: { answer: 'Lesotho', clues: ['Every part of this country lies more than 1,000 meters above sea level.', 'It is a high-altitude enclave completely surrounded by one other country.', 'This kingdom is entirely surrounded by South Africa.'] } }
];

const today = new Date();
const dayKey = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
const epoch = Date.UTC(2026, 0, 1);
const dayNumber = Math.floor((Date.UTC(today.getFullYear(),today.getMonth(),today.getDate()) - epoch) / 86400000);
const puzzle = PUZZLES[((dayNumber % PUZZLES.length) + PUZZLES.length) % PUZZLES.length];
const storageKey = `threefold:${dayKey}`;
const fresh = () => ({ stage: 0, wordGuesses: [], wordDone: false, wordWon: false, oddDone: false, oddWon: false, countryTries: 0, countryDone: false, countryWon: false, oddSelected: null });
let state;
try { state = { ...fresh(), ...JSON.parse(localStorage.getItem(storageKey) || '{}') }; } catch { state = fresh(); }
const $ = id => document.getElementById(id);
const save = () => localStorage.setItem(storageKey, JSON.stringify(state));

function render() {
  $('date-label').textContent = new Intl.DateTimeFormat('en', { weekday:'long', month:'long', day:'numeric' }).format(today);
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
  const descriptions = ['You have six tries. Each guess must be a five-letter word.','Find the item that doesn’t share the connection.','Three clues. Three guesses. The clues get more specific.'];
  $('stage-title').textContent = titles[state.stage]; $('stage-description').textContent = descriptions[state.stage];
  $('footer-hint').textContent = ['Green means right letter, right place.','Select the odd one out.','A new clue appears after each wrong guess.'][state.stage];
  $('continue-button').classList.toggle('hidden', !((state.stage === 0 && state.wordDone) || (state.stage === 1 && state.oddDone)));
  $('continue-button').textContent = state.stage === 0 ? 'Continue to stage 2 →' : 'Continue to stage 3 →';
  drawWord(); drawOdd(); drawCountry();
  $('word-input').disabled = state.wordDone; $('country-input').disabled = state.countryDone;
}
function drawWord() {
  const grid = $('word-grid'); grid.innerHTML = '';
  for (let r=0;r<6;r++) for (let c=0;c<5;c++) {
    const tile = document.createElement('div'); tile.className='tile';
    const guess = state.wordGuesses[r];
    if (guess) { tile.textContent=guess[c]; tile.classList.add('filled'); const answer=puzzle.word; if (guess[c]===answer[c]) tile.classList.add('correct'); else if (answer.includes(guess[c])) tile.classList.add('present'); else tile.classList.add('absent'); }
    grid.append(tile);
  }
  if (state.wordDone) $('word-message').textContent = state.wordGuesses.at(-1) === puzzle.word ? `Lovely. The word was ${puzzle.word}.` : `The word was ${puzzle.word}.`;
}
function drawOdd() {
  const box=$('odd-options'); box.innerHTML='';
  puzzle.odd.items.forEach((item,i)=>{ const button=document.createElement('button'); button.className='odd-option'; button.textContent=item; button.disabled=state.oddDone; if(state.oddSelected===i) button.classList.add('selected'); if(state.oddDone&&i===puzzle.odd.answer) button.classList.add('reveal'); button.onclick=()=>selectOdd(i); box.append(button); });
  if(state.oddDone) $('odd-message').textContent = state.oddSelected===puzzle.odd.answer ? `That's it! ${puzzle.odd.group}` : `The answer was ${puzzle.odd.items[puzzle.odd.answer]}. ${puzzle.odd.group}`;
}
function drawCountry() {
  const tries=Math.min(state.countryTries,2); $('country-clue').textContent=puzzle.country.clues[tries];
  $('clue-count').querySelectorAll('.clue-dot').forEach((dot,i)=>{dot.classList.toggle('used',i<state.countryTries);dot.classList.toggle('current',i===tries&&!state.countryDone)});
  $('clue-count').querySelector('.clue-caption').textContent=state.countryDone?'ANSWER REVEALED':`CLUE ${tries+1} OF 3`;
  if(state.countryDone) $('country-clue').textContent=`${puzzle.country.clues[tries]} Answer: ${puzzle.country.answer}.`;
  $('country-message').textContent=state.countryDone?(state.countryWon?`Correct! You found ${puzzle.country.answer}.`:`The answer was ${puzzle.country.answer}.`):'';
}
function selectOdd(i) {
  state.oddSelected=i; state.oddDone=true; state.oddWon=i===puzzle.odd.answer; save(); render();
}
$('word-form').addEventListener('submit', e=>{
  e.preventDefault(); if(state.wordDone)return; const guess=$('word-input').value.trim().toUpperCase();
  if(!/^[A-Z]{5}$/.test(guess)){ $('word-message').textContent='Enter a five-letter word to guess.'; $('word-message').classList.add('error'); return; }
  $('word-message').classList.remove('error'); state.wordGuesses.push(guess); $('word-input').value='';
  if(guess===puzzle.word || state.wordGuesses.length>=6){state.wordDone=true;state.wordWon=guess===puzzle.word;if(guess!==puzzle.word)$('word-message').textContent=`The word was ${puzzle.word}.`;}
  save();render();
});
$('country-form').addEventListener('submit', e=>{
  e.preventDefault(); if(state.countryDone)return; const guess=$('country-input').value.trim().toLowerCase();
  if(!guess){$('country-message').textContent='Enter a country name to guess.';$('country-message').classList.add('error');return;}
  $('country-message').classList.remove('error'); state.countryTries++; state.countryWon=guess===puzzle.country.answer.toLowerCase(); state.countryDone=state.countryWon||state.countryTries>=3; $('country-input').value=''; save();render();
  if(!state.countryDone) $('country-message').textContent='Not quite. Here’s another clue.';
});
$('continue-button').addEventListener('click',()=>{state.stage=Math.min(state.stage+1,2);save();render();window.scrollTo({top:0,behavior:'smooth'});});
document.querySelectorAll('[data-stage-tab]').forEach(tab=>tab.addEventListener('click',()=>{const target=Number(tab.dataset.stageTab);if(target<=state.stage){state.stage=target;save();render();}}));
$('help-button').addEventListener('click',()=>$('help-dialog').showModal()); $('close-help').addEventListener('click',()=>$('help-dialog').close());
$('share-button').addEventListener('click',async()=>{
  const result=`Brainic ${dayKey}\n${state.wordDone?(state.wordWon?'🟩':'🟨'):'⬜'} Word  ·  ${state.oddDone?(state.oddWon?'🟩':'🟨'):'⬜'} Odd one out  ·  ${state.countryDone?(state.countryWon?'🟩':'🟨'):'⬜'} Country`;
  try { await navigator.clipboard.writeText(result); $('share-button').innerHTML='Copied! ✓'; setTimeout(()=>$('share-button').innerHTML='Share result <span>↗</span>',1600); } catch { window.prompt('Copy your result:',result); }
});
render();
