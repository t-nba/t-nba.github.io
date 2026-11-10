// T-NBA animasyonlu story kompozisyonu — animations-v3 motoru üzerinde.
const { CompositionStage, useComposition, Shot, Easing, interpolate, animate, clamp } = window;
const INK = '#201e1d', BG = '#f3f2f2', RED = '#ec3013', DIM = 'rgba(32,30,29,0.45)';
const FONT = "'Archivo', system-ui, sans-serif";

function useData() {
  const [d, setD] = React.useState(window.__TNBA_D || null);
  React.useEffect(() => {
    let ok = true;
    if (!d) Promise.all([
        import('./tnba-data.js'),
        import('./tnba-logo-fx.js'),
        import('./arsiv/haftalar.js').catch(() => ({ HAFTALAR: [] }))
      ]).then(([m, fx, man]) => Promise.all([
        fx.processTeams(m.TEAMS),
        Promise.all((man.HAFTALAR || []).map(w =>
          import('./arsiv/' + w.dosya.replace('./', '')).then(h => ({ hafta: w.hafta, ranks: Object.fromEntries(h.WEEK.standings.map(x => [x.n, x.r])) })).catch(() => null)
        ))
      ]).then(([TP, seyir]) => {
        window.__TNBA_D = { ...m, TEAMSP: TP, SEYIR: seyir.filter(Boolean).sort((a, b) => a.hafta - b.hafta) };
        if (ok) setD(window.__TNBA_D);
      }));
    return () => { ok = false; };
  }, []);
  return d;
}

const MO = {
  enter: (s, dur = 0.7) => T => ({
    opacity: animate({ from: 0, to: 1, start: s, end: s + dur, ease: Easing.easeOutCubic })(T),
    y: animate({ from: 36, to: 0, start: s, end: s + dur, ease: Easing.easeOutCubic })(T)
  }),
  pop: (s, dur = 0.55) => T => animate({ from: 0, to: 1, start: s, end: s + dur, ease: Easing.easeOutBack })(T),
  fade: (s, dur = 0.45) => T => animate({ from: 1, to: 0, start: s, end: s + dur, ease: Easing.easeInQuad })(T)
};

