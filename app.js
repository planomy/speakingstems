(function () {
  "use strict";

  const STEM_COUNT = 8;

  const TOPICS = [
    "Convince me of a movie I must see.",
    "Convince me why kids should pick their own bedtime.",
    "Convince me why pizza is better than burgers.",
    "Convince me why cats are evil.",
    "Convince me of the dangers of AI.",
    "Convince me homework does more harm than good.",
    "Convince me schools should start later in the morning.",
    "Convince me social media should be banned for under-16s.",
    "Convince me books beat screens every time.",
    "Convince me recess should last an hour.",
    "Convince me why humans should colonise Mars.",
    "Convince me electric cars are overrated.",
    "Convince me junk food belongs in school cafeterias.",
    "Convince me uniforms help learning.",
    "Convince me uniforms crush individuality.",
    "Convince me exams measure nothing useful.",
    "Convince me sport matters more than maths.",
    "Convince me maths matters more than sport.",
    "Convince me privacy is dead—good riddance.",
    "Convince me everyone deserves a four-day week.",
    "Convince me zoos do more good than harm.",
    "Convince me zoos should shut down tomorrow.",
    "Convince me democracy is overrated.",
    "Convince me voting should be compulsory.",
    "Convince me billionaires should not exist.",
    "Convince me climate activism has gone too far.",
    "Convince me climate activism has not gone far enough.",
    "Convince me grades should be abolished.",
    "Convince me robots will steal every job.",
    "Convince me remote learning beats classrooms.",
    "Convince me handwriting still matters.",
    "Convince me summer holidays are too long.",
    "Convince me winter beats summer.",
    "Convince me fame is a curse.",
    "Convince me luck beats talent.",
    "Convince me talent beats luck.",
    "Convince me censorship protects society.",
    "Convince me censorship poisons society.",
    "Convince me lying is sometimes moral.",
    "Convince me revenge can be justice.",
    "Convince me empathy is a weakness.",
    "Convince me empathy is our greatest strength.",
    "Convince me nostalgia blinds us.",
    "Convince me optimism is naive.",
    "Convince me pessimism is lazy.",
    "Convince me originality is a myth.",
    "Convince me failure teaches more than success.",
    "Convince me ambition ruins happiness.",
    "Convince me boredom sparks creativity.",
    "Convince me silence speaks louder than words.",
    "Convince me curiosity kills more than cats.",
    "Convince me rules exist to be broken.",
    "Convince me tradition anchors wisdom.",
    "Convince me tradition traps progress.",
    "Convince me honesty costs too much.",
    "Convince me kindness can backfire.",
    "Convince me courage means asking for help.",
    "Convince me listening beats debating.",
  ];

  const CATEGORIES = [
    {
      id: "j-hooks",
      title: "Strong opening hooks",
      stems: [
        "Imagine this for a moment.",
        "Picture this.",
        "Let me ask you something.",
        "Have you ever stopped to wonder",
        "What if this happened tomorrow?",
        "Here is something worth thinking about:",
        "Most people never expect",
        "You may not have thought about this, but",
        "What if I told you that",
        "Here's something that might surprise you:",
        "Think about the last time you",
        "Before you answer, consider this:",
        "This might seem obvious, but",
        "Have you ever wondered why",
        "Let's start with a question:",
        "Close your eyes and imagine",
        "Here's a scenario worth considering:",
        "Not many people realise that",
        "It starts with a simple idea:",
        "Something unexpected is happening:",
        "This is a story about",
        "What keeps me thinking about this is",
        "What if everything we assumed was wrong?",
      ],
    },
    {
      id: "j-starters",
      title: "Strong general starters",
      stems: [
        "Let's get one thing straight.",
        "The truth is,",
        "Let's be honest.",
        "Here's the real issue:",
        "What matters most is",
        "The bigger question is",
        "It all comes down to",
        "There is no escaping the fact that",
        "When you really think about it,",
        "The thing nobody mentions is",
        "At the end of the day,",
        "What we often forget is",
        "Here's what I know for certain:",
        "The point is simply this:",
        "Let me be direct about this:",
        "What this really means is",
        "The first thing to understand is",
        "There's more to this than people think.",
        "Whether we like it or not,",
        "The simplest way to explain this is",
        "What I find most interesting is",
        "It's worth asking ourselves:",
        "This matters more than people realise.",
      ],
    },
    {
      id: "s-hooks",
      title: "Compelling hooks",
      stems: [
        "Rarely does a single decision",
        "Few questions are more pressing than",
        "Buried beneath the debate lies",
        "Long before anyone noticed,",
        "Something has quietly shifted:",
        "Strip away the noise, and",
        "Ask anyone who has faced",
        "What nobody tells you is",
        "Beneath every assumption lies a question:",
        "The debate often misses the point entirely.",
        "Before we can answer this, we must ask",
        "History has a habit of repeating itself when",
        "The most uncomfortable truth here is",
        "What unites every side of this debate is",
        "In the middle of all this noise,",
        "The consequences of ignoring this are",
        "What this question is really asking is",
        "Most people walk past this problem entirely.",
        "The stakes could not be higher:",
        "At the heart of this issue lies",
        "Generations from now, people will ask why",
        "The silence around this topic is telling.",
        "What this moment demands of us is",
      ],
    },
    {
      id: "s-analytical",
      title: "Analytical openers",
      stems: [
        "Closer examination reveals",
        "What the data consistently shows is",
        "Beneath the surface of this debate",
        "When examined carefully,",
        "Three forces are driving this:",
        "History offers a clear precedent here:",
        "Any serious analysis must begin with",
        "The pattern becomes undeniable:",
        "A careful reading of the evidence suggests",
        "The variables at play here are not independent.",
        "Systematic analysis points to one conclusion:",
        "What emerges from the research is",
        "Looking across multiple perspectives,",
        "The evidence, taken together, reveals",
        "Unpacking this issue requires us to consider",
        "At its structural level, this problem involves",
        "What distinguishes this case is",
        "The literature on this is remarkably consistent:",
        "When context is factored in,",
        "The logical chain here is straightforward:",
        "Disaggregating the data exposes",
        "Three distinct patterns emerge from this:",
        "Even a surface reading makes clear that",
      ],
    },
    {
      id: "j-persuasive",
      title: "Persuasive stems",
      stems: [
        "We need to face this honestly.",
        "The evidence speaks for itself.",
        "This matters because",
        "That is precisely why",
        "The sensible response is",
        "We cannot keep pretending that",
        "Surely, we can do better than this.",
        "If not now, when?",
        "This is not a question we can ignore.",
        "The longer we wait, the worse this gets.",
        "Anyone who cares about this must",
        "The answer here is not complicated:",
        "It's time we stopped pretending that",
        "We owe it to ourselves to",
        "The right thing to do is clear:",
        "This is not someone else's problem.",
        "Change is possible, but only if",
        "We all have a part to play in",
        "This affects every one of us.",
        "The least we can do is",
        "One small action can make a real difference.",
        "We have the power to change this.",
        "The choice is ours to make.",
      ],
    },
    {
      id: "j-audience",
      title: "Audience-engaging stems",
      stems: [
        "Let me ask you this:",
        "Have you ever felt",
        "Can you imagine",
        "What would happen if",
        "Why does this matter to us?",
        "So what does this mean for us?",
        "And here is the key question:",
        "Are we really prepared to accept that?",
        "What would you do if this happened to you?",
        "Think about the people you care about most.",
        "How would you feel if",
        "Which side of this debate are you on?",
        "What would it take for you to change your mind?",
        "Imagine you had to explain this to a child.",
        "If this were your problem, what would you do?",
        "What does this mean for your future?",
        "How often do you think about",
        "Would you be satisfied with that answer?",
        "Has this ever happened to someone you know?",
        "What would you sacrifice to fix this?",
        "What do you believe should happen next?",
        "Can we honestly say we are doing enough?",
        "Where do you stand on this?",
      ],
    },
    {
      id: "s-persuasion",
      title: "Sophisticated persuasion",
      stems: [
        "At stake here is nothing less than",
        "No reasonable person can deny that",
        "Complacency carries a cost:",
        "Every delay compounds the problem.",
        "Those who disagree must reckon with",
        "The moral case is straightforward:",
        "Convenience is not the same as wisdom.",
        "Future generations will judge us by",
        "To do nothing is itself a choice.",
        "The burden of proof now lies with those who",
        "Neutrality here is not an option.",
        "Ethical clarity demands that we",
        "The consequences of inaction are well documented.",
        "What we permit today, we normalise tomorrow.",
        "History will not forgive indifference here.",
        "The question is not whether, but when.",
        "We cannot outsource this responsibility.",
        "The strongest counterargument actually reinforces the case:",
        "Those most affected by this deserve better than",
        "Good intentions are no substitute for",
        "The moral weight of this issue falls on",
        "We are the generation that must decide.",
        "Leadership on this issue requires more than words.",
      ],
    },
    {
      id: "s-reader",
      title: "Reader positioning",
      stems: [
        "Consider for a moment what it means",
        "Most of us have encountered",
        "Anyone who has watched closely knows",
        "Place yourself in that position:",
        "Cast your mind back to when",
        "Behind every statistic stands a person",
        "Familiarity can blind us to",
        "Shared experience tells us that",
        "You do not need to be an expert to see",
        "What unites us here is more than we admit.",
        "Each of us has a stake in how this unfolds.",
        "Whatever your view, this affects you.",
        "We are not as removed from this as we think.",
        "Your instinct here is probably correct:",
        "The discomfort you feel reading this is telling.",
        "This is not an abstract issue for many people.",
        "Consider what you would want in their position.",
        "What we know, and what we do with that knowledge, defines us.",
        "Think of someone this directly affects.",
        "Our collective silence has consequences.",
        "What we take for granted, others cannot.",
        "The people least heard on this are often most affected.",
        "You already know more about this than you realise.",
      ],
    },
    {
      id: "j-transitions",
      title: "Sophisticated transitions",
      stems: [
        "More than that,",
        "Beyond this,",
        "Equally important,",
        "That brings me to",
        "This leads directly to",
        "Which raises another point:",
        "That is only part of the story.",
        "But the issue does not end there.",
        "And this connects to something bigger:",
        "With that in mind,",
        "Building on this idea,",
        "It's also worth noting that",
        "At the same time,",
        "This isn't the only factor, though.",
        "Let's now turn to",
        "What follows from this is",
        "Alongside this,",
        "Now consider the other side:",
        "There is one more thing to add:",
        "This point connects directly to",
        "Going further still,",
        "Adding to this,",
        "And here is where it gets interesting:",
      ],
    },
    {
      id: "j-rebuttal",
      title: "Rebuttal stems",
      stems: [
        "Some may argue that",
        "It is often said that",
        "While that may sound convincing,",
        "That view ignores the fact that",
        "What that argument fails to consider is",
        "The flaw in that argument is simple:",
        "Even if that were true,",
        "That still leaves one major problem:",
        "This objection, while understandable, misses the point.",
        "Yes, but consider what that actually means.",
        "That reasoning only holds if",
        "Taken at face value, this seems reasonable — but",
        "A closer look shows that",
        "The evidence doesn't support that view.",
        "That argument assumes something that isn't proven.",
        "Even the strongest version of that case falls short because",
        "Acknowledging that point still doesn't change the fact that",
        "That may be true in some cases, but",
        "This objection raises a fair point, yet",
        "The problem with that line of thinking is",
        "We've heard that before, and yet",
        "That comparison doesn't quite hold because",
        "Granting that, the central issue remains:",
      ],
    },
    {
      id: "s-transitions",
      title: "Advanced transitions",
      stems: [
        "Herein lies the central tension:",
        "Yet this only deepens the problem.",
        "Compounding this further,",
        "What follows from this is",
        "Nor does the complexity end there.",
        "Taken together, these points suggest",
        "Push this logic further and",
        "Running beneath all of this is",
        "This reframes the entire question.",
        "The implications extend well beyond",
        "What this reveals, at a deeper level, is",
        "Having established this, we must now consider",
        "The thread connecting all of this is",
        "This shifts the burden of the argument to",
        "Examined in context, this changes everything.",
        "The tension between these two points reveals",
        "Once this is acknowledged, the path forward becomes",
        "This cannot be considered in isolation from",
        "The case becomes even stronger when we add",
        "Taken to its logical conclusion,",
        "This brings the underlying contradiction into focus:",
        "Widening the lens, we can see that",
        "What unites these separate points is",
      ],
    },
    {
      id: "s-rebuttal",
      title: "Nuanced rebuttal",
      stems: [
        "Superficially compelling, this view nevertheless",
        "Proponents of this position overlook",
        "Granting that point still leaves",
        "Correlation here is not causation.",
        "Popular though this claim may be,",
        "On closer inspection, the logic unravels:",
        "Accepting this would require us to believe",
        "Where this reasoning breaks down is",
        "This objection has merit, but only up to a point.",
        "Even granting the strongest form of this argument,",
        "The internal contradiction here is hard to ignore.",
        "What this view mistakes for evidence is",
        "The analogy breaks down when we consider",
        "This argument proves too much — it would also mean",
        "The data cited here does not say what it is claimed to say.",
        "A more precise reading of the evidence shows",
        "This conflates two very different claims:",
        "The assumptions underlying this position are",
        "Historical examples actually cut against this view.",
        "This concedes more than its proponents realise.",
        "Even sympathetic observers have noted that",
        "The strongest critics of this position point out",
        "Accepting this conclusion would require ignoring",
      ],
    },
  ];

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pickRandom(arr, n) {
    return shuffle(arr).slice(0, Math.min(n, arr.length));
  }

  function spinTopic() {
    const el = document.getElementById("topicText");
    if (!el) return;
    const [choice] = pickRandom(TOPICS, 1);
    el.textContent = choice;
  }

  function spinCategory(categoryId) {
    const cat = CATEGORIES.find((c) => c.id === categoryId);
    if (!cat) return;
    const listEl = document.querySelector(`[data-stem-list="${categoryId}"]`);
    if (!listEl) return;
    const stems = pickRandom(cat.stems, STEM_COUNT);
    listEl.innerHTML = stems.map((s) => `<li>${escapeHtml(s)}</li>`).join("");
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function buildGrid() {
    const grid = document.getElementById("stemGrid");
    if (!grid) return;

    grid.innerHTML = CATEGORIES.map(
      (cat) => `
      <article class="card card--${cat.id}" data-category="${cat.id}">
        <div class="card__head">
          <span class="card__title">${escapeHtml(cat.title)}</span>
          <button type="button" class="spin-btn" data-spin="${cat.id}" title="New stems for this box">Spin</button>
        </div>
        <div class="card__body">
          <ul class="card__list" data-stem-list="${cat.id}"></ul>
        </div>
      </article>
    `
    ).join("");

    CATEGORIES.forEach((cat) => {
      spinCategory(cat.id);
    });

    grid.querySelectorAll("[data-spin]").forEach((btn) => {
      btn.addEventListener("click", () => {
        spinCategory(btn.getAttribute("data-spin"));
      });
    });
  }

  const topicSpin = document.getElementById("topicSpin");
  if (topicSpin) {
    topicSpin.addEventListener("click", spinTopic);
  }

  buildGrid();
  spinTopic();
})();
