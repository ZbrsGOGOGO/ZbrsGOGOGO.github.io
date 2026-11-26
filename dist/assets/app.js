/*
 * Edit this object to personalize the site. Empty contact links stay hidden.
 * No build step is required; save and refresh the browser.
 */
const PROFILE = {
  name: "borui zhang",
  handle: "ZbrsGOGOGO",
  title: "borui zhang · AI × Robotics Builder",
  links: {
    email: "",
    github: "https://github.com/ZbrsGOGOGO",
    linkedin: "",
  },
  tags: ["ROBOTICS", "AI AGENT", "INTERACTIVE SYSTEMS", "PYTHON", "TYPESCRIPT"],
  stats: [
    { value: "3", label: { zh: "公开仓库", en: "public repos" } },
    { value: "3", label: { zh: "主要语言", en: "core languages" } },
    { value: "154", label: { zh: "社区项目提交", en: "community commits" } },
  ],
  principles: [
    {
      title: { zh: "拆解复杂性", en: "Decompose" },
      body: {
        zh: "先找到真正需要做出的决定，再决定要收集什么信息、构建什么工具。",
        en: "Start with the decision that matters, then choose the evidence and tools it needs.",
      },
    },
    {
      title: { zh: "证据驱动", en: "Use evidence" },
      body: {
        zh: "清楚地区分推测、离线验证、仿真结果与真实环境里的系统行为。",
        en: "Separate intuition, offline checks, simulation results, and real-world behavior.",
      },
    },
    {
      title: { zh: "持续交付", en: "Keep shipping" },
      body: {
        zh: "偏爱小步完成、可复现测试和能在下一次迭代里继续积累的工程资产。",
        en: "Prefer small releases, reproducible tests, and assets that compound over time.",
      },
    },
  ],
  focus: [
    {
      title: { zh: "机器人控制与数据", en: "Robot control & data" },
      body: {
        zh: "把多控制端、运动授权、遥操作意图、本体反馈与示范数据放进同一条可追溯链路。",
        en: "Connect multiple control surfaces, motion authorization, teleoperation intent, robot feedback, and demonstration data.",
      },
      tags: ["TELEOP", "DATA", "SDK"],
    },
    {
      title: { zh: "AI Agent 与工程工具", en: "AI agents & engineering tools" },
      body: {
        zh: "关注工具调用、上下文组织、长程任务，以及如何把 Agent 接进真实研发流程。",
        en: "Explore tool use, context design, long-horizon tasks, and agents that participate in real engineering workflows.",
      },
      tags: ["AGENTS", "TOOLS", "WORKFLOWS"],
    },
    {
      title: { zh: "交互产品与社区", en: "Interactive products" },
      body: {
        zh: "用 Web、实时服务、3D 与小游戏构建轻社区，把复杂能力变成用户愿意长期使用的体验。",
        en: "Combine web apps, realtime services, 3D, and games into products people can understand and keep using.",
      },
      tags: ["WEB", "REALTIME", "3D"],
    },
  ],
  projects: [
    {
      kind: { zh: "机器人平台", en: "Robotics platform" },
      status: { zh: "Python · ★ 2", en: "Python · ★ 2" },
      title: { zh: "robot-progressive-autonomy-platform", en: "robot-progressive-autonomy-platform" },
      body: {
        zh: "面向 Pico、Web 与多机器人遥操的渐进式自主平台，把工位分配、运动授权、反馈与示范数据放进统一 SDK。",
        en: "A progressive-autonomy SDK for Pico, web, and multi-robot teleoperation, connecting station assignment, motion authorization, feedback, and demonstrations.",
      },
      tags: ["PYTHON", "TELEOP", "ROBOT DATA"],
      url: "https://github.com/ZbrsGOGOGO/robot-progressive-autonomy-platform",
    },
    {
      kind: { zh: "全栈轻社区", en: "Full-stack community" },
      status: { zh: "TypeScript · ★ 1", en: "TypeScript · ★ 1" },
      title: { zh: "WebFishGogogo", en: "WebFishGogogo" },
      body: {
        zh: "一个办公室主题轻社区：聊天、工位绿植、协作任务、小游戏与工具，采用 React、NestJS、PostgreSQL、Redis 与 Three.js。",
        en: "An office-themed social space with chat, plants, collaborative tasks, games, and tools, built with React, NestJS, PostgreSQL, Redis, and Three.js.",
      },
      tags: ["REACT", "NESTJS", "THREE.JS"],
      url: "https://github.com/ZbrsGOGOGO/WebFishGogogo",
    },
    {
      kind: { zh: "早期项目", en: "Earlier project" },
      status: { zh: "C#", en: "C#" },
      title: { zh: "Zbrs", en: "Zbrs" },
      body: {
        zh: "抖音小游戏项目，记录从交互玩法到完整交付的早期实践。",
        en: "A Douyin mini-game project documenting earlier experiments in interaction design and delivery.",
      },
      tags: ["C#", "GAME", "INTERACTION"],
      url: "https://github.com/ZbrsGOGOGO/Zbrs",
    },
  ],
  methods: [
    {
      title: { zh: "定义决策", en: "Define the decision" },
      body: {
        zh: "先写清楚最终要做出的判断，避免用大量活动代替真正的进展。",
        en: "State the decision first so activity never masquerades as progress.",
      },
    },
    {
      title: { zh: "找到最早分歧", en: "Find the first divergence" },
      body: {
        zh: "从输入到结果追踪整条链路，定位系统第一次偏离预期的位置。",
        en: "Trace the full path and locate the first point where behavior departs from intent.",
      },
    },
    {
      title: { zh: "设计可推翻的检查", en: "Design a falsifiable check" },
      body: {
        zh: "用正反例、匹配对照和独立验证，主动尝试推翻当前解释。",
        en: "Use positive and negative probes, matched controls, and independent validation.",
      },
    },
    {
      title: { zh: "交付可复核结果", en: "Ship an auditable result" },
      body: {
        zh: "保留配置、版本、证据和未解决问题，让下一次迭代有可靠起点。",
        en: "Preserve versions, evidence, and open questions so the next iteration starts from solid ground.",
      },
    },
  ],
};

