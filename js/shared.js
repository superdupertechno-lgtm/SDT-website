// ============ SDT SIGNAL — SHARED SCRIPT ============

console.log(
  "%c SDT SIGNAL ", "background:#ff3348;color:#0b0e14;font-weight:bold;padding:4px 10px;border-radius:3px;font-family:monospace;",
  "\nYou're tuned in. Nothing else here yet — but thanks for checking the static.\nTry the Konami code. Try typing a word. Try clicking things three times.\n— Hardhip"
);

const PAGES = [
  { href: 'index.html',    num: '01', label: 'Home' },
  { href: 'work.html',     num: '02', label: 'The Work' },
  { href: 'universe.html', num: '03', label: 'Universe' },
  { href: 'onair.html',    num: '04', label: 'On Air' },
  { href: 'studio.html',   num: '05', label: 'Studio' },
];

function currentPage(){
  const p = location.pathname.split('/').pop() || 'index.html';
  return p;
}

function buildNav(){
  const cur = currentPage();
  const tuner = document.createElement('nav');
  tuner.className = 'tuner';
  tuner.innerHTML = `
    <a class="call-sign" href="index.html">
      <img class="mark" src="assets/sdt-color.png" alt="SDT">
      SDT <span class="freq">// 91.6 FM</span>
    </a>
    <div class="presets">
      ${PAGES.map(p => `<a href="${p.href}" class="${p.href===cur?'current':''}"><span class="num">${p.num}</span>${p.label}</a>`).join('')}
    </div>
    <div class="tuner-controls">
      <a class="tuner-cta" href="studio.html#contact">Contact</a>
      <button class="sound-toggle" id="soundToggle" aria-label="Toggle sound" title="Toggle sound">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 9v6h3l5 4V5L7 9H4z"/><path class="wav1" d="M16 8.5a5 5 0 0 1 0 7"/><path class="wav2" d="M18.5 6a8.5 8.5 0 0 1 0 12"/></svg>
      </button>
      <button class="tuner-menu-btn" id="menuBtn" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  `;
  document.body.prepend(tuner);

  const mm = document.createElement('div');
  mm.id = 'mobileMenu';
  mm.innerHTML = PAGES.map(p => `<a href="${p.href}"><span class="num">${p.num}</span>${p.label}</a>`).join('') +
    `<a href="studio.html#contact"><span class="num">→</span>Contact</a>`;
  document.body.appendChild(mm);

  document.getElementById('menuBtn').addEventListener('click', () => mm.classList.toggle('open'));
}

