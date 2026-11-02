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

// A shared answer pool gives the Word stage a fresh answer each day instead
// of cycling through the five sample answers in the level data above.
const DAILY_WORD_BANK = `ABOUT ABOVE ABUSE ACTOR ACUTE ADAPT ADEPT ADMIT ADOPT ADULT AFTER AGAIN AGENT AGILE AGING AGREE AHEAD ALARM ALBUM ALERT ALIEN ALIGN ALIKE ALIVE ALLOW ALONE ALONG ALTER AMBER AMEND AMONG AMPLE AMUSE ANGEL ANGER ANGLE ANGRY APART APPLE APPLY ARENA ARGUE ARISE ARMOR AROMA ARRAY ASIDE ASSET ATLAS AUDIO AVOID AWARE AWFUL BADGE BAKER BASIC BASIL BEACH BEGIN BEING BELOW BENCH BERRY BIRTH BLACK BLAME BLANK BLAST BLAZE BLEND BLESS BLIND BLOCK BLOOD BLOOM BOARD BOOST BOOTH BOUND BRAIN BRAND BRAVE BREAD BREAK BRICK BRIDE BRIEF BRING BROAD BROKE BROWN BUILD CABLE CANDY CARRY CATCH CAUSE CEDAR CHAIN CHAIR CHALK CHARM CHART CHASE CHEAP CHECK CHEEK CHEER CHEST CHIEF CHILD CHILI CHINA CHIME CHORD CIGAR CIVIC CIVIL CLAIM CLASS CLEAN CLEAR CLERK CLICK CLIFF CLIMB CLOCK CLOSE CLOTH CLOUD COACH COAST COLOR COMET COMIC CORAL COUNT COURT COVER CRAFT CRANE CRASH CREAM CRIME CRISP CROSS CROWD CROWN CURVE CYCLE DAILY DANCE DEBUT DELAY DELTA DEPTH DIARY DIGIT DINER DIRTY DOING DONOR DOUBT DOUGH DRAFT DRAMA DRAWN DREAM DRESS DRIED DRINK DRIVE DROWN EAGER EARLY EARTH EIGHT ELDER ELECT EMAIL EMPTY ENEMY ENJOY ENTER ENTRY EQUAL ERROR EVENT EVERY EXACT EXTRA FAITH FALSE FANCY FAULT FEAST FENCE FEVER FIELD FIFTH FIFTY FIGHT FINAL FIRST FIXED FLAME FLASH FLEET FLESH FLOAT FLOOD FLOOR FLOUR FLUID FOCUS FORCE FORGE FORTH FORTY FORUM FOUND FRAME FRANK FRAUD FRESH FRONT FRUIT FUNNY GIANT GIVEN GLASS GLEAM GLIDE GLOBE GLOOM GLORY GLOVE GRACE GRADE GRAIN GRAND GRANT GRAPE GRASP GRASS GREAT GREEN GREET GRIEF GRILL GRIND GROAN GROUP GROVE GROWN GUARD GUESS GUEST GUIDE GUILT HABIT HAPPY HEART HEAVY HONEY HONOR HORSE HOTEL HOUSE HUMAN HUMOR HURRY IDEAL IMAGE INDEX INNER INPUT ISSUE IVORY JELLY JOINT JUDGE JUICE KNIFE KNOCK KNOWN LABEL LABOR LARGE LASER LATER LAUGH LAYER LEARN LEAST LEAVE LEGAL LEMON LEVEL LIGHT LIMIT LINEN LIVER LOCAL LOGIC LOOSE LUCKY LUNCH LYING MAGIC MAJOR MAKER MARCH MATCH MAYBE MAYOR MEANT MEDAL MEDIA MELON MERCY METAL METER MIGHT MINOR MINUS MODEL MONEY MONTH MORAL MOTOR MOUNT MOUSE MOUTH MOVIE MUSIC NAIVE NAKED NERVE NEVER NEWER NIGHT NINTH NOBLE NOISE NORTH NOVEL NURSE OCCUR OCEAN OFFER OFTEN OLDER OLIVE ORDER OTHER OWNER PAINT PANEL PAPER PARTY PEACE PEACH PEARL PHASE PHONE PHOTO PIANO PIECE PILOT PITCH PLACE PLAIN PLANE PLANT PLATE POINT POWER PRESS PRICE PRIDE PRIME PRINT PRIOR PRIZE PROOF PROUD PROVE QUEEN QUICK QUIET QUITE QUOTA RADIO RAISE RALLY RANGE RAPID RATIO REACH REACT READY REALM REBEL REFER RELAX REPAY REPLY RIGHT RIGID RIVAL RIVER ROBOT ROCKY ROGUE ROUGH ROUND ROUTE ROYAL RUGBY RULER RURAL SADLY SAINT SALAD SCALE SCARE SCENE SCOPE SCORE SENSE SERVE SEVEN SHALL SHAPE SHARE SHARP SHEEP SHEER SHEET SHELF SHELL SHIFT SHINE SHIRT SHOCK SHOES SHOOT SHORT SHOWN SIGHT SINCE SIXTH SKILL SKIRT SLEEP SLICE SLIDE SLOPE SMALL SMART SMILE SMOKE SNAKE SOLAR SOLID SOLVE SOUND SOUTH SPACE SPARE SPEAK SPEED SPEND SPENT SPICE SPIKE SPINE SPLIT SPOKE SPORT SPRAY SQUAD STAFF STAGE STAIN STAKE STALE STAND START STATE STEAM STEEL STEEP STEER STEPS STICK STILL STOCK STONE STOOD STORE STORM STORY STRIP STUDY STUFF STYLE SUGAR SUITE SUPER SWEAR SWEET SWIFT TABLE TAKEN TASTE TEACH TEETH TENSE THANK THEME THERE THICK THING THINK THIRD THOSE THREE THREW THUMB TIGER TIGHT TIMER TIRED TITLE TODAY TOKEN TOOTH TOTAL TOUCH TOUGH TOWER TRACK TRADE TRAIN TREAT TREND TRIAL TRIBE TRICK TRIED TRUCK TRULY TRUST TRUTH TWICE UNDER UNION UNITY UNTIL UPPER UPSET URBAN USAGE USUAL VALID VALUE VIDEO VIRUS VISIT VITAL VOCAL VOICE WASTE WATCH WATER WHEEL WHERE WHICH WHILE WHITE WHOLE WOMAN WOMEN WORLD WORRY WORSE WORST WORTH WOULD WRITE WRONG WROTE YACHT YIELD YOUNG YOUTH`.split(/\s+/);

