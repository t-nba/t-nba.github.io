# Handoff: T-NBA Championship Görsel Sistemi

## Overview
T-NBA Championship (18 takımlı özel Yahoo Fantasy Basketball ligi) için haftalık sosyal medya görsel sistemi. Amaç: **tasarımları birebir koruyarak, her hafta güncellenen veriden otomatik PNG üretimini** (1080×1920, Instagram Story / WhatsApp) kurmak.

## About the Design Files
Bu paketteki dosyalar **HTML ile üretilmiş tasarım referanslarıdır** — hedef, bunları yeniden tasarlamak değil, **olduğu gibi render edip PNG çıktısını otomatikleştirmektir**. Dosyalar tarayıcıda doğrudan açılır (`support.js` runtime'ı ekranları render eder; sayfalar arası import'lar dosya adlarıyla çalışır — **dosya adlarını değiştirmeyin**). Yerel sunucu gerekir (ES module import'ları yüzünden `file://` çalışmaz): `python3 -m http.server` yeterli.

## Fidelity
**High-fidelity.** Renkler, tipografi, boşluklar ve kompozisyon finaldir; piksel piksel korunmalı.

## Tek Veri Kaynağı — `tnba-data.js`
Tüm ekranlar SADECE bu dosyadan beslenir. Haftalık iş akışı: Yahoo verileri bu dosyaya işlenir → tüm ekranlar kendini günceller → PNG'ler alınır.
- `TEAMS`: takım → [monogram, renk]. Monogramlar logo yüklenene kadarki yedektir.
- `WEEK`: `hafta`, `standings` (r/rec/form/prev), `matchups`, `leaders`. `prev` = geçen haftaki sıra; ▲▼ okları bundan hesaplanır (yeni haftada mevcut sıralar prev'e taşınır).
- `FIXTURES`: gelecek haftanın eşleşmeleri (teaser bunu okur).
- `PLAYER_LEADERS`: kategori lideri oyuncular — **paketteki değerler ÖRNEKTİR**, gerçek veriyle değiştirilmeli.
- `CHAMPIONS`: sezon → şampiyon listesi (şampiyonlar sayfası + ★ sayaçları otomatik).
Türetilenler (elle girilmez): sıra okları, 3+ galibiyet/mağlubiyet seri rozetleri, "EN ÇEKİŞMELİ / EN FARKLI" etiketi, "HAFTANIN HÂKİMİ" bandı, şampiyonluk ★'ları.


## Web Bölümleri (arşiv sitesi — PNG değil)
`T-NBA Siralama Seyri.dc.html`, `T-NBA Kategori DNA.dc.html`, `T-NBA Guc ve Kategori.dc.html` ve `T-NBA Arsiv.dc.html` paylaşım görseli değildir; arşiv sitesinde akışkan genişlikte (max ~1140px) yaşar, telefonda da çalışır. Hepsi açıldığında arşivde kaç hafta varsa onu okur; kodlarında hafta/sıra/istatistik yoktur. `?arsiv=KLASOR` URL parametresi test klasörü seçer (`test-arsiv-2`, `test-arsiv-17`, `test-arsiv-dna`); varsayılan `arsiv`.
**Haftalık veri sözleşmesi** (`arsiv/hafta-N.js`): `WEEK.standings` [{r, n, rec, form, prev}], `WEEK.matchups`, `WEEK.leaders` [kod, açıklama, değer, takım], `WEEK.teamStats` { takım: { "FG%": ".441", … 11 kategori } }. `arsiv/haftalar.js`: `HAFTALAR` [{hafta, dosya}] — sıra önemli değil, ekranlar haftaya göre sıralar.

## Takım Renkleri (logodan türetildi — otomasyon bu değerleri kullanmalı)
`TEAMS[takım][1]` aşağıdaki değerlerle yazılmalı; aksi halde tüm ekranlar eski renklere döner. Benzer tonlar çakışmasın diye Borçka (yeşil), Rhizus (altın), Peripol (gök mavisi), Eagles (pembe) logonun ikinci rengini kullanır. Referans sayfa: `T-NBA Takim Renkleri.dc.html`.
| Takım | Renk |
|---|---|
| Dosma's Crazy Horses | #13708F |
| Sin City Wolves | #4A5A70 |
| Ventolins | #3E7FB0 |
| Cardinals | #C8102E |
| San Andon Spurs | #9A9B9D |
| Kaplıca Gunslingers | #B08850 |
| Phoenix Ashes | #A3311A |
| Borçka Bulls | #6DB33F |
| Peripol Hornets | #1FA7E0 |
| Wild Butterfli's | #6B3F1D |
| Sultan Selim Suns | #1F2326 |
| Dağsu Bears | #0B2A5B |
| Ottoman | #6E1B2E |
| God's Wrath | #F1800F |
| Giresun Hazelnuts | #B8621B |
| Eagles | #E08BAE |
| Rhizus Hawks | #D9B01F |
| Wildcats | #E8505B |

## Screens
Hepsi 1080×1920, kök eleman `[data-screen-label]` attribute'u taşır — PNG yakalama hedefi budur.

### 2026-27 Haftalık Set (Modernist kimlik)
Ortak dil: zemin `#f3f2f2`, mürekkep `#201e1d`, tek vurgu kırmızı `#ec3013`, font **Archivo** (Google Fonts; 136px/900 hafta başlığı, 2px mürekkep çizgiler, sıfır köşe yuvarlatma). Ortak başlık: 72px logo + "T-NBA CHAMPIONSHIP" + kırmızı "2026-27 SEZONU" rozeti; altbilgi çizgi + "T-NBA CHAMPIONSHIP / 2026-27 SEZONU".
1. **Puan Durumu** (`T-NBA 2026-27 Puan Durumu.dc.html`, label `Puan Durumu 26-27`): 18 satır grid (92/56/1fr/150/210px), 72px satır; ilk 3 kırmızı sıra numarası; 8. sıradan sonra kırmızı "PLAYOFF SINIRI" çizgisi; form = 26px kare W (dolu mürekkep) / L (çerçeve) / T (kırmızı çerçeve).
2. **Maç Sonuçları** (`...Mac Sonuclari...`, label `Mac Sonuclari 26-27`): 9 kart, grid 1fr/210/1fr; kartlar `#fbfaf9`, kenarlarda 6px takım rengi şeridi; 56px/900 skorlar (kaybeden %35 opak); kazanana kırmızı "KAZANAN"; uç maçlara kırmızı etiket.
3. **Haftanın En'leri** (label `Haftanin Enleri 26-27`): 11 kategori satırı (270/1fr/360), kod 31px/900 + İngilizce açıklama 13px; değer 54px/900; altta kırmızı zeminli "HAFTANIN HÂKİMİ" bandı (2+ kategori kazanana otomatik).
4. **Oyuncu Liderleri** (label `Oyuncu Liderleri 26-27`): aynı tablo dili; oyuncu 27px/800 + takım 14px; değer sağda 50px/900.
5. **Fikstür Teaser** (label `Fikstur 26-27`): 9 skorsuz VS kartı; ortada 30px/900 "VS" + 22px kırmızı çizgi.
6. **Sistem** (`T-NBA 2026-27 Sistem.dc.html`): tüm ekranları yan yana gösteren genel bakış (üretim hedefi değil, referans).

### Şampiyonlar — Klasik Yeşil (`T-NBA Sampiyonlar Klasik Yesil.dc.html`, label `Sampiyonlar Klasik Yesil`)
Gravür/onur panosu: zemin `#122A1E`, metin `#EDE2C4`, vurgu pirinç `#BC9440`; çift ince çerçeve (inset 30px/40px); başlık **Playfair Display** 90px/700 "Şampiyonlar Listesi", baklava uçlu ayraçlar; her giriş: sezon (20px, 0.34em aralık, pirinç) → takım (Playfair 54px/700) → ★'lar (13px pirinç, kümülatif); son şampiyonda "SON ŞAMPİYON" satırı; boş sezon girişi: `2026-27` → italik *"Sıradaki şampiyon?"* (47px) → "SEZON SONUNDA YAZILACAK"; en altta "EN ÇOK ŞAMPİYONLUK" sayacı (17px/500 isimler + pirinç ★).

### Draft Sırası (`T-NBA Draft Sirasi.dc.html`, label `Draft Sirasi`)
Tek sayfa 1080×1920: ince başlık "Draft Sırası" (96px/700), 16 Ekim · 22.00 · Snake; iki sütun × 9 sıra; sıra no, işlenmiş logo (84px), takım adı — sayılar ve isimler başlık fontuyla (Archivo 700, sıkı harf aralığı); 1. seçim kırmızı; altta Tur 1 / Tur 2 / Toplam şeridi. Draft sırası dosyanın logic class'ındaki `ORDER` dizisindedir.

### T-NBA 101 — Lig Rehberi (`T-NBA 101 Kartlar.dc.html`)
6 adet 1080×1920 kart (labels: `101 Kapak`, `101 01` … `101 05`): Kapak, Draft, Takım Kadrosu, Kategoriler ve Lig Tablosu, Takas, Free Agent. WhatsApp'ta albüm olarak paylaşılır.

### Sıralama Seyri (`T-NBA Siralama Seyri.dc.html`, label `Siralama Seyri`)
Arşiv sitesinde yaşayan web bölümü (paylaşım görseli değil; max ~1140px içerik, akışkan). 18 takımın hafta hafta sıralama yolculuğu — bump chart.
- **Veri:** yalnız `arsiv/haftalar.js` (HAFTALAR, haftaya göre sıralanır) → her `arsiv/hafta-N.js` `WEEK.standings` (r, n) + `tnba-data.js` `TEAMS` (renk, monogram, logo → `tnba-logo-fx` ile işlenir). Kodda hafta/sıra yok; kaç hafta varsa o çizilir.
- **Test klasörleri:** `test-arsiv-2/`, `test-arsiv-17/` (TEST verisi). `?arsiv=test-arsiv-17` URL parametresi ya da `veriKlasoru` prop'u ile seçilir; varsayılan `arsiv`.
- **Yoğunluk stratejisi:** sütun aralığı = alan/(hafta−1), min 48px (mobil 46). Masaüstü tam genişlikte 17 hafta kaydırmasız sığar; dar ekranda grafik yatay kaydırılır, açılışta en son haftaya kayar, kenar soluklaşmaları kaydırılabilirliği gösterir. Sıra ekseni (sol) ve son hafta etiketleri (sağ) sabit kalır. 86px altı aralıkta hafta başlıkları "N. HAFTA" → "N" olur.
- **Görünüm anahtarı:** SON 5 (≥6 hafta) / SON 10 (≥11 hafta) / TÜM SEZON. Mobilde (<640px) varsayılan SON 5; masaüstünde TÜM SEZON.
- **Sağ etiketler:** son haftanın sırasına göre dizilir (sıra benzersiz olduğundan çakışma yok; eşitlikte sıralı yuvaya yerleşir): sıra, işlenmiş logo, ad, geçen haftaya göre ▲/▼. Mobilde ad gizlenir (logo + değişim).
- **Etkileşim:** çizgi/logo/isim/kart tıkla → yalnız o takım; çizgi kalınlaşır, her haftaki sırası numaralı rozetle yazılır, üstte takım özeti (şu an, en iyi, en kötü, playoff alanında geçen hafta). Boşluğa tıkla → sıfırla. Masaüstünde hover ön izleme.
- **Hikâye kartları (otomatik):** son hafta lideri (+ zirve serisi), haftanın en büyük yükselişi ve düşüşü.

### Kategori DNA'sı (`T-NBA Kategori DNA.dc.html`, label `Kategori DNA`)
Arşiv sitesinde web bölümü. Her takımın 11 kategorideki gücü 11 yapraklı radyal "parmak izi" olarak: yaprak uzunluğu = 18 takım içindeki sıra (1 en uzun). TO'da düşük değer iyi sayılır (ters sıralama).
- **Veri:** `arsiv/haftalar.js` → her `hafta-N.js` içinde `WEEK.teamStats` (veya üst düzey `export const TEAM_STATS`): `{ "Takım": { "FG%": ".441", "FT%": ".794", "3PTM": "42", "PTS": "508", "OREB": "38", "DREB": "160", "AST": "166", "ST": "30", "BLK": "17", "TO": "89", "A/T": "1.87" } }`. Metin ya da sayı olabilir. Sıralamalar ekranda hesaplanır; `teamStats` olmayan haftalar atlanır.
- **Dönem:** SEZON ORTALAMASI (teamStats olan haftaların değer ortalaması) / HAFTALIK (‹ › ile hafta seçimi).
- **Ana görünüm:** seçili takımın büyük DNA'sı + otomatik cümle ("X ile yaşıyor, Y ile zorlanıyor"), en güçlü/zayıf kategoriler, profil etiketi (Pota altı / Şutör / Oyun kurucu / Savunmacı — kategori gruplarının ortalama sırasına göre), kategori sıralama tablosu.
- **Karşılaştırma:** ikinci takım seçilince şekli çizgi olarak üstüne biner; tabloda rakibin sırası ve kategori üstünlüğü sayısı, iki takım karşılaşmışsa maç skorları.
- **Alt ızgara:** 18 takımın mini DNA'sı, lig sırasına göre; tıklanınca ana görünüme gelir.
- **Test:** `test-arsiv-dna/` (uydurma istatistik) — `?arsiv=test-arsiv-dna`.

### Tablonun Arkası — Güç Sıralaması + Kategori Krallığı (`T-NBA Guc ve Kategori.dc.html`, label `Guc ve Kategori`)
Arşiv sitesinde web bölümü. Veri: `arsiv/haftalar.js` → her `hafta-N.js` (`WEEK.standings`, `WEEK.leaders`, `WEEK.teamStats`) + `tnba-data.js` `TEAMS`. Kategoriler sabit lig sırasında: FG% → FT% → 3PTM → PTS → OREB → DREB → AST → ST → BLK → TO → A/T.
- **Güç Sıralaması:** her hafta 11 kategoride 18 takım arasındaki sıranın ortalaması (TO'da az olan iyi), `teamStats` olan haftalar boyunca ortalanır. Tablo: güç sırası, ortalama sıra, lig tablosu sırası (son hafta), fark çubuğu (fark = tablo − güç; + "tablo küçümsüyor", − "tablo şişiriyor"). Üstte 3 otomatik kart: güçte 1 numara, en çok küçümsenen, en çok şişirilen.
- **Kategori Krallığı:** 18 takım (lig sırasına göre) × 11 kategori ızgarası. "Haftalık liderlik" görünümünde hücre = o kategoride kaç hafta lider (kaynak `WEEK.leaders`; yoksa `teamStats`'tan hesaplanır, beraberlikte ikisi de sayılır). "Ortalama sıra" görünümünde hücre = kategorideki ortalama sıra. Alt satır: her kategorinin "kralı".

### Animasyonlu Story (`T-NBA Story Animasyon.dc.html` + `tnba-story-scene.jsx` + `animations-v3.jsx`)
23sn, 5 sahne (Açılış → Skorlar → İlk 3 → En'ler → Kapanış), sahne listesi `window.OM_SCENES`'te; aynı `tnba-data.js`'ten beslenir. PNG değil video/canlı kullanım içindir; MP4 export tarayıcıdan yapılır.

### Sezon Arşivi (`T-NBA Arsiv.dc.html`)
Paylaşım görseli değil, gezilebilir arşiv sayfası: `arsiv/haftalar.js` manifesti + `arsiv/hafta-N.js` kopyaları; hafta kapanınca `tnba-data.js` arşive kopyalanıp manifeste satır eklenir.

## Takım Logoları — tnba-logo-fx.js (ZORUNLU İŞLEME)
18 takım logosu `assets/teams/XX.(png|jpg)` altında; yolları `tnba-data.js` → `TEAMS[takım][2]`.
Logolar **ham haliyle kullanılmaz**. Her ekran `tnba-logo-fx.js` → `processTeams(TEAMS)` ile işlenmiş kopyayı kullanır:
- Kenardan flood-fill ile beyaz/krem zemin tamamen şeffaf yapılır (logo sayfa zeminine oturur, kare kutu yok).
- Zemin sınırındaki açık kenar pikselleri yumuşak alfa ile inceltilir.
- Tüm logoya radyal kenar yumuşatması uygulanır (yarıçapın %80'inden %100'üne smoothstep) — koyu zeminli kare logoların köşeleri daireye doğru erir.
- Çıktı 320×320 PNG data-URL, önbelleklenir. Logolar `object-fit:contain` ile, çerçevesiz ve kutusuz yerleştirilir.
Yeni/değişen logo: dosyayı `assets/teams/`'e koy, `TEAMS` yolunu güncelle — işleme otomatik.
**PNG otomasyonunda:** logolar sayfa açıldıktan sonra asenkron işlenir; yakalamadan önce tüm logo `<img>`'lerinin `data:image/png` src'ye geçmesini bekleyin:
```js
await page.waitForFunction(() => [...document.querySelectorAll('[data-screen-label] img')].filter(i => /assets\/teams/.test(i.src)).length === 0);
```

## Logo Slotları (image-slot.js) — eski yedek
Tüm takım rozetleri `<image-slot id="tl-XX">` alanıdır (XX = monogram). Gerçek logo bir kez bırakıldığında `.image-slots.state.json` sidecar dosyasına kaydedilir ve aynı id'li tüm ekranlarda görünür. Sidecar, HTML dosyalarının YANINDA durur — PNG otomasyonunda bu dosya varsa korunmalı. Boş slotlar monogram gösterir (tasarım bozulmaz).

## PNG Otomasyonu (hedef iş)
Önerilen: Playwright/Puppeteer ile yerel sunucudan her sayfayı aç, fontların yüklenmesini bekle, `[data-screen-label]` elemanını 2x ölçekle yakala:
```js
const page = await browser.newPage({ deviceScaleFactor: 2 });
await page.goto('http://localhost:8000/T-NBA%202026-27%20Puan%20Durumu.dc.html');
await page.waitForFunction(() => document.fonts.status === 'loaded');
await page.waitForTimeout(1200); // veri import + render
await page.waitForFunction(() => [...document.querySelectorAll('img')].every(i => !/assets\/teams/.test(i.src))); // logo işleme bitti
await page.locator('[data-screen-label]').screenshot({ path: 'out/puan-durumu.png' });
```
Beş haftalık ekran + şampiyonlar + draft sırası + 6 adet 101 kartı için döngü yeterli (101 dosyasında her kart ayrı `[data-screen-label]`; tümünü `page.locator('[data-screen-label]').nth(i)` ile yakalayın). Çıktı: 2160×3840 PNG.

## Design Tokens
**2026-27 set:** bg `#f3f2f2` · ink `#201e1d` · kırmızı `#ec3013` · kart `#fbfaf9` · çizgiler `rgba(32,30,29,.14/.22)` · font Archivo (200-900) · başlık 136/900 · gövde 24-28/600-800 · radius 0.
**Klasik Yeşil:** bg `#122A1E` · dış zemin `#0C1D15` · metin `#EDE2C4` · pirinç `#BC9440` · fontlar Playfair Display + Archivo · radius 0.
**Takım renkleri:** `tnba-data.js` → `TEAMS` (her takımın tek accent rengi; yalnız rozet çerçevesi ve kart kenar şeritlerinde kullanılır).

## Assets
- `assets/tnba-logo.png` — resmi lig logosu (Est. 2019); tüm ekranlar bunu kullanır, deforme edilmez, daire maskeyle kırpılır.
- Google Fonts: Archivo, Playfair Display (sayfa başlıklarındaki `<link>`'ler).
- `_ds/…/styles.css + _ds_bundle.js` — 2026-27 setinin stil değişkenleri (sayfalar fallback değer taşır ama birebir görünüm için pakette).

## Files
Yukarıda adı geçen tüm dosyalar bu klasördedir. `support.js` render runtime'ıdır — değiştirmeyin. Dosya adları import anahtarıdır — yeniden adlandırmayın.