const ICONS = {
  x: `<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23 22h-6.8l-5.3-6.9L4.8 22H1.7l8.1-9.3L1 2h7l4.8 6.3L18.9 2zm-2.4 18h2L7.6 3.9h-2L16.5 20z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M22.5 6.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C16.4 2.6 12 2.6 12 2.6h0s-4.4 0-7.3.3c-.4 0-1.4.1-2.3 1-.7.7-.9 2.3-.9 2.3S1.2 8 1.2 9.9v1.9c0 1.9.3 3.7.3 3.7s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.1.3 7.1.3s4.4 0 7.3-.3c.4 0 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.3-1.9.3-3.7V9.9c0-1.9-.3-3.7-.3-3.7zM9.7 14.1V7.7l6.1 3.2-6.1 3.2z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="7.2" cy="8" r="1.3"/><rect x="6" y="10.5" width="2.4" height="7.3"/><path d="M11 10.5h2.3v1.2c.5-.8 1.4-1.4 2.6-1.4 2 0 3.1 1.3 3.1 3.9v4.6h-2.4v-4.1c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.8v4.2H11V10.5z"/></svg>`,
  discord: `<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M18.9 5.3A18 18 0 0 0 14.6 4l-.3.6a15 15 0 0 1 3.8 1.2 12.7 12.7 0 0 0-12.2 0A15 15 0 0 1 9.7 4.6L9.4 4a18 18 0 0 0-4.3 1.3C2.7 8.6 2 11.9 2.3 15.1a17.9 17.9 0 0 0 5.3 2.7l.7-1.1a11.9 11.9 0 0 1-1.9-.9c.16-.1.32-.24.47-.35a12.9 12.9 0 0 0 10.4 0c.15.12.31.24.47.35-.6.35-1.24.65-1.9.9l.7 1.1a17.9 17.9 0 0 0 5.3-2.7c.4-3.7-.5-6.9-2.9-9.8zM8.9 13.6c-.8 0-1.4-.7-1.4-1.6s.6-1.6 1.4-1.6c.8 0 1.5.7 1.4 1.6 0 .9-.6 1.6-1.4 1.6zm6.2 0c-.8 0-1.4-.7-1.4-1.6s.6-1.6 1.4-1.6c.8 0 1.5.7 1.4 1.6 0 .9-.6 1.6-1.4 1.6z"/></svg>`,
  reddit: `<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><circle cx="12" cy="13.2" r="7.3" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="9.2" cy="13" r="1.1"/><circle cx="14.8" cy="13" r="1.1"/><path d="M8.6 16.2c1 .8 2.2 1 3.4 1s2.4-.2 3.4-1" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M12 5.9l.9-3 2.7.6" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="16.2" cy="3.3" r="1.1"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" style="vertical-align:-2px;margin-right:6px;"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.6.1-.2.2-.3.1-.6-.1-.2-.7-1.7-1-2.3-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3 1 2.6 1.1 2.8.1.2 1.9 3 4.6 4.1 2.7 1.1 2.7.7 3.2.7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z"/><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>`,
};

function buildFooter(){
  const f = document.createElement('footer');
  f.id = 'contact';
  f.innerHTML = `
    <div class="wrap">
      <div class="foot-grid">
        <div class="foot-brand reveal">
          <div class="call-sign mono" style="font-size:15px;">
            <img class="mark" src="assets/sdt-color.png" alt="SDT" style="width:32px;height:32px;">
            SUPER DUPER TECHNO
          </div>
          <p>An independent studio broadcasting games, software, hardware, and original worlds — one frequency at a time.</p>
        </div>
        <div class="foot-col reveal">
          <h4>Contact</h4>
          <a href="mailto:superdupertechno@gmail.com">superdupertechno@gmail.com</a>
          <div class="social-pop-wrap">
            <a href="https://wa.me/919345842711?text=Hey%20SDT!" target="_blank" rel="noopener" class="wa-link">
              ${ICONS.whatsapp} +91 93458 42711
            </a>
            <span class="social-pop">Text us on WhatsApp — usually reply fast 👋</span>
          </div>
        </div>
        <div class="foot-col reveal">
          <h4>Elsewhere</h4>
          <div class="social-row">
            <a href="https://www.youtube.com/@SuperDuperTechno-sdgamer" target="_blank" rel="noopener" class="social-icon" aria-label="YouTube">${ICONS.youtube}</a>
            <div class="social-pop-wrap">
              <a href="https://instagram.com/super.duper.techno" target="_blank" rel="noopener" class="social-icon" aria-label="Instagram">${ICONS.instagram}</a>
              <span class="social-pop">Come see behind the scenes 📸</span>
            </div>
            <a href="https://x.com/Superduper26319" target="_blank" rel="noopener" class="social-icon" aria-label="X">${ICONS.x}</a>
            <a href="https://linkedin.com/company/super-duper-techno" target="_blank" rel="noopener" class="social-icon" aria-label="LinkedIn">${ICONS.linkedin}</a>
            <a href="https://discord.gg/QkQP4ntBXq" target="_blank" rel="noopener" class="social-icon" aria-label="Discord">${ICONS.discord}</a>
            <a href="https://www.reddit.com/r/Super_Duper_Techno/" target="_blank" rel="noopener" class="social-icon" aria-label="Reddit">${ICONS.reddit}</a>
          </div>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 Super Duper Techno. — Hardhip G, Founder &amp; CEO</span>
        <span>SDG · SDS · SDPD · SDSM · SDN · SDAI · SDE · SDRD</span>
      </div>
    </div>
  `;
  document.querySelector('main').after(f);
}

