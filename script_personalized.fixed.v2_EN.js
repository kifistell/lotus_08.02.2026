function placeCard(title, img, text, pos = "center 35%") {
  return `
    <article class="place-card">
      <div class="place-media">
        <img class="place-photo" src="${img}" alt="${title}" style="object-position: ${pos};">
      </div>
      <h2>${title}</h2>
      <p>${text}</p>
    </article>`;
}

const places = [
  {
    name: "Altai (Katon-Karagay)",
    type: "mountains",
    content: placeCard("Altai (Katon-Karagay)", "altai.jpeg", "This mountain area is one of the region’s signature landscapes and a strong base for eco‑tourism. You’ll find conifer forests, high valleys, and dense river networks—good for scenic drives and short hikes. Plan 2–4 days; the best season is late spring through early autumn. Because it’s remote, plan logistics in advance and follow protected‑area rules.", "center 60%")
  },
  {
    name: "Eastern Altai",
    type: "mountains",
    content: placeCard("Eastern Altai", "vostochaltai.jpg", "Eastern Altai offers dramatic ridgelines, alpine valleys, and panoramic viewpoints with plenty of route options. A 3–5 day trip works best if you want both road travel and hiking. Summer and early autumn are typically the most comfortable. Prepare for changeable mountain weather and limited services outside towns.", "center 60%")
  },
  {
    name: "Bukhtarma Range",
    type: "mountains",
    content: placeCard("Bukhtarma Range", "buhtarma.jpg", "The Bukhtarma Range is ideal for trekking, viewpoints, and nature photography. A full day is enough for a short route, but 2 days allows deeper exploration. Visit in stable weather (late spring–early autumn) and bring warm layers. Keep to safe trails and respect wildlife and forest regulations.", "center 60%")
  },
  {
    name: "Sarymsakty Range",
    type: "mountains",
    content: placeCard("Sarymsakty Range", "sarym.jpg", "Sarymsakty is a quieter mountain ridge with wide vistas and routes for experienced hikers. Plan 1–3 days depending on your goal and transport access. The best time is summer to early autumn. Consider a guide for longer routes and always check conditions before going.", "center 60%")
  },
  {
    name: "Bukhtarma Reservoir",
    type: "lakes",
    content: placeCard("Bukhtarma Reservoir", "buhtarmail.jpeg", "Bukhtarma Reservoir is great for отдых by the water: beaches, boat views, and easy day trips. It works from a few hours to 1–2 days, especially in summer. Choose safe shore access points and watch wind conditions. Keep the берег clean to preserve the area.", "center 60%")
  },
  {
    name: "Lake Zaysan",
    type: "lakes",
    content: placeCard("Lake Zaysan", "zaisan.jpg", "Lake Zaysan is a large open-water landscape with степные horizons and relaxing viewpoints. It’s suitable for 1–2 days, especially for road trips. Summer and early autumn are pleasant; wind can be strong, so plan accordingly. Respect local rules for fishing and shoreline access.")
  },
  {
    name: "Lake Markakol",
    type: "lakes",
    content: placeCard("Lake Markakol", "qwerty.jpg", "Lake Markakol is known for clear water, forested shores, and a remote, tranquil atmosphere. Plan 2–4 days because the road takes time and the area is best explored slowly. Summer and early autumn are optimal. Pack supplies in advance and follow nature‑reserve guidelines.")
  },
  {
    name: "Altai Forests",
    type: "forests",
    content: placeCard("Altai Forests", "altai-gory.jpg", "Altai forests combine pine and mixed woodland with clean air and many short walking routes. A half-day to 1 day is enough for a calm nature stop, or longer if you’re camping. The warm season is the most comfortable. Follow fire safety rules and stay on established paths.", "center 80%")
  },
  {
    name: "Ribbon Pine Forests of the Irtysh",
    type: "forests",
    content: placeCard("Ribbon Pine Forests of the Irtysh", "priirtysh.jpg", "The ribbon pine forests along the Irtysh are great for easy прогулки, пикники, and photo stops near the river. They fit well into 1‑day itineraries and road trips. Visit in warm months and avoid high fire‑risk days. Leave no trace and use designated отдых zones.", "center 15%")
  },
  {
    name: "Siberian Taiga",
    type: "forests",
    content: placeCard("Siberian Taiga", "Vostochnaya-sibir.jpg", "Siberian taiga in East Kazakhstan offers dense conifer woods, quiet trails, and a strong ‘wild nature’ feel. Plan at least a full day; 2 days is better for deeper routes. Weather can change quickly, so pack layers and insect protection in summer. Move carefully and respect forest regulations.", "center 65%")
  },
  {
    name: "Katon-Karagay Plateau",
    type: "plateaus",
    content: placeCard("Katon-Karagay Plateau", "katon-plato.jpg", "Katon-Karagay Plateau is a high, open landscape with wide views and unique relief—excellent for photo and hiking routes. Plan 2–3 days, often with car or tour logistics. Summer and early autumn are best. Because conditions can be harsh, prepare equipment and route plan.", "center 45%")
  },
  {
    name: "Ulba Plateau",
    type: "plateaus",
    content: placeCard("Ulba Plateau", "plato.jpeg", "Ulba Plateau offers accessible viewpoints and short hiking options, good for a day trip from nearby towns. Plan 1 day for a комфорт visit. Choose stable weather and bring basic hiking gear. Keep to safe edges and avoid risky slopes.")
  },
  {
    name: "Turgen Gorge",
    type: "canyons",
    content: placeCard("Turgen Gorge", "turgen.jpg", "Turgen Gorge is a scenic valley route with cliffs, streams, and удобные stops for photos. It works well as a 1‑day trip or part of a longer itinerary. Late spring through early autumn is most comfortable. Use safe подходы to water and avoid leaving litter.")
  },
  {
    name: "Black Canyon of the Irtysh",
    type: "canyons",
    content: placeCard("Black Canyon of the Irtysh", "cherni_irtish.jpg", "The Black Canyon of the Irtysh is a striking river canyon with dark rock walls and strong viewpoints. Plan a half‑day or full‑day visit, especially as a photo stop. Check weather and wind—cliff areas require caution. Stay behind safe lines and follow local safety rules.")
  },
  {
    name: "Aksu Canyon",
    type: "canyons",
    content: placeCard("Aksu Canyon", "kanyon-aksu.jpg", "Aksu Canyon is a deep gorge area suited for trekking and dramatic landscape photography. Plan 1–2 days depending on route length. The warm season is best; after rains, trails can be slippery. Bring proper footwear and consider a guide for longer hikes.", "center 65%")
  },
  {
    name: "Katon-Karagay Meadows",
    type: "steppes",
    content: placeCard("Katon-Karagay Meadows", "osyl.jpeg", "These meadows are perfect for relaxed walks, wide-open landscapes, and seasonal wildflowers. A few hours to 1 day is enough, or longer if you combine with nearby mountains. The best time is late spring and summer. Respect pasture areas and avoid повреждение plants.", "center 65%")
  },
  {
    name: "Glaciers of the Eastern Altai",
    type: "glaciers",
    content: placeCard("Glaciers of the Eastern Altai", "sofiyski.jpg", "Eastern Altai glaciers are a high‑difficulty destination with cold conditions and маршрут complexity. Plan 3+ days and arrange transport and guidance in advance. The best window is mid‑summer to early autumn, but weather remains unpredictable. Safety and equipment are critical here.")
  },
  {
    name: "Belukha Glacier",
    type: "glaciers",
    content: placeCard("Belukha Glacier", "beluha.png", "Belukha Glacier is one of the most iconic high-mountain routes in the area, usually requiring a multi‑day plan. Expect difficult terrain, холод, and fast weather changes. Go with experienced companions or a guide. Prepare clothing, navigation, and emergency supplies.")
  },
  {
    name: "Irtysh River",
    type: "rivers",
    content: placeCard("Irtysh River", "irtysh_2.jpg", "The Irtysh River is a key natural corridor for the region—good for riverside walks, viewpoints, and short stops during city travel. It’s flexible: from 1–2 hours to a full day. Choose safe banks and watch currents. Keep the shoreline clean.")
  },
  {
    name: "Bulak Spring",
    type: "rivers",
    content: placeCard("Bulak Spring", "bulak.jpg", "Bulak is a small natural spring/stream stop that works well as a short break on a route. Plan 30–60 minutes or combine it with nearby locations. Visit in the warm season for easiest access. Use the site carefully and avoid загрязнение water.", "center 60%")
  },
  {
    name: "Turgusun River",
    type: "rivers",
    content: placeCard("Turgusun River", "tursugyn.jpg", "Turgusun is a river location where the main value is the valley scenery and riverside nature. It’s perfect for brief scenic stops during a drive. Identify safe access points to the water in advance. Warm, dry months are the most comfortable—please leave no trace.")
  },
  {
    name: "Katon-Karagay (village area)",
    type: "rivers",
    content: placeCard("Katon-Karagay (village area)", "katon-rika.jpg", "Katon (Katon‑Karagay area) is a convenient base point for routes into the mountains and nearby natural attractions. Use it to plan logistics, supplies, and day trips. Summer and early autumn are the most popular seasons. Book tours/transport early during peak periods.", "center 65%")
  },
];

