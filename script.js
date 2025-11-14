// ==================== SCENES ====================
const scenes = {
  start:{id:'start', text:[`Long ago, in a world touched by violet nights and silver dawns, a prophecy spoke of a girl named Wiam —  
a girl whose heart would call back the stars.  
Tonight… her story begins.`], choices:[{text:'Begin your journey', next:'awakening'}]},
  awakening:{id:'awakening', text:[`Wiam wakes in a quiet village. Birds circle above strange clouds forming near the mountains.  
Something deep inside her whispers: “Go.”`], choices:[
      {text:'Explore the Forest of Whispers', next:'forest', effect:{brave:1}},
      {text:'Visit the village elder', next:'elder', effect:{kind:1}},
      {text:'Investigate the glowing river', next:'river', effect:{light:1}}
    ]},
  forest:{id:'forest', text:[`The forest hums softly. Light gathers between the trees as if guiding you.  
A luminous wolf appears and nods, leading you deeper.`], choices:[
      {text:'Follow the wolf', next:'forest_stone', effect:{trust:1}},
      {text:'Run back to the village', next:'elder'}
    ]},
  forest_stone:{id:'forest_stone', text:[`The wolf leads you to an ancient stone engraved with your name: WIAM.  
Your hand glows when you touch it.`], choices:[
      {text:'Take the stone', next:'elder', effect:{light:2}},
      {text:'Leave it and run', next:'river'}
    ]},
  elder:{id:'elder', text:[`The village elder waits as if expecting you.  
“Child… the prophecy has woken because of you.”  
He gives you a necklace map pointing to three places.`], choices:[
      {text:'Go to the Tower of Stars', next:'tower'},
      {text:'Go to the Crystal Lake', next:'lake'},
      {text:'Go to the Gates of Shadow', next:'gates'}
    ]},
  river:{id:'river', text:[`A shimmering ripple splits the river in two.  
A gentle spirit rises from the water. “Your heart is louder than your voice, Wiam.”`], choices:[
      {text:'Ask about the prophecy', next:'river_prophecy', effect:{kind:1}},
      {text:'Touch the water', next:'river_touch', effect:{light:1}}
    ]},
  river_prophecy:{id:'river_prophecy', text:[`The spirit explains: “The Eclipse King steals the stars. Only a pure heart can stop him.”  
A tear-shaped light floats into your hand.`], choices:[
      {text:'Take the Tear of Light', next:'elder', effect:{light:2}}
    ]},
  river_touch:{id:'river_touch', text:[`The water glows — you see memories not your own.  
A broken crown. A man crying. A kingdom fading.`], choices:[
      {text:'Return to the elder', next:'elder'},
      {text:'Follow the vision', next:'gates'}
    ]},
  tower:{id:'tower', text:[`The Tower of Stars rises like a blade through the clouds.  
Inside, mirrors and crystals shift with your heartbeat.`], choices:[
      {text:'Solve the puzzle of mirrors', next:'tower_puzzle', effect:{brave:1}},
      {text:'Climb to the top', next:'tower_top'}
    ]},
  tower_puzzle:{id:'tower_puzzle', text:[`You align beams of light until the whole room shines.  
A hidden door opens.`], choices:[
      {text:'Enter the hidden door', next:'tower_top', effect:{light:2}}
    ]},
  tower_top:{id:'tower_top', text:[`A Star Guardian appears. “Someone searches for you… someone with courage and fire.”  
(You feel the name Reda echo faintly.)`], choices:[
      {text:'Continue your journey', next:'elder'}
    ]},
  lake:{id:'lake', text:[`The Crystal Lake glows with moonlight, even if no moon is visible.  
A shimmering figure stands upon the water.`], choices:[
      {text:'Speak to the figure', next:'lake_speak', effect:{kind:1}},
      {text:'Touch the lake surface', next:'lake_touch', effect:{light:1}}
    ]},
  lake_speak:{id:'lake_speak', text:[`“Your soul shines, Wiam,” the spirit says. “Fear not the darkness; it fears you.”  
The Tear of Light forms again in your hand.`], choices:[
      {text:'Take the Tear of Light', next:'elder', effect:{light:2}}
    ]},
  lake_touch:{id:'lake_touch', text:[`Images flash — a broken throne, a laughing child, then darkness swallowing everything.`], choices:[
      {text:'Return to the elder', next:'elder'},
      {text:'Head directly to the Gates of Shadow', next:'gates'}
    ]},
  gates:{id:'gates', text:[`The Gates of Shadow breathe cold.  
The Eclipse King stands before you — cloak of darkness, eyes full of pain.`], choices:[
      {text:'Heal him with kindness', next:'final_heal', effect:{kind:2}},
      {text:'Use the Tear of Light', next:'final_battle', effect:{light:2}},
      {text:'Call Reda to stand with you', next:'final_team', effect:{trust:2}}
    ]},
  final_heal:{id:'final_heal', text:[`You speak softly about the past — his lost kingdom, the portrait you saw, the wound in his heart.  
The King trembles, then cries. Shadows fall away like dust.`], choices:[
      {text:'Accept the peaceful ending', next:'end_good'},
      {text:'If Reda helped you, choose this', next:'end_perfect'}
    ]},
  final_battle:{id:'final_battle', text:[`Light clashes against shadow. You feel fear — but also strength.  
At the peak, you choose your final act.`], choices:[
      {text:'Strike with all your courage', next:'end_bitter'},
      {text:'Lower your weapon and offer mercy', next:'final_heal', effect:{kind:1}}
    ]},
  final_team:{id:'final_team', text:[`Reda appears — lantern glowing bright.  
Together, your combined light breaks the curse.  
The King remembers how to smile.`], choices:[
      {text:'Stand together and rebuild', next:'end_perfect'},
      {text:'Walk away silently', next:'end_bitter'}
    ]},
  end_good:{id:'end_good', text:[`The world brightens. Stars return.  
Aurelia sings the name WIAM across the sky.`], choices:[
      {text:'See Final Message', next:'finalMessage_good'}
    ]},
  end_perfect:{id:'end_perfect', text:[`The kingdom blooms. Reda stands beside you as the new dawn rises.  
Together, you restored not just light — but hope.`], choices:[
      {text:'See Final Message', next:'finalMessage_perfect'}
    ]},
  end_bitter:{id:'end_bitter', text:[`The battle was harsh. Some stars remain missing.  
But you and Reda walk forward — healing slowly, bravely.`], choices:[
      {text:'See Final Message', next:'finalMessage_bitter'}
    ]},
  finalMessage_good:{id:'finalMessage_good', text:[`Wiam — you brought back the light.  
Every kind act you give is a star reborn.  
— With admiration, Reda.`], choices:[
      {text:'End', next:'credits'}
    ]},
  finalMessage_perfect:{id:'finalMessage_perfect', text:[`Wiam — together we built a new world.  
Not because we were perfect… but because we chose each other.  
— Always, Reda.`], choices:[
      {text:'End', next:'credits'}
    ]},
  finalMessage_bitter:{id:'finalMessage_bitter', text:[`Wiam — even in scars, I find your light.  
Forward is still forward.  
— Reda`], choices:[
      {text:'End', next:'credits'}
    ]},
  credits:{id:'credits', text:[`— THE LEGEND OF WIAM —  
Created with love by Reda.`], choices:[
      {text:'Restart Adventure', next:'start'},
      {text:'Quit', next:'quit'}
    ]},
  quit:{id:'quit', text:[`You close the storybook.  
But legends never truly end.`], choices:[
      {text:'Restart', next:'start'}
    ]}
};