function dailyWordFor(date, difficulty) {
  // Seed a separate shuffled order per 598-day cycle and difficulty. Dates
  // share an answer for everyone on the same local day, without repeats
  // within a cycle for that level.
  const epoch = Date.UTC(2026, 0, 1);
  const dayNumber = Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - epoch) / 86400000);
  const words = [...DAILY_WORD_BANK];
  const cycle = Math.floor(dayNumber / words.length);
  let seed = (cycle * 2654435761 + (difficulty === 'beginner' ? 101 : difficulty === 'intermediate' ? 211 : 307)) >>> 0;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }
  const wordIndex = ((dayNumber % words.length) + words.length) % words.length;
  return words[wordIndex];
}

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

const MATRIX_SHAPE_SETS = [
  [['●','○'],['■','□'],['▲','△']],
  [['◆','◇'],['●','○'],['■','□']],
  [['▲','△'],['◆','◇'],['●','○']],
  [['■','□'],['▲','△'],['◆','◇']],
  [['●','○'],['◆','◇'],['▲','△']]
];

function createMatrixPuzzle({shapeSet,shapeOffset=0,countOffset=0,fillOffset=0,expert=false,alternating=false,optionOffset=0}){
  const cellAt=(row,column,shapeShift=0,countShift=0,flipFill=false)=>{
    const shapeIndex=expert?(row+column+shapeOffset+shapeShift)%3:(row+shapeOffset+shapeShift)%3;
    const countIndex=expert?(row+2*column+countOffset+countShift)%3:(row+column+countOffset+countShift)%3;
    const solid=!alternating||((row+column+fillOffset+Number(flipFill))%2===0);
    return shapeSet[shapeIndex][solid?0:1].repeat(countIndex+1);
  };
  const cells=[];
  for(let row=0;row<3;row++)for(let column=0;column<3;column++)if(row!==2||column!==2)cells.push(cellAt(row,column));
  const answer=cellAt(2,2);
  const choices=alternating
    ? [answer,cellAt(2,2,0,1),cellAt(2,2,1,0),cellAt(2,2,0,0,true)]
    : [answer,cellAt(2,2,0,1),cellAt(2,2,1,0),cellAt(2,2,0,2)];
  const offset=optionOffset%choices.length;
  const options=[...choices.slice(offset),...choices.slice(0,offset)];
  const explanation=expert
    ? 'Three rules overlap: shapes cycle one step across each row and down each column; a separate 1–2–3 count cycle shifts with each row; filled and outline tiles alternate across neighboring cells.'
    : alternating
      ? 'Each row has its own shape. Counts cycle diagonally through 1, 2, and 3, shifting by one in each row, while filled and outline tiles alternate like a checkerboard.'
      : 'Each row has its own shape. The counts cycle through 1, 2, and 3, shifting one position in each row.';
  return {type:'shape',cells,answer,options,explanation};
}

const MATRIX_COLORS=['🔴','🟡','🔵','🟢'];
const MATRIX_ARROWS=['↑','→','↓','←'];