// остальной код оставь как был:
const buttons = document.getElementById("buttons");
const info = document.getElementById("info");

function render(list) {
    buttons.innerHTML = "";
    list.forEach(p => {
        const b = document.createElement("button");
        b.textContent = p.name;
        b.onclick = () => {
            info.innerHTML = p.content + (window.tripInjectActionBar ? window.tripInjectActionBar(p) : "");

            // Update favorites/plan UI (if enabled)
            if (typeof window.renderTripUI === "function") {
                try { window.renderTripUI(); } catch (_) { }
            }

            // Персонализация: фиксируем действия пользователя (просмотры)
            if (typeof window.trackPlaceView === "function") {
                try { window.trackPlaceView(p); } catch (_) { }
            }

            // Если на главной есть блок «Рекомендуем путешествие» — обновим
            if (typeof window.refreshRecommendations === "function") {
                try { window.refreshRecommendations(); } catch (_) { }
            }
        };

        buttons.appendChild(b);
    });
}

function applyFilter() {
    const v = document.getElementById("filter").value;
    render(v === "all" ? places : places.filter(p => p.type === v));
}

render(places);

/* ==========================================================
   Favorites ⭐ + "My Trip Plan" (localStorage)
   Keys aligned with existing personalization: userProfile / userHistory_v1
   ========================================================== */
