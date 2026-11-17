
const game = document.getElementById("game");

const levels = [
  "Rookie Detective",
  "Smart Detective",
  "Master Detective",
  "Expert Detective",
  "Elite Detective"
];

const badges = [
  "🥉 Bronze Detective",
  "🥈 Silver Detective",
  "🥇 Gold Detective",
  "🏅 Master Detective",
  "🏆 Elite Detective"
];

const cases = [
{
title:"The Missing Diamond",
story:"A precious diamond disappeared from the city museum.",
suspects:["Manager","Guard","Cleaner"],
statements:["I was checking office records.","I was near the main gate.","I was cleaning the hallway."],
clues:["Muddy footprints near the window.","The security key was missing.","A note mentioned midnight."],
culprit:"Guard",
reason:"The missing key and midnight note exposed the Guard."
},
{
title:"The Museum Painting",
story:"A famous painting disappeared from an art gallery.",
suspects:["Artist","Guide","Owner"],
statements:["I was preparing a new painting.","I was showing visitors around.","I was checking gallery records."],
clues:["A paint stain near the back door.","Someone carried a large frame.","The gallery key was with the Guide."],
culprit:"Guide",
reason:"The Guide had access to the gallery key."
},
{
title:"The Secret Diary",
story:"A secret diary disappeared from the school library.",
suspects:["Teacher","Student","Librarian"],
statements:["I was preparing class notes.","I was studying in the reading room.","I was arranging books."],
clues:["A bookmark near the desk.","A library card was left behind.","The diary was last seen near the librarian's desk."],
culprit:"Librarian",
reason:"The diary was last seen near the Librarian's desk."
},
{
title:"The Missing Trophy",
story:"The school championship trophy disappeared.",
suspects:["Coach","Captain","Peon"],
statements:["I was arranging sports equipment.","I was practising with my team.","I was cleaning the hall."],
clues:["A sports bag near the trophy room.","The trophy room key was missing.","A team list was beside the cupboard."],
culprit:"Captain",
reason:"The sports bag and team list pointed towards the Captain."
},
{
title:"The Stolen Necklace",
story:"A beautiful necklace disappeared during a family party.",
suspects:["Chef","Guest","Host"],
statements:["I was preparing dinner.","I was in the garden.","I was welcoming visitors."],
clues:["Gift wrapping near the room.","A guest list near the table.","The necklace box was found near the garden."],
culprit:"Guest",
reason:"The necklace box and the Guest's statement revealed the truth."
},
{
title:"The Locked Room",
story:"An important document disappeared from a locked office.",
suspects:["Secretary","Director","Accountant"],
statements:["I was arranging files.","I was in a meeting.","I was checking financial records."],
clues:["A file under the desk.","A meeting note had an incorrect time.","The office register showed an unusual entry."],
culprit:"Secretary",
reason:"The unusual office register entry pointed towards the Secretary."
},
{
title:"The Missing Laptop",
story:"A laptop disappeared from the computer laboratory.",
suspects:["Technician","Monitor","Student"],
statements:["I was repairing computers.","I was checking attendance.","I was working on an assignment."],
clues:["A USB drive near the desk.","The lab register had an extra entry.","A repair note beside the empty table."],
culprit:"Technician",
reason:"The repair note and lab register revealed the Technician's involvement."
},
{
title:"The Secret Treasure Map",
story:"An old treasure map disappeared from the town museum.",
suspects:["Historian","Photographer","Curator"],
statements:["I was reading old records.","I was taking pictures.","I was checking museum displays."],
clues:["An old photograph near the shelf.","A museum catalogue had a missing page.","The display key was with the Curator."],
culprit:"Curator",
reason:"The display key and missing catalogue page exposed the Curator."
},
{
title:"The Vanishing Robot",
story:"A prototype robot disappeared from a science exhibition.",
suspects:["Engineer","Volunteer","Judge"],
statements:["I was checking the circuits.","I was helping visitors.","I was reviewing projects."],
clues:["A wire near the exit.","A visitor badge was left behind.","The robot's display card was missing."],
culprit:"Volunteer",
reason:"The visitor badge and display card pointed towards the Volunteer."
},
{
title:"The Midnight Message",
story:"A secret message disappeared from a newspaper office.",
suspects:["Editor","Reporter","Printer"],
statements:["I was editing an article.","I was collecting news.","I was checking the printing machine."],
clues:["Ink marks on a table.","A torn newspaper page.","A message was found in the printing room."],
culprit:"Reporter",
reason:"The torn page and hidden message exposed the Reporter."
},
{
title:"The Lost Crown",
story:"A royal crown disappeared from an old palace.",
suspects:["Royal Guard","Advisor","Gardener"],
statements:["I was checking the palace gate.","I was reading royal documents.","I was watering the plants."],
clues:["A palace map was missing.","A footprint near the royal room.","A document mentioned the crown chamber."],
culprit:"Advisor",
reason:"The missing palace map pointed towards the Advisor."
},
{
title:"The Broken Clock",
story:"An antique clock disappeared from a collector's house.",
suspects:["Repairer","Guest","Housekeeper"],
statements:["I was repairing another clock.","I was visiting the collection.","I was cleaning the room."],
clues:["A small tool near the cabinet.","A visitor card was found.","The clock case had a repair label."],
culprit:"Repairer",
reason:"The repair label and tool pointed towards the Repairer."
},
{
title:"The Secret Formula",
story:"A research formula disappeared from a laboratory.",
suspects:["Scientist","Assistant","Security Officer"],
statements:["I was conducting research.","I was arranging laboratory notes.","I was checking the entrance."],
clues:["A missing notebook page.","A lab coat near the cabinet.","An unusual entry in the lab register."],
culprit:"Assistant",
reason:"The notebook and register evidence pointed towards the Assistant."
},
{
title:"The Empty Safe",
story:"An important award disappeared from a company safe.",
suspects:["Manager","Accountant","Receptionist"],
statements:["I was in a business meeting.","I was checking company accounts.","I was answering calls."],
clues:["A safe inventory sheet was missing.","A desk drawer was left open.","A meeting record showed an unusual time."],
culprit:"Accountant",
reason:"The missing inventory sheet pointed towards the Accountant."
},
{
title:"The Forgotten Key",
story:"An old museum key disappeared during an event.",
suspects:["Guide","Photographer","Ticket Clerk"],
statements:["I was explaining exhibits.","I was taking photographs.","I was checking tickets."],
clues:["A key-shaped mark near the display.","A camera strap was found.","The ticket desk had an unusual entry."],
culprit:"Photographer",
reason:"The camera evidence and key-shaped mark pointed towards the Photographer."
},
{
title:"The Hidden Manuscript",
story:"A rare manuscript disappeared from a university archive.",
suspects:["Professor","Researcher","Archivist"],
statements:["I was preparing a lecture.","I was reading research papers.","I was organising archive files."],
clues:["An archive label was found.","A reading slip was missing.","The archive register had a changed entry."],
culprit:"Archivist",
reason:"The changed archive entry exposed the Archivist."
},
{
title:"The Silent Gallery",
story:"A valuable sculpture disappeared from an art gallery.",
suspects:["Sculptor","Curator","Visitor"],
statements:["I was working in my studio.","I was arranging the gallery.","I was viewing the artwork."],
clues:["A sculpture catalogue was missing.","A display cloth was found.","A gallery checklist had an unusual mark."],
culprit:"Curator",
reason:"The gallery checklist pointed towards the Curator."
},
{
title:"The Missing Blueprint",
story:"A building blueprint disappeared from an architecture office.",
suspects:["Architect","Intern","Client"],
statements:["I was drawing a new plan.","I was organising documents.","I was reviewing the project."],
clues:["A drafting pencil was missing.","A document folder was left open.","The office log showed an unusual visit."],
culprit:"Intern",
reason:"The document folder and office log pointed towards the Intern."
},
{
title:"The Secret Photograph",
story:"An important photograph disappeared from a family museum.",
suspects:["Collector","Photographer","Assistant"],
statements:["I was checking my collection.","I was preparing a photo album.","I was arranging display frames."],
clues:["A photo frame was moved.","A camera case was found.","The display list had a missing number."],
culprit:"Photographer",
reason:"The camera case and missing display number exposed the Photographer."
},
{
title:"The Final Mystery",
story:"The legendary Golden Compass disappeared from the Detective Academy.",
suspects:["Chief Detective","Professor","Archivist"],
statements:["I was reviewing old cases.","I was preparing a lecture.","I was organising historical records."],
clues:["A secret academy file was opened.","A compass drawing was found.","An archive entry had been changed."],
culprit:"Archivist",
reason:"The changed archive entry revealed the final culprit."
}
];