function createColorMatrix({offset=0,countOffset=0,optionOffset=0,complexity=0}){
  const colorAt=(row,column)=>(row+column+offset)%MATRIX_COLORS.length;
  const countAt=(row,column)=>complexity===0?1:(row+(complexity>1?2*column:column)+countOffset)%3+1;
  const valueAt=(row,column)=>MATRIX_COLORS[colorAt(row,column)].repeat(countAt(row,column));
  const cells=[];
  for(let row=0;row<3;row++)for(let column=0;column<3;column++)if(row!==2||column!==2)cells.push(valueAt(row,column));
  const answer=valueAt(2,2);
  const choices=complexity===0?[...MATRIX_COLORS]:[
    answer,
    MATRIX_COLORS[(colorAt(2,2)+1)%MATRIX_COLORS.length].repeat(countAt(2,2)),
    MATRIX_COLORS[colorAt(2,2)].repeat(countAt(2,2)%3+1),
    MATRIX_COLORS[(colorAt(2,2)+2)%MATRIX_COLORS.length].repeat(countAt(2,2)===1?3:countAt(2,2)-1)
  ];
  const shift=optionOffset%choices.length;
  const explanation=complexity===0
    ? 'The color advances one step around the red, yellow, blue, green cycle every time you move right or down.'
    : complexity===1
      ? 'The color advances one step right and down. Circle counts also cycle through 1, 2, and 3, shifting one step in each new row.'
      : 'The color advances one step right and down. Counts cycle through 1, 2, and 3; they advance one step down and two steps right.';
  return {type:'color',cells,answer,options:[...choices.slice(shift),...choices.slice(0,shift)],explanation};
}

function createArrowMatrix({offset=0,countOffset=0,optionOffset=0,complexity=0}){
  const directionAt=(row,column)=>(row+column+offset)%MATRIX_ARROWS.length;
  const countAt=(row,column)=>complexity===0?1:(row+(complexity>1?2*column:column)+countOffset)%3+1;
  const valueAt=(row,column)=>MATRIX_ARROWS[directionAt(row,column)].repeat(countAt(row,column));
  const cells=[];
  for(let row=0;row<3;row++)for(let column=0;column<3;column++)if(row!==2||column!==2)cells.push(valueAt(row,column));
  const answer=valueAt(2,2);
  const choices=complexity===0?[...MATRIX_ARROWS]:[
    answer,
    MATRIX_ARROWS[(directionAt(2,2)+1)%MATRIX_ARROWS.length].repeat(countAt(2,2)),
    MATRIX_ARROWS[directionAt(2,2)].repeat(countAt(2,2)%3+1),
    MATRIX_ARROWS[(directionAt(2,2)+2)%MATRIX_ARROWS.length].repeat(countAt(2,2)===1?3:countAt(2,2)-1)
  ];
  const shift=optionOffset%choices.length;
  const explanation=complexity===0
    ? 'Each step to the right or down turns the arrow 90 degrees clockwise.'
    : complexity===1
      ? 'Each step right or down turns the arrow 90 degrees clockwise. Arrow counts cycle through 1, 2, and 3, shifting one step in each new row.'
      : 'Each step right or down turns the arrow 90 degrees clockwise. Counts cycle through 1, 2, and 3; they advance one step down and two steps right.';
  return {type:'arrow',cells,answer,options:[...choices.slice(shift),...choices.slice(0,shift)],explanation};
}

function createNumberMatrix({operation='sum',offset=0,optionOffset=0}){
  const rows=[];
  for(let row=0;row<3;row++){
    const left=row+2+offset;
    const right=row+3+offset;
    const result=operation==='product'?left*right:operation==='sumSquares'?left*left+right*right:left+right;
    rows.push([left,right,result]);
  }
  const cells=rows.flatMap((values,row)=>row===2?values.slice(0,2):values).map(String);
  const [left,right,answerNumber]=rows[2];
  const answer=String(answerNumber);
  const wrong=operation==='product'?[left+right,answerNumber-4,answerNumber+4]:operation==='sumSquares'?[left*right,left+right,answerNumber-8]:[left*right,answerNumber-2,answerNumber+2];
  const choices=[answer,...wrong.map(String)];
  const shift=optionOffset%choices.length;
  const explanation=operation==='product'
    ? 'In each row, multiply the first two numbers to get the third. The first two numbers each increase by one as you move down.'
    : operation==='sumSquares'
      ? 'In each row, square the first two numbers and add the results to get the third. The first two numbers each increase by one as you move down.'
      : 'In each row, add the first two numbers to get the third. The first two numbers each increase by one as you move down.';
  return {type:'number',cells,answer,options:[...choices.slice(shift),...choices.slice(0,shift)],explanation};
}

function createMatrixSet(shapePuzzles,numberOperations,complexity){
  return [
    ...shapePuzzles,
    ...MATRIX_COLORS.map((_,offset)=>createColorMatrix({offset,countOffset:offset,optionOffset:(offset+1)%4,complexity})),
    ...MATRIX_ARROWS.map((_,offset)=>createArrowMatrix({offset,countOffset:offset,optionOffset:(offset+2)%4,complexity})),
    ...numberOperations.map((operation,index)=>createNumberMatrix({operation,offset:index,optionOffset:(index+1)%4}))
  ];
}

