// Tiny synthesized SFX helper shared by every game — no audio files.
const Sound = (() => {
  let ctx = null;
  let master = null;
  let muted = localStorage.getItem("arcade-muted") === "1";

  function ensure() {
    if (ctx) return ctx;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    ctx = new AudioCtx();
    master = ctx.createGain();
    master.gain.value = 0.35;
    master.connect(ctx.destination);
    return ctx;
  }

  function init() {
    const c = ensure();
    if (c && c.state === "suspended") c.resume();
  }

  function setMuted(v) {
    muted = v;
    localStorage.setItem("arcade-muted", v ? "1" : "0");
    if (master) master.gain.value = v ? 0 : 0.35;
  }

  function isMuted() {
    return muted;
  }

  function tone(freq, duration, opts = {}) {
    const c = ensure();
    if (!c || !master || muted) return;
    const t0 = c.currentTime + (opts.delay || 0);
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = opts.type || "sine";
    osc.frequency.setValueAtTime(freq, t0);
    if (opts.slideTo) osc.frequency.exponentialRampToValueAtTime(opts.slideTo, t0 + duration);
    const peak = opts.gain ?? 0.5;
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(peak, t0 + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    osc.connect(gain);
    gain.connect(master);
    osc.start(t0);
    osc.stop(t0 + duration + 0.02);
  }

  function noise(duration, gain = 0.5, filterFreq = 1200) {
    const c = ensure();
    if (!c || !master || muted) return;
    const bufferSize = c.sampleRate * duration;
    const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const t0 = c.currentTime;
    const src = c.createBufferSource();
    src.buffer = buffer;
    const filter = c.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(filterFreq, t0);
    filter.frequency.exponentialRampToValueAtTime(80, t0 + duration);
    const g = c.createGain();
    g.gain.setValueAtTime(gain, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    src.connect(filter);
    filter.connect(g);
    g.connect(master);
    src.start(t0);
  }

  return {
    init,
    setMuted,
    isMuted,
    blip: () => tone(660, 0.06, { type: "triangle", gain: 0.3 }),
    coin: () => {
      tone(880, 0.09, { type: "triangle", gain: 0.35 });
      tone(1320, 0.12, { type: "triangle", gain: 0.25, delay: 0.03 });
    },
    good: () => {
      tone(523, 0.09, { type: "triangle", gain: 0.3 });
      tone(784, 0.13, { type: "triangle", gain: 0.3, delay: 0.08 });
    },
    bad: () => {
      noise(0.3, 0.5, 1600);
      tone(90, 0.35, { type: "sawtooth", gain: 0.35, slideTo: 40 });
    },
    move: () => tone(300, 0.04, { type: "sine", gain: 0.12 }),
    win: () => {
      tone(660, 0.09, { type: "triangle", gain: 0.3 });
      tone(880, 0.09, { type: "triangle", gain: 0.3, delay: 0.09 });
      tone(1320, 0.16, { type: "triangle", gain: 0.3, delay: 0.18 });
    },
    click: () => tone(440, 0.05, { type: "square", gain: 0.2 }),
  };
})();
