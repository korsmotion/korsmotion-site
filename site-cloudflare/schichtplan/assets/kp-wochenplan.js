/** KorsPlan Wochenplan — embedded module */
(function(){

const HOURS=24, HOUR_W=54;

const DATA={
  25:{
    days:[
      {l:'Montag',d:'16.06',today:true},{l:'Dienstag',d:'17.06',today:false},
      {l:'Mittwoch',d:'18.06',today:false},{l:'Donnerstag',d:'19.06',today:false},
      {l:'Freitag',d:'20.06',today:false},{l:'Samstag',d:'21.06',today:false},
      {l:'Sonntag',d:'22.06',today:false},
    ],
    lines:[
      {n:'Waldner 19.2',s:'Rahm / Kefir',days:[
        [{n:'Rahm',s:0,e:3,c:'cr'},{n:'Kefir Coop 180g',s:3,e:14,c:'ck'},{n:'R',s:14,e:15,c:'cc'},{n:'Glas-Prod. Stichtlest',s:15,e:22,c:'cj',q:'450 kg/h'}],
        [{n:'Glas-Prod. gesüßt',s:6,e:20,c:'cj',q:'350 kg/h'}],
        [{n:'Rahm',s:0,e:4,c:'cr'},{n:'Ziege',s:4,e:8,c:'cy'},{n:'LF Jog CNP',s:8,e:18,c:'cj'}],
        [{n:'Calier',s:6,e:16,c:'ck',q:'430 kg/h'},{n:'R',s:16,e:17,c:'cc'}],
        [{n:'R',s:0,e:2,c:'cc'},{n:'Yacs',s:2,e:14,c:'cj',q:'560 kg/h'}],
        [{n:'Rahm',s:2,e:8,c:'cr'},{n:'Ziege',s:8,e:12,c:'cy'},{n:'Kefir Enum',s:14,e:22,c:'ck'}],
        [],
      ]},
      {n:'Bemasor Klär',s:'Quark Hauptlinie',days:[
        [{n:'7000 kg CO NP',s:0,e:8,c:'cq',q:'6x1kg Tr'},{n:'R',s:8,e:9,c:'cc'},{n:'4620 kg Kalko',s:9,e:18,c:'cq',q:'5x500g Tr'}],
        [{n:'6000 kg CO',s:0,e:8,c:'cq',q:'Jng Net 3.5%'},{n:'R',s:8,e:9,c:'cc'},{n:'Quark 1 KG',s:10,e:18,c:'cq'}],
        [{n:'70 000 kg CO OAP',s:0,e:14,c:'cq',q:'Jng Whlm 3.5%'},{n:'R',s:14,e:16,c:'cc'}],
        [{n:'7000 kg CO NP',s:0,e:10,c:'cq',q:'6x1kg'},{n:'R',s:10,e:11,c:'cc'}],
        [{n:'6000 kg CO',s:0,e:10,c:'cq',q:'Jng Net 3.5%'},{n:'R',s:10,e:11,c:'cc'}],
        [],[],
      ]},
      {n:'Druckner 15.2',s:'Jogurt / Skyr',days:[
        [{n:'Latzel LF 1.5% "75"',s:4,e:10,c:'cj'},{n:'Jogurt laktosefrei "73" Frucht',s:10,e:20,c:'cj'}],
        [{n:'PG Sansa 9000 kg',s:0,e:10,c:'cj'},{n:'PG Cappu 9400 kg',s:10,e:20,c:'cj'}],
        [{n:'PG CwCh March 18700 kg',s:0,e:16,c:'cj'},{n:'PauseCola',s:16,e:18,c:'cp'}],
        [{n:'Schafsmilchjogurt "73" Frucht',s:0,e:12,c:'cj'},{n:'Kokos Frucht',s:12,e:20,c:'cv'}],
        [{n:'Skyr Bieder 1%',s:6,e:12,c:'cs'},{n:'Vegan Latei "75"',s:12,e:20,c:'cv'},{n:'Kefir 500g',s:20,e:24,c:'ck'}],
        [],[{n:'Jogurt laktosefrei "73" Frucht',s:18,e:24,c:'cj'}],
      ]},
      {n:'10.3-2 ungerade W',s:'Quark / RAS / Skyr',days:[
        [{n:'Sauerrahm',s:0,e:8,c:'cr'},{n:'Jogurt LF "73/95"',s:8,e:18,c:'cj'}],
        [{n:'LF Quark',s:0,e:14,c:'cq'},{n:'RAS Quark',s:14,e:20,c:'cra'},{n:'R',s:20,e:21,c:'cc'}],
        [{n:'RAS Quark',s:0,e:8,c:'cra'},{n:'Küchenhilfer "95"',s:8,e:16,c:'cq'},{n:'Griechisch Qua',s:16,e:24,c:'cq'}],
        [{n:'Griechisch Qua',s:0,e:12,c:'cq'},{n:'Dem Quark "95"',s:12,e:20,c:'cq'}],
        [{n:'RAS 1.5%',s:0,e:8,c:'cra'},{n:'Schafsgurt Nature',s:8,e:16,c:'cj'},{n:'Yacs 10%',s:16,e:24,c:'cj'}],
        [{n:'Kokos Nature',s:6,e:14,c:'cv'},{n:'Skyr 0% "95"',s:14,e:24,c:'cs'}],
        [],
      ]},
      {n:'T 47',s:'Quark OMU',days:[
        [{n:'Quark OMU',s:6,e:20,c:'cq'}],
        [{n:'Quark OMU',s:0,e:16,c:'cq'}],
        [],
        [{n:'Quark OMU',s:8,e:20,c:'cq'}],
        [],[],[],
      ]},
      {n:'Quark 122',s:'LF Quark Nature',days:[
        [{n:'Quark OMU',s:0,e:10,c:'cq'},{n:'R',s:10,e:11,c:'cc'},{n:'LF Quark Nature',s:11,e:22,c:'cq'}],
        [{n:'LF Quark Nature',s:0,e:10,c:'cq'},{n:'RAS Quark',s:10,e:18,c:'cra'},{n:'Quark OMU',s:18,e:24,c:'cq'}],
        [{n:'QUARK Schmid',s:0,e:14,c:'cq'},{n:'R',s:14,e:15,c:'cc'},{n:'Yacs',s:16,e:24,c:'cj'}],
        [{n:'Griechisch Que',s:0,e:10,c:'cq'},{n:'Quark OMU',s:10,e:20,c:'cq'},{n:'Demetei Quark',s:20,e:24,c:'cq'}],
        [{n:'GG-Que',s:0,e:10,c:'cq'},{n:'Schafmilch Quark',s:10,e:20,c:'cq'}],
        [{n:'Demetei Quark',s:6,e:18,c:'cq'}],
        [],
      ]},
      {n:'Quark 123–125',s:'RAS / OMU / Nature',days:[
        [{n:'Quark OMU',s:0,e:8,c:'cq'},{n:'LF Quark Nature',s:8,e:18,c:'cq'}],
        [{n:'RAS Quark',s:0,e:10,c:'cra'},{n:'Quark OMU',s:10,e:20,c:'cq'}],
        [{n:'Quark OMU',s:0,e:10,c:'cq'},{n:'R',s:10,e:11,c:'cc'},{n:'RAS Quark',s:12,e:22,c:'cra'}],
        [{n:'Yacs',s:0,e:10,c:'cj'},{n:'R',s:10,e:11,c:'cc'},{n:'Griechisch Que',s:12,e:22,c:'cq'}],
        [{n:'Quark OMU',s:0,e:12,c:'cq'},{n:'Schafmilch h Quark',s:12,e:20,c:'cq'}],
        [{n:'R',s:0,e:1,c:'cc'},{n:'Skyr Bieder 1%',s:2,e:10,c:'cs'},{n:'Schafmilch h Quark',s:10,e:20,c:'cq'}],
        [],
      ]},
    ]
  }
};
// Copy KW24 and KW26 from previous (simplified)
DATA[24]=JSON.parse(JSON.stringify(DATA[25]));
DATA[24].days=[
  {l:'Montag',d:'09.06',today:false},{l:'Dienstag',d:'10.06',today:false},
  {l:'Mittwoch',d:'11.06',today:false},{l:'Donnerstag',d:'12.06',today:false},
  {l:'Freitag',d:'13.06',today:false},{l:'Samstag',d:'14.06',today:false},
  {l:'Sonntag',d:'15.06',today:false},
];
DATA[26]=JSON.parse(JSON.stringify(DATA[25]));
DATA[26].days=[
  {l:'Montag',d:'23.06',today:false},{l:'Dienstag',d:'24.06',today:false},
  {l:'Mittwoch',d:'25.06',today:false},{l:'Donnerstag',d:'26.06',today:false},
  {l:'Freitag',d:'27.06',today:false},{l:'Samstag',d:'28.06',today:false},
  {l:'Sonntag',d:'29.06',today:false},
];

let currentKW=25, currentDay=0;

function fmtH(h){return String(Math.floor(h)).padStart(2,'0')+':'+String(Math.round((h%1)*60)).padStart(2,'0');}

function kpWpBuildGantt(){
  const kw=DATA[currentKW], day=kw.days[currentDay];
  const tabs=kw.days.map((d,i)=>`<div class="day-tab ${i===currentDay?'active':''} ${d.today?'today-tab':''}" onclick="kpWpSelectDay(${i})">${d.l}<small>${d.d}.2026</small></div>`).join('');
  const timeCells=Array.from({length:HOURS},(_,h)=>`<div class="time-cell ${h%6===0&&h>0?'major':''}""><div class="th">${String(h).padStart(2,'0')}</div><div class="tm">:00</div></div>`).join('');
  const hourGrid=Array.from({length:HOURS},(_,h)=>`<div class="hour-bg ${h%6===0&&h>0?'major':''}"></div>`).join('');
  const now=new Date(), nowH=now.getHours()+now.getMinutes()/60;
  const nowLine=day.today?`<div class="now-line" style="left:${nowH*HOUR_W}px"></div>`:'';
  const rowsHTML=kw.lines.map(line=>{
    const blks=(line.days[currentDay]||[]).map(b=>{
      const left=b.s*HOUR_W, width=Math.max((b.e-b.s)*HOUR_W-3,20);
      return `<div class="blk ${b.c}" style="left:${left}px;width:${width}px"
        onmouseenter="kpWpShowTip(event,'${b.n.replace(/'/g,"\\'")}','${fmtH(b.s)} – ${fmtH(b.e)}','${b.q||''}','${line.n}')"
        onmouseleave="kpWpHideTip()">
        <div class="blk-name">${b.n}</div>
        <div class="blk-time">${fmtH(b.s)} – ${fmtH(b.e)}</div>
        ${b.q?`<div class="blk-qty">${b.q}</div>`:''}
      </div>`;
    }).join('');
    return `<div class="g-row"><div class="row-lbl"><div class="row-lbl-name">${line.n}</div><div class="row-lbl-sub">${line.s}</div></div><div class="row-timeline">${hourGrid}${nowLine}${blks}</div></div>`;
  }).join('');

  document.getElementById('kpWpGanttOuter').innerHTML=`
    <div class="day-tabs">${tabs}</div>
    <div class="gantt-area">
      <div class="time-header">
        <div class="th-corner"><div class="th-corner-title">Linie</div><div class="th-corner-date">${day.d}.2026</div></div>
        <div class="time-cells" id="tc">${timeCells}</div>
      </div>
      <div class="rows-scroll">${rowsHTML}</div>
    </div>`;
}

function kpWpSelectDay(i){currentDay=i;kpWpBuildGantt();}
function kpWpChangeKW(v){currentKW=parseInt(v);currentDay=0;if(document.querySelector('.g-row'))kpWpBuildGantt();}

function kpWpShowTip(e,name,time,qty,line){
  const t=document.getElementById('kpWpTip');
  document.getElementById('kpWpTipName').textContent=name;
  document.getElementById('kpWpTipTime').textContent=time;
  document.getElementById('kpWpTipQty').textContent=qty;
  document.getElementById('kpWpTipQtyRow').style.display=qty?'':'none';
  document.getElementById('kpWpTipLine').textContent=line;
  t.style.display='block';kpWpMoveTip(e);
}
function kpWpMoveTip(e){
  const t=document.getElementById('kpWpTip');
  let x=e.clientX+14,y=e.clientY-10;
  if(x+200>window.innerWidth)x=e.clientX-200;
  t.style.left=x+'px';t.style.top=y+'px';
}
function kpWpHideTip(){document.getElementById('kpWpTip').style.display='none';}
document.addEventListener('mousemove',e=>{if(document.getElementById('kpWpTip').style.display==='block')kpWpMoveTip(e);});

function kpWpHandleFile(inp){const f=inp.files[0];if(f)kpWpRunImport(f.name);}
function kpWpRunDemo(){kpWpRunImport('Wochenplan_KW'+currentKW+'_Emmi.xlsx');}
function kpWpRunImport(fname){
  document.getElementById('kpWpOvFile').textContent=fname;
  document.getElementById('kpWpOv').classList.add('show');
  const bar=document.getElementById('kpWpProgBar'),lbl=document.getElementById('kpWpProgLbl');
  bar.style.width='0%';
  const steps=[
    {p:12,m:'Öffne Excel-Datei...'},
    {p:28,m:'Erkenne Tabellenstruktur...'},
    {p:45,m:'Lese Produktionslinien ein...'},
    {p:60,m:'Verarbeite Zeitblöcke...'},
    {p:75,m:'Weise Produkttypen zu...'},
    {p:90,m:'Weise Farben zu...'},
    {p:100,m:'Fertig!'},
  ];
  let i=0;
  const tick=()=>{
    if(i>=steps.length){
      setTimeout(()=>{
        document.getElementById('kpWpOv').classList.remove('show');
        currentDay=0;kpWpBuildGantt();
        const t=new Date().toLocaleTimeString('de-CH',{hour:'2-digit',minute:'2-digit'});
        document.getElementById('kpWpLastImp').innerHTML=`Importiert: <b>${t} · KW ${currentKW} · ${DATA[currentKW].lines.length} Linien</b>`;
        kpWpToast(`✓ KW ${currentKW} erfolgreich geladen — ${DATA[currentKW].lines.length} Linien, 7 Tage`);
      },500);return;
    }
    const s=steps[i++];
    bar.style.width=s.p+'%';
    lbl.innerHTML=`${s.m} <span>${s.p}%</span>`;
    setTimeout(tick,i===steps.length?700:280+Math.random()*200);
  };
  setTimeout(tick,150);
}
function kpWpToast(msg){
  const t=document.getElementById('kpWpToast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3500);
}

window.kpWpSelectDay = kpWpSelectDay;
window.kpWpChangeKW = kpWpChangeKW;
window.kpWpShowTip = kpWpShowTip;
window.kpWpHideTip = kpWpHideTip;
window.kpWpHandleFile = kpWpHandleFile;
window.kpWpRunDemo = kpWpRunDemo;
})();