let unlockedLevel = 0;
let score = 0;
let solvedCases = [];
let currentCase = 0;
let questioned = [];
let attempts = 0;
let evidenceCollected = false;

function showHome() {
  game.innerHTML = `
    <div class="case-box">
      <h2>🕵️ DETECTIVE ACADEMY</h2>
      <p>Welcome, Detective!</p>
      <p>Solve 20 mysteries and become the ultimate champion.</p>
      <h3>⭐ Total Score: ${score}</h3>
      <p>Cases Completed: ${solvedCases.length}/20</p>
    </div>
    <button onclick="showLevels()">ENTER ACADEMY</button>
  `;
}

function showLevels() {
  game.innerHTML = `
    <div class="case-box">
      <h2>🕵️ Detective Levels</h2>
      <p>Complete all four cases in a level to unlock the next.</p>
      <h3>⭐ Score: ${score}</h3>
    </div>
    ${levels.map((name,i)=>`
      <div class="case-box">
        <h3>${badges[i]}</h3>
        <h2>Level ${i+1}: ${name}</h2>
        <p>${i <= unlockedLevel ? "🔓 Unlocked" : "🔒 Locked"}</p>
        <p>Cases ${i*4+1} – ${i*4+4}</p>
        <p>Completed: ${solvedCases.filter(n=>Math.floor(n/4)===i).length}/4</p>
        <button ${i>unlockedLevel?"disabled":""}
          onclick="openLevel(${i})">
          ${i>unlockedLevel?"Locked":"Enter Level"}
        </button>
      </div>
    `).join("")}
  `;
}