function Piece() {
  const { T, CUES, authoredTotal } = useComposition();
  const D = useData();
  if (!D) return null;
  const M = D.WEEK.matchups, S = D.WEEK.standings, L = D.WEEK.leaders;
  const P = D.PLAYER_LEADERS || [];
  const Tm = D.TEAMSP || D.TEAMS || {};
  const F = (D.FIXTURES && D.FIXTURES.pairs) || [];
  // Logo rozeti: işlenmiş logo varsa onu, yoksa renkli monogram kutusu
  const rozet = (tk, boy) => tk && tk[2]
    ? React.createElement('img', { src: tk[2], style: { width: boy, height: boy, objectFit: 'contain', flexShrink: 0, display: 'block' } })
    : React.createElement('div', { style: { width: boy, height: boy, border: `2px solid ${(tk || [])[1] || '#999'}`, boxSizing: 'border-box', display: 'grid', placeItems: 'center', fontSize: Math.round(boy * 0.3), fontWeight: 800, background: '#fbfaf9', flexShrink: 0 } }, (tk || ['?'])[0]);
  const hafta = D.WEEK.hafta;
  const nextHafta = (D.FIXTURES && D.FIXTURES.hafta) || hafta + 1;
  const rootOp = animate({ from: 1, to: 0, start: authoredTotal - 0.5, end: authoredTotal - 0.05, ease: Easing.easeInQuad })(T);

  // Kalıcı başlık: logo + başlık açılış merkezinden üst şeride süzülür
  const g = (a, b) => animate({ from: a, to: b, start: CUES.Skorlar - 0.7, end: CUES.Skorlar + 0.4, ease: Easing.easeInOutCubic })(T);
  const logoSize = g(210, 64), logoX = g(435, 64), logoY = g(330, 56);
  const titleFs = g(60, 26), titleX = g(200, 150), titleY = g(600, 74);
  const tagX = g(400, 812), tagY = g(700, 68);
  const headerFade = MO.fade(CUES.Kapanis - 0.45)(T);
  const logoPop = MO.pop(0.15, 0.8)(T);
  const tagPop = MO.pop(1.1)(T);
  const ruleW = animate({ from: 0, to: 1, start: CUES.Skorlar + 0.2, end: CUES.Skorlar + 0.9, ease: Easing.easeOutCubic })(T);
  const haftaE = MO.enter(1.5)(T);
  const haftaOut = MO.fade(CUES.Skorlar - 0.75, 0.5)(T);

  const kicker = (txt, at) => {
    const e = MO.enter(at)(T);
    return React.createElement('div', { style: { position: 'absolute', left: 64, top: 168, fontSize: 21, fontWeight: 800, letterSpacing: '0.28em', color: RED, opacity: e.opacity, transform: `translateY(${e.y}px)` } }, txt);
  };

  return React.createElement('div', { style: { position: 'absolute', inset: 0, background: BG, color: INK, fontFamily: FONT, overflow: 'hidden', opacity: rootOp } },
    // kalıcı başlık
    React.createElement('div', { style: { opacity: headerFade } },
      React.createElement('img', { src: 'assets/tnba-logo-pro.png', style: { position: 'absolute', left: logoX, top: logoY, width: logoSize, height: logoSize, borderRadius: '50%', boxShadow: `0 0 0 2px ${INK}`, transform: `scale(${logoPop})` } }),
      React.createElement('div', { style: { position: 'absolute', left: titleX, top: titleY, fontSize: titleFs, fontWeight: 900, letterSpacing: '0.08em', whiteSpace: 'nowrap', opacity: clamp(logoPop, 0, 1) } }, 'T-NBA CHAMPIONSHIP'),
      React.createElement('div', { style: { position: 'absolute', left: tagX, top: tagY, background: RED, color: '#fff', fontSize: 15, fontWeight: 800, letterSpacing: '0.18em', padding: '9px 16px', whiteSpace: 'nowrap', transform: `scale(${tagPop})` } }, '2026-27 SEZONU'),
      React.createElement('div', { style: { position: 'absolute', left: 64, top: 140, width: 952, height: 2, background: INK, transform: `scaleX(${ruleW})`, transformOrigin: 'left' } })
    ),
    // Açılış: dev hafta
    React.createElement('div', { style: { position: 'absolute', left: 64, top: 780, fontSize: 150, fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.01em', opacity: Math.min(haftaE.opacity, haftaOut), transform: `translateY(${haftaE.y - (1 - haftaOut) * 60}px)` } }, hafta + '. HAFTA'),
    // Skorlar
    React.createElement(Shot, { from: CUES.Skorlar - 0.2, to: CUES.Ilk3 + 0.4 },
      kicker('MAÇ SONUÇLARI — FINAL', CUES.Skorlar + 0.2),
      React.createElement('div', { style: { position: 'absolute', left: 64, right: 64, top: 232, transform: `translateX(${animate({ from: 0, to: -1200, start: CUES.Ilk3 - 0.5, end: CUES.Ilk3 + 0.2, ease: Easing.easeInCubic })(T)}px)` } },
        M.map((m, i) => {
          const at = CUES.Skorlar + 0.45 + i * 0.5;
          const e = MO.enter(at)(T), p = MO.pop(at + 0.2)(T);
          const lw = m[1] > m[3];
          return React.createElement('div', { key: i, style: { display: 'grid', gridTemplateColumns: '1fr 200px 1fr', alignItems: 'center', height: 172, borderBottom: '1px solid rgba(32,30,29,0.14)', opacity: e.opacity, transform: `translateY(${e.y}px)` } },
            React.createElement('div', { style: { fontSize: 27, fontWeight: lw ? 800 : 600, color: lw ? INK : DIM, whiteSpace: 'nowrap' } }, m[0]),
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, transform: `scale(${p})` } },
              React.createElement('div', { style: { fontSize: 52, fontWeight: 900, color: lw ? INK : 'rgba(32,30,29,0.35)' } }, m[1]),
              React.createElement('div', { style: { width: 14, height: 3, background: RED } }),
              React.createElement('div', { style: { fontSize: 52, fontWeight: 900, color: lw ? 'rgba(32,30,29,0.35)' : INK } }, m[3])
            ),
            React.createElement('div', { style: { fontSize: 27, fontWeight: lw ? 600 : 800, color: lw ? DIM : INK, textAlign: 'right', whiteSpace: 'nowrap' } }, m[2])
          );
        })
      )
    ),
    // Puan durumu — takımlar GEÇEN haftaki sıralarından yeni sıralarına KAYAR
    React.createElement(Shot, { from: CUES.Ilk3 - 0.2, to: CUES.Seyir + 0.4 },
      kicker('PUAN DURUMU', CUES.Ilk3 + 0.1),
      React.createElement('div', { style: { position: 'absolute', left: 64, right: 64, top: 226, height: 18 * 80 + 40, opacity: MO.fade(CUES.Seyir - 0.5)(T) } },
        (() => {
          const laneH = 80;
          const yPos = r => (r - 1) * laneH + (r > 8 ? 36 : 0);
          const kaySlut = Easing.easeInOutCubic;
          const cizgiPulse = 0.75 + 0.25 * Math.sin((T - CUES.Ilk3) * 2.4);
          const satirlar = S.map((s, i) => {
            const prev = s.prev || s.r;
            const giris = MO.enter(CUES.Ilk3 + 0.15 + (prev - 1) * 0.045, 0.4)(T);
            const y = animate({ from: yPos(prev), to: yPos(s.r), start: CUES.Ilk3 + 1.0 + i * 0.03, end: CUES.Ilk3 + 2.6 + i * 0.03, ease: kaySlut })(T);
            const fark = prev - s.r;
            const chipOp = animate({ from: 0, to: 1, start: CUES.Ilk3 + 2.9, end: CUES.Ilk3 + 3.3 })(T);
            const Tk = Tm[s.n] || ['?', '#999', null];
            return React.createElement('div', { key: s.n, style: { position: 'absolute', left: 0, right: 0, top: y, height: laneH, display: 'grid', gridTemplateColumns: '56px 46px 1fr auto 72px', alignItems: 'center', columnGap: 16, borderBottom: '1px solid rgba(32,30,29,0.12)', opacity: giris.opacity, background: BG } },
              React.createElement('div', { style: { fontSize: 32, fontWeight: 900, color: s.r <= 3 ? RED : 'rgba(32,30,29,0.45)' } }, s.r),
              rozet(Tk, 44),
              React.createElement('div', { style: { fontSize: 29, fontWeight: s.r <= 8 ? 800 : 600, whiteSpace: 'nowrap', overflow: 'hidden', color: s.r <= 8 ? INK : 'rgba(32,30,29,0.55)' } }, s.n),
              React.createElement('div', { style: { fontSize: 23, fontWeight: 800, color: DIM, fontVariantNumeric: 'tabular-nums' } }, s.rec),
              React.createElement('div', { style: { textAlign: 'right', fontSize: 20, fontWeight: 900, opacity: chipOp, color: fark > 0 ? RED : fark < 0 ? 'rgba(32,30,29,0.4)' : 'rgba(32,30,29,0.25)' } },
                fark > 0 ? '▲' + fark : fark < 0 ? '▼' + (-fark) : '—')
            );
          });
          satirlar.push(React.createElement('div', { key: 'playoff', style: { position: 'absolute', left: 0, right: 0, top: 8 * laneH + 2, display: 'flex', alignItems: 'center', gap: 14, height: 32, opacity: MO.enter(CUES.Ilk3 + 0.9, 0.45)(T).opacity } },
            React.createElement('div', { style: { fontSize: 13, fontWeight: 900, letterSpacing: '0.3em', color: RED, whiteSpace: 'nowrap' } }, 'PLAYOFF SINIRI'),
            React.createElement('div', { style: { flex: 1, height: 2, background: RED, opacity: cizgiPulse } })
          ));
          return satirlar;
        })()
      )
    ),
    // Sıralama Seyri — kavisli yollar kendini çizer (Claude Design dilinde)
    React.createElement(Shot, { from: CUES.Seyir - 0.2, to: CUES.Enler + 0.4 },
      kicker('SIRALAMA SEYRİ', CUES.Seyir + 0.1),
      React.createElement('div', { style: { position: 'absolute', left: 64, right: 64, top: 250, opacity: MO.fade(CUES.Enler - 0.5)(T) } },
        (() => {
          const H = D.SEYIR || [];
          if (!H.length) return null;
          const W = 952, laneH = 76, TOP = 44, solPad = 46, sagPad = 140;
          const yF = r => TOP + (r - 0.5) * laneH;
          const xF = i => H.length === 1 ? solPad + (W - solPad - sagPad) / 2 : solPad + i * (W - solPad - sagPad) / (H.length - 1);
          const cizim = animate({ from: 0, to: 1, start: CUES.Seyir + 0.5, end: CUES.Seyir + 2.9, ease: Easing.easeInOutCubic })(T);
          const svgCocuk = [];
          H.forEach((h, i) => {
            svgCocuk.push(React.createElement('line', { key: 'g' + i, x1: xF(i), y1: TOP - 8, x2: xF(i), y2: TOP + 18 * laneH, stroke: 'rgba(32,30,29,0.08)', strokeWidth: 1.5 }));
            svgCocuk.push(React.createElement('text', { key: 'h' + i, x: xF(i), y: TOP - 20, textAnchor: 'middle', fontSize: 17, fontWeight: 800, letterSpacing: 2, fill: 'rgba(32,30,29,0.5)' }, h.hafta + '. HAFTA'));
          });
          for (let r = 1; r <= 18; r++) svgCocuk.push(React.createElement('text', { key: 'n' + r, x: solPad - 18, y: yF(r) + 6, textAnchor: 'end', fontSize: 17, fontWeight: 800, fill: 'rgba(32,30,29,' + (r <= 8 ? 0.55 : 0.28) + ')' }, r));
          svgCocuk.push(React.createElement('line', { key: 'po', x1: solPad - 10, y1: TOP + 8 * laneH, x2: W - sagPad + 24, y2: TOP + 8 * laneH, stroke: '#ec3013', strokeWidth: 3, strokeDasharray: '10 7' }));
          svgCocuk.push(React.createElement('text', { key: 'pt', x: solPad - 10, y: TOP + 8 * laneH - 10, fontSize: 13, fontWeight: 900, letterSpacing: 3, fill: '#ec3013' }, 'PLAYOFF SINIRI'));
          Object.keys(Tm).forEach((t, ti) => {
            const pts = H.map((h, i) => h.ranks[t] ? [xF(i), yF(h.ranks[t])] : null).filter(Boolean);
            if (!pts.length) return;
            let yol = 'M ' + pts[0][0] + ' ' + pts[0][1];
            for (let i = 1; i < pts.length; i++) { const a = pts[i - 1], b = pts[i], mx = (a[0] + b[0]) / 2; yol += ' C ' + mx + ' ' + a[1] + ', ' + mx + ' ' + b[1] + ', ' + b[0] + ' ' + b[1]; }
            const prog = clamp(cizim * 1.12 - ti * 0.007, 0, 1);
            svgCocuk.push(React.createElement('path', { key: 'y' + t, d: yol, fill: 'none', stroke: Tm[t][1], strokeWidth: 5.5, strokeLinecap: 'round', pathLength: 1, strokeDasharray: 1, strokeDashoffset: 1 - prog }));
            pts.forEach((pnokta, pi) => svgCocuk.push(React.createElement('circle', { key: 'c' + t + pi, cx: pnokta[0], cy: pnokta[1], r: 7, fill: Tm[t][1], stroke: '#f3f2f2', strokeWidth: 2.5, opacity: prog >= (pi / Math.max(pts.length - 1, 1)) * 0.95 ? 1 : 0 })));
          });
          const cocuklar = [React.createElement('svg', { key: 'svg', width: W, height: TOP + 18 * laneH + 10, viewBox: '0 0 ' + W + ' ' + (TOP + 18 * laneH + 10), style: { display: 'block', fontFamily: 'inherit' } }, svgCocuk)];
          const logoOp = animate({ from: 0, to: 1, start: CUES.Seyir + 2.7, end: CUES.Seyir + 3.2 })(T);
          Object.keys(Tm).forEach(t => {
            const son = H[H.length - 1].ranks[t];
            if (!son) return;
            cocuklar.push(React.createElement('div', { key: 'l' + t, style: { position: 'absolute', left: W - sagPad + 34, top: yF(son) - 24, display: 'flex', alignItems: 'center', gap: 10, opacity: logoOp } },
              rozet(Tm[t], 48),
              React.createElement('div', { style: { fontSize: 19, fontWeight: 900, color: son <= 8 ? INK : 'rgba(32,30,29,0.45)' } }, son)));
          });
          return cocuklar;
        })()
      )
    ),
    // En'ler (takım)
    React.createElement(Shot, { from: CUES.Enler - 0.2, to: CUES.OyuncuEnleri + 0.4 },
      kicker("HAFTANIN EN'LERİ", CUES.Enler + 0.1),
      React.createElement('div', { style: { position: 'absolute', left: 64, right: 64, top: 236, opacity: MO.fade(CUES.OyuncuEnleri - 0.5)(T) } },
        L.map((c, i) => {
          const at = CUES.Enler + 0.25 + i * 0.28;
          const e = MO.enter(at, 0.5)(T);
          const num = parseFloat(c[2]);
          const isInt = /^\d+$/.test(c[2]);
          const shown = isInt ? Math.round(num * clamp(animate({ from: 0, to: 1, start: at, end: at + 0.7, ease: Easing.easeOutCubic })(T), 0, 1)) : c[2];
          return React.createElement('div', { key: i, style: { display: 'grid', gridTemplateColumns: '150px 1fr auto', alignItems: 'center', columnGap: 24, height: 132, borderBottom: '1px solid rgba(32,30,29,0.14)', opacity: e.opacity, transform: `translateY(${e.y}px)` } },
            React.createElement('div', { style: { fontSize: 30, fontWeight: 900, letterSpacing: '0.06em', color: RED } }, c[0]),
            React.createElement('div', { style: { fontSize: 66, fontWeight: 900, fontVariantNumeric: 'tabular-nums' } }, shown),
            React.createElement('div', { style: { fontSize: 26, fontWeight: 700, color: DIM, whiteSpace: 'nowrap', textAlign: 'right' } }, c[3])
          );
        })
      )
    ),
    // Oyuncu liderleri
    React.createElement(Shot, { from: CUES.OyuncuEnleri - 0.2, to: CUES.Fikstur + 0.4 },
      kicker('OYUNCU LİDERLERİ', CUES.OyuncuEnleri + 0.1),
      React.createElement('div', { style: { position: 'absolute', left: 64, right: 64, top: 236, opacity: MO.fade(CUES.Fikstur - 0.5)(T) } },
        P.map((c, i) => {
          const at = CUES.OyuncuEnleri + 0.25 + i * 0.28;
          const e = MO.enter(at, 0.5)(T);
          const num = parseFloat(c[2]);
          const isInt = /^\d+$/.test(c[2]);
          const shown = isInt ? Math.round(num * clamp(animate({ from: 0, to: 1, start: at, end: at + 0.7, ease: Easing.easeOutCubic })(T), 0, 1)) : c[2];
          return React.createElement('div', { key: i, style: { display: 'grid', gridTemplateColumns: '130px 1fr auto', alignItems: 'center', columnGap: 24, height: 132, borderBottom: '1px solid rgba(32,30,29,0.14)', opacity: e.opacity, transform: `translateY(${e.y}px)` } },
            React.createElement('div', { style: { fontSize: 30, fontWeight: 900, letterSpacing: '0.06em', color: RED } }, c[0]),
            React.createElement('div', { style: { minWidth: 0 } },
              React.createElement('div', { style: { fontSize: 38, fontWeight: 900, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } }, c[3]),
              React.createElement('div', { style: { fontSize: 19, fontWeight: 700, color: DIM, letterSpacing: '0.08em', textTransform: 'uppercase' } }, c[4] || '')
            ),
            React.createElement('div', { style: { fontSize: 54, fontWeight: 900, fontVariantNumeric: 'tabular-nums', textAlign: 'right' } }, shown)
          );
        })
      )
    ),
    // Gelecek haftanın fikstürü
    React.createElement(Shot, { from: CUES.Fikstur - 0.2, to: CUES.Kapanis + 0.3 },
      kicker('SIRADAKİ RAKİPLER — ' + nextHafta + '. HAFTA', CUES.Fikstur + 0.1),
      React.createElement('div', { style: { position: 'absolute', left: 64, right: 64, top: 240, opacity: MO.fade(CUES.Kapanis - 0.45)(T) } },
        F.map((c, i) => {
          const at = CUES.Fikstur + 0.25 + i * 0.32;
          const e = MO.enter(at, 0.55)(T);
          const A = Tm[c[0]] || ['?', '#999'], B = Tm[c[1]] || ['?', '#999'];
          const chip = (tk) => rozet(tk, 46);
          return React.createElement('div', { key: i, style: { display: 'grid', gridTemplateColumns: '1fr 110px 1fr', alignItems: 'center', height: 148, borderBottom: '1px solid rgba(32,30,29,0.14)', opacity: e.opacity, transform: `translateY(${e.y}px)` } },
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'flex-end', minWidth: 0 } },
              React.createElement('div', { style: { fontSize: 27, fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textAlign: 'right' } }, c[0]), chip(A)),
            React.createElement('div', { style: { textAlign: 'center' } },
              React.createElement('div', { style: { fontSize: 24, fontWeight: 900, letterSpacing: '0.1em' } }, 'VS'),
              React.createElement('div', { style: { width: 26, height: 3, background: RED, margin: '6px auto 0' } })),
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 16, minWidth: 0 } },
              chip(B), React.createElement('div', { style: { fontSize: 27, fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden' } }, c[1]))
          );
        })
      )
    ),
    // Kapanış
    React.createElement(Shot, { from: CUES.Kapanis - 0.1, to: 999 },
      React.createElement('div', { style: { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 36 } },
        React.createElement('img', { src: 'assets/tnba-logo-pro.png', style: { width: 190, height: 190, borderRadius: '50%', boxShadow: `0 0 0 2px ${INK}`, transform: `scale(${MO.pop(CUES.Kapanis + 0.1)(T)})` } }),
        React.createElement('div', { style: { fontSize: 46, fontWeight: 900, letterSpacing: '0.1em', opacity: MO.enter(CUES.Kapanis + 0.4)(T).opacity } }, 'SIRADAKİ: ' + nextHafta + '. HAFTA'),
        React.createElement('div', { style: { background: RED, color: '#fff', fontSize: 19, fontWeight: 800, letterSpacing: '0.22em', padding: '12px 24px', opacity: MO.enter(CUES.Kapanis + 0.65)(T).opacity } }, 'T-NBA CHAMPIONSHIP · 2026-27')
      )
    )
  );
}

function TnbaStory() {
  return React.createElement(CompositionStage, { width: 1080, height: 1920, scenes: window.OM_SCENES, playback: window.OM_PLAYBACK, bg: BG },
    React.createElement(Piece, null)
  );
}
window.TnbaStory = TnbaStory;
