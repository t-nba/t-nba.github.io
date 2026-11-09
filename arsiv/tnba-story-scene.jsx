// T-NBA animasyonlu story kompozisyonu — animations-v3 motoru üzerinde.
const { CompositionStage, useComposition, Shot, Easing, interpolate, animate, clamp } = window;
const INK = '#201e1d', BG = '#f3f2f2', RED = '#ec3013', DIM = 'rgba(32,30,29,0.45)';
const FONT = "'Archivo', system-ui, sans-serif";

function useData() {
  const [d, setD] = React.useState(window.__TNBA_D || null);
  React.useEffect(() => {
    let ok = true;
    if (!d) import('./tnba-data.js').then(m => { window.__TNBA_D = m; if (ok) setD(m); });
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
    // Puan durumu — 18 takım
    React.createElement(Shot, { from: CUES.Ilk3 - 0.2, to: CUES.Enler + 0.4 },
      kicker('PUAN DURUMU', CUES.Ilk3 + 0.1),
      React.createElement('div', { style: { position: 'absolute', left: 64, right: 64, top: 232, opacity: MO.fade(CUES.Enler - 0.5)(T), transform: `translateY(${animate({ from: 18, to: -26, start: CUES.Ilk3 + 0.4, end: CUES.Enler - 0.4 })(T)}px)` } },
        S.map((s, i) => {
          const at = CUES.Ilk3 + 0.2 + i * 0.11;
          const e = MO.enter(at, 0.45)(T);
          const row = React.createElement('div', { key: 'r' + i, style: { display: 'grid', gridTemplateColumns: '64px 1fr auto', alignItems: 'center', columnGap: 18, height: 76, borderBottom: '1px solid rgba(32,30,29,0.14)', opacity: e.opacity, transform: `translateY(${e.y}px)` } },
            React.createElement('div', { style: { fontSize: 32, fontWeight: 900, color: s.r <= 3 ? RED : 'rgba(32,30,29,0.45)' } }, s.r),
            React.createElement('div', { style: { fontSize: 30, fontWeight: s.r <= 8 ? 800 : 600, whiteSpace: 'nowrap', overflow: 'hidden', color: s.r <= 8 ? INK : 'rgba(32,30,29,0.55)' } }, s.n),
            React.createElement('div', { style: { fontSize: 24, fontWeight: 800, color: DIM, fontVariantNumeric: 'tabular-nums', letterSpacing: '0.04em' } }, s.rec)
          );
          if (s.r !== 8) return row;
          const de = MO.enter(at + 0.2, 0.45)(T);
          const pulse = 0.75 + 0.25 * Math.sin((T - CUES.Ilk3) * 2.4);
          return React.createElement('div', { key: 'w' + i }, row,
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 14, height: 34, opacity: de.opacity } },
              React.createElement('div', { style: { fontSize: 13, fontWeight: 900, letterSpacing: '0.3em', color: RED, whiteSpace: 'nowrap' } }, 'PLAYOFF SINIRI'),
              React.createElement('div', { style: { flex: 1, height: 2, background: RED, opacity: pulse } })
            )
          );
        })
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
    React.createElement(Shot, { from: CUES.OyuncuEnleri - 0.2, to: CUES.Kapanis + 0.3 },
      kicker('OYUNCU LİDERLERİ', CUES.OyuncuEnleri + 0.1),
      React.createElement('div', { style: { position: 'absolute', left: 64, right: 64, top: 236, opacity: MO.fade(CUES.Kapanis - 0.45)(T) } },
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