const COPY = {
  zh: {
    navAbout: "关于",
    navFocus: "方向",
    navWork: "项目",
    navMethod: "方法",
    navContact: "联系",
    heroEyebrow: "GITHUB / ZbrsGOGOGO · OPEN SOURCE BUILDER",
    heroRole: "AI × Robotics Builder",
    heroLead:
      "我在机器人系统、AI Agent 与交互产品之间构建连接：让控制更安全，让数据可追溯，让复杂系统真正可用。",
    heroTranslation: "Building open-source systems across robot control, data, agents, and interactive products.",
    viewWork: "查看开源项目",
    seeMethod: "了解我的工作方式",
    availability: "3 个公开仓库 · Python / TypeScript / C#",
    aboutTitle: "从想法到真实世界",
    aboutStatement:
      "我对完整链路感兴趣：数据如何产生，模型如何学习，软件怎样可靠运行，以及人如何与智能工具一起把事情做好。",
    aboutNote: "技术真正有价值的时刻，是它不再停留在演示里，而是进入真实流程，接受边界、失败与反馈。",
    focusTitle: "三个持续投入的方向",
    focusIntro: "不追逐孤立的技术名词，更关心它们怎样组成一个能被理解、验证和维护的系统。",
    workTitle: "公开项目",
    workAside: "只展示当前 GitHub 账号下可公开验证的项目与技术栈。",
    methodTitle: "先证明，再构建。",
    methodIntro:
      "我偏爱小步交付、清晰边界和可复现证据。复杂问题不需要神秘感，需要一个能持续缩小不确定性的过程。",
    contactTitle: "从一个公开问题开始。",
    contactBody: "欢迎通过 GitHub 查看代码、提出问题，或者围绕机器人遥操、数据闭环与交互产品展开交流。",
    contactPlaceholder: "联系入口将在补充个人资料后显示",
    emailMe: "发邮件",
    github: "GitHub",
    linkedin: "LinkedIn",
    footerLine: "保持好奇，持续构建。",
    backTop: "回到顶部",
    themeSystem: "跟随系统",
    themeLight: "晨光",
    themePaper: "纸张",
    themeMoss: "苔绿",
    themeDark: "深夜",
  },
  en: {
    navAbout: "About",
    navFocus: "Focus",
    navWork: "Work",
    navMethod: "Method",
    navContact: "Contact",
    heroEyebrow: "GITHUB / ZbrsGOGOGO · OPEN SOURCE BUILDER",
    heroRole: "AI × Robotics Builder",
    heroLead:
      "I build connections across robotics, AI agents, and interactive products—safer control, traceable data, and systems that work beyond a demo.",
    heroTranslation: "在机器人控制、数据、Agent 与交互产品之间持续构建开源系统。",
    viewWork: "Explore open source",
    seeMethod: "How I work",
    availability: "3 public repos · Python / TypeScript / C#",
    aboutTitle: "From ideas to the real world",
    aboutStatement:
      "I care about the full path: how data is made, how models learn, how software behaves reliably, and how people work with intelligent tools.",
    aboutNote: "Technology becomes valuable when it leaves the demo, enters a real workflow, and meets boundaries, failure, and feedback.",
    focusTitle: "Three long-term focus areas",
    focusIntro: "I care less about isolated buzzwords and more about how technologies form understandable, testable, maintainable systems.",
    workTitle: "Open-source projects",
    workAside: "Only public, verifiable projects and technology from this GitHub account.",
    methodTitle: "Prove first. Then build.",
    methodIntro:
      "I prefer small releases, explicit boundaries, and reproducible evidence. Complex work needs a process that continually reduces uncertainty.",
    contactTitle: "Start with a public question.",
    contactBody: "Explore the code or open a GitHub issue to talk about teleoperation, robot data loops, or interactive systems.",
    contactPlaceholder: "Contact links appear after personal details are added",
    emailMe: "Email me",
    github: "GitHub",
    linkedin: "LinkedIn",
    footerLine: "Stay curious. Keep building.",
    backTop: "Back to top",
    themeSystem: "System",
    themeLight: "Daylight",
    themePaper: "Paper",
    themeMoss: "Moss",
    themeDark: "Night",
  },
};

