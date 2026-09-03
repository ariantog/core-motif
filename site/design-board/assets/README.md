# Assets — folder map

Each line lives in its own folder. Culture Run drops are grouped by texture family.

```
assets/
  LOGO CORENATION A–E.pdf     uploaded readable-logo references
  logo/readable/              outlined wordmark directions + cropped A–E refs
  references/                 original 龍 samples
  men-kanji/
    belts/  apparel/  accessories/   lifting gloves + boxing-gloves-kanji-*.png
    marks/                    kanji cards + patches (factory)
  women-floral/
    sakura/                   pink SKUs
    lavender/                 lilac SKUs
    marks/                    flower sheets
  padel/
    men/
      clay-court/             v4 angular panels + sandstone topstitch
      moss-baseline/          v4 raglan + side panels + sand flatlock
      crosscourt-mesh/        diagonal fields + diamond-net dissolve
      orbit-serve/            off-center halo + pinline arcs
      reef-trio/              3 color · seafoam → sky → periwinkle
      dual-glass/             2 color · teal → periwinkle
      glass-court/            v1 one-hue · ice → mint
      harbor-haze/            v1 one-hue · fog → teal
    women/
      petal-seam/             v4 princess panels + cream flatlock (+ skirt)
      citrus-stitch/          v4 raglan + yoke + apricot overlock (+ skirt)
      rally-ribbon/           S-curve fields + micro-dash dissolve (+ skirt)
      halo-serve/             side-origin arcs + transition ticks (+ skirt)
      clay-bloom/             3 color · peach → rose → lilac (+ skirt)
      dual-sherbet/           2 color · apricot → pistachio (+ skirt)
      sunrise-clay/           v1 one-hue · ivory → peach clay (+ skirt)
      lemon-sherbet/          v1 one-hue · cream → lemon (+ skirt)
  culture-run/
    01-wave/                  aurora + brushed tide
    02-brushed/               summit + home soil dawn
    03-marble/                bloom / dusk / heatmap / ink
    04-earth/                 bumi / moss / sandstone / cacao
    05-watercolor/            earth + cool + peach wash capsule
    06-pastel/                women's pastel run wall
    07-vertical/              vertical ink / reed / blush columns
      <drop>/
        background-clean.png  texture only — no logo, kanji, slogans, flowers, or artifacts
        print.png             locked composite (do not overwrite)
        singlet.png | tank.png | tee.png
    layers/
      kanji/                  transparent 走 / 山
      logos/                  transparent hex C + CN Core Cut
    _archive-v1/              flat charcoal pieces (superseded)
```

Padel consumer kit (no kanji, no logo). v4 is sewn stitch models:

| Folder | Who | Fade | Pieces |
|--------|-----|------|--------|
| `women/petal-seam` | Women | Princess panels · blush / cream / pistachio + cream flatlock | polo, tee, tank, shorts, skirt |
| `women/citrus-stitch` | Women | Raglan + yoke · lemon / apricot / honeydew + apricot overlock | polo, tee, tank, shorts, skirt |
| `men/clay-court` | Men | Angular panels · terracotta / sandstone / soil + sandstone topstitch | polo, tee, tank, shorts |
| `men/moss-baseline` | Men | Raglan + side panels · moss / olive / sand + sand flatlock | polo, tee, tank, shorts |
| `men/crosscourt-mesh` | Men | Diagonal seafoam / sky / periwinkle + diamond-net dissolve | polo, tee, tank, shorts |
| `men/orbit-serve` | Men | Off-center aqua / mint / violet halo + pinline arcs | polo, tee, tank, shorts |
| `women/rally-ribbon` | Women | Peach / rose / lilac S-curve + micro-dash dissolve | polo, tee, tank, shorts, skirt |
| `women/halo-serve` | Women | Pistachio / peach / lilac side-origin arcs + transition ticks | polo, tee, tank, shorts, skirt |
| `men/reef-trio` | Men | 3 color · seafoam → sky aqua → periwinkle | polo, tee, tank, shorts |
| `men/dual-glass` | Men | 2 color · teal → periwinkle | polo, tee, tank, shorts |
| `women/clay-bloom` | Women | 3 color · peach → dusty rose → lilac | polo, tee, tank, shorts, skirt |
| `women/dual-sherbet` | Women | 2 color · apricot → pistachio | polo, tee, tank, shorts, skirt |
| `men/glass-court` | Men | v1 one-hue · ice → mint | polo, tee, tank, shorts |
| `men/harbor-haze` | Men | v1 one-hue · fog → teal | polo, tee, tank, shorts |
| `women/sunrise-clay` | Women | v1 one-hue · ivory → peach clay | polo, tee, tank, shorts, skirt |
| `women/lemon-sherbet` | Women | v1 one-hue · cream → lemon | polo, tee, tank, shorts, skirt |

Culture Run drops (v2 — print + gradient, no embroidery patch):

| Family | Folder | Texture | Silhouette |
|--------|--------|---------|------------|
| `01-wave` | `blue-hour-wave` | Smooth aurora gradient | Men singlet |
| `01-wave` | `wave-brushed-tide` | Brushed tide | Men tee |
| `02-brushed` | `summit-brushed` | Brushed dawn | Men tank |
| `02-brushed` | `home-soil-dawn` | Brushed sunrise | Unisex singlet |
| `03-marble` | `bloom-marble` | Pink liquid marble | Women tank |
| `03-marble` | `dusk-marble` | Lilac dusk marble | Women tee |
| `03-marble` | `heatmap-marble` | Heatmap / lava marble | Men singlet |
| `03-marble` | `ink-marble` | Suminagashi ink marble | Men singlet |
| `04-earth` | `bumi-strata` | Terracotta / sandstone brushed strata | Unisex singlet |
| `04-earth` | `moss-current` | Moss / river-stone mineral marble | Men tee |
| `04-earth` | `sandstone-sumi` | Espresso / sandstone ink marble | Men tank |
| `04-earth` | `cacao-route` | Cacao / clay topographic marble | Women tank |
| `05-watercolor` | `bumi-watercolor` | Terracotta / ochre volcanic watercolor | Unisex singlet |
| `05-watercolor` | `moss-watercolor` | Moss / river-stone watercolor current | Men tee |
| `05-watercolor` | `sand-wave-watercolor` | Sand / umber watercolor wave | Men tank |
| `05-watercolor` | `cacao-watercolor` | Cacao / clay watercolor route | Women tank |
| `06-pastel` | `mist-wave` | Powder / seafoam aurora wave | Women singlet |
| `06-pastel` | `apricot-brush` | Apricot / cream wet-brush tide | Women tee |
| `06-pastel` | `mint-marble` | Mint / pistachio liquid marble | Women tank |
| `06-pastel` | `blush-watercolor` | Sakura path on blush watercolor | Women tank |
| `06-pastel` | `lilac-watercolor` | Lilac watercolor wash | Women tee |
| `05-watercolor` | `indigo-watercolor` | Indigo / ink pigment wash | Men singlet |
| `05-watercolor` | `reef-watercolor` | Seafoam / cyan reef wash | Men tank |
| `05-watercolor` | `peach-watercolor` | Peach / apricot pigment wash | Women tee |
| `07-vertical` | `ink-columns` | Vertical sumi columns | Men tee |
| `07-vertical` | `reed-lines` | Vertical earth reed strokes | Men tank |
| `07-vertical` | `blush-columns` | Vertical blush watercolor bars | Women singlet |