function openLevel(level) {
  game.innerHTML = `
    <div class="case-box">
      <h2>${badges[level]}</h2>
      <h2>${levels[level]}</h2>
      <p>Complete all four mysteries to advance.</p>
    </div>
    ${[0,1,2,3].map(n=>{
      const index=level*4+n;
      return `
        <div class="case-box">
          <h3>📁 Case ${index+1}</h3>
          <p>${cases[index].title}</p>
          <p>${solvedCases.includes(index)?"✅ Completed":"🔍 Not completed"}</p>
          <button onclick="startCase(${index})">
            ${solvedCases.includes(index)?"Replay Case":"Start Investigation"}
          </button>
        </div>
      `;
    }).join("")}
    <button onclick="showLevels()">Back to Levels</button>
  `;
}

function startCase(index) {
  currentCase=index;
  questioned=[];
  attempts=0;
  evidenceCollected=false;

  const c=cases[index];

  game.innerHTML=`
    <div class="case-box">
      <h2>📂 Case ${index+1}: ${c.title}</h2>
      <p>${c.story}</p>
      <p>Interview all three suspects to collect their statements.</p>
    </div>
    <h2>👥 Suspects</h2>
    <div id="suspects"></div>
    <div id="result"></div>
    <button onclick="openLevel(Math.floor(currentCase/4))">Back to Level</button>
  `;

  renderSuspects();
}

function renderSuspects() {
  document.getElementById("suspects").innerHTML=
    cases[currentCase].suspects.map((s,i)=>`
      <button onclick="investigate(${i})">
        ${questioned.includes(i)?"✅ ":"👤 "}${s}
      </button>
    `).join("");

  if(questioned.length===3) {
    document.getElementById("result").innerHTML=`
      <div class="case-box">
        <h3>All suspects interviewed!</h3>
        <button onclick="showClues()">Open Evidence Room</button>
      </div>
    `;
  }
}

function investigate(index) {
  const c=cases[currentCase];
  questioned.push(index);
  const suspect=c.suspects[index];

  document.getElementById("result").innerHTML=`
    <div class="case-box">
      <h2>🕵️ Interview: ${suspect}</h2>
      <p>"${c.statements[index]}"</p>
      <p>Statement recorded in your case file.</p>
      <button onclick="renderSuspects()">Continue Investigation</button>
    </div>
  `;
}

function showClues() {
  evidenceCollected=true;
  const c=cases[currentCase];

  game.innerHTML=`
    <div class="case-box">
      <h2>🔎 Evidence Room</h2>
      <p>Study all three clues carefully.</p>
      ${c.clues.map((clue,i)=>`
        <p>📌 Clue ${i+1}: ${clue}</p>
      `).join("")}
    </div>
    <h2>Who is responsible?</h2>
    ${c.suspects.map(s=>`
      <button onclick="finalAnswer('${s}')">${s}</button>
    `).join("")}
    <p>⭐ Score: ${score}</p>
  `;
}

function finalAnswer(answer) {
  const c=cases[currentCase];

  if(answer===c.culprit) {
    if(!solvedCases.includes(currentCase)) {
      score+=100;
      solvedCases.push(currentCase);
    }

    const level=Math.floor(currentCase/4);
    const levelComplete=solvedCases.filter(n=>Math.floor(n/4)===level).length===4;

    if(levelComplete && level<4) {
      unlockedLevel=Math.max(unlockedLevel,level+1);
    }

    const champion=solvedCases.length===20;

    game.innerHTML=`
      <div class="case-box">
        <h2>🏆 CASE SOLVED!</h2>
        <p>${c.reason}</p>
        <h2>+100 Points</h2>
        <h3>Total Score: ${score}</h3>
        <p>${badges[level]}</p>
        ${levelComplete?`<h2>🎉 LEVEL COMPLETED!</h2>`:""}
        ${champion?`<h2>👑 DETECTIVE CHAMPION!</h2><p>You solved all 20 mysteries!</p>`:""}
      </div>
      <button onclick="openLevel(${level})">Back to Level</button>
      <button onclick="showLevels()">All Levels</button>
      ${champion?`<button onclick="resetGame()">Play Again</button>`:""}
    `;
  } else {
    attempts++;

    game.innerHTML=`
      <div class="case-box">
        <h2>❌ Incorrect Suspect!</h2>
        <p>${answer} is not the culprit.</p>
        <p>Study the evidence again.</p>
        <h3>Attempts: ${attempts}</h3>
      </div>
      <button onclick="showClues()">Try Again</button>
      <button onclick="startCase(${currentCase})">Restart Investigation</button>
    `;
  }
}

function resetGame() {
  unlockedLevel=0;
  score=0;
  solvedCases=[];
  showHome();
}

showHome();