const state = {
  language: localStorage.getItem("profile-language") || "zh",
  theme: localStorage.getItem("profile-theme") || "system",
  font: Number(localStorage.getItem("profile-font")) || 1,
};

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];
const localized = (value) => (typeof value === "string" ? value : value[state.language]);

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function renderProfile() {
  document.title = PROFILE.title;
  qsa("[data-profile='handle']").forEach((element) => {
    element.textContent = PROFILE.handle;
  });
  qsa("[data-profile='name']").forEach((element) => {
    element.textContent = PROFILE.name;
  });

  const tagList = qs("[data-profile-list='tags']");
  tagList.replaceChildren(
    ...PROFILE.tags.map((tag) => createElement("span", "tag", tag))
  );

  const stats = qs("[data-profile-list='stats']");
  stats.replaceChildren(
    ...PROFILE.stats.map((item) => {
      const group = createElement("div", "proof-stat");
      group.append(
        createElement("dt", "", item.value),
        createElement("dd", "", localized(item.label))
      );
      return group;
    })
  );
}

function renderPrinciples() {
  const root = qs("[data-principles]");
  root.replaceChildren(
    ...PROFILE.principles.map((item, index) => {
      const card = createElement("article", "principle-card reveal");
      card.append(
        createElement("span", "principle-number", `0${index + 1}`),
        createElement("h3", "", localized(item.title)),
        createElement("p", "", localized(item.body))
      );
      return card;
    })
  );
}

function renderFocus() {
  const root = qs("[data-focus-list]");
  root.replaceChildren(
    ...PROFILE.focus.map((item, index) => {
      const row = createElement("article", "focus-row reveal");
      const meta = createElement("div", "focus-row-meta");
      item.tags.forEach((tag) => meta.append(createElement("span", "", tag)));
      row.append(
        createElement("span", "focus-row-index", `0${index + 1}`),
        createElement("h3", "", localized(item.title)),
        createElement("p", "", localized(item.body)),
        meta
      );
      return row;
    })
  );
}

function renderProjects() {
  const root = qs("[data-project-list]");
  root.replaceChildren(
    ...PROFILE.projects.map((item) => {
      const card = createElement(item.url ? "a" : "article", "project-card reveal");
      if (item.url) {
        card.href = item.url;
        card.target = "_blank";
        card.rel = "noreferrer";
        card.setAttribute("aria-label", `${localized(item.title)} · GitHub`);
      }
      const top = createElement("div", "project-topline");
      top.append(
        createElement("span", "project-kind", localized(item.kind)),
        createElement("span", "project-status", localized(item.status))
      );
      const tags = createElement("div", "project-tags");
      item.tags.forEach((tag) => tags.append(createElement("span", "", tag)));
      card.append(
        top,
        createElement("h3", "", localized(item.title)),
        createElement("p", "", localized(item.body)),
        tags
      );
      return card;
    })
  );
}

function renderMethods() {
  const root = qs("[data-method-list]");
  root.replaceChildren(
    ...PROFILE.methods.map((item) => {
      const step = createElement("li", "method-step reveal");
      const copy = createElement("div");
      copy.append(
        createElement("h3", "", localized(item.title)),
        createElement("p", "", localized(item.body))
      );
      step.append(copy);
      return step;
    })
  );
}

