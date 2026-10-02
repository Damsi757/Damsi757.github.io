(function () {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("header nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  const answers = [
    { keys: ["hi", "hello", "yo"], text: "Hi-there, I am Gep, How can I be of help today?" },
    { keys: ["nothing", "nth"], text: "Ok, If you settle to do anything-later, just beep me because I am always hera and I am active." },
    { keys: ["price", "cost", "how much", "naira", "amount", "rate"], text: "We do not display prices on the website. Please call 08028385955 or 08055554744 for current prices and to confirm what is in stock." },
    { keys: ["order", "buy", "purchase", "how to", "deliver", "pickup", "pick up"], text: "To order, call 08028385955 or 08055554744. Tell the agent the colour, size, quantity and your city. You can also email 2gep.bd@gmail.com or use http://megep-trading-gear.base44.app" },
    { keys: ["phone", "number", "call", "whatsapp", "contact"], text: "Call Megep on 08028385955 or 08055554744. Email 2gep.bd@gmail.com." },
    { keys: ["email", "gmail", "mail"], text: "Our email is 2gep.bd@gmail.com." },
    { keys: ["who you", "you" ], text: "I am Gep, Megep Company Ltd's AI Assistant" },
    { keys: ["ok"], text: "Yh, If you need anything else just ask me 😀🎉" },
    { keys: ["phenomenal", "nice", "yh"], text: "Alright Let's dive in, what do you want to do today?" },
    { keys: ["sweet", "sure", "beautiful"], text: "Ok - bye for now, tell me if you need anything 🎉🎆😎" },
    { keys: ["print", "shirt", "souvenir", "gift", "custom"], text: "Megep Prints customizes gift items, souvenirs, shirts and printed packaging. Call 08028385955 or 08055554744 for what can be made." },
    { keys: ["size", "sizes", "small", "medium", "large", "cabin", "set"], text: "Choose small for short trips or as a vanity box, medium for about a week, and large or a 3-piece set for family or long travel. Confirm the exact set on 08028385955 or 08055554744." },
    { keys: ["colour", "color", "mint", "pink", "white", "blue", "green", "brown", "cream"], text: "Colours from our flyer include white with maroon corners, mint green, brown, cream, sky blue, pink and printed designs. Call 08028385955 or 08055554744 to hear what is available now." },
    { keys: ["care", "clean", "wash", "last", "durable"], text: "Wipe the shell with a soft damp cloth, do not sit on the box, and avoid overloading. Store sets nested in a dry place. For damage questions, call 08028385955 or 08055554744." },
    { keys: ["travel", "luggage", "suitcase", "bag", "box", "boxes", "journey", "airport"], text: "Megep Trading sells premium hard-shell traveling boxes imported from China. They are durable, stylish and reliable for local and international travel. Call 08028385955 or 08055554744." },
    { keys: ["china", "import"], text: "The traveling boxes are imported from China and sold by Megep Trading." },
    { keys: ["app", "shop", "base44", "qr"], text: "You can browse the shop at http://megep-trading-gear.base44.app — shop conveniently, anytime, anywhere. For prices still call 08028385955 or 08055554744." },
    { keys: ["sponsor"], text: "We do not currently have any sponsors. If you are interested, call 08028385955 or 08055554744." },
    { keys: ["tiktok", "instagram", "social", "platform"], text: "TikTok: @megep_trading. Instagram: @megep_prints. Email: 2gep.bd@gmail.com. Shop: http://megep-trading-gear.base44.app" },
    { keys: ["who", "about", "company", "megep", "arm"], text: "Megep Company Ltd has two arms: Megep Trading for traveling boxes, and Megep Prints for customization of gifts, souvenirs and shirts. We are dedicated, consistent and reliable." }
  ];

  function replyTo(message) {
    const q = (message || "").toLowerCase();
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].keys.some(function (k) { return q.indexOf(k) !== -1; })) {
        return answers[i].text;
      }
    }
    return "I can help with sizes, colours, company info and how to order. For prices and stock, call 08028385955 or 08055554744, or email 2gep.bd@gmail.com.";
  }

  const toggle = document.getElementById("chatToggle");
  const panel = document.getElementById("chatPanel");
  const log = document.getElementById("chatLog");
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInput");

  function addBubble(text, who) {
    if (!log) return;
    const div = document.createElement("div");
    div.className = "bubble " + who;
    div.textContent = text;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
  }

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      panel.classList.toggle("open");
      if (panel.classList.contains("open") && log && !log.dataset.ready) {
        addBubble("Hello! I am the Gep. Ask about traveling box sizes, colours, care, Prints, or how to order. I will not show prices — call 08028385955 or 08055554744 for that.", "bot");
        log.dataset.ready = "1";
      }
    });
  }

  if (form && input) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      addBubble(text, "user");
      input.value = "";
      setTimeout(function () { addBubble(replyTo(text), "bot"); }, 250);
    });
  }

  document.querySelectorAll("[data-ask]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!panel.classList.contains("open")) toggle.click();
      addBubble(btn.getAttribute("data-ask"), "user");
      setTimeout(function () { addBubble(replyTo(btn.getAttribute("data-ask")), "bot"); }, 250);
    });
  });
})();