// ==================== GAME STATE ====================
let state = {
  node:'start',
  vars:{brave:0,wise:0,kind:0,trust:0,light:0,curious:0,charm:0},
  progress:0,
  sound:false
};

// Elements
const textEl = document.getElementById('text');
const choicesEl = document.getElementById('choices');
const barEl = document.getElementById('bar');
const saveBtn = document.getElementById('saveBtn');
const restartBtn = document.getElementById('restartBtn');
const soundToggle = document.getElementById('soundToggle');
const aboutBtn = document.getElementById('aboutBtn');
const bg = document.getElementById('bg');
const bgMusic = document.getElementById('bgMusic');

// ==================== UTILS ====================
function rand(min,max){ return Math.floor(Math.random()*(max-min+1))+min; }

function placeTwinkles(n=14){
  for(let i=0;i<n;i++){
    const d = document.createElement('div');
    d.className='twinkle';
    d.style.left = (rand(0,100))+'%';
    d.style.top = (rand(0,100))+'%';
    d.style.animationDuration = (2+Math.random()*3)+'s';
    bg.appendChild(d);
  }
}
placeTwinkles();

let typing=false;
async function typeParagraphs(pars){
  typing=true;
  textEl.innerHTML='';
  for(const p of pars){
    const pEl = document.createElement('div');
    let i=0;
    textEl.appendChild(pEl);
    while(i<p.length){
      pEl.textContent += p[i];
      i++;
      await new Promise(res=>setTimeout(res, 12 + (Math.random()*18)));
    }
    pEl.style.marginBottom='10px';
  }
  const c = document.createElement('span'); c.className='caret'; textEl.appendChild(c);
  typing=false;
}