function renderContact() {
  const root = qs("[data-contact-actions]");
  const actions = [];

  if (PROFILE.links.email) {
    const link = createElement("a", "button button-primary", COPY[state.language].emailMe);
    link.href = `mailto:${PROFILE.links.email}`;
    actions.push(link);
  }
  if (PROFILE.links.github) {
    const link = createElement("a", "button button-secondary", COPY[state.language].github);
    link.href = PROFILE.links.github;
    link.target = "_blank";
    link.rel = "noreferrer";
    actions.push(link);
  }
  if (PROFILE.links.linkedin) {
    const link = createElement("a", "button button-secondary", COPY[state.language].linkedin);
    link.href = PROFILE.links.linkedin;
    link.target = "_blank";
    link.rel = "noreferrer";
    actions.push(link);
  }

  if (!actions.length) {
    actions.push(createElement("span", "contact-placeholder", COPY[state.language].contactPlaceholder));
  }
  root.replaceChildren(...actions);
}

function renderCopy() {
  const copy = COPY[state.language];
  renderProfile();
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  qsa("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key]) element.textContent = copy[key];
  });
  qs("[data-language]").textContent = state.language === "zh" ? "EN" : "中";
  qs("[data-language]").setAttribute(
    "aria-label",
    state.language === "zh" ? "Switch to English" : "切换到中文"
  );
  const themeLabels = ["themeSystem", "themeLight", "themePaper", "themeMoss", "themeDark"];
  qsa("[data-theme-picker] option").forEach((option, index) => {
    option.textContent = copy[themeLabels[index]];
  });
  renderPrinciples();
  renderFocus();
  renderProjects();
  renderMethods();
  renderContact();
  observeReveals();
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  qs("[data-theme-picker]").value = state.theme;
  const themeColor = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim();
  qs("meta[name='theme-color']").setAttribute("content", themeColor);
}

function applyFontScale() {
  state.font = Math.min(1.14, Math.max(0.92, state.font));
  document.documentElement.style.setProperty("--font-scale", state.font.toFixed(2));
}

let revealObserver;
function observeReveals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    qsa(".reveal").forEach((element) => element.classList.add("is-visible"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 }
    );
  }
  qsa(".reveal:not(.is-visible)").forEach((element) => revealObserver.observe(element));
}

function updateScrollState() {
  const top = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? top / max : 0;
  qs(".scroll-progress span").style.transform = `scaleX(${ratio})`;
  qs("[data-header]").classList.toggle("is-scrolled", top > 12);
}

function observeNavigation() {
  const links = qsa(".primary-nav a");
  const byId = new Map(links.map((link) => [link.getAttribute("href").slice(1), link]));
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((link) => link.classList.remove("is-active"));
      byId.get(visible.target.id)?.classList.add("is-active");
    },
    { rootMargin: "-25% 0px -62%", threshold: [0.05, 0.2, 0.5] }
  );
  qsa("main section[id]").forEach((section) => observer.observe(section));
}

function setupCanvasTilt() {
  const canvas = qs("[data-tilt]");
  if (!canvas || window.matchMedia("(pointer: coarse)").matches) return;
  canvas.addEventListener("pointermove", (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    canvas.style.setProperty("--tilt-x", `${x * 2.8}deg`);
    canvas.style.setProperty("--tilt-y", `${y * -2.8}deg`);
  });
  canvas.addEventListener("pointerleave", () => {
    canvas.style.setProperty("--tilt-x", "0deg");
    canvas.style.setProperty("--tilt-y", "0deg");
  });
}

function setupControls() {
  qs("[data-language]").addEventListener("click", () => {
    state.language = state.language === "zh" ? "en" : "zh";
    localStorage.setItem("profile-language", state.language);
    renderCopy();
  });

  qs("[data-theme-picker]").addEventListener("change", (event) => {
    state.theme = event.target.value;
    localStorage.setItem("profile-theme", state.theme);
    applyTheme();
  });

  qsa("[data-font]").forEach((button) => {
    button.addEventListener("click", () => {
      state.font += button.dataset.font === "up" ? 0.06 : -0.06;
      applyFontScale();
      localStorage.setItem("profile-font", state.font.toFixed(2));
    });
  });

  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  systemTheme.addEventListener?.("change", () => {
    if (state.theme === "system") applyTheme();
  });
}

function boot() {
  applyTheme();
  applyFontScale();
  renderCopy();
  setupControls();
  setupCanvasTilt();
  observeNavigation();
  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });
  qs("[data-year]").textContent = new Date().getFullYear();
}

boot();