const MATRIX_SETS = {
  beginner: createMatrixSet([
    createMatrixPuzzle({shapeSet:MATRIX_SHAPE_SETS[0],countOffset:0,optionOffset:0}),
    createMatrixPuzzle({shapeSet:MATRIX_SHAPE_SETS[1],countOffset:1,optionOffset:1}),
    createMatrixPuzzle({shapeSet:MATRIX_SHAPE_SETS[2],countOffset:2,optionOffset:2}),
    createMatrixPuzzle({shapeSet:MATRIX_SHAPE_SETS[3],countOffset:0,optionOffset:3}),
    createMatrixPuzzle({shapeSet:MATRIX_SHAPE_SETS[4],countOffset:1,optionOffset:1})
  ],['sum','sum','sum'],0),
  intermediate: createMatrixSet([
    createMatrixPuzzle({shapeSet:MATRIX_SHAPE_SETS[0],countOffset:0,alternating:true,optionOffset:1}),
    createMatrixPuzzle({shapeSet:MATRIX_SHAPE_SETS[1],countOffset:1,fillOffset:1,alternating:true,optionOffset:2}),
    createMatrixPuzzle({shapeSet:MATRIX_SHAPE_SETS[2],countOffset:2,alternating:true,optionOffset:3}),
    createMatrixPuzzle({shapeSet:MATRIX_SHAPE_SETS[3],countOffset:0,fillOffset:1,alternating:true,optionOffset:1}),
    createMatrixPuzzle({shapeSet:MATRIX_SHAPE_SETS[4],countOffset:1,alternating:true,optionOffset:2})
  ],['sum','product','product'],1),
  expert: createMatrixSet([
    createMatrixPuzzle({shapeSet:MATRIX_SHAPE_SETS[0],shapeOffset:0,countOffset:0,alternating:true,expert:true,optionOffset:2}),
    createMatrixPuzzle({shapeSet:MATRIX_SHAPE_SETS[1],shapeOffset:1,countOffset:1,fillOffset:1,alternating:true,expert:true,optionOffset:3}),
    createMatrixPuzzle({shapeSet:MATRIX_SHAPE_SETS[2],shapeOffset:2,countOffset:2,alternating:true,expert:true,optionOffset:1}),
    createMatrixPuzzle({shapeSet:MATRIX_SHAPE_SETS[3],shapeOffset:1,countOffset:0,fillOffset:1,alternating:true,expert:true,optionOffset:2}),
    createMatrixPuzzle({shapeSet:MATRIX_SHAPE_SETS[4],shapeOffset:2,countOffset:1,alternating:true,expert:true,optionOffset:3})
  ],['sumSquares','sumSquares','sumSquares'],2)
};