(() => {
  const FAV_KEY = "userFavorites_v1";
  const PLAN_KEY = "userTripPlan_v1";

  const $ = (id) => document.getElementById(id);

  const safeParse = (v, fallback) => {
    try { return JSON.parse(v); } catch { return fallback; }
  };

  const getFavorites = () => safeParse(localStorage.getItem(FAV_KEY) || "[]", []);
  const setFavorites = (arr) => localStorage.setItem(FAV_KEY, JSON.stringify(arr));

  const getPlan = () => safeParse(localStorage.getItem(PLAN_KEY) || "[]", []);
  const setPlan = (arr) => localStorage.setItem(PLAN_KEY, JSON.stringify(arr));

  const esc = (s) => String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

  const stripHTML = (html) => {
    const d = document.createElement("div");
    d.innerHTML = String(html ?? "");
    return (d.textContent || "").trim();
  };

  // your places don't have a stable key -> use name as primary
  const placeKey = (p) => p?.key || p?.id || p?.name;

  const getPlaceByKey = (key) => {
    const arr = window.__PLACES__ || window.places || [];
    return arr.find(p => placeKey(p) === key) || null;
  };

  const isFav = (key) => getFavorites().includes(key);

  const toggleFav = (key) => {
    const fav = getFavorites();
    const i = fav.indexOf(key);
    if (i >= 0) fav.splice(i, 1);
    else fav.push(key);
    setFavorites(fav);
  };

  const addToPlan = (key) => {
    const plan = getPlan();
    if (!plan.some(x => x.key === key)) {
      plan.push({ key, note: "", addedAt: Date.now() });
      setPlan(plan);
    }
  };

  const removeFromPlan = (key) => {
    setPlan(getPlan().filter(x => x.key !== key));
  };

  const movePlan = (key, dir) => {
    const plan = getPlan();
    const i = plan.findIndex(x => x.key === key);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= plan.length) return;
    [plan[i], plan[j]] = [plan[j], plan[i]];
    setPlan(plan);
  };

  const updateNote = (key, note) => {
    const plan = getPlan();
    const item = plan.find(x => x.key === key);
    if (!item) return;
    item.note = String(note ?? "").slice(0, 400);
    setPlan(plan);
  };

  // Inject buttons into the place view (#info)
  window.tripInjectActionBar = (p) => {
    const key = placeKey(p);
    if (!key) return "";
    return `
      <div class="place-actions" style="display:flex; gap:10px; align-items:center; justify-content:flex-end; margin-top:12px;">
        <button class="fav-btn" type="button" data-fav="${esc(key)}" aria-label="Add to favorites">☆</button>
        <button class="trip-btn primary" type="button" data-add-plan="${esc(key)}">Add to plan</button>
      </div>
    `;
  };

  // Main renderer for section #trip
  function renderTripUI() {
    const favList = $("favList");
    const planList = $("planList");
    if (!favList || !planList) return;

    const fav = getFavorites();
    const plan = getPlan();

    // Favorites list
    if (!fav.length) {
      favList.innerHTML = `<div class="trip-meta">It’s empty for now. Click ☆ on a place.</div>`;
    } else {
      favList.innerHTML = fav.map((key) => {
        const p = getPlaceByKey(key);
        const title = p?.name || key;
        const desc = p ? stripHTML(p.content).slice(0, 110) : "";
        return `
          <div class="trip-item">
            <div>
              <div class="trip-title">${esc(title)}</div>
              <div class="trip-meta">${esc(desc)}${desc.length >= 110 ? "…" : ""}</div>
            </div>
            <div class="trip-actions">
              <button class="trip-btn primary" type="button" data-add-plan="${esc(key)}">Add to plan</button>
              <button class="trip-btn" type="button" data-fav="${esc(key)}">Remove</button>
            </div>
          </div>
        `;
      }).join("");
    }

    // Plan list
    if (!plan.length) {
      planList.innerHTML = `<div class="trip-meta">Add 2–6 places to your plan and arrange the order.</div>`;
    } else {
      planList.innerHTML = plan.map((item, idx) => {
        const p = getPlaceByKey(item.key);
        const title = p?.name || item.key;
        return `
          <div class="trip-item">
            <div>
              <div class="trip-title">${idx + 1}. ${esc(title)}</div>
              <textarea class="trip-note" data-note="${esc(item.key)}"
                placeholder="Note (time, budget, what to pack)">${esc(item.note || "")}</textarea>
            </div>
            <div class="trip-actions">
              <button class="trip-btn" type="button" data-move="${esc(item.key)}" data-dir="-1">↑</button>
              <button class="trip-btn" type="button" data-move="${esc(item.key)}" data-dir="1">↓</button>
              <button class="trip-btn" type="button" data-remove-plan="${esc(item.key)}">✕</button>
            </div>
          </div>
        `;
      }).join("");
    }

    // Update stars on visible place actions
    document.querySelectorAll(".fav-btn[data-fav]").forEach(btn => {
      const key = btn.getAttribute("data-fav");
      const on = isFav(key);
      btn.classList.toggle("is-on", on);
      btn.textContent = on ? "★" : "☆";
    });
  }

  // Delegated events (works for dynamically injected buttons)
  document.addEventListener("click", (e) => {
    const favBtn = e.target.closest("[data-fav]");
    if (favBtn) {
      toggleFav(favBtn.getAttribute("data-fav"));
      renderTripUI();
      return;
    }

    const addBtn = e.target.closest("[data-add-plan]");
    if (addBtn) {
      addToPlan(addBtn.getAttribute("data-add-plan"));
      renderTripUI();
      return;
    }

    const rmBtn = e.target.closest("[data-remove-plan]");
    if (rmBtn) {
      removeFromPlan(rmBtn.getAttribute("data-remove-plan"));
      renderTripUI();
      return;
    }

    const mvBtn = e.target.closest("[data-move]");
    if (mvBtn) {
      movePlan(mvBtn.getAttribute("data-move"), Number(mvBtn.getAttribute("data-dir")));
      renderTripUI();
      return;
    }
  });

  document.addEventListener("input", (e) => {
    const note = e.target.closest("[data-note]");
    if (!note) return;
    updateNote(note.getAttribute("data-note"), note.value);
  });

  // Clear buttons in your HTML
  window.addEventListener("DOMContentLoaded", () => {
    $("tripClearFav")?.addEventListener("click", () => {
      setFavorites([]);
      renderTripUI();
    });

    $("tripClearPlan")?.addEventListener("click", () => {
      setPlan([]);
      renderTripUI();
    });

    renderTripUI();
  });

  // expose
  window.renderTripUI = renderTripUI;
})();

