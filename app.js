(() => {
  'use strict';

  const JAPAN = [
    {id:'jp_1',month:1,name:'正月（しょうがつ）',image:'images/jp_newyear.jpg',desc:'あたらしい としを いわいます。かぞくで ごはんを たべたり、おまいりしたりします。'},
    {id:'jp_2',month:2,name:'節分（せつぶん）',image:'images/jp_setsubun.jpg',desc:'「おには そと、ふくは うち」と まめを まきます。'},
    {id:'jp_3',month:3,name:'ひな祭り（ひなまつり）',image:'images/jp_hinamatsuri.jpg',desc:'ひなにんぎょうを かざり、こどもの せいちょうを ねがいます。'},
    {id:'jp_4',month:4,name:'花見（はなみ）',image:'images/jp_hanami.jpg',desc:'さくらを みながら、みんなで はるを たのしみます。'},
    {id:'jp_5',month:5,name:'こどもの日（ひ）',image:'images/jp_childrens_day.jpg',desc:'こいのぼりなどを かざり、こどもの せいちょうを いわいます。'},
    {id:'jp_6',month:6,name:'梅雨（つゆ）',image:'images/jp_rainy_season.jpg',desc:'あめの ひが おおくなり、かさや あまぐを つかいます。'},
    {id:'jp_7',month:7,name:'七夕（たなばた）',image:'images/jp_tanabata.jpg',desc:'たんざくに ねがいごとを かいて、ささに かざります。'},
    {id:'jp_8',month:8,name:'お盆（おぼん）・盆おどり（ぼんおどり）',image:'images/jp_obon.jpg',desc:'せんぞを おもい、ちいきで あつまって ぼんおどりを することが あります。'},
    {id:'jp_9',month:9,name:'十五夜（じゅうごや）',image:'images/jp_tsukimi.jpg',desc:'つきを ながめ、おだんごなどを そなえます。'},
    {id:'jp_10',month:10,name:'都民の日（とみんのひ）',image:'images/jp_tokyo_day.jpg',desc:'とうきょうについて しったり、とうきょうを みぢかに かんじたりする ひです。'},
    {id:'jp_11',month:11,name:'水元（みずもと）まつり',image:'images/jp_mizumoto.jpg',desc:'がっこうで おこなう おまつりです。'},
    {id:'jp_12',month:12,name:'大みそか（おおみそか）',image:'images/jp_omisoka.jpg',desc:'いちねんの さいごの ひです。としこしそばを たべることが あります。'}
  ];
  const JAPAN_SEQUENCE = JAPAN.slice();

  const COUNTRIES = {
    us:{name:'アメリカ',color:'#3777c5',flag:'images/flags/us.svg'},
    th:{name:'タイ',color:'#d77a22',flag:'images/flags/th.svg'},
    cn:{name:'ちゅうごく',color:'#c9523d',flag:'images/flags/cn.svg'},
    in:{name:'インド',color:'#3f8e72',flag:'images/flags/in.svg'},
    au:{name:'オーストラリア',color:'#6f6ab2',flag:'images/flags/au.svg'}
  };

  const EVENTS = [
    {id:'in_pongal',country:'in',month:1,name:'ポンガル',image:'images/in_pongal.jpg',desc:'こめなどの しゅうかくを いわいます。こめを ぎゅうにゅうで にた りょうりも つくります。'},
    {id:'cn_spring',country:'cn',month:2,name:'春節（しゅんせつ）',image:'images/cn_spring_festival.jpg',desc:'ちゅうごくの おしょうがつです。かぞくで あつまり、にぎやかに いわいます。'},
    {id:'in_holi',country:'in',month:3,name:'ホーリー',image:'images/in_holi.jpg',desc:'はるを いわう おまつりです。いろの こなや みずを かけあいます。'},
    {id:'th_songkran',country:'th',month:4,name:'ソンクラーン',image:'images/th_songkran.jpg',desc:'タイの おしょうがつです。みずを かけあって いわいます。'},
    {id:'th_ploughing',country:'th',month:5,name:'農耕祭（のうこうさい）',image:'images/th_ploughing.jpg',desc:'うしが すきを ひき、さくもつが よく そだつよう ねがいます。'},
    {id:'cn_dragon',country:'cn',month:6,name:'端午節（たんごせつ）',image:'images/cn_dragon_boat.jpg',desc:'りゅうの かたちの ふねで きょうそうし、ちまきなども たべます。'},
    {id:'us_independence',country:'us',month:7,name:'独立記念日（どくりつきねんび）',image:'images/us_independence.jpg',desc:'くにの どくりつを いわい、パレードや はなびなどを たのしみます。'},
    {id:'in_raksha',country:'in',month:8,name:'ラクシャー・バンダン',image:'images/in_raksha.jpg',desc:'きょうだいの しあわせを ねがい、てくびに かざりひもを むすびます。'},
    {id:'cn_midautumn',country:'cn',month:9,name:'中秋節（ちゅうしゅうせつ）',image:'images/cn_mid_autumn.jpg',desc:'かぞくで つきを ながめ、げっぺいという おかしなどを たべます。'},
    {id:'au_floriade',country:'au',month:9,name:'フロリアード',image:'images/au_floriade.jpg',desc:'はるの はなの おまつりです。いろとりどりの はなを たのしみます。'},
    {id:'us_halloween',country:'us',month:10,name:'ハロウィーン',image:'images/us_halloween.jpg',desc:'かそうを して、おかしを もらうことが あります。'},
    {id:'in_diwali',country:'in',month:10,name:'ディワリ',image:'images/in_diwali.jpg',desc:'ひかりの おまつりです。いえや まちに ちいさな あかりを ともします。'},
    {id:'us_thanksgiving',country:'us',month:11,name:'感謝祭（かんしゃさい）',image:'images/us_thanksgiving.jpg',desc:'かぞくや ともだちで あつまり、しょくじを しながら かんしゃを つたえます。'},
    {id:'th_loy',country:'th',month:11,name:'ロイクラトン',image:'images/th_loy_krathong.jpg',desc:'はなや はで つくった とうろうを みずに ながし、みずの めぐみに かんしゃします。'},
    {id:'au_xmas',country:'au',month:12,name:'夏（なつ）のクリスマス',image:'images/au_summer_christmas.jpg',desc:'みなみはんきゅうの じゅうにがつは なつです。サンタや ツリーと いっしょに、うみべで たのしむ ひとも います。'}
  ];

  const $ = s => document.querySelector(s);
  const screens = ['titleScreen','japanBuildScreen','monthSelectScreen','monthDetailScreen','countryReviewScreen','overviewScreen'];
  const el = {
    title:$('#titleScreen'),jpBuild:$('#japanBuildScreen'),select:$('#monthSelectScreen'),detail:$('#monthDetailScreen'),countryReview:$('#countryReviewScreen'),overview:$('#overviewScreen'),
    start:$('#startBtn'),cont:$('#continueBtn'),jpBack:$('#jpBackBtn'),jpSkip:$('#jpSkipBtn'),jpProgress:$('#jpProgress'),jpMonth:$('#jpMonthLabel'),jpTarget:$('#jpTarget'),jpTray:$('#jpTray'),
    selectBack:$('#selectBackBtn'),selectTitle:$('#selectTitle'),selectProgress:$('#selectProgress'),countryBanner:$('#countryBanner'),monthGrid:$('#monthGrid'),
    detailBack:$('#detailBackBtn'),detailTitle:$('#detailTitle'),detailBadge:$('#detailBadge'),detailMain:$('#detailMain'),worldTrayWrap:$('#worldTrayWrap'),worldTray:$('#worldTray'),
    countryReviewTitle:$('#countryReviewTitle'),countryReviewProgress:$('#countryReviewProgress'),countryReviewStage:$('#countryReviewStage'),
    overviewHome:$('#overviewHomeBtn'),overviewProgress:$('#overviewProgress'),overviewStage:$('#overviewStage'),overviewNext:$('#overviewNextBtn'),overviewSeasonFx:$('#overviewSeasonFx'),
    gacha:$('#gachaOverlay'),gachaMachine:$('#gachaMachine'),gachaChamber:$('#gachaChamber'),gachaHandle:$('#gachaHandle'),gachaDropCapsule:$('#gachaDropCapsule'),gachaReveal:$('#gachaReveal'),gachaRevealCapsule:$('#gachaRevealCapsule'),gachaResultFlag:$('#gachaResultFlag'),gachaName:$('#gachaName'),gachaBtn:$('#gachaBtn'),gachaStart:$('#gachaStartBtn'),gachaRemaining:$('#gachaRemaining'),gachaProgress:$('#gachaProgress'),gachaConfetti:$('#gachaConfetti'),
    complete:$('#completeOverlay'),completeIcon:$('#completeIcon'),completeTitle:$('#completeTitle'),completeText:$('#completeText'),completeBtn:$('#completeBtn'),
    resetOverlay:$('#resetOverlay'),cancelReset:$('#cancelResetBtn'),reset:$('#resetBtn'),monthIntro:$('#monthIntroOverlay'),monthIntroText:$('#monthIntroText'),celebrate:$('#celebrateLayer'),celebrateText:$('#celebrateText'),toast:$('#toast')
  };

  const STORAGE_KEY='worldCalendarLessonV10';
  const defaultState=()=>({started:false,phase:'japan',japanIndex:0,japanPlaced:[],currentCountry:null,completedCountries:[],placed:[],selectedMonth:null,browseMonth:1,japanCardOrder:[],worldCardOrders:{}});
  let state=load();
  let selectedCard=null;
  let drag=null;
  let gachaChoice=null;
  let gachaTimers=[];
  let gachaLocked=false;
  let gachaAudioCtx=null;
  let toastTimer=null;
  let afterCelebrate=null;
  let monthHintTimer=null;
  let reviewQueue=[];
  let reviewIndex=0;
  let reviewCountry=null;
  let reviewTimer=null;
  let introTimer=null;
  let pageTurnTimer=null;
  let reviewSession=0;
  let screenDelayTimer=null;
  let flowLocked=false;

  function load(){
    try{const raw=localStorage.getItem(STORAGE_KEY);return raw?{...defaultState(),...JSON.parse(raw)}:defaultState();}
    catch(e){return defaultState();}
  }
  function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
  function resetState(){state=defaultState();selectedCard=null;flowLocked=false;save();}
  function escapeHtml(s=''){return String(s).replace(/[&<>\'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
  function monthText(m){return `${m}月（がつ）`;}

  function shuffledIds(events){
    const a=events.map(e=>e.id);
    for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
    return a;
  }
  function orderedEvents(events,ids){
    const byId=new Map(events.map(e=>[e.id,e]));
    const ordered=(ids||[]).map(id=>byId.get(id)).filter(Boolean);
    const seen=new Set(ordered.map(e=>e.id));
    events.forEach(e=>{if(!seen.has(e.id))ordered.push(e);});
    return ordered;
  }
  function ensureJapanCardOrder(){
    const valid=new Set(JAPAN_SEQUENCE.map(e=>e.id));
    const current=(state.japanCardOrder||[]).filter(id=>valid.has(id));
    if(current.length!==JAPAN_SEQUENCE.length){state.japanCardOrder=shuffledIds(JAPAN_SEQUENCE);save();}
  }
  function ensureWorldCardOrder(code,events){
    if(!state.worldCardOrders||typeof state.worldCardOrders!=='object')state.worldCardOrders={};
    const valid=new Set(events.map(e=>e.id));
    const current=(state.worldCardOrders[code]||[]).filter(id=>valid.has(id));
    if(current.length!==events.length){state.worldCardOrders[code]=shuffledIds(events);save();}
  }

  function init(){
    bind();
    preload();
    suppressNativeImageActions();
    el.cont.classList.toggle('hidden',!state.started);
  }

  function preload(){[...JAPAN,...EVENTS].forEach(e=>{if(e.image){const i=new Image();i.src=e.image;}});}

  function suppressNativeImageActions(){
    document.addEventListener('contextmenu',e=>{
      if(e.target.closest('img,.event-card,.event-display,.panel-event,.browse-japan-card,.browse-world-card')) e.preventDefault();
    },{capture:true});
    document.addEventListener('dragstart',e=>{if(e.target.closest('img')) e.preventDefault();},{capture:true});
  }

  function bind(){
    el.start.addEventListener('click',()=>{resetState();state.started=true;save();showJapanBuild();});
    el.cont.addEventListener('click',continueFromState);
    el.jpBack.addEventListener('click',showTitle);
    el.jpSkip.addEventListener('click',skipJapan);
    el.selectBack.addEventListener('click',showTitle);
    el.detailBack.addEventListener('click',()=>{if(flowLocked)return;showMonthSelect();});
    el.overviewHome.addEventListener('click',showTitle);
    el.overviewNext.addEventListener('click',nextBrowseMonth);
    el.gachaBtn.addEventListener('click',runGacha);
    el.gachaStart.addEventListener('click',()=>{if(!gachaChoice)return;state.currentCountry=gachaChoice;state.selectedMonth=null;save();closeGacha();showMonthSelect(false);});
    el.completeBtn.addEventListener('click',handleComplete);
    el.cancelReset.addEventListener('click',()=>el.resetOverlay.classList.add('hidden'));
    el.reset.addEventListener('click',()=>{resetState();el.resetOverlay.classList.add('hidden');showTitle();});
    el.jpTarget.addEventListener('click',()=>{if(selectedCard)placeJapanese(selectedCard);});
  }

  function cleanupActiveDrag(){
    if(drag){
      try{drag.card?.releasePointerCapture?.(drag.pointerId);}catch(e){}
      try{drag.ghost?.remove();}catch(e){}
      drag=null;
    }
    document.querySelectorAll('.drag-ghost').forEach(g=>g.remove());
    document.querySelectorAll('.event-card.selected').forEach(c=>c.classList.remove('selected'));
    el.jpTarget?.classList.remove('selected-target');
    document.querySelector('#worldDrop')?.classList.remove('selected-target');
    selectedCard=null;
  }

  function clearToast(){
    if(toastTimer){clearTimeout(toastTimer);toastTimer=null;}
    el.toast.classList.add('hidden');
    el.toast.textContent='';
  }
  function clearCelebrate(){
    afterCelebrate=null;
    el.celebrate.classList.add('hidden');
    el.celebrate.querySelectorAll('.spark').forEach(x=>x.remove());
  }
  function clearIntro(){
    if(introTimer){clearTimeout(introTimer);introTimer=null;}
    el.monthIntro.classList.add('hidden');
    el.monthIntro.classList.remove('showing','review-intro');
  }
  function clearTransientUi({toast=true,celebrate=true,intro=true}={}){
    if(toast)clearToast();
    if(celebrate)clearCelebrate();
    if(intro)clearIntro();
  }
  function scheduleScreenTask(fn,delay=940){
    if(screenDelayTimer){clearTimeout(screenDelayTimer);screenDelayTimer=null;}
    screenDelayTimer=setTimeout(()=>{screenDelayTimer=null;fn&&fn();},delay);
  }
  function setFlowLock(locked){
    flowLocked=!!locked;
    el.detailBack.disabled=flowLocked;
    el.detailBack.classList.toggle('flow-locked',flowLocked);
    const trayBack=$('#trayBackBtn');
    if(trayBack){
      trayBack.disabled=flowLocked;
      trayBack.classList.toggle('flow-locked',flowLocked);
    }
    const worldDrop=$('#worldDrop');
    if(worldDrop)worldDrop.classList.toggle('interaction-locked',flowLocked);
    el.worldTray?.classList.toggle('interaction-locked',flowLocked);
  }

  function currentScreenId(){
    return screens.find(id=>!$('#'+id).classList.contains('hidden'))||null;
  }
  function makePageTurnClone(){
    const before=currentScreenId();
    if(!before)return null;
    const source=$('#'+before);
    if(!source)return null;
    const layer=document.createElement('div');
    layer.className='page-turn-layer';

    // Safari can briefly reveal the real (old) screen while the 3D clone is
    // turning.  Keep a neutral sheet underneath the clone, then fade it only
    // after the next content has already been prepared.
    const underlay=document.createElement('div');
    underlay.className='page-turn-underlay';
    layer.appendChild(underlay);

    const page=source.cloneNode(true);
    page.classList.remove('hidden');
    page.classList.add('page-turn-page');
    page.removeAttribute('id');
    page.querySelectorAll('[id]').forEach(n=>n.removeAttribute('id'));
    layer.appendChild(page);
    document.body.appendChild(layer);
    return layer;
  }
  function startPageTurn(layer){
    if(!layer)return;
    requestAnimationFrame(()=>requestAnimationFrame(()=>layer.classList.add('active')));
    // Reveal the prepared next screen only near the end of the turn.
    setTimeout(()=>layer.classList.add('reveal-next'),700);
    setTimeout(()=>layer.remove(),960);
  }
  function playPagePeel(callback){
    cleanupActiveDrag();
    clearToast();
    clearCelebrate();
    clearIntro();
    document.querySelectorAll('.page-turn-layer').forEach(x=>x.remove());
    if(pageTurnTimer){clearTimeout(pageTurnTimer);pageTurnTimer=null;}
    const layer=makePageTurnClone();
    if(!layer){if(callback)callback();return;}
    startPageTurn(layer);
    // Prepare the next month while the neutral underside is still covering it.
    // This prevents the old screen from flashing after the page has turned.
    pageTurnTimer=setTimeout(()=>{
      pageTurnTimer=null;
      if(callback)callback();
    },650);
  }
  function switchScreenNow(id){
    screens.forEach(s=>$('#'+s).classList.toggle('hidden',s!==id));
    if(id!=='monthSelectScreen')clearMonthHintTimer();
  }
  function showOnly(id,usePeel=true){
    cleanupActiveDrag();
    clearToast();
    clearCelebrate();
    clearIntro();
    const before=currentScreenId();
    if(before===id){switchScreenNow(id);return;}
    if(!usePeel||!before){switchScreenNow(id);return;}
    document.querySelectorAll('.page-turn-layer').forEach(x=>x.remove());
    if(pageTurnTimer){clearTimeout(pageTurnTimer);pageTurnTimer=null;}
    const layer=makePageTurnClone();
    startPageTurn(layer);
    // Switch the real screen while the neutral underside is still opaque.
    // The user sees the new screen only as the page turn finishes.
    pageTurnTimer=setTimeout(()=>{
      pageTurnTimer=null;
      switchScreenNow(id);
    },650);
  }
  function clearMonthHintTimer(){if(monthHintTimer){clearTimeout(monthHintTimer);monthHintTimer=null;}}
  function showIntroText(text,duration,callback,kind='month'){
    cleanupActiveDrag();
    clearToast();
    if(introTimer){clearTimeout(introTimer);introTimer=null;}
    el.monthIntroText.textContent=text;
    el.monthIntro.style.setProperty('--intro-duration',`${duration}ms`);
    el.monthIntro.classList.toggle('review-intro',kind==='review');
    el.monthIntro.classList.remove('hidden','showing');
    void el.monthIntro.offsetWidth;
    el.monthIntro.classList.add('showing');
    introTimer=setTimeout(()=>{
      introTimer=null;
      el.monthIntro.classList.add('hidden');
      el.monthIntro.classList.remove('showing','review-intro');
      // Give Safari a clean frame between two consecutive intro overlays.
      // Without this gap the first month title after “おさらいしよう！” can
      // occasionally be skipped visually.
      if(callback){
        requestAnimationFrame(()=>requestAnimationFrame(callback));
      }
    },duration);
  }
  function showMonthIntro(month,callback){showIntroText(monthText(month),1840,callback,'month');}
  function showReviewIntro(callback){showIntroText('おさらいしよう！',1800,callback,'review');}
  function showTitle(){setFlowLock(false);clearSeasonEffect();showOnly('titleScreen');el.cont.classList.toggle('hidden',!state.started);}
  function continueFromState(){
    clearTransientUi();
    if(state.phase==='japan'){
      showJapanBuild();
    }else if(state.phase==='world'){
      if(state.currentCountry) showMonthSelect(); else openGacha();
    }else{
      // Do not let a previously rendered finished month flash before the page turn.
      el.overviewStage.innerHTML='';
      el.overviewNext.classList.add('hidden');
      clearSeasonEffect();
      showOverview(false);
    }
  }

  /* ---------- にほんを1がつからつくる ---------- */
  function prepareJapanForIntro(){
    cleanupActiveDrag();
    el.jpTray.classList.add('interaction-locked');
    el.jpTarget.className='big-target jp-target';
    el.jpTarget.innerHTML='';
    el.jpTray.innerHTML='';
  }

  function showJapanBuild(){
    clearSeasonEffect();
    state.phase='japan';
    if(state.japanIndex>=JAPAN_SEQUENCE.length){finishJapan();return;}
    save();
    prepareJapanForIntro();
    showOnly('japanBuildScreen');
    scheduleScreenTask(()=>showMonthIntro(JAPAN_SEQUENCE[state.japanIndex].month,renderJapanBuild));
  }

  function renderJapanBuild(){
    cleanupActiveDrag();
    el.jpTray.classList.remove('interaction-locked');
    const ev=JAPAN_SEQUENCE[state.japanIndex];
    if(!ev)return;
    el.jpMonth.textContent=monthText(ev.month);
    el.jpProgress.textContent=`${state.japanIndex+1} / ${JAPAN_SEQUENCE.length}`;
    el.jpTarget.className='big-target jp-target ready';
    el.jpTarget.innerHTML=`<div class="target-placeholder"><div><div class="placeholder-month">${monthText(ev.month)}</div><div class="placeholder-text">この つきの カードを<br>ここに いれよう！</div></div></div>`;
    ensureJapanCardOrder();
    const trayEvents=orderedEvents(JAPAN_SEQUENCE,state.japanCardOrder);
    el.jpTray.innerHTML=`<div class="all-card-tray jp-all-cards">${trayEvents.map(e=>cardHtml(e,state.japanPlaced.includes(e.id),'compact')).join('')}</div>`;
    selectedCard=null;
    el.jpTray.querySelectorAll('.event-card:not(.used)').forEach(card=>{
      const id=card.dataset.id;bindCard(card,id,'japan');
    });
  }

  function placeJapanese(id){
    const target=JAPAN_SEQUENCE[state.japanIndex];
    const ev=JAPAN_SEQUENCE.find(e=>e.id===id);
    if(!target||!ev||state.japanPlaced.includes(id))return;
    if(id!==target.id){showToast(`このカードは ${monthText(target.month)} ではありません。`,'warn');return;}
    state.japanPlaced.push(id);
    cleanupActiveDrag();
    el.jpTray.classList.add('interaction-locked');
    save();
    el.jpTarget.innerHTML=largeEvent(ev,'にほん');
    el.jpTarget.classList.remove('ready','selected-target');
    renderJapanTrayUsedState();
    showToast(`${monthText(ev.month)} かんせい！`,'good');
    celebrateMonth(ev.month,()=>{
      state.japanIndex++;
      save();
      if(state.japanIndex>=JAPAN_SEQUENCE.length){
        finishJapan();
      }else{
        playPagePeel(()=>{
          prepareJapanForIntro();
          showMonthIntro(JAPAN_SEQUENCE[state.japanIndex].month,renderJapanBuild);
        });
      }
    });
  }

  function renderJapanTrayUsedState(){
    ensureJapanCardOrder();
    const trayEvents=orderedEvents(JAPAN_SEQUENCE,state.japanCardOrder);
    el.jpTray.innerHTML=`<div class="all-card-tray jp-all-cards">${trayEvents.map(e=>cardHtml(e,state.japanPlaced.includes(e.id),'compact')).join('')}</div>`;
    el.jpTray.querySelectorAll('.event-card:not(.used)').forEach(card=>bindCard(card,card.dataset.id,'japan'));
  }

  function skipJapan(){
    cleanupActiveDrag();
    clearTransientUi();
    state.japanPlaced=JAPAN_SEQUENCE.map(e=>e.id);
    state.japanIndex=JAPAN_SEQUENCE.length;
    state.phase='world';
    state.currentCountry=null;
    state.selectedMonth=null;
    save();
    openGacha();
  }

  function finishJapan(){
    cleanupActiveDrag();
    clearToast();
    el.jpTray.classList.remove('interaction-locked');
    state.phase='world';state.currentCountry=null;save();
    el.completeIcon.textContent='✓';
    el.completeTitle.textContent='にほんの カレンダー かんせい！';
    el.completeText.textContent='つぎは ガチャで、がいこくの カレンダーを つくります。';
    el.completeBtn.textContent='ガチャへ';
    el.complete.dataset.kind='japan';
    el.complete.classList.remove('hidden');
  }

  /* ---------- ガチャ ---------- */
  const GACHA_COLORS=[
    ['#ff5f72','#ffd4da'],['#3d8de3','#cae5ff'],['#f4b93b','#fff0b5'],['#61b979','#d9f4e0'],['#8c70d7','#e6dcff']
  ];
  function setGachaTimer(fn,ms){const id=setTimeout(()=>{gachaTimers=gachaTimers.filter(x=>x!==id);fn();},ms);gachaTimers.push(id);return id;}
  function clearGachaTimers(){gachaTimers.forEach(clearTimeout);gachaTimers=[];}
  function capsuleStyle(node,pair){if(!node)return;node.style.setProperty('--cap',pair[0]);node.style.setProperty('--cap2',pair[1]);}
  function renderGachaCapsules(){
    const left=Object.keys(COUNTRIES).filter(k=>!state.completedCountries.includes(k));
    el.gachaChamber.innerHTML='';
    left.forEach((_,i)=>{
      const cap=document.createElement('div');
      cap.className='gacha-capsule-mini';
      const pair=GACHA_COLORS[i%GACHA_COLORS.length];capsuleStyle(cap,pair);
      cap.style.setProperty('--i',i);
      cap.innerHTML='<i></i><b></b>';
      el.gachaChamber.appendChild(cap);
    });
  }
  function renderGachaProgress(){
    el.gachaProgress.innerHTML='';
    Object.entries(COUNTRIES).forEach(([code,c])=>{
      const done=state.completedCountries.includes(code);
      const item=document.createElement('div');
      item.className='gacha-progress-item'+(done?' done':'');
      item.innerHTML=`<div class="gacha-progress-flag"><img src="${c.flag}" alt=""><span class="gacha-check">✓</span></div><div>${escapeHtml(c.name)}</div>`;
      el.gachaProgress.appendChild(item);
    });
  }
  function resetGachaVisuals(){
    clearGachaTimers();gachaLocked=false;
    el.gachaMachine.classList.remove('running','dispensing','reveal-dim');
    el.gachaHandle.classList.remove('turning');
    el.gachaDropCapsule.classList.add('hidden');el.gachaDropCapsule.classList.remove('falling');
    el.gachaReveal.classList.add('hidden');el.gachaReveal.classList.remove('show','opening','revealed');
    el.gachaRevealCapsule.classList.remove('opening');
    el.gachaResultFlag.innerHTML='';
    el.gachaName.textContent='ガチャをまわそう！';
    el.gachaConfetti.innerHTML='';
    el.gachaBtn.disabled=false;el.gachaBtn.textContent='ガチャをまわす！';el.gachaBtn.classList.remove('hidden');el.gachaStart.classList.add('hidden');
    renderGachaCapsules();renderGachaProgress();
  }
  function openGacha(){
    clearSeasonEffect();showOnly('monthSelectScreen',false);
    gachaChoice=null;resetGachaVisuals();updateGachaRemaining();el.gacha.classList.remove('hidden');
  }
  function closeGacha(){clearGachaTimers();gachaLocked=false;el.gacha.classList.add('hidden');}
  function updateGachaRemaining(){
    const left=Object.keys(COUNTRIES).filter(k=>!state.completedCountries.includes(k));
    el.gachaRemaining.textContent=`のこり ${left.length}か国（こく）`;
    renderGachaProgress();
  }
  function ensureGachaAudio(){
    try{
      const Ctx=window.AudioContext||window.webkitAudioContext;
      if(!Ctx)return null;
      if(!gachaAudioCtx)gachaAudioCtx=new Ctx();
      if(gachaAudioCtx.state==='suspended')gachaAudioCtx.resume();
      return gachaAudioCtx;
    }catch(e){return null;}
  }
  function tone(ctx,freq,dur,type='sine',vol=.055,when=0){
    if(!ctx)return;const o=ctx.createOscillator(),g=ctx.createGain(),t=ctx.currentTime+when;
    o.type=type;o.frequency.setValueAtTime(freq,t);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.015);g.gain.exponentialRampToValueAtTime(.0001,t+dur);
    o.connect(g);g.connect(ctx.destination);o.start(t);o.stop(t+dur+.03);
  }
  function gachaRattle(ctx){for(let i=0;i<10;i++)tone(ctx,150+Math.random()*170,.055,'square',.018,i*.075);}
  function gachaDropSound(ctx){tone(ctx,190,.11,'sine',.08,0);tone(ctx,115,.16,'sine',.06,.10);}
  function gachaRevealSound(ctx){tone(ctx,523,.16,'sine',.06,0);tone(ctx,659,.18,'sine',.06,.12);tone(ctx,784,.34,'sine',.07,.25);}
  function burstGachaConfetti(){
    el.gachaConfetti.innerHTML='';
    const colors=['#ff5f72','#ffd44d','#4aa6ff','#62c67d','#9b78e8','#ff8b3d'];
    for(let i=0;i<34;i++){
      const s=document.createElement('span');s.className='gacha-confetti-piece';
      s.style.left=(45+Math.random()*10)+'%';s.style.top='45%';s.style.background=colors[i%colors.length];
      s.style.setProperty('--dx',`${(Math.random()-.5)*560}px`);s.style.setProperty('--dy',`${-80-Math.random()*260}px`);s.style.setProperty('--rot',`${180+Math.random()*720}deg`);s.style.animationDelay=`${Math.random()*.15}s`;
      el.gachaConfetti.appendChild(s);
    }
    setGachaTimer(()=>{el.gachaConfetti.innerHTML='';},1800);
  }
  function runGacha(){
    if(gachaLocked)return;
    const left=Object.keys(COUNTRIES).filter(k=>!state.completedCountries.includes(k));
    if(!left.length){closeGacha();finishAll();return;}
    gachaLocked=true;gachaChoice=left[Math.floor(Math.random()*left.length)];
    const chosen=COUNTRIES[gachaChoice];
    const ctx=ensureGachaAudio();if(ctx&&ctx.state==='suspended'){ctx.resume().then(()=>gachaRattle(ctx)).catch(()=>{});}else gachaRattle(ctx);
    el.gachaBtn.disabled=true;el.gachaBtn.textContent='ガチャ ちゅう…';el.gachaStart.classList.add('hidden');
    el.gachaName.textContent='どれが でるかな？';
    el.gachaMachine.classList.add('running');el.gachaHandle.classList.add('turning');
    const caps=[...el.gachaChamber.querySelectorAll('.gacha-capsule-mini')];
    const chosenCap=caps[Math.floor(Math.random()*Math.max(1,caps.length))]||null;
    const pair=chosenCap?[getComputedStyle(chosenCap).getPropertyValue('--cap').trim(),getComputedStyle(chosenCap).getPropertyValue('--cap2').trim()]:GACHA_COLORS[0];
    capsuleStyle(el.gachaDropCapsule,pair);capsuleStyle(el.gachaRevealCapsule,pair);
    setGachaTimer(()=>{
      el.gachaMachine.classList.remove('running');el.gachaMachine.classList.add('dispensing');
      el.gachaHandle.classList.remove('turning');
      if(chosenCap)chosenCap.classList.add('chosen-out');
      el.gachaDropCapsule.classList.remove('hidden');requestAnimationFrame(()=>el.gachaDropCapsule.classList.add('falling'));
      gachaDropSound(ctx);
    },1750);
    setGachaTimer(()=>{
      el.gachaDropCapsule.classList.add('hidden');
      el.gachaMachine.classList.add('reveal-dim');
      el.gachaReveal.classList.remove('hidden');requestAnimationFrame(()=>el.gachaReveal.classList.add('show'));
      el.gachaName.textContent='カプセルを あけるよ！';
    },2350);
    setGachaTimer(()=>{
      el.gachaReveal.classList.add('opening');el.gachaRevealCapsule.classList.add('opening');
      el.gachaResultFlag.innerHTML=`<img src="${chosen.flag}" alt="${escapeHtml(chosen.name)}の こっき">`;
      el.gachaName.textContent=`${chosen.name}！`;
      gachaRevealSound(ctx);burstGachaConfetti();
    },2950);
    setGachaTimer(()=>{
      el.gachaReveal.classList.add('revealed');
      el.gachaBtn.classList.add('hidden');el.gachaStart.classList.remove('hidden');
      el.gachaBtn.disabled=false;gachaLocked=false;
    },3650);
  }

  /* ---------- 月をえらぶ ---------- */
  function showMonthSelect(usePeel=true){
    if(flowLocked)return;
    clearSeasonEffect();
    clearToast();
    if(!state.currentCountry){openGacha();return;}
    showOnly('monthSelectScreen',usePeel);
    renderMonthSelect();
  }
  function renderMonthSelect(){
    clearMonthHintTimer();
    const c=COUNTRIES[state.currentCountry];
    const all=EVENTS.filter(e=>e.country===state.currentCountry);
    const done=all.filter(e=>state.placed.includes(e.id)).length;
    el.selectTitle.textContent='つきを えらぼう';
    el.selectProgress.textContent=`${done} / ${all.length} まい`;
    el.countryBanner.innerHTML=`<span class="country-name-banner">${escapeHtml(c.name)}</span>の カレンダー`;
    el.monthGrid.innerHTML='';
    for(let m=1;m<=12;m++){
      const ev=all.find(e=>e.month===m);
      const isDone=ev&&state.placed.includes(ev.id);
      const b=document.createElement('button');
      b.className=`month-tile ${ev?'has-event':''} ${isDone?'done':''}`;
      b.innerHTML=`<div class="month-num">${monthText(m)}</div>${isDone?'<div class="month-state">かんせい！</div><div class="month-check">✓</div>':'<div class="month-state">　</div>'}`;
      b.addEventListener('click',()=>openMonth(m));
      el.monthGrid.appendChild(b);
    }
    monthHintTimer=setTimeout(()=>{
      el.monthGrid.querySelectorAll('.month-tile.has-event:not(.done)').forEach(tile=>tile.classList.add('hint-glow'));
    },5000);
  }
  function openMonth(m){
    clearToast();
    state.selectedMonth=m;save();
    showOnly('monthDetailScreen');
    renderMonthDetail();
  }

  /* ---------- がいこくの つきがめん ---------- */
  function renderMonthDetail(){
    clearSeasonEffect();
    const m=state.selectedMonth||1;
    el.detailTitle.textContent=monthText(m);
    el.worldTrayWrap.classList.remove('hidden');
    const c=COUNTRIES[state.currentCountry];
    const all=EVENTS.filter(e=>e.country===state.currentCountry);
    const done=all.filter(e=>state.placed.includes(e.id)).length;
    el.detailBadge.textContent=`${c.name}　${done}/${all.length}`;
    const jp=JAPAN.find(e=>e.month===m);
    const we=all.find(e=>e.month===m);
    const jpHtml=jp?panelEvent(jp,'にほん'):`<div class="world-empty"><div><div class="empty-title big-country-name">にほん</div><div class="empty-text">${monthText(m)}の カードは<br>ありません</div></div></div>`;
    let worldHtml='';
    if(we&&state.placed.includes(we.id)) worldHtml=panelEvent(we,c.name);
    else if(we) worldHtml=`<div id="worldDrop" class="world-empty ready"><div><div class="empty-title big-country-name">${c.name}</div><div class="empty-text">この つきの カードを<br>ここに いれよう！</div></div></div>`;
    else worldHtml=`<div id="worldDrop" class="world-empty"><div><div class="empty-title big-country-name">${c.name}</div><div class="empty-text">${monthText(m)}の カードは<br>ありません</div></div></div>`;
    el.detailMain.innerHTML=`<div class="compare-layout"><section class="compare-box jp">${jpHtml}</section><section id="worldBox" class="compare-box world">${worldHtml}</section></div>`;
    renderWorldTray(all);
    selectedCard=null;
    const drop=$('#worldDrop');
    if(drop){
      drop.addEventListener('click',()=>{if(selectedCard)placeWorld(selectedCard);});
      drop.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&selectedCard){e.preventDefault();placeWorld(selectedCard);}});
    }
  }

  function renderWorldTray(all){
    ensureWorldCardOrder(state.currentCountry,all);
    const trayEvents=orderedEvents(all,state.worldCardOrders[state.currentCountry]);
    const current=all.find(e=>e.month===state.selectedMonth);
    const placedHere=!!(current&&state.placed.includes(current.id));
    el.worldTray.innerHTML=`
      <div class="world-tray-content ${placedHere?'placed':''}">
        <button id="trayBackBtn" class="tray-back-btn ${placedHere?'attention':'secondary'} ${flowLocked?'flow-locked':''}" ${flowLocked?'disabled':''}>← つきを えらぶ がめんに もどる</button>
        <div class="all-card-tray world-all-cards count-${all.length}">${trayEvents.map(e=>cardHtml(e,state.placed.includes(e.id),'compact')).join('')}</div>
      </div>`;
    $('#trayBackBtn').addEventListener('click',()=>{if(flowLocked)return;showMonthSelect();});
    el.worldTray.querySelectorAll('.event-card:not(.used)').forEach(card=>bindCard(card,card.dataset.id,'world'));
  }

  function placeWorld(id){
    const code=state.currentCountry;
    const ev=EVENTS.find(e=>e.id===id);
    if(!ev||state.placed.includes(id)||ev.country!==code||flowLocked)return;
    if(ev.month!==state.selectedMonth){showToast('このカードは ほかの つきです。','warn');return;}
    state.placed.push(id);
    const completedNow=countryComplete(code);
    if(completedNow)setFlowLock(true);
    cleanupActiveDrag();
    save();
    renderMonthDetail();
    // renderMonthDetail rebuilds the lower button, so re-apply the lock immediately.
    if(completedNow)setFlowLock(true);
    showToast(`${monthText(ev.month)} かんせい！`,'good');
    celebrateMonth(ev.month,()=>{
      if(completedNow){
        startCountryReview(code);
      }
    });
  }
  function countryComplete(code){return EVENTS.filter(e=>e.country===code).every(e=>state.placed.includes(e.id));}

  function cancelCountryReviewTimers(){
    reviewSession++;
    if(reviewTimer){clearTimeout(reviewTimer);reviewTimer=null;}
    if(screenDelayTimer){clearTimeout(screenDelayTimer);screenDelayTimer=null;}
    clearIntro();
  }

  function startCountryReview(code){
    cancelCountryReviewTimers();
    const session=reviewSession;
    if(!state.completedCountries.includes(code))state.completedCountries.push(code);
    state.currentCountry=code;
    state.selectedMonth=null;
    save();
    reviewCountry=code;
    reviewQueue=EVENTS.filter(e=>e.country===code).slice().sort((a,b)=>a.month-b.month);
    reviewIndex=0;
    const c=COUNTRIES[code];
    el.countryReviewTitle.textContent=`${c.name}の カレンダー かんせい！`;
    el.countryReviewProgress.textContent=`0 / ${reviewQueue.length}`;
    el.countryReviewStage.innerHTML='';
    showOnly('countryReviewScreen');
    scheduleScreenTask(()=>{
      if(session!==reviewSession)return;
      setFlowLock(false);
      showReviewIntro(()=>{
        if(session!==reviewSession)return;
        // Separate “おさらいしよう！” from the first month title so that
        // the first “○月（がつ）” is always shown.
        reviewTimer=setTimeout(()=>{
          reviewTimer=null;
          if(session!==reviewSession)return;
          renderCountryReviewStep(session);
        },160);
      });
    },980);
  }

  function renderCountryReviewStep(session=reviewSession){
    if(session!==reviewSession)return;
    if(reviewIndex>=reviewQueue.length){showCountryCompleteOverlay(session);return;}
    const ev=reviewQueue[reviewIndex];
    const c=COUNTRIES[reviewCountry];
    el.countryReviewTitle.textContent=`${c.name}の カレンダー かんせい！`;
    el.countryReviewProgress.textContent=`${reviewIndex+1} / ${reviewQueue.length}`;
    el.countryReviewStage.innerHTML='';
    showMonthIntro(ev.month,()=>{
      if(session!==reviewSession)return;
      const jp=JAPAN.find(e=>e.month===ev.month);
      const jpHtml=jp?reviewEventCard(jp,'にほん'):`<div class="review-empty">にほんの カードは<br>ありません</div>`;
      const worldHtml=reviewEventCard(ev,c.name);
      el.countryReviewStage.innerHTML=`<div class="review-compare"><section class="review-side jp">${jpHtml}</section><section class="review-side world">${worldHtml}</section></div>`;
      reviewTimer=setTimeout(()=>{
        reviewTimer=null;
        if(session!==reviewSession)return;
        reviewIndex++;
        if(reviewIndex>=reviewQueue.length){
          showCountryCompleteOverlay(session);
        }else{
          playPagePeel(()=>{
            if(session!==reviewSession)return;
            el.countryReviewStage.innerHTML='';
            renderCountryReviewStep(session);
          });
        }
      },2800);
    });
  }

  function reviewEventCard(ev,label){
    return `<article class="review-event-card review-reveal"><div class="review-label">${escapeHtml(label)}</div><div class="review-image"><img draggable="false" src="${ev.image}" alt="${escapeHtml(ev.name)}"></div><div class="review-copy"><div class="review-name">${escapeHtml(ev.name)}</div><div class="review-desc">${escapeHtml(ev.desc)}</div></div></article>`;
  }

  function showCountryCompleteOverlay(session=reviewSession){
    if(session!==reviewSession)return;
    if(reviewTimer){clearTimeout(reviewTimer);reviewTimer=null;}
    const code=reviewCountry;
    if(!code)return;
    const c=COUNTRIES[code];
    el.completeIcon.textContent='✓';
    el.completeTitle.textContent=`${c.name} かんせい！`;
    el.completeText.textContent=`${c.name}の カードを ぜんぶ いれました。`;
    const all=Object.keys(COUNTRIES).every(k=>state.completedCountries.includes(k));
    el.completeBtn.textContent=all?'できあがった カレンダーを みる':'つぎの くにへ';
    el.complete.dataset.kind=all?'all':'country';
    el.complete.classList.remove('hidden');
  }
  function handleComplete(){
    const kind=el.complete.dataset.kind;
    el.complete.classList.add('hidden');
    setFlowLock(false);
    if(kind==='japan'){openGacha();return;}
    if(kind==='all'){
      cancelCountryReviewTimers();
      reviewCountry=null;reviewQueue=[];reviewIndex=0;
      finishAll();
      return;
    }
    cancelCountryReviewTimers();
    reviewCountry=null;reviewQueue=[];reviewIndex=0;
    state.currentCountry=null;state.selectedMonth=null;save();
    openGacha();
  }
  function finishAll(){
    clearTransientUi();
    state.phase='browse';state.currentCountry=null;state.selectedMonth=null;state.browseMonth=1;save();
    showOverview(true);
  }

  /* ---------- クリア後：1月から順番に見る ---------- */
  function showOverview(resetToJanuary=false){
    clearTransientUi();
    state.phase='browse';
    if(resetToJanuary)state.browseMonth=1;
    if(!state.browseMonth)state.browseMonth=1;
    save();
    clearSeasonEffect();
    el.overviewStage.innerHTML='';
    el.overviewNext.classList.add('hidden');
    showOnly('overviewScreen');
    scheduleScreenTask(()=>showMonthIntro(state.browseMonth,renderOverviewContent));
  }

  function renderOverviewContent(){
    const m=state.browseMonth;
    el.overviewProgress.textContent=`${monthText(m)}　${m}/12`;
    const jp=JAPAN.find(e=>e.month===m);
    const worlds=EVENTS.filter(e=>e.month===m&&state.placed.includes(e.id));
    let revealIndex=0;
    const jpHtml=jp?browseJapanCard(jp,revealIndex++):`<div class="browse-empty-jp browse-reveal" style="--delay:.12s"><div class="browse-empty-month">${monthText(m)}</div><div class="browse-empty-title">にほん</div><div class="browse-empty-text">この つきの カードは<br>ありません</div></div>`;
    const worldHtml=worlds.length?worlds.map(e=>browseWorldCard(e,revealIndex++)).join(''):`<div class="browse-empty-world browse-reveal" style="--delay:.7s">この つきの がいこくの カードは ありません</div>`;
    el.overviewStage.innerHTML=`<div class="browse-compare-layout"><section class="browse-japan-column">${jpHtml}</section><section class="browse-world-column ${worlds.length>1?'multi':''}">${worldHtml}</section></div>`;
    el.overviewNext.textContent=m<12?'つぎへ →':'1がつに もどる ↺';
    el.overviewNext.classList.remove('hidden');
    applySeasonEffect(m);
  }

  function nextBrowseMonth(){
    clearToast();
    state.browseMonth=state.browseMonth>=12?1:state.browseMonth+1;
    save();
    playPagePeel(()=>{
      clearSeasonEffect();
      el.overviewStage.innerHTML='';
      el.overviewNext.classList.add('hidden');
      showMonthIntro(state.browseMonth,renderOverviewContent);
    });
  }

  function browseJapanCard(ev,index){
    const delay=(0.12+index*0.62).toFixed(2);
    return `<article class="browse-japan-card browse-reveal" style="--delay:${delay}s"><div class="browse-japan-head">にほん</div><div class="browse-japan-image"><img draggable="false" src="${ev.image}" alt="${escapeHtml(ev.name)}"></div><div class="browse-japan-copy"><div class="browse-name">${escapeHtml(ev.name)}</div><div class="browse-desc">${escapeHtml(ev.desc)}</div></div></article>`;
  }

  function browseWorldCard(ev,index){
    const c=COUNTRIES[ev.country];
    const delay=(0.12+index*0.62).toFixed(2);
    return `<article class="browse-world-card browse-reveal" style="--delay:${delay}s"><div class="browse-world-image"><img draggable="false" src="${ev.image}" alt="${escapeHtml(ev.name)}"></div><div class="browse-world-copy"><div class="browse-country">${c.name}</div><div class="browse-name">${escapeHtml(ev.name)}</div><div class="browse-desc">${escapeHtml(ev.desc)}</div></div></article>`;
  }

  const SEASON_EFFECTS={
    1:{theme:'winter',type:'drift',symbols:['❄','✦'],count:20},
    2:{theme:'late-winter',type:'drift',symbols:['✿','❄'],count:18},
    3:{theme:'early-spring',type:'drift',symbols:['✿','🌸'],count:20},
    4:{theme:'sakura',type:'drift',symbols:['🌸','✿'],count:30},
    5:{theme:'fresh-green',type:'stream',symbols:['🎏'],count:9},
    6:{theme:'rain',type:'rain',symbols:[],count:40},
    7:{theme:'stars',type:'twinkle',symbols:['★','✦','☆'],count:30},
    8:{theme:'summer-night',type:'glow',symbols:['🏮','✦'],count:18},
    9:{theme:'moon',type:'glow',symbols:['✦','○'],count:20},
    10:{theme:'autumn',type:'drift',symbols:['🍁','🍂'],count:28},
    11:{theme:'late-autumn',type:'drift',symbols:['🍂','🍁'],count:30},
    12:{theme:'snow',type:'drift',symbols:['❄','✦'],count:34}
  };

  function clearSeasonEffect(){
    if(el.overviewSeasonFx)el.overviewSeasonFx.innerHTML='';
    if(el.overview)el.overview.removeAttribute('data-season');
  }

  function applySeasonEffect(month){
    clearSeasonEffect();
    const cfg=SEASON_EFFECTS[month]||SEASON_EFFECTS[1];
    el.overview.setAttribute('data-season',cfg.theme);
    for(let i=0;i<cfg.count;i++){
      const p=document.createElement('span');p.className=`season-particle ${cfg.type}`;
      if(cfg.type==='rain'){
        p.innerHTML='<i></i>';p.style.left=`${Math.random()*100}%`;p.style.animationDuration=`${0.85+Math.random()*0.7}s`;p.style.animationDelay=`${-Math.random()*2}s`;p.style.opacity=`${0.50+Math.random()*0.30}`;
      }else{
        p.textContent=cfg.symbols[i%cfg.symbols.length];
        if(cfg.type==='stream'){
          p.style.left='-15%';p.style.top=`${6+Math.random()*76}%`;p.style.fontSize=`${34+Math.random()*22}px`;p.style.animationDuration=`${8+Math.random()*5}s`;
        }else if(cfg.type==='twinkle'||cfg.type==='glow'){
          p.style.left=`${Math.random()*100}%`;p.style.top=`${4+Math.random()*88}%`;p.style.fontSize=`${18+Math.random()*22}px`;p.style.animationDuration=`${2.0+Math.random()*3.2}s`;
        }else{
          p.style.left=`${Math.random()*100}%`;p.style.top=`${-10-Math.random()*30}%`;p.style.fontSize=`${18+Math.random()*24}px`;p.style.animationDuration=`${6+Math.random()*6}s`;
        }
        p.style.animationDelay=`${-Math.random()*10}s`;p.style.opacity=`${0.50+Math.random()*0.36}`;
      }
      el.overviewSeasonFx.appendChild(p);
    }
  }

  /* ---------- UI helper ---------- */
  function panelEvent(ev,label){return `<div class="panel-event"><div class="panel-image"><img draggable="false" src="${ev.image}" alt="${escapeHtml(ev.name)}"><div class="panel-badge">${label}</div></div><div class="panel-info"><div class="panel-name">${escapeHtml(ev.name)}</div><div class="panel-desc">${escapeHtml(ev.desc)}</div></div></div>`;}
  function largeEvent(ev,label){return `<div class="event-display"><div class="event-image"><img draggable="false" src="${ev.image}" alt="${escapeHtml(ev.name)}"></div><div class="event-copy"><div class="country-pill">${label}</div><div class="display-name">${escapeHtml(ev.name)}</div><div class="display-desc">${escapeHtml(ev.desc)}</div></div></div>`;}
  function cardHtml(ev,used=false,mode='compact'){
    return `<div class="event-card ${mode} ${used?'used':''}" data-id="${ev.id}" role="button" tabindex="${used?'-1':'0'}" aria-disabled="${used?'true':'false'}"><div class="card-image-wrap"><img draggable="false" src="${ev.image}" alt="${escapeHtml(ev.name)}"></div><div class="card-copy"><div class="card-name">${escapeHtml(ev.name)}</div>${used?'<div class="used-label">✓ つかった</div>':'<div class="card-hint">タップ または ドラッグ</div>'}</div></div>`;
  }

  function bindCard(card,id,kind){
    if(card.classList.contains('used'))return;
    card.addEventListener('click',()=>{
      if(card.dataset.dragged==='1'){card.dataset.dragged='0';return;}
      selectedCard=(selectedCard===id)?null:id;
      document.querySelectorAll('.event-card.selected').forEach(c=>{if(c!==card)c.classList.remove('selected');});
      card.classList.toggle('selected',selectedCard===id);
      const target=kind==='japan'?el.jpTarget:$('#worldDrop');
      if(target)target.classList.toggle('selected-target',selectedCard===id);
    });
    card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectedCard=id;if(kind==='japan')placeJapanese(id);else placeWorld(id);}});
    card.addEventListener('pointerdown',e=>startDrag(e,id,card,kind));
  }

  function startDrag(e,id,card,kind){
    if(card.classList.contains('used'))return;
    if(kind==='japan'&&el.jpTray.classList.contains('interaction-locked'))return;
    if(e.button!==undefined&&e.button!==0)return;
    const r=card.getBoundingClientRect();
    const ghost=card.cloneNode(true);ghost.classList.add('drag-ghost');ghost.style.width=`${r.width}px`;ghost.style.height=`${r.height}px`;ghost.style.left='0';ghost.style.top='0';document.body.appendChild(ghost);
    drag={id,card,ghost,kind,pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,offsetX:e.clientX-r.left,offsetY:e.clientY-r.top,moved:false};moveGhost(e.clientX,e.clientY);card.setPointerCapture?.(e.pointerId);
    const move=ev=>{if(!drag)return;if(Math.hypot(ev.clientX-drag.startX,ev.clientY-drag.startY)>8)drag.moved=true;moveGhost(ev.clientX,ev.clientY);};
    const up=ev=>{
      card.removeEventListener('pointermove',move);card.removeEventListener('pointerup',up);card.removeEventListener('pointercancel',up);
      if(!drag)return;const d=drag;drag=null;d.ghost.remove();if(!d.moved)return;
      card.dataset.dragged='1';const hit=document.elementFromPoint(ev.clientX,ev.clientY);const ok=d.kind==='japan'?(hit&&hit.closest('#jpTarget')):(hit&&hit.closest('#worldBox'));
      if(ok){d.kind==='japan'?placeJapanese(d.id):placeWorld(d.id);}else showToast('カードを おおきな わくの なかに いれよう！','warn');
    };
    card.addEventListener('pointermove',move);card.addEventListener('pointerup',up);card.addEventListener('pointercancel',up);
  }
  function moveGhost(x,y){if(!drag)return;drag.ghost.style.transform=`translate(${x-drag.offsetX}px,${y-drag.offsetY}px) rotate(2deg) scale(1.02)`;}

  function celebrateMonth(month,callback){
    afterCelebrate=callback;el.celebrateText.textContent=`${monthText(month)} かんせい！`;el.celebrate.querySelectorAll('.spark').forEach(x=>x.remove());const symbols=['✨','🌸','⭐','🎉','💫'];
    for(let i=0;i<34;i++){const s=document.createElement('span');s.className='spark';s.textContent=symbols[i%symbols.length];s.style.left='50%';s.style.top='50%';s.style.setProperty('--x',`${(Math.random()-.5)*900}px`);s.style.setProperty('--y',`${(Math.random()-.5)*620}px`);s.style.animationDelay=`${Math.random()*.18}s`;el.celebrate.appendChild(s);}
    el.celebrate.classList.remove('hidden');setTimeout(()=>{el.celebrate.classList.add('hidden');const cb=afterCelebrate;afterCelebrate=null;if(cb)cb();},2500);
  }

  function showToast(msg,type=''){clearTimeout(toastTimer);el.toast.textContent=msg;el.toast.className=`toast ${type}`;el.toast.classList.remove('hidden');toastTimer=setTimeout(()=>el.toast.classList.add('hidden'),2600);}

  init();
})();