const today = new Date();
const dayKey = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
const epoch = Date.UTC(2026, 0, 1);
const dayNumber = Math.floor((Date.UTC(today.getFullYear(),today.getMonth(),today.getDate()) - epoch) / 86400000);
const puzzleIndex = ((dayNumber % 5) + 5) % 5;
const matrixPuzzleCount = MATRIX_SETS.beginner.length;
const matrixPuzzleIndex = ((dayNumber % matrixPuzzleCount) + matrixPuzzleCount) % matrixPuzzleCount;
const storageKey = `brainic:${dayKey}`;
const badgeStorageKey = 'brainic:badges';
const themeStorageKey = 'brainic:theme';
const petChoiceStorageKey = 'brainic:pet-companion:v1';
const PET_CHOICES = {
  dog:{name:'Dog'},
  cat:{name:'Cat'},
  bird:{name:'Bird'},
  whale:{name:'Whale'}
};
const DAILY_AFFIRMATIONS = [
  'You showed up, stayed curious, and kept going. That matters.',
  'Every challenge you try is a chance to grow.',
  'Your patience and persistence are worth celebrating.',
  'Progress is built one thoughtful step at a time.',
  'You can meet hard things one step at a time.',
  'Your effort today is something to be proud of.',
  'Keep trusting your ability to learn as you go.',
  'Small moments of focus can add up to meaningful progress.',
  'You deserve credit for finishing what you started.',
  'You have more courage and curiosity than you think.',
  'A tough puzzle does not define you; your willingness to try does.',
  'Take pride in making time for your own growth.',
  'You are allowed to learn at your own pace.',
  'Showing up for yourself is already a meaningful win.',
  'You can be proud of the care and focus you brought today.'
];
const BADGE_DEFINITIONS = {
  word: { name:'Word Whiz', icon:'🧠', description:'Solved the daily word.' },
  connections: { name:'Pattern Finder', icon:'🔗', description:'Found all four word groups.' },
  connectionsPerfect: { name:'Flawless Link', icon:'🏆', description:'Found all four word groups without a mistake.' },
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
    if (state.wordWon && state.wordDone && Array.isArray(state.wordGuesses) && state.wordGuesses[state.wordGuesses.length-1]===dailyWordFor(today,state.difficulty)) earned.push('word');
    if (state.connectionsSolved.length===4) earned.push('connections');
    if (state.connectionsSolved.length===4 && state.connectionsMistakes===4) earned.push('connectionsPerfect');
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
const fresh = () => ({ gameVersion:6, difficulty:null, started:false, petChoicePending:false, stage:0, wordAnswer:null, wordGuesses:[], wordDone:false, wordWon:false, wordCelebrationSeen:false, connectionsBoard:[], connectionsSelected:[], connectionsSolved:[], connectionsMistakes:4, connectionsDone:false, connectionsMessage:'', countryTries:0, countryDone:false, countryWon:false, countryHint:null, matrixDone:false, matrixWon:false, matrixChoice:null, affirmation:null });
let state;
try {
  const stored=JSON.parse(localStorage.getItem(storageKey)||'{}');
  state={...fresh(),...stored};
  if (![3,4,5,6].includes(state.gameVersion)||!state.difficulty) state=fresh();
  else {
    if(state.gameVersion<6){state.matrixDone=false;state.matrixWon=false;state.matrixChoice=null;}
    state.gameVersion=6;
  }
} catch { state = fresh(); }
const $ = id => document.getElementById(id);
const storedPetChoice=localStorage.getItem(petChoiceStorageKey);
let selectedPetType=Object.prototype.hasOwnProperty.call(PET_CHOICES,storedPetChoice)?storedPetChoice:(state.started?'cat':null);
let activeTheme=localStorage.getItem(themeStorageKey)==='dark'?'dark':'light';
function applyTheme(){
  document.documentElement.dataset.theme=activeTheme;
  const dark=activeTheme==='dark';
  const themeMeta=document.querySelector('meta[name="theme-color"]');
  if(themeMeta)themeMeta.content=dark?'#11101b':'#f0edfc';
  $('theme-toggle').setAttribute('aria-label',`Switch to ${dark?'light':'dark'} mode`);
  $('theme-icon').textContent=dark?'☀':'☾';
  $('theme-label').textContent=dark?'Light':'Dark';
}
const save = () => localStorage.setItem(storageKey, JSON.stringify(state));
const currentPuzzle = () => state.difficulty ? { ...PUZZLES[state.difficulty][puzzleIndex], word:dailyWordFor(today,state.difficulty), connections:CONNECTION_SETS[state.difficulty][puzzleIndex], matrix:MATRIX_SETS[state.difficulty][matrixPuzzleIndex] } : null;

function syncWordPuzzleProgress(){
  if(!state.difficulty)return;
  const answer=dailyWordFor(today,state.difficulty);
  if(state.wordAnswer===answer)return;
  const guesses=Array.isArray(state.wordGuesses)?state.wordGuesses:[];
  const legacyWinStillMatches=state.wordAnswer==null&&state.wordWon&&state.wordDone&&guesses[guesses.length-1]===answer;
  const staleWin=state.wordWon&&!legacyWinStillMatches;
  if(!legacyWinStillMatches){
    state.wordGuesses=[];
    state.wordDone=false;
    state.wordWon=false;
    state.wordCelebrationSeen=false;
    $('word-message').textContent='';
  }
  state.wordAnswer=answer;
  if(staleWin){
    const badges=readBadges();
    const validBadges=badges.filter(badge=>badge.id!==`${dayKey}:${state.difficulty}:word`);
    if(validBadges.length!==badges.length)localStorage.setItem(badgeStorageKey,JSON.stringify(validBadges));
  }
  save();
}

function syncPetAppearance(){
  const pet=$('running-pet');
  if(!selectedPetType||!PET_CHOICES[selectedPetType]){pet.classList.add('hidden');return;}
  pet.classList.remove('hidden');
  Object.keys(PET_CHOICES).forEach(type=>pet.classList.remove(`pet-type-${type}`));
  pet.classList.add(`pet-type-${selectedPetType}`);
  $('pet-illustration').src=`assets/pets/${selectedPetType}.svg`;
  pet.setAttribute('aria-label',`Your ${PET_CHOICES[selectedPetType].name}. Hover, focus, or tap for a kind message.`);
}

function initRunningPet(){
  const pet=$('running-pet');
  const message=$('pet-message');
  const niceMessages=[
    'You are doing better than you think.',
    'Small steps count. I believe in you!',
    'Your curiosity makes the world brighter.',
    'You deserve to feel proud of yourself.',
    'Keep going at your own pace. You’ve got this.',
    'I’m glad you’re here. Let’s try one more thing!'
  ];
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let messageIndex=-1;
  let movementTimer=null;
  let resumeTimer=null;
  let clickMoveTimer=null;
  let paused=false;
  let movingToClick=false;
  const movementInterval=30000;

  function scheduleMove(delay=movementInterval){
    clearTimeout(movementTimer);
    if(reducedMotion.matches||!selectedPetType||pet.classList.contains('hidden'))return;
    movementTimer=setTimeout(movePet,delay);
  }

  function setMessage(){
    let next=messageIndex;
    while(niceMessages.length>1&&next===messageIndex)next=Math.floor(Math.random()*niceMessages.length);
    messageIndex=next;
    const words=niceMessages[messageIndex];
    message.textContent=words;
    const name=PET_CHOICES[selectedPetType]?.name||'Pet';
    pet.setAttribute('aria-label',`${name} says: ${words}`);
  }
  function updateExpanded(){
    pet.setAttribute('aria-expanded',String(pet.matches(':hover')||(document.activeElement===pet&&pet.matches(':focus-visible'))||pet.classList.contains('message-open')));
  }
  function freeze(){
    paused=true;
    clearTimeout(movementTimer);
    const rect=pet.getBoundingClientRect();
    pet.style.transitionDuration='0ms, 0ms';
    pet.style.right='auto';pet.style.bottom='auto';
    pet.style.left=`${rect.left}px`;pet.style.top=`${rect.top}px`;
  }
  function points(){
    const size=pet.getBoundingClientRect();
    const topbar=document.querySelector('.topbar');
    const left=10;
    const right=Math.max(left,window.innerWidth-size.width-10);
    const top=Math.max(62,(topbar?.getBoundingClientRect().bottom||48)+8);
    const bottom=Math.max(top,window.innerHeight-size.height-14);
    const blockers=[...document.querySelectorAll('h1,h2,h3,p,button,input,textarea,select,.intro-tile,.stage-nav,.word-grid,.tile,.word-award,.solved-group,.connections-meta,.connections-prompt,.connections-grid,.connections-actions,.stage-footer,.clue-card,.country-hints,.matrix-grid,.matrix-options,.matrix-explanation,footer')]
      .filter(element=>element!==pet&&element.getClientRects().length)
      .map(element=>element.getBoundingClientRect());
    for(let attempt=0;attempt<60;attempt++){
      const target={x:left+Math.random()*(right-left),y:top+Math.random()*(bottom-top)};
      const clear=blockers.every(rect=>target.x+size.width<rect.left-8||target.x>rect.right+8||target.y+size.height<rect.top-8||target.y>rect.bottom+8);
      if(clear)return [target];
    }
    return [{x:right,y:top}];
  }
  function setStaticPosition(){
    clearTimeout(movementTimer);
    pet.style.transitionDuration='0ms, 0ms';
    pet.style.left='auto';pet.style.top='auto';pet.style.right='12px';pet.style.bottom='12px';
  }
  function movePetTo(clientX,clientY){
    if(reducedMotion.matches||!selectedPetType||pet.classList.contains('hidden'))return;
    paused=false;movingToClick=true;
    clearTimeout(movementTimer);clearTimeout(resumeTimer);clearTimeout(clickMoveTimer);
    pet.classList.remove('message-open');
    const rect=pet.getBoundingClientRect();
    const maxX=Math.max(4,window.innerWidth-rect.width-4);
    const maxY=Math.max(4,window.innerHeight-rect.height-4);
    const x=Math.max(4,Math.min(maxX,clientX-rect.width/2));
    const y=Math.max(4,Math.min(maxY,clientY-rect.height/2));
    const distance=Math.hypot(x-rect.left,y-rect.top);
    const duration=Math.max(450,Math.min(2400,distance/0.3));
    if(Math.abs(x-rect.left)>3)pet.style.setProperty('--pet-facing',x<rect.left?'-1':'1');
    pet.classList.toggle('pet-near-left',x<window.innerWidth/2);
    pet.classList.toggle('pet-near-right',x>=window.innerWidth/2);
    pet.style.transitionDuration=`${duration}ms, ${duration}ms`;
    pet.style.left=`${x}px`;pet.style.top=`${y}px`;
    clickMoveTimer=setTimeout(()=>{
      movingToClick=false;
      if(pet.matches(':hover')){setMessage();paused=true;}
      else scheduleMove();
      updateExpanded();
    },duration+40);
  }
  function movePet(){
    if(reducedMotion.matches){setStaticPosition();return;}
    if(!selectedPetType||pet.classList.contains('hidden'))return;
    if(paused||pet.matches(':hover')||document.activeElement===pet||pet.classList.contains('message-open'))return;
    let target=points()[0];
    const rect=pet.getBoundingClientRect();
    let distance=Math.hypot(target.x-rect.left,target.y-rect.top);
    let attempts=0;
    while(distance<100&&attempts<5){target=points()[0];distance=Math.hypot(target.x-rect.left,target.y-rect.top);attempts++;}
    const duration=Math.max(1200,Math.min(6200,distance/0.22));
    if(Math.abs(target.x-rect.left)>3)pet.style.setProperty('--pet-facing',target.x<rect.left?'-1':'1');
    pet.classList.toggle('pet-near-left',target.x<window.innerWidth/2);
    pet.classList.toggle('pet-near-right',target.x>=window.innerWidth/2);
    pet.style.transitionDuration=`${duration}ms, ${duration}ms`;
    pet.style.left=`${target.x}px`;pet.style.top=`${target.y}px`;
    scheduleMove(movementInterval);
  }
  function resume(){
    clearTimeout(resumeTimer);
    resumeTimer=setTimeout(()=>{
      if(pet.matches(':hover')||document.activeElement===pet||pet.classList.contains('message-open'))return;
      paused=false;scheduleMove();
    },700);
  }

  pet.addEventListener('pointerenter',()=>{if(movingToClick)return;freeze();setMessage();updateExpanded();});
  pet.addEventListener('pointerleave',()=>{updateExpanded();if(!movingToClick&&document.activeElement!==pet&&!pet.classList.contains('message-open'))resume();});
  pet.addEventListener('focus',()=>{freeze();setMessage();updateExpanded();});
  pet.addEventListener('blur',()=>{updateExpanded();if(!pet.matches(':hover')&&!pet.classList.contains('message-open'))resume();});
  pet.addEventListener('click',()=>{
    const open=pet.classList.toggle('message-open');
    if(open){freeze();setMessage();}else if(!pet.matches(':hover')&&document.activeElement!==pet)resume();
    updateExpanded();
  });
  pet.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&pet.classList.contains('message-open')){pet.classList.remove('message-open');pet.blur();updateExpanded();resume();}
  });
  document.addEventListener('pointerdown',event=>{
    if(pet.contains(event.target))return;
    if(pet.classList.contains('message-open'))pet.classList.remove('message-open');
    updateExpanded();
    if(!pet.matches(':hover')&&document.activeElement!==pet)resume();
  });
  document.addEventListener('dblclick',event=>{
    if(pet.contains(event.target))return;
    movePetTo(event.clientX,event.clientY);
  });
  window.addEventListener('resize',()=>{
    if(reducedMotion.matches){setStaticPosition();return;}
    const rect=pet.getBoundingClientRect();
    const x=Math.max(8,Math.min(rect.left,window.innerWidth-rect.width-8));
    const y=Math.max(62,Math.min(rect.top,window.innerHeight-rect.height-8));
    pet.style.transitionDuration='0ms, 0ms';pet.style.left=`${x}px`;pet.style.top=`${y}px`;
  });
  window.addEventListener('brainic:pet-selected',()=>{paused=false;scheduleMove();});
  if(typeof reducedMotion.addEventListener==='function')reducedMotion.addEventListener('change',()=>reducedMotion.matches?setStaticPosition():scheduleMove());
  else if(typeof reducedMotion.addListener==='function')reducedMotion.addListener(()=>reducedMotion.matches?setStaticPosition():scheduleMove());
  if(reducedMotion.matches)setStaticPosition();else scheduleMove();
}