// ==================== RENDER & CHOICES ====================
function renderNode(id){
  const node = scenes[id];
  if(!node) return console.error('missing node', id);
  state.node = id;
  state.progress = Math.min(100, Math.floor(Math.random()*9) + Object.values(state.vars).reduce((a,b)=>a+b,0) + 10);
  barEl.style.width = state.progress + '%';
  typeParagraphs(node.text);
  choicesEl.innerHTML='';
  setTimeout(()=>{
    node.choices.forEach(c=>{
      const b = document.createElement('button');
      b.className='btn';
      b.innerText = c.text;
      b.addEventListener('click', ()=> choose(c));
      // sparkle effect on new buttons
      b.addEventListener('pointerdown', e=>{
        const rect = b.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        createSparkle(b, x, y);
      });
      choicesEl.appendChild(b);
    });
  }, 300);
}

function choose(choice){
  if(typing) return;
  if(choice.effect) for(const k in choice.effect) state.vars[k] = (state.vars[k] || 0) + choice.effect[k];
  if(state.sound) try{navigator.vibrate && navigator.vibrate(30);}catch(e){}
  const next = choice.next;
  document.querySelector('.card').style.transform = 'translateY(4px)';
  setTimeout(()=> document.querySelector('.card').style.transform = '', 160);
  setTimeout(()=> { renderNode(next); saveState(); }, 200);
}

// ==================== SAVE / LOAD ====================
function saveState(){
  localStorage.setItem('wiam_save', JSON.stringify({node:state.node, vars:state.vars, progress:state.progress}));
  saveBtn.innerText = 'Saved ✓';
  setTimeout(()=> saveBtn.innerText='Save',900);
}

function loadState(){
  const raw = localStorage.getItem('wiam_save');
  if(!raw) return false;
  try{
    const s = JSON.parse(raw);
    if(s.node){state.node=s.node; state.vars=s.vars||state.vars; state.progress=s.progress||0; renderNode(state.node); return true;}
  }catch(e){}
  return false;
}

// ==================== BUTTONS ====================
restartBtn.addEventListener('click', ()=>{
  if(confirm('Restart adventure? Progress will be reset.')) {
    localStorage.removeItem('wiam_save');
    state={node:'start', vars:{brave:0,wise:0,kind:0,trust:0,light:0,curious:0,charm:0}, progress:0, sound:state.sound};
    renderNode('start');
  }
});

saveBtn.addEventListener('click', saveState);

soundToggle.addEventListener('click', ()=>{
  state.sound = !state.sound;
  soundToggle.innerText = 'Sound: ' + (state.sound ? 'On' : 'Off');
  if(state.sound) bgMusic.play().catch(()=>{});
  else bgMusic.pause();
  saveState();
});

aboutBtn.addEventListener('click', ()=>alert('This is a short interactive story made by Reda for Wiam. Mobile-first, save supported. Enjoy ♥'));

// ==================== SPARKLE EFFECT ====================
function createSparkle(btn, x, y){
  const s = document.createElement('div');
  s.className = 'sparkle';
  s.style.left = x + 'px';
  s.style.top = y + 'px';
  const dx = (Math.random() - 0.5) * 100 + 'px';
  const dy = (Math.random() - 0.5) * 100 + 'px';
  s.style.setProperty('--x', dx);
  s.style.setProperty('--y', dy);
  btn.appendChild(s);
  setTimeout(()=> btn.removeChild(s), 600);
}

// ==================== INIT ====================
(function init(){ if(!loadState()) renderNode('start'); })();

document.addEventListener('keydown', e=>{
  if(e.key==='1'||e.key==='2'||e.key==='3'){
    const btns = choicesEl.querySelectorAll('.btn');
    const idx = parseInt(e.key)-1;
    if(btns[idx]) btns[idx].click();
  }
});