/* ==========================================================
   SHARE "MY TRIP PLAN" VIA URL (works even on file:///)
   - Button: id="tripShareLink"
   - Storage: tripPlan_v1
   ========================================================== */
(function setupTripShare() {
  const TRIP_KEY = "tripPlan_v1";

  function safeTrip() {
    try {
      return JSON.parse(localStorage.getItem(TRIP_KEY) || '{"favorites":[],"plan":[]}');
    } catch {
      return { favorites: [], plan: [] };
    }
  }

  function encodePayload(payload) {
    const json = JSON.stringify(payload);
    // JSON -> base64url
    return btoa(unescape(encodeURIComponent(json)))
      .replaceAll("+", "-")
      .replaceAll("/", "_")
      .replaceAll("=", "");
  }

  function decodeToken(token) {
    try {
      let b64 = token.replaceAll("-", "+").replaceAll("_", "/");
      while (b64.length % 4 !== 0) b64 += "=";
      const json = decodeURIComponent(escape(atob(b64)));
      return JSON.parse(json);
    } catch {
      return null;
    }
  }

  // ---- Copy link (robust: prompt fallback; works on file://) ----
  function copyLink() {
    const trip = safeTrip();

    const payload = {
      v: 1,
      fav: Array.isArray(trip.favorites) ? trip.favorites : [],
      plan: Array.isArray(trip.plan)
        ? trip.plan.map(x => ({ key: x.key, note: String(x.note || "").slice(0, 400) }))
        : []
    };

    const token = encodePayload(payload);
    const url = new URL(window.location.href);
    url.searchParams.set("trip", token);

    const text = url.toString();

    // Clipboard API is often blocked on file://. Try clipboard only when secure, otherwise prompt.
    const canClipboard = !!(navigator.clipboard && window.isSecureContext);
    if (canClipboard) {
      navigator.clipboard.writeText(text).then(() => {
        alert("Link copied ✅");
      }).catch(() => {
        window.prompt("Copy the link (Ctrl+C, Enter):", text);
      });
    } else {
      window.prompt("Copy the link (Ctrl+C, Enter):", text);
    }
  }

  // Bind click
  window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("tripShareLink");
    if (btn) btn.addEventListener("click", copyLink);
  });

  // ---- Import from URL (once per open) ----
  (function importTripFromUrlOnce() {
    const url = new URL(window.location.href);
    const token = url.searchParams.get("trip");
    if (!token) return;

    const data = decodeToken(token);
    if (!data || data.v !== 1) return;

    const current = safeTrip();
    const favSet = new Set([...(current.favorites || []), ...(data.fav || [])]);

    const planMap = new Map();
    (current.plan || []).forEach(x => x?.key && planMap.set(x.key, x));
    (data.plan || []).forEach(x => {
      if (!x?.key) return;
      if (!planMap.has(x.key)) planMap.set(x.key, { key: x.key, note: String(x.note || "").slice(0, 400), addedAt: Date.now() });
    });

    localStorage.setItem(TRIP_KEY, JSON.stringify({
      favorites: Array.from(favSet),
      plan: Array.from(planMap.values())
    }));

    // Remove query param from the address (so it won't re-import on refresh)
    url.searchParams.delete("trip");
    history.replaceState({}, "", url.toString());

    if (typeof window.renderTripUI === "function") {
      try { window.renderTripUI(); } catch {}
    }

    alert("Trip plan imported ✅");
  })();
})();