function render() {
  syncWordPuzzleProgress();
  if(state.petChoicePending&&selectedPetType){state.petChoicePending=false;state.started=true;save();}
  syncEarnedBadges();
  applyTheme();
  $('date-label').textContent = new Intl.DateTimeFormat('en', { weekday:'long', month:'long', day:'numeric' }).format(today);
  $('difficulty-screen').classList.toggle('hidden', state.started);
  $('difficulty-screen').dataset.difficulty=state.difficulty||'';
  $('stage-nav').classList.toggle('hidden', !state.started);
  $('game-card').classList.toggle('hidden', !state.started);
  $('game-card').dataset.stage=String(state.stage);
  $('below-card').classList.toggle('hidden', !(state.started && state.stage===3 && state.matrixDone));
  document.querySelectorAll('.difficulty-option').forEach(button => {
    const selected = button.dataset.difficulty === state.difficulty;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  const petChoicePending=!state.started&&state.petChoicePending&&!selectedPetType;
  $('difficulty-screen').setAttribute('aria-labelledby',petChoicePending?'pet-choice-title':'difficulty-title');
  $('difficulty-picker').classList.toggle('hidden',petChoicePending);
  $('pet-choice-step').classList.toggle('hidden',!petChoicePending);
  syncPetAppearance();
  if (!state.started) return;

  const puzzle = currentPuzzle();
  if(state.matrixDone&&!state.affirmation){
    const affirmationIndex=((dayNumber%DAILY_AFFIRMATIONS.length)+DAILY_AFFIRMATIONS.length)%DAILY_AFFIRMATIONS.length;
    state.affirmation=DAILY_AFFIRMATIONS[affirmationIndex];
    save();
  }
  $('daily-affirmation').textContent=state.matrixDone?state.affirmation||'':'';
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
  const descriptions = ['You have six tries. Each guess must be a five-letter word.','Sort all 16 words into four groups of four.','Three clues, three guesses, and one optional hint.','Find the rule that completes the pattern grid.'];
  $('stage-title').textContent = titles[state.stage]; $('stage-description').textContent = descriptions[state.stage];
  $('footer-hint').textContent = ['Green means right letter, right place.','Each word belongs to exactly one group.','Reveal the continent or flag colors if you need a nudge.','Look for changes in shape, color, count, direction, or number.'][state.stage];
  const stageComplete=[state.wordDone,state.connectionsDone,state.countryDone,state.matrixDone];
  $('continue-button').classList.toggle('hidden', !(state.stage<3 && stageComplete[state.stage]));
  $('continue-button').textContent = `Continue to stage ${state.stage+2} →`;
  drawWord(puzzle); drawConnections(puzzle); drawCountry(puzzle); drawMatrix(puzzle);
  $('word-input').disabled = state.wordDone;
  $('word-form').querySelector('button[type="submit"]').disabled=state.wordDone;
  $('country-input').disabled = state.countryDone;
}

function drawMatrix(puzzle) {
  const matrix=puzzle.matrix;
  const grid=$('matrix-grid');grid.innerHTML='';
  grid.className=`matrix-grid matrix-grid-${matrix.type||'shape'}`;
  [...matrix.cells,null].forEach((symbols,index)=>{
    const tile=document.createElement('div');tile.className='matrix-tile';
    if(index===8){tile.classList.add('matrix-missing');tile.textContent=state.matrixDone?matrix.answer:'?';tile.setAttribute('aria-label',state.matrixDone?`Answer: ${matrix.answer}`:'Missing tile');}
    else{tile.textContent=symbols;tile.setAttribute('aria-label',matrixValueLabel(symbols,matrix.type));}
    grid.append(tile);
  });
  const options=$('matrix-options');options.innerHTML='';
  options.className=`matrix-options matrix-options-${matrix.type||'shape'}`;
  matrix.options.forEach((value,index)=>{
    const button=document.createElement('button');button.type='button';button.className='matrix-option';button.textContent=value;
    button.setAttribute('aria-label',`Option ${String.fromCharCode(65+index)}: ${matrixValueLabel(value,matrix.type)}`);
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

function matrixValueLabel(value,type){
  const items=Array.from(value);
  if(type==='number')return `Number ${value}`;
  if(type==='arrow'){
    const direction={'↑':'up','→':'right','↓':'down','←':'left'}[items[0]]||'directional';
    return `${items.length} ${direction}-pointing arrow${items.length===1?'':'s'}`;
  }
  if(type==='color'){
    const color={'🔴':'red','🟡':'yellow','🔵':'blue','🟢':'green'}[items[0]]||'colored';
    return `${items.length} ${color} circle${items.length===1?'':'s'}`;
  }
  return `${items.length} ${items[0]}`;
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
  const correctlySolved=state.wordWon&&state.wordDone&&state.wordGuesses[state.wordGuesses.length-1]===puzzle.word;
  award.classList.toggle('hidden', !correctlySolved);
  const celebrateNow = correctlySolved && !state.wordCelebrationSeen;
  award.classList.toggle('celebrate', celebrateNow);
  if (celebrateNow) { state.wordCelebrationSeen = true; save(); }
  const wordMessage=$('word-message');
  if(state.wordDone){
    const revealKey=`${correctlySolved?'solved':'revealed'}:${puzzle.word}`;
    if(wordMessage.dataset.reveal!==revealKey){
      const label=document.createElement('span');
      label.className='word-reveal-label';
      label.textContent=correctlySolved?'Lovely! You found the word':'The word was';
      const answer=document.createElement('strong');
      answer.className='word-reveal-answer';
      answer.textContent=puzzle.word;
      wordMessage.replaceChildren(label,answer);
      wordMessage.dataset.reveal=revealKey;
    }
    wordMessage.classList.remove('error');
    wordMessage.classList.add('word-revealed');
  }else if(wordMessage.classList.contains('word-revealed')){
    wordMessage.classList.remove('word-revealed');
    delete wordMessage.dataset.reveal;
    wordMessage.textContent='';
  }
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
  const feedback=$('connections-message');
  feedback.textContent=state.connectionsMessage;
  feedback.classList.toggle('feedback-one-away',state.connectionsMessage.startsWith('One away!'));
  feedback.classList.toggle('feedback-success',state.connectionsMessage.startsWith('Nice connection!')||state.connectionsMessage.startsWith('All four connections'));
  feedback.classList.toggle('feedback-error',state.connectionsMessage.startsWith('Not quite.')||state.connectionsMessage.startsWith('Out of mistakes'));
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

document.querySelectorAll('.difficulty-option').forEach(button=>button.addEventListener('click',()=>{
  state.difficulty=button.dataset.difficulty;
  if(!selectedPetType){state.petChoicePending=true;save();render();return;}
  state.petChoicePending=false;state.started=true;save();render();
}));
document.querySelectorAll('[data-pet-option]').forEach(button=>button.addEventListener('click',()=>{
  const choice=button.dataset.petOption;
  if(!Object.prototype.hasOwnProperty.call(PET_CHOICES,choice))return;
  selectedPetType=choice;
  localStorage.setItem(petChoiceStorageKey,choice);
  state.petChoicePending=false;state.started=true;save();render();
  window.dispatchEvent(new Event('brainic:pet-selected'));
}));
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
initRunningPet();