function initChannelSwitch(){
  const el = document.createElement('div');
  el.id = 'channelSwitch';
  document.body.appendChild(el);
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if(!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel')) return;
    a.addEventListener('click', (e) => {
      if(href.split('#')[0] === currentPage()) return;
      e.preventDefault();
      SFX.staticBurst();
      el.classList.add('active');
      setTimeout(() => { window.location.href = href; }, 260);
    });
  });
  // fix: browser back/forward (bfcache) can restore the page with this overlay
  // still stuck in its "active" state, showing a frozen black/static screen.
  window.addEventListener('pageshow', () => { el.classList.remove('active'); });
}

function initReveals(){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if(en.isIntersecting){
        en.target.classList.add('in');
        if(en.target.matches('.head h2, .hero h1')) scrambleText(en.target);
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

function initScrollBar(){
  const bar = document.createElement('div');
  bar.id = 'sigBar';
  document.body.appendChild(bar);
  const update = () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    bar.style.width = Math.min(scrolled * 100, 100) + '%';
  };
  document.addEventListener('scroll', update, { passive: true });
  update();
}

function initStaticVeil(){
  const v = document.createElement('div');
  v.className = 'static-veil';
  document.body.appendChild(v);
}

/* ============ WAVEFORM CANVAS ============ */
function initWaveforms(){
  document.querySelectorAll('.waveform-wrap canvas').forEach(canvas => {
    const ctx = canvas.getContext('2d');
    const wrap = canvas.parentElement;
    let W, H, dpr;
    function size(){
      dpr = Math.min(window.devicePixelRatio||1, 1.5);
      W = wrap.clientWidth; H = wrap.clientHeight;
      canvas.width = W*dpr; canvas.height = H*dpr;
      canvas.style.width = W+'px'; canvas.style.height = H+'px';
      ctx.setTransform(dpr,0,0,dpr,0,0);
    }
    size();
    window.addEventListener('resize', size);
    let t = Math.random()*100;
    function draw(){
      if(document.hidden){ requestAnimationFrame(draw); return; }
      ctx.clearRect(0,0,W,H);
      ctx.strokeStyle = 'rgba(238,241,238,0.14)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      const mid = H/2;
      for(let x=0; x<=W; x+=4){
        const n = Math.sin(x*0.04 + t) * Math.sin(x*0.011 + t*0.6) * (H*0.32);
        const jag = (Math.sin(x*0.29+t*3) > 0.93) ? (Math.random()-0.5)*H*0.4 : 0;
        const y = mid + n + jag;
        if(x===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.stroke();
      t += 0.012;
      requestAnimationFrame(draw);
    }
    draw();
  });
}

/* ============ FUN TEXT: scramble-in reveal for big headings ============ */
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01#$%&■□▪';
function scrambleText(el){
  if(el.dataset.scrambled) return;
  el.dataset.scrambled = '1';
  const original = el.innerHTML;
  const plain = el.textContent;
  let frame = 0;
  const totalFrames = 16;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced) return;
  function step(){
    frame++;
    if(frame >= totalFrames){ el.innerHTML = original; return; }
    const reveal = Math.floor((frame/totalFrames) * plain.length);
    let out = '';
    for(let i=0;i<plain.length;i++){
      const ch = plain[i];
      if(ch === ' ' || ch === '\n'){ out += ch; continue; }
      out += i < reveal ? ch : SCRAMBLE_CHARS[Math.floor(Math.random()*SCRAMBLE_CHARS.length)];
    }
    el.textContent = out;
    setTimeout(step, 28);
  }
  step();
}

/* ============ SOUND ENGINE — synthesized, no audio files ============ */
/* Off by default — audio should be opt-in for a professional site, not
   something that surprises a first-time visitor. Used only for the arcade
   game and hidden easter eggs; the toggle in the nav lets people turn it on. */
const SFX = (function(){
  let ctx = null;
  let muted = localStorage.getItem('sdt_muted') !== '0';
  function getCtx(){
    if(!ctx){ ctx = new (window.AudioContext || window.webkitAudioContext)(); }
    if(ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  function tone(freq, dur, type, gainVal, delay){
    if(muted) return;
    try{
      const c = getCtx();
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = type || 'sine';
      osc.frequency.setValueAtTime(freq, c.currentTime + (delay||0));
      gain.gain.setValueAtTime(0.0001, c.currentTime + (delay||0));
      gain.gain.exponentialRampToValueAtTime(gainVal||0.06, c.currentTime + (delay||0) + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + (delay||0) + dur);
      osc.connect(gain).connect(c.destination);
      osc.start(c.currentTime + (delay||0));
      osc.stop(c.currentTime + (delay||0) + dur + 0.02);
    } catch(e){}
  }
  function noiseBurst(dur, gainVal){
    if(muted) return;
    try{
      const c = getCtx();
      const bufferSize = c.sampleRate * dur;
      const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
      const data = buffer.getChannelData(0);
      for(let i=0;i<bufferSize;i++) data[i] = (Math.random()*2-1) * (1 - i/bufferSize);
      const src = c.createBufferSource();
      src.buffer = buffer;
      const gain = c.createGain();
      gain.gain.value = gainVal || 0.05;
      src.connect(gain).connect(c.destination);
      src.start();
    } catch(e){}
  }
  return {
    tick(){ tone(1200, 0.05, 'square', 0.02); },
    click(){ tone(720, 0.09, 'triangle', 0.05); tone(900,0.06,'sine',0.03,0.02); },
    hover(){ tone(1500, 0.03, 'sine', 0.015); },
    staticBurst(){ noiseBurst(0.18, 0.04); },
    power(){ tone(220,0.5,'sawtooth',0.05); tone(440,0.5,'sawtooth',0.04,0.08); tone(660,0.6,'sawtooth',0.03,0.16); },
    blip(){ tone(880,0.08,'square',0.04); tone(1320,0.1,'square',0.03,0.06); },
    unlock(){ tone(523,0.12,'sine',0.05); tone(659,0.12,'sine',0.05,0.1); tone(784,0.2,'sine',0.05,0.2); },
    shoot(){ tone(900,0.06,'square',0.03); },
    explode(){ noiseBurst(0.25,0.07); tone(120,0.2,'sawtooth',0.04); },
    hit(){ tone(200,0.12,'sawtooth',0.04); },
    isMuted(){ return muted; },
    setMuted(v){ muted = v; localStorage.setItem('sdt_muted', v ? '1':'0'); },
  };
})();

function initSoundToggle(){
  const btn = document.getElementById('soundToggle');
  if(!btn) return;
  function render(){ btn.classList.toggle('muted', SFX.isMuted()); }
  render();
  btn.addEventListener('click', () => {
    SFX.setMuted(!SFX.isMuted());
    if(!SFX.isMuted()) SFX.blip();
    render();
  });
}

/* ============ TERMINAL MODE — press ~ to open, works on every page ============ */
function initTerminal(){
  const host = document.createElement('div');
  host.id = 'sdtTerminal';
  host.innerHTML = `
    <div class="term-window" role="dialog" aria-label="SDT Terminal">
      <div class="term-titlebar">
        <span class="term-dot" style="background:var(--hot);"></span>
        <span class="term-dot" style="background:var(--volt);"></span>
        <span class="term-dot" style="background:var(--charge);"></span>
        <span class="term-title-txt">SDT TERMINAL — ~ or Esc to close</span>
        <span class="term-close" id="termClose">✕</span>
      </div>
      <div class="term-body" id="termBody"></div>
      <div class="term-inputrow">
        <span class="term-prompt">❯</span>
        <input class="term-input" id="termInput" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Terminal command input">
      </div>
    </div>`;
  document.body.appendChild(host);
  const body = host.querySelector('#termBody');
  const input = host.querySelector('#termInput');

  function printLine(text, cls){
    const div = document.createElement('div');
    div.className = 'term-line' + (cls ? ' ' + cls : '');
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }
  function printBlock(lines, cls){ lines.forEach(l => printLine(l, cls)); }

  const commands = {
    help(){
      printBlock([
        'available commands:', '',
        '  broadcast   — current signal status',
        '  divisions   — every division & its frequency',
        '  universe    — Volta Chronicles connection status',
        '  projects    — what\'s actually live right now',
        '  credits     — who built this',
        '  clear       — clear the screen',
        '  exit        — close the terminal',
      ], 'dim');
    },
    broadcast(){
      printBlock([
        'BROADCAST STATUS   LIVE',
        'SIGNAL STRENGTH    100%',
        'ORIGIN             COIMBATORE, INDIA',
        'TRANSMISSION       ACTIVE',
      ]);
    },
    divisions(){
      printBlock([
        '90.1 FM   SDG    Gaming',
        '91.6 FM   ----   SDT HQ (you are here)',
        '92.3 FM   SDAI   Intelligence',
        '93.7 FM   SDS    Software',
        '94.8 FM   SDPD   Product Dev',
        '95.2 FM   SDN    Networks',
        '96.4 FM   SDSM   Studios & Media',
        '97.1 FM   SDE    Entertainment',
        '98.5 FM   SDRD   Research & Dev',
        '97.8 FM   SD??   [ SIGNAL WEAK ]',
      ]);
    },
    universe(){
      printBlock([
        'SIGNAL DETECTED...', '',
        'ORIGIN      VOLTA CHRONICLES',
        'STATUS      CONNECTED',
        'TIMELINE    ACTIVE',
        'ACCESS      AUTHORIZED',
      ]);
    },
    projects(){
      printBlock([
        'THROWN            active     SDG',
        'For the Volta     active     SDG',
        'Golden Star       early dev  SDG',
        'SDT Game OS       active     SDS',
        'VibeMesh          active     SDN',
        '(full list: onair.html)',
      ], 'dim');
    },
    credits(){
      printBlock([
        'Super Duper Techno — founder-led, independent, since 2016.',
        'Say hi: superdupertechno@gmail.com',
        '— Hardhip',
      ], 'dim');
    },
    clear(){ body.innerHTML = ''; },
    exit(){ closeTerm(); },
  };

  function runCommand(raw){
    const cmd = raw.trim().toLowerCase();
    if(!cmd) return;
    printLine(raw, 'cmd');
    if(commands[cmd]){ commands[cmd](); }
    else { printLine(`command not found: "${cmd}" — type 'help'`, 'err'); }
  }

  input.addEventListener('keydown', (e) => {
    e.stopPropagation();
    if(e.key === 'Enter'){ runCommand(input.value); input.value = ''; }
    if(e.key === 'Escape'){ closeTerm(); }
  });

  function openTerm(){
    host.classList.add('open');
    if(!body.children.length){
      printBlock(['SDT TERMINAL', "type 'help' to see available commands", ''], 'dim');
    }
    SFX.click();
    setTimeout(() => input.focus(), 30);
  }
  function closeTerm(){ host.classList.remove('open'); }
  function toggleTerm(){ host.classList.contains('open') ? closeTerm() : openTerm(); }

  window.addEventListener('keydown', (e) => {
    if(e.key === '`' || e.key === '~'){
      const active = document.activeElement;
      const tag = active ? active.tagName : '';
      if((tag === 'INPUT' || tag === 'TEXTAREA') && active !== input) return;
      e.preventDefault();
      toggleTerm();
    } else if(e.key === 'Escape' && host.classList.contains('open')){
      closeTerm();
    }
  });
  host.querySelector('#termClose').addEventListener('click', closeTerm);
  host.addEventListener('click', (e) => { if(e.target === host) closeTerm(); });
}

function initSocialPops(){
  document.querySelectorAll('.social-pop-wrap').forEach(wrap => {
    const link = wrap.querySelector('a');
    if(!link) return;
    link.addEventListener('click', (e) => {
      if(!('ontouchstart' in window)) return;
      if(!wrap.classList.contains('tapped')){
        e.preventDefault();
        wrap.classList.add('tapped');
        setTimeout(() => wrap.classList.remove('tapped'), 2200);
      }
    });
  });
}

/* ============ EASTER EGG: logo triple-click → sticker ============ */
function initLogoSticker(){
  const phrases = ['Auntie says hi.', 'You found a thing.', 'That tickles.', 'Nice click.', "Don't tell Richard."];
  document.querySelectorAll('.call-sign .mark').forEach(mark => {
    let clicks = 0, timer;
    mark.style.cursor = 'pointer';
    mark.addEventListener('click', (e) => {
      e.preventDefault();
      clicks++;
      clearTimeout(timer);
      timer = setTimeout(() => clicks = 0, 600);
      if(clicks === 3){
        clicks = 0;
        SFX.blip();
        spawnSticker(mark, phrases[Math.floor(Math.random()*phrases.length)]);
        mark.style.transition = 'transform .45s cubic-bezier(.2,1.8,.4,1)';
        mark.style.transform = 'rotate(360deg) scale(1.3)';
        setTimeout(() => { mark.style.transform = ''; }, 460);
      }
    });
  });
}
function spawnSticker(anchor, text){
  const rect = anchor.getBoundingClientRect();
  const s = document.createElement('div');
  s.className = 'egg-sticker';
  s.textContent = text;
  s.style.left = (rect.left + window.scrollX + rect.width + 10) + 'px';
  s.style.top = (rect.top + window.scrollY - 4) + 'px';
  document.body.appendChild(s);
  setTimeout(() => { s.style.opacity = '0'; }, 1700);
  setTimeout(() => s.remove(), 2200);
}

/* ============ EASTER EGG: KONAMI CODE → SIGNAL OVERRIDE + hidden page unlock ============ */
function initKonami(){
  const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let pos = 0;
  window.addEventListener('keydown', (e) => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if(key === seq[pos]){
      pos++;
      if(pos === seq.length){ pos = 0; triggerSignalOverride(); }
    } else {
      pos = (key === seq[0]) ? 1 : 0;
    }
  });
}

function triggerSignalOverride(){
  localStorage.setItem('sdt_key_found', '1');
  SFX.power();
  const host = document.createElement('div');
  host.className = 'egg-override';
  host.innerHTML = `
    <div class="egg-noise"></div>
    <div class="egg-msg mono">
      <span class="egg-glitch" data-text="FREQUENCY OVERRIDE">FREQUENCY OVERRIDE</span>
      <p>You found the Accord's archive key.</p>
      <a class="btn pri" href="division-zero.html" style="margin-top:18px;pointer-events:all;">Enter Division Zero →</a>
    </div>
  `;
  host.style.pointerEvents = 'all';
  document.body.appendChild(host);
  for(let i=0;i<70;i++){
    const p = document.createElement('div');
    p.className = 'egg-pulse';
    const colors = ['#ff3348','#2ea8ff','#3fe08a','#ffc233','#7c6bff'];
    p.style.left = Math.random()*100 + 'vw';
    p.style.background = colors[Math.floor(Math.random()*colors.length)];
    p.style.animationDuration = (1.6 + Math.random()*1.6) + 's';
    p.style.animationDelay = (Math.random()*0.4) + 's';
    host.appendChild(p);
  }
  const closeOnOutside = (e) => {
    if(e.target === host){ host.classList.add('fade'); setTimeout(()=>host.remove(),500); }
  };
  host.addEventListener('click', closeOnOutside);
}

/* ============ EASTER EGG: type "volta" → voltage glitch ============ */
function initSecretWord(){
  const word = 'volta';
  let buf = '';
  window.addEventListener('keydown', (e) => {
    if(e.key.length !== 1) return;
    buf = (buf + e.key.toLowerCase()).slice(-word.length);
    if(buf === word){
      buf = '';
      triggerVoltageGlitch();
    }
  });
}
function triggerVoltageGlitch(){
  SFX.blip();
  document.body.classList.add('volt-glitch');
  const toast = document.createElement('div');
  toast.className = 'egg-toast mono';
  toast.textContent = '⚡ VOLTA FREQUENCY DETECTED';
  document.body.appendChild(toast);
  setTimeout(() => document.body.classList.remove('volt-glitch'), 550);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => toast.classList.remove('show'), 2000);
  setTimeout(() => toast.remove(), 2500);
}

/* ============ SECRET DIVISION REVEAL (Work page) ============ */
function initSecretDivision(){
  const hidden = document.getElementById('divisionZeroCard');
  if(!hidden) return;
  let clicks = 0, timer;
  document.querySelectorAll('.call-sign .mark').forEach(mark => {
    mark.addEventListener('click', () => {
      clicks++;
      clearTimeout(timer);
      timer = setTimeout(()=>clicks=0, 700);
      if(clicks >= 5){
        clicks = 0;
        SFX.unlock();
        hidden.classList.add('show');
        hidden.scrollIntoView({behavior:'smooth', block:'center'});
      }
    });
  });
}

/* ============ COLORFUL LIVE BACKGROUND — unique per page ============ */
/* Blobs are CSS-animated (GPU-composited, ~free). Canvas only handles the
   small dot particles/shooters, with no per-frame shadowBlur or gradient
   allocation — that was the main source of lag in the previous version. */
const BG_THEMES = {
  home: {
    colors:['#eef1ee','#eef1ee','#c9636f'], count:18, shooters:false, speed:0.13,
    blobs:['#7a3a41','#2f5872']
  },
  work: {
    colors:['#eef1ee','#eef1ee','#c7a15c'], count:18, shooters:false, speed:0.12,
    blobs:['#2f5872','#8a6c34']
  },
  universe: {
    colors:['#eef1ee','#a99bd1'], count:24, shooters:false, speed:0.05, twinkle:true,
    blobs:['#564a8f']
  },
  onair: {
    colors:['#eef1ee','#4f9c78'], count:16, shooters:false, speed:0.1,
    blobs:['#2f6b4f']
  },
  studio: {
    colors:['#eef1ee','#c7a15c'], count:16, shooters:false, speed:0.1,
    blobs:['#8a5f3f']
  },
  'division-zero': {
    colors:['#eef1ee','#b5726a'], count:12, shooters:false, speed:0.08, blink:true,
    blobs:['#7a3a41']
  },
};

const BLOB_KEYFRAMES = ['blobDrift1','blobDrift2','blobDrift3'];

function initBgParticles(){
  const theme = document.body.dataset.theme || 'home';
  const cfg = BG_THEMES[theme] || BG_THEMES.home;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 760px)').matches;

  // bright, GPU-cheap glowing blobs — this is what makes each page read as its own color
  const blobHost = document.createElement('div');
  blobHost.className = 'bg-blobs';
  (cfg.blobs||[]).forEach((color, i) => {
    const b = document.createElement('div');
    b.className = 'bg-blob';
    const size = (isMobile ? 220 : 340) + Math.random()*(isMobile ? 120 : 220);
    b.style.width = size+'px';
    b.style.height = size+'px';
    b.style.left = (Math.random()*90)+'%';
    b.style.top = (Math.random()*80)+'%';
    b.style.background = color;
    if(!reduced){
      b.style.animation = `${BLOB_KEYFRAMES[i % BLOB_KEYFRAMES.length]} ${28 + Math.random()*20}s ease-in-out infinite`;
      b.style.animationDelay = (-Math.random()*20)+'s';
    }
    blobHost.appendChild(b);
  });
  document.body.insertBefore(blobHost, document.body.firstChild);

  if(reduced) return; // skip the animated canvas layer entirely for reduced-motion users

  const canvas = document.createElement('canvas');
  canvas.id = 'bgfx';
  document.body.insertBefore(canvas, blobHost.nextSibling);
  const ctx = canvas.getContext('2d');

  let W, H, dpr;
  function size(){
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W*dpr; canvas.height = H*dpr;
    canvas.style.width = W+'px'; canvas.style.height = H+'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  size();
  window.addEventListener('resize', size);

  function spawnParticle(){
    return {
      x: Math.random()*W, y: Math.random()*H,
      r: 1.2 + Math.random()*2.4,
      vy: -(cfg.speed*0.4 + Math.random()*cfg.speed),
      vx: (Math.random()-0.5)*cfg.speed*0.5,
      color: cfg.colors[Math.floor(Math.random()*cfg.colors.length)],
      phase: Math.random()*Math.PI*2,
      baseAlpha: 0.12 + Math.random()*0.22
    };
  }
  const particleCount = isMobile ? Math.round(cfg.count * 0.5) : cfg.count;
  const particles = Array.from({length: particleCount}, spawnParticle);

  let shooters = [];
  function maybeSpawnShooter(){
    if(!cfg.shooters) return;
    if(Math.random() < 0.006){
      shooters.push({
        x: Math.random()*W*0.6, y: Math.random()*H*0.3,
        vx: 7+Math.random()*5, vy: 3.5+Math.random()*2.5, life: 55,
        color: cfg.colors[Math.floor(Math.random()*cfg.colors.length)]
      });
    }
  }

  let t = 0;
  function draw(){
    // skip the actual redraw work when the tab isn't visible — still keeps
    // the rAF chain alive cheaply so it resumes instantly when tab refocuses
    if(document.hidden){ requestAnimationFrame(draw); return; }

    ctx.clearRect(0,0,W,H);
    t += 0.02;

    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if(p.y < -10){ p.y = H+10; p.x = Math.random()*W; }
      if(p.x < -10) p.x = W+10;
      if(p.x > W+10) p.x = -10;
      let alpha = p.baseAlpha;
      if(cfg.twinkle) alpha *= (0.5 + 0.5*Math.sin(t*2 + p.phase));
      if(cfg.blink) alpha *= (Math.sin(t*3 + p.phase) > 0.3 ? 1 : 0.15);
      ctx.globalAlpha = Math.max(alpha, 0.05);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    maybeSpawnShooter();
    shooters.forEach(s => {
      ctx.save();
      ctx.strokeStyle = s.color;
      ctx.lineWidth = 1.8;
      ctx.globalAlpha = Math.min(s.life/55, 1);
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - s.vx*4.5, s.y - s.vy*4.5);
      ctx.stroke();
      ctx.restore();
      s.x += s.vx; s.y += s.vy; s.life--;
    });
    shooters = shooters.filter(s => s.life > 0 && s.x < W+20 && s.y < H+20);

    requestAnimationFrame(draw);
  }
  draw();
}

document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  if(document.querySelector('main')) buildFooter();
  initBgParticles();
  initStaticVeil();
  initChannelSwitch();
  initScrollBar();
  initReveals();
  initWaveforms();
  initSoundToggle();
  initSocialPops();
  initLogoSticker();
  initKonami();
  initSecretWord();
  initSecretDivision();
  initTerminal();
});
