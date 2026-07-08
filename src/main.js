/* ============================================================
   DATA — all 108 sites across 6 categories
============================================================ */
const CATS = [
  {
    id: 'movies',
    name: 'Movies & Shows',
    icon: '🎬',
    iconBg: 'linear-gradient(135deg,rgba(124,58,237,.3),rgba(168,85,247,.3))',
    iconBorder: '1px solid rgba(168,85,247,.3)',
    logoBg: 'linear-gradient(135deg,#7c3aed,#a855f7)',
    chover: 'rgba(139,92,246,.4)',
    cglw: '0 10px 36px rgba(139,92,246,.2)',
    desc: 'Streaming sites for movies and TV.',
    sites: [
      { n:'1Shows',       u:'1shows.org',            t:true, logo:'<div class="wm-text"><span style="color:#fff">1</span><span style="color:#22d3ee">Shows</span></div>' },
      { n:'1Flex',        u:'1flex.org',             t:true, logo:'<span class="wm-text" style="color:#ef4444;font-style:italic;font-weight:900">1FLEX</span>' },
      { n:'1Tube',        u:'1tube.org',             t:true, logo:'<div class="wm-text"><span style="color:#fff">1</span><span style="color:#8b5cf6">Tube</span></div>' },
      { n:'ShuttleTV',    u:'shuttletv.su',                  logo:'<div class="wm-text" style="font-size:1.12rem"><span style="color:#fff;font-weight:600">shuttle</span><span style="color:#8b5cf6;font-weight:900">TV</span></div>' },
      { n:'FlickyStream', u:'flickystream.su',               logo:'<span class="wm-text" style="color:#fff;font-size:1.05rem">FlickyStream</span>' },
      { n:'MeowTV',       u:'meowtv.ru',                     logo:'<svg class="wm-icon" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9 L8 4 L10 8"/><path d="M19 9 L16 4 L14 8"/><circle cx="12" cy="13" r="7"/><circle cx="9.3" cy="12" r=".6" fill="#fff"/><circle cx="14.7" cy="12" r=".6" fill="#fff"/><path d="M10.5 15.5q1.5 1 3 0"/></svg>' },
      { n:'RiveStream',   u:'rivestream.ru',                 logo:'<div style="width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,#ec4899,#f472b6);display:flex;align-items:center;justify-content:center;gap:.25rem"><span style="font-weight:900;font-size:.92rem;color:#fff">Rv</span><span style="display:flex;flex-direction:column;gap:1.5px"><span style="width:8px;height:2px;background:#fff;border-radius:1px"></span><span style="width:6px;height:2px;background:#fff;border-radius:1px"></span><span style="width:4px;height:2px;background:#fff;border-radius:1px"></span></span></div>' },
      { n:'Cinema BZ',    u:'cinema.bz',                     logo:'<div class="wm-row"><span style="font-size:1.1rem">🎬</span><div class="wm-text" style="font-size:1.12rem"><span style="color:#fff">CINEMA</span><span style="color:#22d3ee">.BZ</span></div></div>' },
      { n:'SpencerWatch', u:'watch.spencerdevs.xyz',         logo:'<div class="wm-row"><span class="wm-text" style="font-family:cursive;font-style:italic;background:linear-gradient(135deg,#a855f7,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:1.2rem">spoonflix</span></div>' },
      { n:'FilmCave',     u:'filmcave.ru',                   logo:'<div style="display:flex;flex-direction:column;align-items:flex-start;gap:.15rem"><span style="font-size:1.3rem;line-height:1">🎞️</span><span class="wm-text" style="color:#fff;font-size:1.05rem;letter-spacing:.02em">FILMCAVE</span></div>' },
      { n:'PopcornMovies',u:'popcornmovies.org',             logo:'<div class="wm-row"><span style="font-size:1.1rem">🍿</span><span class="wm-text" style="color:#fff;font-size:.92rem">PopcornMovies</span></div>' },
      { n:'Cineby',       u:'cineby.at',                     logo:'<div class="wm-row"><span style="color:#ef4444;font-size:1.05rem">▶</span><span class="wm-text" style="color:#fff;font-size:1.25rem">Cineby</span></div>' },
      { n:'Nepu',         u:'nepu.to',                       logo:'<div style="display:flex;flex-direction:column;line-height:1.15"><span style="color:#fff;font-weight:700;font-size:.78rem;letter-spacing:.04em">RAR.TO</span><span style="color:#fff;font-weight:900;font-size:1.25rem;letter-spacing:.01em">NEPU</span></div>' },
      { n:'LordFlix',     u:'lordflix.org',                  logo:'<span style="color:#e2e8f0;font-weight:900;font-size:2rem;line-height:1">L</span>' },
      { n:'NetPlayz',     u:'netplayz.top',                  logo:'<span class="wm-text" style="color:#ef4444;font-size:1.25rem">Netplay</span>' },
      { n:'CinemaCity',   u:'cinemacity.cc',                 logo:'<span class="wm-text" style="color:#fff;font-size:1.08rem">CinemaCity</span>' },
      { n:'CineGram',     u:'cinegram.tv',                   logo:'<span class="wm-text" style="color:#fff;font-family:cursive;font-style:italic;font-weight:700;font-size:1.3rem">Cinegram</span>' },
      { n:'Willow',       u:'willow.arlen.icu',              logo:'<div class="wm-row"><span style="font-size:1.05rem">🌳</span><span class="wm-text" style="color:#fff;letter-spacing:.04em;font-size:1.25rem">WILLOW</span></div>' },
      { n:'345Movie',     u:'345movie.nl',                   logo:'<div class="wm-row"><span style="color:#fff;font-size:.85rem">▷</span><span class="wm-text" style="color:#fff;font-weight:600;font-size:1.1rem">345movie</span></div>' },
      { n:'FMovies HD',   u:'fmovies-hd.to',                 logo:'<div style="background:#5fd0d0;color:#0f172a;font-weight:900;font-size:.95rem;padding:.2rem .55rem;border-radius:5px;letter-spacing:.01em">FMOVIES</div>' },
      { n:'WatchOTT',     u:'watchott.ru',                   logo:'<span class="wm-text" style="color:#fff;letter-spacing:.06em;font-size:1.08rem">WATCHOTT</span>' },
      { n:'FlixWay',      u:'flixway.ru',                    logo:'<div class="wm-row"><span style="color:#ef4444;font-size:1rem">◁▷</span><span class="wm-text" style="color:#ef4444;font-style:italic;font-size:1.1rem">FLIXWAY</span></div>' },
      { n:'CinemaOS',     u:'cinemaos.live',                 logo:'<span class="wm-text" style="color:#fff;font-size:1.15rem">CinemaOS</span>' },
      { n:'Overlook',     u:'overlook.to',                   logo:'<span class="wm-text" style="color:#fff;font-weight:600;font-size:1.25rem">Overlook</span>' },
    ]
  },
  {
    id: 'anime',
    name: 'Anime',
    icon: '⛩️',
    iconBg: 'linear-gradient(135deg,rgba(239,68,68,.3),rgba(249,115,22,.3))',
    iconBorder: '1px solid rgba(249,115,22,.3)',
    logoBg: 'linear-gradient(135deg,#ef4444,#f97316)',
    chover: 'rgba(249,115,22,.4)',
    cglw: '0 10px 36px rgba(249,115,22,.2)',
    desc: 'Anime streaming and aggregators.',
    sites: [
      { n:'Re:Anime',     u:'reanime.to',     t:true, logo:'<div class="wm-text"><span style="color:#84cc16">Re:</span><span style="color:#fff;font-style:italic">Anime</span></div>' },
      { n:'Miruro TV',    u:'miruro.to',      t:true, logo:'<div class="wm-text"><span style="color:#fff">MIRURO</span><span style="color:#fff;opacity:.6;font-size:.7em">.tv</span></div>' },
      { n:'AnimePahe',    u:'animepahe.pw',   t:true, logo:'<div class="wm-text"><span style="color:#fff">anime</span><span style="color:#ec4899">pahe</span></div>' },
      { n:'Enma',         u:'enma.lol',       t:true, logo:'<div class="wm-row"><span style="font-size:.95rem">⚔️</span><span class="wm-text" style="color:#3b82f6;font-style:italic">ENMA</span></div>' },
      { n:'Anikage',      u:'anikage.cc',             logo:'<div class="wm-text"><span style="color:#fff">ANI</span><span style="color:#a855f7">KAGE</span></div>' },
      { n:'Anikoto TV',   u:'anikototv.to',           logo:'<div class="wm-text"><span style="color:#fff">an</span><span style="color:#22d3ee">!</span><span style="color:#fff">koto</span></div>' },
      { n:'AniDap',       u:'anidap.se',              logo:'<span class="wm-text" style="color:#ef4444">ANIDAP</span>' },
      { n:'SenpaiFlix',   u:'senpaiflix.fun',         logo:'<div class="wm-text"><span style="background:linear-gradient(135deg,#facc15,#84cc16);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Senpaif</span><span style="color:#ef4444">lix</span></div>' },
      { n:'AnimEx',       u:'animex.one',             logo:'<span class="wm-text" style="color:#fff">ANIMEX</span>' },
      { n:'Anime Nexus',  u:'anime.nexus',            logo:'<div class="wm-row"><span style="color:#22d3ee">●</span><span class="wm-text" style="color:#fff;font-weight:700">Anime Nexus</span></div>' },
      { n:'1Anime',       u:'1anime.app',             logo:'<span class="wm-text" style="color:#fff;font-style:italic">Anime</span>' },
      { n:'AniStream',    u:'anistream.one',          logo:'<span class="wm-text" style="color:#ec4899">ANISTREAM</span>' },
      { n:'AnimeTsu',     u:'animetsu.bz',            logo:'<div class="wm-text"><span style="color:#ec4899">ANI</span><span style="color:#fff">METSU</span></div>' },
      { n:'KAA',          u:'kaa.lt',                 logo:'<span class="wm-text" style="color:#facc15;font-size:1.1rem">KAA</span>' },
      { n:'Fanime TV',    u:'fanime.tv',              logo:'<div class="wm-text"><span style="color:#84cc16">F</span><span style="color:#ef4444">ANIME</span><span style="color:#facc15;font-size:.65em">.TV</span></div>' },
      { n:'AniVault',     u:'anivault.co',            logo:'<div class="wm-text"><span style="color:#fff">Ani</span><span style="color:#ef4444">Vault</span></div>' },
      { n:'JustAnime',    u:'justanime.to',           logo:'<div class="wm-row"><div style="width:20px;height:20px;border:1.4px solid #fff;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:.55rem;font-weight:900;color:#fff">JT</div><span class="wm-text" style="color:#fff">JUST<span style="font-weight:400">anime</span></span></div>' },
      { n:'AniWave',      u:'aniwaves.ru',            logo:'<div class="wm-text"><span style="color:#fff">ani</span><span style="color:#a855f7">Wave</span></div>' },
      { n:'AG48 Anime',   u:'ag48anime.site',         logo:'<div class="wm-text"><span style="color:#ef4444">AG48</span><span style="color:#facc15;font-size:.7em">ANIME</span></div>' },
      { n:'AniDB',        u:'anidb.app',              logo:'<div class="wm-row"><span style="color:#f97316;font-size:1.1rem">▶</span><span class="wm-text" style="color:#fff">AniDB</span></div>' },
      { n:'AnimeHeaven',  u:'animeheaven.me',         logo:'<div class="wm-row"><div style="width:22px;height:22px;background:#dc2626;border-radius:5px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:.78rem">A</div><span class="wm-text" style="color:#fff;font-weight:700">animeheaven</span></div>' },
      { n:'AniTaku',      u:'anitaku.io',             logo:'<div style="display:flex;flex-direction:column;line-height:1.05;font-size:.66rem"><span style="color:#f97316;font-weight:900">GOGO</span><span style="color:#f97316;font-weight:900">ANIME<span style="background:#22c55e;color:#fff;font-size:.85em;padding:0 3px;border-radius:3px;margin-left:2px">TV</span></span></div>' },
      { n:'Luna Anime',   u:'lunaranime.ru',          logo:'<div class="wm-row"><span style="font-size:.95rem">🌙</span><span class="wm-text" style="color:#fff;font-style:italic">Lunar</span></div>' },
      { n:'AllManga',     u:'allmanga.to',            logo:'<div class="wm-row"><span style="font-size:.85rem">☘️</span><span class="wm-text" style="color:#fff;letter-spacing:.04em;font-size:.85rem">ALL MANGA</span></div>' },
    ]
  },
  {
    id: 'manga',
    name: 'Manga',
    icon: '📖',
    iconBg: 'linear-gradient(135deg,rgba(59,130,246,.3),rgba(99,102,241,.3))',
    iconBorder: '1px solid rgba(99,102,241,.3)',
    logoBg: 'linear-gradient(135deg,#3b82f6,#6366f1)',
    chover: 'rgba(99,102,241,.4)',
    cglw: '0 10px 36px rgba(99,102,241,.2)',
    desc: 'Manga readers and libraries.',
    sites: [
      { n:'MangaBall',      u:'mangaball.net',    t:true, logo:'<div class="wm-row"><div style="width:18px;height:18px;border-radius:50%;background:linear-gradient(180deg,#ef4444 50%,#fff 50%,#fff 56%,#3b82f6 56%)"></div><span class="wm-text" style="color:#fff">Manga<span style="color:#0f172a;-webkit-text-stroke:.6px #fff">Ball</span></span></div>' },
      { n:'Atsumaru',       u:'atsu.moe',         t:true, logo:'<span class="wm-text" style="color:#fff;letter-spacing:.07em">ATSUMARU</span>' },
      { n:'Onisaga',        u:'onisaga.com',      t:true, logo:'<span class="wm-text" style="color:#fff;letter-spacing:.05em">ONISAGA</span>' },
      { n:'Kagane',         u:'kagane.to',                logo:'<span class="wm-text" style="color:#a855f7;font-style:italic">Kagane</span>' },
      { n:'Comick',         u:'comick.dev',               logo:'<div class="wm-text"><span style="color:#fff">Comic</span><span style="color:#a855f7">K</span></div>' },
      { n:'Comix',          u:'comix.to',                 logo:'<div class="wm-text"><span style="color:#fff">COMI</span><span style="background:#3b82f6;color:#fff;padding:0 .2em;border-radius:3px">X</span></div>' },
      { n:'QToon',          u:'qtoon.org',                logo:'<div class="wm-text"><span style="color:#ec4899">Q</span><span style="color:#fff">Toon</span></div>' },
      { n:'MangaDex',       u:'mangadex.org',             logo:'<div class="wm-text"><span style="color:#fff">Manga</span><span style="color:#22d3ee">Dex</span></div>' },
      { n:'Mangago',        u:'mangago.me',               logo:'<span class="wm-text" style="background:linear-gradient(135deg,#2dd4bf,#facc15);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Mangago</span>' },
      { n:'MangaFire',      u:'mangafire.to',             logo:'<div class="wm-row"><div style="width:20px;height:20px;border:1.3px solid #fff;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:.5rem;font-weight:900;color:#fff">MF</div><span class="wm-text" style="color:#fff">Manga<span style="color:#f97316">Fire</span></span></div>' },
      { n:'AllManga',       u:'allmanga.to',              logo:'<div class="wm-row"><span style="font-size:.85rem">☘️</span><span class="wm-text" style="color:#fff;letter-spacing:.04em;font-size:.85rem">ALL MANGA</span></div>' },
      { n:'MangaKakalot',   u:'mangakakalot.gg',          logo:'<div class="wm-row"><div style="width:20px;height:20px;border-radius:50%;background:#f97316;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:.65rem">K</div><span class="wm-text" style="color:#f97316;font-size:.85rem">MangaKakalot</span></div>' },
      { n:'Asura Scans',    u:'asurascans.com',           logo:'<div class="wm-row"><span style="font-size:.95rem">🥷</span><span class="wm-text" style="color:#fff;font-size:.85rem">Asura<span style="color:#a855f7"> Scans</span></span></div>' },
      { n:'ReadComicOnline',u:'rcostation.xyz',           logo:'<div class="wm-row"><div style="width:18px;height:18px;background:#dc2626;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:.62rem">A</div><span class="wm-text" style="color:#fff;font-size:.68rem;letter-spacing:.02em">READ COMIC ONLINE</span></div>' },
      { n:'MangaHub',       u:'mangahub.io',              logo:'<div class="wm-row"><span style="font-size:.85rem">🌈</span><span class="wm-text" style="color:#fff">manga<span style="color:#ec4899">Hub</span></span></div>' },
      { n:'Weeb Central',   u:'weebcentral.com',          logo:'<div class="wm-row"><span style="font-size:.85rem">🐱</span><span class="wm-text" style="color:#fff;font-size:.85rem">WEEB<span style="color:#3b82f6"> CENTRAL</span></span></div>' },
      { n:'Manga Katana',   u:'mangakatana.com',          logo:'<div class="wm-text"><span style="color:#2dd4bf">Manga</span><span style="color:#ef4444"> Katana</span></div>' },
      { n:'LikeManga',      u:'likemanga.ink',            logo:'<span class="wm-text" style="color:#f97316;font-style:italic">AnimeZ</span>' },
      { n:'MangaXO',        u:'mangaxo.com',              logo:'<div class="wm-row"><span style="font-size:.85rem">👹</span><span class="wm-text" style="color:#ec4899">MANGA<span style="color:#fff">XO</span></span></div>' },
      { n:'AnimeZ',         u:'likemanga.ink',            logo:'<span class="wm-text" style="color:#f97316;font-style:italic">AnimeZ</span>' },
      { n:'King of Shojo',  u:'kingofshojo.com',  nw:true, logo:'<div class="wm-row"><span style="font-size:.9rem">👑</span><span class="wm-text" style="color:#fff;font-size:.85rem">KING OF<span style="color:#3b82f6"> SHOJO</span></span></div>' },
    ]
  },
  {
    id: 'livetv',
    name: 'Live TV & Sports',
    icon: '📺',
    iconBg: 'linear-gradient(135deg,rgba(34,197,94,.3),rgba(6,182,212,.3))',
    iconBorder: '1px solid rgba(6,182,212,.3)',
    logoBg: 'linear-gradient(135deg,#22c55e,#06b6d4)',
    chover: 'rgba(6,182,212,.4)',
    cglw: '0 10px 36px rgba(6,182,212,.2)',
    desc: 'Live channels and sports streams.',
    sites: [
      { n:'DaddyLive',    u:'dlhd.pk',              t:true, logo:'<span class="wm-text" style="color:#fff">DADDYLIVE</span>' },
      { n:'Dami TV',      u:'dami-tv.pro',          t:true, logo:'<svg class="wm-icon" viewBox="0 0 24 24" fill="#fff"><path d="M4 4h4l4 10 4-10h4L13 20h-2L4 4z"/></svg>' },
      { n:'Streamed',     u:'streamed.pk',          t:true, logo:'<div class="wm-row"><span style="font-size:.9rem">🏅</span><span class="wm-text" style="color:#fff">Streamed</span></div>' },
      { n:'Sport+',       u:'en12.sportplus.live',          logo:'<div class="wm-text"><span style="color:#3b82f6">SPORT</span><span style="color:#f97316">+</span></div>' },
      { n:'TheTVApp',     u:'thetvapptv.com',               logo:'<div class="wm-text"><span style="color:#fff;font-weight:500">The</span><span style="color:#fff;font-style:italic">TVApp</span></div>' },
      { n:'NTV',          u:'ntv.cx',                       logo:'<span class="wm-text" style="color:#facc15;font-size:1.15rem">NTV</span>' },
      { n:'PublicIPTV',   u:'publiciptv.com',               logo:'<div class="wm-text"><span style="color:#fff">Public</span><span style="background:linear-gradient(135deg,#a855f7,#ec4899,#facc15);-webkit-background-clip:text;-webkit-text-fill-color:transparent">IPTV</span></div>' },
      { n:'StreamEast',   u:'streameastnow.net',            logo:'<span class="wm-text" style="color:#fff;text-decoration:underline;text-underline-offset:3px">STREAMEAST</span>' },
      { n:'iStreamEast',  u:'istreameast.app',              logo:'<span class="wm-text" style="color:#ef4444">STREAMEAST/</span>' },
      { n:'SportSurge',   u:'v2.sportsurge.net',            logo:'<div class="wm-row"><span style="color:#22c55e;font-size:.95rem">▶</span><span class="wm-text" style="color:#fff">sport<span style="font-weight:900">surge</span></span></div>' },
      { n:'TV Garden',    u:'famelack.com',                 logo:'<div class="wm-row"><div style="background:#22c55e;color:#fff;font-weight:900;font-size:.6rem;padding:1px 4px;border-radius:4px">TV</div><span class="wm-text" style="color:#fff">garden</span></div>' },
      { n:'RiveStream',   u:'rivestream.ru',                logo:'<div style="width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,#ec4899,#f472b6);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.74rem;color:#fff">Rv</div>' },
      { n:'SportsBite',   u:'sportsbite.xyz',               logo:'<span class="wm-text" style="color:#fff">Sports</span>' },
      { n:'GlobeTV',      u:'globetv.app',                  logo:'<div style="width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,#3b82f6,#06b6d4);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:.68rem">GTV</div>' },
      { n:'Stmify',       u:'stmify.com',                   logo:'<svg class="wm-icon" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M8 21h8M9 3l3 3 3-3"/></svg>' },
      { n:'PPV.to',       u:'ppv.to',                       logo:'<div class="wm-text"><span style="color:#22c55e">ppv</span><span style="color:#a855f7">.to</span></div>' },
      { n:'FIF Stream',   u:'fifstream1.gt.tc',   nw:true,  logo:'<div class="wm-row"><span style="font-size:.85rem">⚙️</span><span class="wm-text" style="color:#fff">FIF<span style="color:#22d3ee"> STREAM</span></span></div>' },
    ]
  },
  {
    id: 'paid',
    name: 'Paid',
    icon: '💎',
    iconBg: 'linear-gradient(135deg,rgba(234,179,8,.3),rgba(249,115,22,.3))',
    iconBorder: '1px solid rgba(234,179,8,.3)',
    logoBg: 'linear-gradient(135deg,#eab308,#f97316)',
    chover: 'rgba(234,179,8,.4)',
    cglw: '0 10px 36px rgba(234,179,8,.18)',
    desc: 'Premium & legal streaming services.',
    sites: [
      { n:'Disney+',      u:'disneyplus.com',     logo:'<span class="wm-text" style="font-family:Georgia,serif;font-style:italic;color:#fff">Disney+</span>' },
      { n:'Shudder',      u:'shudder.com',        logo:'<span class="wm-text" style="color:#dc2626">SHUDDER</span>' },
      { n:'Hulu',         u:'hulu.com',           logo:'<span class="wm-text" style="color:#1ce783;text-transform:lowercase;font-size:1.1rem">hulu</span>' },
      { n:'Netflix',      u:'netflix.com',        logo:'<span class="wm-text" style="color:#e50914">NETFLIX</span>' },
      { n:'Rakuten Viki', u:'viki.com',           logo:'<div class="wm-text"><span style="color:#bf0000;font-weight:600">Rakuten</span><span style="color:#fff;text-decoration:underline"> Viki</span></div>' },
      { n:'HBO Max',      u:'hbomax.com',         logo:'<div style="display:flex;flex-direction:column;line-height:1"><span style="color:#fff;font-weight:900;font-size:.82rem">HBO</span><span style="color:#94a3b8;font-weight:700;font-size:.66rem;margin-top:-2px">max</span></div>' },
      { n:'Apple TV+',    u:'tv.apple.com',       logo:'<div class="wm-row"><span style="font-size:.95rem">🍎</span><span class="wm-text" style="color:#fff;font-weight:600">tv+</span></div>' },
      { n:'Prime Video',  u:'primevideo.com',     logo:'<div class="wm-text"><span style="color:#00a8e1;font-weight:700">prime</span><span style="color:#fff;font-weight:400"> video</span></div>' },
      { n:'Paramount+',   u:'paramountplus.com',  logo:'<div class="wm-row"><span style="color:#0066ff;font-size:.95rem">⛰️</span><span class="wm-text" style="color:#fff;font-family:Georgia,serif;font-style:italic">Paramount+</span></div>' },
      { n:'Crunchyroll',  u:'crunchyroll.com',    logo:'<div class="wm-row"><span style="color:#f97316;font-size:.95rem">🍥</span><span class="wm-text" style="color:#fff">crunchyroll</span></div>' },
      { n:'MGM+',         u:'mgmplus.com',        logo:'<span class="wm-text" style="color:#c9a86a;font-family:Georgia,serif">MGM+</span>' },
      { n:'Peacock',      u:'peacocktv.com',      logo:'<div style="border:1.4px solid #facc15;border-radius:6px;padding:.15rem .5rem;color:#fff;font-weight:700;font-size:.72rem">peacock</div>' },
      { n:'AMC+',         u:'amcplus.com',        logo:'<div style="border:1.4px solid #2dd4bf;border-radius:5px;padding:.15rem .55rem;color:#2dd4bf;font-weight:700;font-size:.74rem">amc+</div>' },
      { n:'Hotstar',      u:'hotstar.com',       region:'india' },
      { n:'YuppTV',       u:'yupptv.com',        region:'india' },
      { n:'Aha',          u:'aha.video',         region:'india' },
    ]
  },
  {
    id: 'apps',
    name: 'Apps',
    icon: '📱',
    iconBg: 'linear-gradient(135deg,rgba(236,72,153,.3),rgba(168,85,247,.3))',
    iconBorder: '1px solid rgba(236,72,153,.3)',
    logoBg: 'linear-gradient(135deg,#ec4899,#a855f7)',
    chover: 'rgba(236,72,153,.4)',
    cglw: '0 10px 36px rgba(236,72,153,.2)',
    desc: 'Native apps and APKs.',
    sites: [
      { n:'PlayTorrio',    u:'playtorrio.pages.dev', region:'india',          logo:'<div class="wm-row"><div style="width:22px;height:22px;border-radius:6px;background:linear-gradient(135deg,#7c3aed,#a855f7);display:flex;align-items:center;justify-content:center;color:#fff;font-size:.6rem">▶</div><span class="wm-text" style="color:#fff">Play<span style="color:#a855f7">Torrio</span></span></div>' },
      { n:'OnStream APKs', u:'onstreamapks.app',              logo:'<svg class="wm-icon" viewBox="0 0 24 24" fill="#84cc16"><path d="M13 2L3 14h7l-1 8 11-14h-7l1-6z"/></svg>' },
      { n:'BeeTV',         u:'beetvs.com.co',                 logo:'<div class="wm-row"><span style="font-size:1.15rem">🐝</span></div>' },
      { n:'HDoBox',        u:'hdobox.net',                    logo:'<div style="width:26px;height:26px;border-radius:7px;background:linear-gradient(135deg,#f97316,#ea580c);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:.62rem">H▶</div>' },
      { n:'MovieBox',      u:'moviesbox.com.co',              logo:'<div class="wm-row"><span style="color:#2dd4bf;font-size:.95rem">▶</span><span class="wm-text" style="color:#fff">Movie<span style="color:#2dd4bf">Box</span></span></div>' },
      { n:'NetMirror',     u:'netmirror.gg',                  logo:'<span class="wm-text" style="color:#22c55e">NETMIRROR</span>' },
      { n:'PikaShow',      u:'pikashowtv.in', region:'india',                logo:'<div style="display:flex;flex-direction:column;line-height:1.05;font-size:.7rem"><span style="color:#facc15;font-weight:900">PIKA</span><span style="color:#fff;font-weight:900">SHOW</span></div>' },
      { n:'MobiFlix',      u:'mobiflix.tv',                   logo:'<div class="wm-row"><span style="color:#facc15;font-size:.95rem">▶</span><span class="wm-text" style="color:#fff">Mobi<span style="color:#facc15">Flix</span></span></div>' },
      { n:'YouCine APK',   u:'youcineapkpro.com', nw:true, region:'india',    logo:'<div style="display:flex;flex-direction:column;line-height:1"><span style="color:#facc15;font-weight:900;font-size:.9rem">You</span><span style="color:#3b82f6;font-weight:900;font-size:.8rem">cine</span></div>' },
    ]
  },
];


/* ============================================================
   SECURITY HELPERS
============================================================ */
function escapeHtml(s) {
  if (typeof s !== 'string') return '';
  const el = document.createElement('div');
  el.textContent = s;
  return el.innerHTML.replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
}
function sanitizeUrl(u) {
  if (typeof u !== 'string') return '';
  if (/[<>"'`\x00-\x1f]/.test(u)) return '';
  return u;
}

/* ============================================================
   STATE
============================================================ */
function loadFavs() {
  try {
    const raw = localStorage.getItem('sv_favs');
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return new Set();
    return new Set(arr.filter(v => typeof v === 'string' && v.length < 200 && /^[a-z]+__/.test(v)));
  } catch { return new Set(); }
}

let favs   = loadFavs();
let curCat = 'all';
let query  = '';
// region state (all | india)
function loadRegion() {
  try { const r = localStorage.getItem('sv_region'); return r || 'all'; } catch { return 'all'; }
}
function saveRegion(r) { try { localStorage.setItem('sv_region', r); } catch (e) {} }
let region = loadRegion();

// When India region is selected we show exactly this allowlist (domains only)
const INDIA_ALLOWLIST = new Set([
  // Movies & Shows (from screenshots)
  'prmovies.farm','desicinemas.pk','moviesbazar.su','bollyflix.at','netnaija.film','5movierulz.limited',
  'vegamovie.ss','hindilinks4u.ventures','multimovies.wtf','kmmovies.life','new1.hdhub4u.limo','new3.movies4u.finance',
  'moviesmod.at','world4ufree.at','net11.cc','fitnur.com','thenextplanet.surf','watch.yupflix.org','1tamilblasters.pro','cinephile.live',

  // Anime
  'ag48anime.site','watchanimeworld.net','animejoker.com','desidubanime.me','animedekho.app','animelok.net','animesalt.ac','animepahe.pw','rareanimes.mov','animesogo.to',

  // Manga
  'natomanga.com',

  // Live TV
  'tarangplus.in',

  // Paid
  'hotstar.com','yupptv.com','shudder.com','hulu.com','netflix.com','viki.com','hbomax.com','tv.apple.com','primevideo.com','paramountplus.com','crunchyroll.com','mgmplus.com','peacocktv.com','amcplus.com','aha.video',

  // Apps
  'playtorrio.pages.dev','onstreamapks.app','uvotv.com','hdobox.net','beetvs.com.co','moviesbox.com.co','netmirror.gg','pikashowtv.in','youcineapkpro.com','playfy.live'
]);

// Grouped lists per category so India view shows exactly these sites
const INDIA_BY_CAT = {
  movies: [
    'prmovies.farm','desicinemas.pk','moviesbazar.su','bollyflix.at','netnaija.film','5movierulz.limited',
    'vegamovie.ss','hindilinks4u.ventures','multimovies.wtf','kmmovies.life','new1.hdhub4u.limo','new3.movies4u.finance',
    'moviesmod.at','world4ufree.at','net11.cc','fitnur.com','thenextplanet.surf','watch.yupflix.org','1tamilblasters.pro','cinephile.live'
  ],
  anime: [
    'ag48anime.site','watchanimeworld.net','animejoker.com','desidubanime.me','animedekho.app','animelok.net','animesalt.ac','animepahe.pw','rareanimes.mov','animesogo.to'
  ],
  manga: ['natomanga.com'],
  livetv: ['tarangplus.in'],
  paid: ['hotstar.com','yupptv.com','shudder.com','hulu.com','netflix.com','viki.com','hbomax.com','tv.apple.com','primevideo.com','paramountplus.com','crunchyroll.com','mgmplus.com','peacocktv.com','amcplus.com','aha.video'],
  apps: ['playtorrio.pages.dev','onstreamapks.app','uvotv.com','hdobox.net','beetvs.com.co','moviesbox.com.co','netmirror.gg','pikashowtv.in','youcineapkpro.com','playfy.live']
};

function prettyNameFromDomain(u) {
  if (!u || typeof u !== 'string') return u || '';
  const host = u.replace(/https?:\/\//, '').split('/')[0];
  const parts = host.split('.');
  if (parts.length >= 2) {
    let label = parts[parts.length - 2];
    label = label.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    return label;
  }
  return host;
}

/* ============================================================
   HELPERS
============================================================ */
const $   = id => document.getElementById(id);
const fid = (catId, url) => `${catId}__${url}`;

function saveFavs() {
  try { localStorage.setItem('sv_favs', JSON.stringify([...favs])); } catch (e) {}
  updateBadges();
}
function updateBadges() {
  const n = favs.size;
  if ($('fnav')) $('fnav').textContent = n;
  if ($('fct')) $('fct').textContent  = n;
}

/* ============================================================
   RENDER
============================================================ */
function render() {
  const main = $('content');
  if (!main) return;
  // compute counts per category taking region and search into account
  const counts = {};
  let total = 0;
  let favsCount = 0;
  for (const cat of CATS) {
    let s = [...cat.sites];
    if (region === 'india') {
      const list = INDIA_BY_CAT[cat.id] || [];
      s = list.map(u => ({ n: prettyNameFromDomain(u), u }));
    } else if (region && region !== 'all') s = s.filter(x => x.region === region);
    if (query) s = s.filter(x => x.n.toLowerCase().includes(query) || x.u.toLowerCase().includes(query));
    counts[cat.id] = s.length;
    total += s.length;
    favsCount += s.filter(x => favs.has(fid(cat.id, x.u))).length;
  }

  // update tab counts
  document.querySelectorAll('.tab').forEach(t => {
    const cat = t.dataset.cat;
    const ct = t.querySelector('.tab-ct');
    if (!ct) return;
    if (cat === 'all') ct.textContent = total;
    else if (cat === 'favorites') ct.textContent = favsCount;
    else ct.textContent = counts[cat] || 0;
  });

  // now render visible categories based on curCat and region/query/favorites
  const pool = (curCat === 'all' || curCat === 'favorites') ? CATS : CATS.filter(c => c.id === curCat);
  let html = '';
  let seqTotal = 0;
  for (const cat of pool) {
    let sites = [...cat.sites];
    if (region === 'india') {
      const list = INDIA_BY_CAT[cat.id] || [];
      sites = list.map(u => ({ n: prettyNameFromDomain(u), u }));
    } else if (region && region !== 'all') {
      sites = sites.filter(s => s.region === region);
    }
    if (curCat === 'favorites') sites = sites.filter(s => favs.has(fid(cat.id, s.u)));
    if (query) sites = sites.filter(s => s.n.toLowerCase().includes(query) || s.u.toLowerCase().includes(query));
    if (!sites.length) continue;
    seqTotal += sites.length;

    html += `<section class='cat-sec' id='cat-${escapeHtml(cat.id)}'>
      <div class='cat-head'>
        <div class='cat-left'>
          <div class='cat-icon' style='background:${cat.iconBg};border:${cat.iconBorder}'>${cat.icon}</div>
          <h2 class='cat-name'>${escapeHtml(cat.name)}</h2>
          <span class='cat-cnt'>${sites.length}</span>
        </div>
        <span class='cat-desc'>${escapeHtml(cat.desc)}</span>
      </div>
      <div class='sites-grid'>
        ${sites.map((s, i) => card(s, cat, seqTotal - sites.length + i)).join('')}
      </div>
    </section>`;
  }

  if (!total) {
    const noFav = curCat === 'favorites' && !query;
    html = `<div class='sites-grid' style='margin-top:1.5rem'>
      <div class='empty-wrap'>
        <div class='empty-ico'>${noFav ? '⭐' : '🔭'}</div>
        <div class='empty-title'>${noFav ? 'No bookmarks yet' : 'Nothing found'}</div>
        <p class='empty-sub'>${noFav
          ? 'Tap ☆ on any site card to bookmark it here.'
          : 'Try a different search term or browse all categories.'}</p>
      </div></div>`;
  }
  main.innerHTML = html;
}

function card(site, cat, idx) {
  const id     = fid(cat.id, site.u);
  const isOn   = favs.has(id);
  const letter = site.n.charAt(0).toUpperCase();
  const delay  = Math.min(idx * 0.012, 0.15).toFixed(3);
  const safeU  = sanitizeUrl(site.u);
  const safeN  = escapeHtml(site.n);
  const safeId = escapeHtml(id);

  const badge = site.t
    ? `<span class='badge-trusted'>✓ Trusted</span>`
    : site.nw ? `<span class='badge-new'>New</span>` : `<span></span>`;

  const logoHtml = site.logo
    ? `<div class='logo-custom'>${site.logo}</div>`
    : `<div class='logo-fallback' data-domain='${safeU}' data-letter='${escapeHtml(letter)}' data-bg='${escapeHtml(cat.logoBg)}' data-name='${safeN}'>
        <div class='fallback-icon' aria-hidden='true'>
          <!-- logo will be hydrated by JS: try local /logos/<domain> then site favicon, else letter -->
          <div class='fallback-placeholder'></div>
        </div>
        <span class='fallback-name-text'>${safeN}</span>
      </div>`;

  return `<a href='https://${safeU}' target='_blank' rel='noopener noreferrer'
     class='site-card'
     style='--chover:${cat.chover};--cglw:${cat.cglw};animation-delay:${delay}s'>
    <div class='card-top'>
      ${badge}
      <button class='fav-star ${isOn ? 'on' : ''}'
        data-fid='${safeId}'
        data-name='${safeN}'
        aria-label='${isOn ? 'Remove' : 'Bookmark'} ${safeN}'>
        ${isOn ? '★' : '☆'}
      </button>
    </div>
    <div class='card-logo-area'>${logoHtml}</div>
    <div class='card-foot'>
      <div class='card-name'>${safeN}</div>
      <div class='card-url'>
        <svg width='9' height='9' viewBox='0 0 24 24' fill='none'
             stroke='currentColor' stroke-width='2.5' aria-hidden='true'>
          <path d='M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6'/>
          <polyline points='15 3 21 3 21 9'/><line x1='10' y1='14' x2='21' y2='3'/>
        </svg>${safeU}
      </div>
    </div>
  </a>`;
}

/* ============================================================
   INTERACTIONS
============================================================ */
let toastTimer;
function showToast(msg) {
  const t = $('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

function toggleFav(id, btn, name) {
  if (favs.has(id)) {
    favs.delete(id);
    btn.classList.remove('on');
    btn.textContent = '☆';
    btn.setAttribute('aria-label', 'Bookmark ' + name);
    showToast('Removed ' + name + ' from favorites');
  } else {
    favs.add(id);
    btn.classList.add('on');
    btn.textContent = '★';
    btn.setAttribute('aria-label', 'Remove ' + name);
    btn.style.transform = 'scale(1.55)';
    setTimeout(() => { btn.style.transform = ''; }, 220);
    showToast('⭐ Added ' + name + ' to favorites');
  }
  saveFavs();
  if (curCat === 'favorites') render();
}

function initDelegation() {
  if ($('content')) {
    $('content').addEventListener('click', function(e) {
      const btn = e.target.closest('.fav-star');
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      const id   = btn.dataset.fid  || '';
      const name = btn.dataset.name || '';
      if (!id) return;
      toggleFav(id, btn, name);
    });
  }

  document.querySelectorAll('.tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      setTab(tab.dataset.cat, tab);
    });
  });

  const favNavBtn = $('favNavBtn');
  if (favNavBtn) favNavBtn.addEventListener('click', setFavTab);

  const themeBtn = $('themeBtn');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  const scBtn = $('sc');
  if (scBtn) scBtn.addEventListener('click', clearSearch);

  // region selector (custom pill dropdown)
  const regionBtn = $('regionBtn');
  const regionMenu = $('regionMenu');
  const regionIcon = $('regionIcon');
  const regionLabel = $('regionLabel');
  if (regionBtn && regionMenu) {
    // initialize visuals
    function updateRegionUI() {
      regionIcon.textContent = region === 'india' ? '🇮🇳' : '🌐';
      regionLabel.textContent = region === 'india' ? 'India' : 'All regions';
      regionBtn.setAttribute('aria-expanded', 'false');
      regionMenu.classList.remove('show');
    }
    updateRegionUI();

    regionBtn.addEventListener('click', function(e) {
      const open = regionMenu.classList.toggle('show');
      regionBtn.setAttribute('aria-expanded', String(open));
    });

    regionMenu.addEventListener('click', function(e) {
      const li = e.target.closest('.region-item');
      if (!li) return;
      const val = li.dataset.value || 'all';
      region = val;
      saveRegion(region);
      updateRegionUI();
      render();
    });

    // close when clicking outside
    document.addEventListener('click', function(e) {
      if (!regionBtn.contains(e.target) && !regionMenu.contains(e.target)) {
        regionMenu.classList.remove('show');
        regionBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const si = $('si');
  if (si) si.addEventListener('input', function() { doSearch(si); });

  const totop = $('totop');
  if (totop) totop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function setTab(cat, btn) {
  curCat = cat;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  render();
  window.scrollTo({ top: 150, behavior: 'smooth' });
}
function setFavTab() {
  const ftab = $('ftab');
  if (ftab) setTab('favorites', ftab);
}
function doSearch(inp) {
  query = inp.value.toLowerCase().trim();
  const sc = $('sc');
  if (sc) sc.style.display = query ? 'block' : 'none';
  render();
}
function clearSearch() {
  const si = $('si');
  if (si) {
    si.value = '';
    si.focus();
  }
  query = '';
  const sc = $('sc');
  if (sc) sc.style.display = 'none';
  render();
}

/* ============================================================
   THEME
============================================================ */
let dark = localStorage.getItem('sv_theme') !== 'light';
function applyTheme() {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  const btn = $('themeBtn');
  if (btn) btn.textContent = dark ? '🌙' : '☀️';
}
function toggleTheme() {
  dark = !dark;
  try { localStorage.setItem('sv_theme', dark ? 'dark' : 'light'); } catch (e) {}
  applyTheme();
}

/* ============================================================
   LOGO ERROR
============================================================ */
// Legacy logoErr removed. We'll use a robust logo loader instead.

// Logo loader: hydrate all `.logo-fallback` placeholders with an image or letter.
const LOGO_CACHE_KEY = 'sv_logo_cache_v1';
function readLogoCache() {
  try { return JSON.parse(localStorage.getItem(LOGO_CACHE_KEY) || '{}'); } catch (e) { return {}; }
}
function writeLogoCache(c) { try { localStorage.setItem(LOGO_CACHE_KEY, JSON.stringify(c)); } catch (e) {} }

function makeImg(src, alt) {
  const img = document.createElement('img');
  img.className = 'logo-img';
  img.alt = alt || '';
  img.loading = 'lazy';
  img.src = src;
  return img;
}

function renderLetterFallback(container, letter, bg) {
  container.classList.add('letter');
  const div = document.createElement('div');
  div.className = 'fallback-letter';
  div.style.background = bg || '#5b21b6';
  div.textContent = (letter || '?').charAt(0).toUpperCase();
  container.innerHTML = '';
  container.appendChild(div);
}

async function tryLoadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(url);
    img.onerror = () => reject(url);
    img.src = url;
  });
}

async function hydrateLogoElement(el) {
  if (!el || el.dataset._hydrated) return;
  const domain = el.dataset.domain || '';
  const letter = el.dataset.letter || '';
  const bg = el.dataset.bg || '';
  const name = el.dataset.name || '';
  const iconWrap = el.querySelector('.fallback-icon');
  if (!iconWrap) return;

  const cache = readLogoCache();
  if (cache[domain] === 'none') {
    renderLetterFallback(iconWrap, letter, bg);
    el.dataset._hydrated = '1';
    return;
  }
  if (cache[domain] && cache[domain] !== 'none') {
    // cached url
    const img = makeImg(cache[domain], name);
    img.onerror = () => { renderLetterFallback(iconWrap, letter, bg); cache[domain] = 'none'; writeLogoCache(cache); };
    iconWrap.innerHTML = ''; iconWrap.appendChild(img);
    el.dataset._hydrated = '1';
    return;
  }

  // Try local logos first
  const localCandidates = [`/logos/${domain}.png`, `/logos/${domain}.svg`, `/logos/${domain}.webp`];
  for (const url of localCandidates) {
    try {
      await tryLoadImage(url);
      const img = makeImg(url, name);
      iconWrap.innerHTML = ''; iconWrap.appendChild(img);
      cache[domain] = url; writeLogoCache(cache);
      el.dataset._hydrated = '1';
      return;
    } catch (e) { /* try next */ }
  }

  // Next, try the site's own favicon.ico
  const siteFavicon = `https://${domain}/favicon.ico`;
  try {
    await tryLoadImage(siteFavicon);
    const img = makeImg(siteFavicon, name);
    iconWrap.innerHTML = ''; iconWrap.appendChild(img);
    cache[domain] = siteFavicon; writeLogoCache(cache);
    el.dataset._hydrated = '1';
    return;
  } catch (e) {
    // give up and show letter
    renderLetterFallback(iconWrap, letter, bg);
    cache[domain] = 'none'; writeLogoCache(cache);
    el.dataset._hydrated = '1';
    return;
  }
}

function hydrateAllLogos() {
  document.querySelectorAll('.logo-fallback').forEach(el => {
    hydrateLogoElement(el).catch(() => {});
  });
}

// Run once after render
document.addEventListener('DOMContentLoaded', hydrateAllLogos);
// Also run after our render() call (which inserts cards)
window.addEventListener('load', hydrateAllLogos);
// and expose for manual calls (e.g., after dynamic re-renders)
window.hydrateAllLogos = hydrateAllLogos;

/* ============================================================
   KEYBOARD
============================================================ */
document.addEventListener('keydown', function(e) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    const si = $('si');
    if (si) {
      e.preventDefault();
      si.focus();
      si.select();
    }
  }
  const si = $('si');
  if (e.key === 'Escape' && si && document.activeElement === si) {
    clearSearch();
    si.blur();
  }
}, { passive: false });

/* ============================================================
   SCROLL-TO-TOP
============================================================ */
window.addEventListener('scroll', function() {
  const totop = $('totop');
  if (totop) totop.classList.toggle('show', window.scrollY > 450);
}, { passive: true });

/* ============================================================
   INIT
============================================================ */
applyTheme();
updateBadges();
render();
initDelegation();

// Keep a CSS variable `--header-height` in sync with the rendered nav height
function updateHeaderHeight() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const h = Math.ceil(nav.getBoundingClientRect().height || 0);
  document.documentElement.style.setProperty('--header-height', h + 'px');
}

// initialize and keep updated on resize — debounce to avoid layout thrash
updateHeaderHeight();
let __rh_timer = null;
window.addEventListener('resize', function() {
  clearTimeout(__rh_timer);
  __rh_timer = setTimeout(updateHeaderHeight, 120);
});

// also observe mutations to the nav (in case responsive styling changes its size)
try {
  const nav = document.querySelector('.nav');
  if (nav && window.MutationObserver) {
    const mo = new MutationObserver(() => updateHeaderHeight());
    mo.observe(nav, { attributes: true, childList: false, subtree: false });
  }
} catch (e) {}
