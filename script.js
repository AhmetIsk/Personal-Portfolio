(function () {
  const data = window.portfolioData || {};
  const profile = data.profile || {};
  const links = data.links || {};
  const github = data.github || {};

  const linkLabels = {
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    resume: "Resume",
    demo: "Live demo",
  };

  function text(value, fallback = "") {
    return typeof value === "string" && value.trim() ? value.trim() : fallback;
  }

  function createElement(tag, className, content) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.textContent = content;
    return element;
  }

  function createLogo(src, alt) {
    const image = document.createElement("img");
    image.className = "logo-mark";
    image.src = src;
    image.alt = alt;
    image.loading = "lazy";
    return image;
  }

  function isUsableLink(url) {
    if (typeof url !== "string" || !url.trim()) return false;

    return !["your-", "your.", "example.com"].some((placeholder) => url.includes(placeholder));
  }

  function createLink(label, href, variant = "secondary") {
    const anchor = document.createElement("a");
    anchor.className = `button button-${variant}`;
    anchor.href = href;
    anchor.textContent = label;

    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
    }

    return anchor;
  }

  function bindProfileText() {
    document.querySelectorAll("[data-bind]").forEach((element) => {
      const key = element.getAttribute("data-bind").replace("profile.", "");
      const value = text(profile[key], element.textContent);
      element.textContent = value;
    });

    if (profile.name) {
      document.title = `${profile.name} | Portfolio`;
    }

    const avatar = document.getElementById("profile-avatar");
    if (avatar && isUsableLink(profile.avatar)) {
      avatar.src = profile.avatar;
      avatar.alt = `${text(profile.name, "Profile")} profile photo`;
      avatar.hidden = false;
    }
  }

  function renderActions(containerId, primaryKey = "github") {
    const container = document.getElementById(containerId);
    if (!container) return;

    const orderedKeys = ["email", "github", "linkedin", "resume"];
    orderedKeys.forEach((key) => {
      if (!isUsableLink(links[key])) return;
      const variant = key === primaryKey ? "primary" : "secondary";
      container.appendChild(createLink(linkLabels[key], links[key], variant));
    });
  }

  function renderGithubMini() {
    const container = document.getElementById("github-mini");
    if (!container || !github.username) return;

    const stats = [
      ["Repos", github.publicRepos],
      ["Followers", github.followers],
      ["Following", github.following],
    ].filter(([, value]) => value !== undefined && value !== null);

    stats.forEach(([label, value]) => {
      const item = createElement("div", "mini-stat");
      item.appendChild(createElement("span", "mini-value", String(value)));
      item.appendChild(createElement("span", "mini-label", label));
      container.appendChild(item);
    });
  }

  function renderAffiliations() {
    const container = document.getElementById("affiliation-list");
    if (!container) return;

    const affiliations = Array.isArray(data.affiliations) ? data.affiliations : [];
    if (!affiliations.length) {
      container.closest("section").hidden = true;
      return;
    }

    affiliations.forEach((affiliation) => {
      const article = createElement("article", "affiliation-card");
      if (isUsableLink(affiliation.icon)) {
        article.appendChild(createLogo(affiliation.icon, ""));
      }

      const body = createElement("div", "affiliation-body");
      body.appendChild(createElement("p", "affiliation-type", text(affiliation.type)));
      body.appendChild(createElement("h3", "", text(affiliation.name, "Affiliation")));
      body.appendChild(createElement("p", "", text(affiliation.detail)));
      body.appendChild(createElement("span", "affiliation-period", text(affiliation.period)));
      article.appendChild(body);
      container.appendChild(article);
    });
  }

  function renderProjects() {
    const container = document.getElementById("project-list");
    if (!container) return;

    const projects = Array.isArray(data.projects) ? data.projects : [];
    if (!projects.length) {
      container.closest("section").hidden = true;
      return;
    }

    projects.forEach((project) => {
      const article = createElement("article", "project-card");
      const header = createElement("div", "card-header");
      if (isUsableLink(project.icon)) {
        header.appendChild(createLogo(project.icon, ""));
      }

      const titleBlock = createElement("div", "card-title-block");
      if (project.eyebrow) {
        titleBlock.appendChild(createElement("p", "card-eyebrow", text(project.eyebrow)));
      }
      titleBlock.appendChild(createElement("h3", "", text(project.title, "Untitled project")));
      header.appendChild(titleBlock);
      article.appendChild(header);

      article.appendChild(createElement("p", "project-description", text(project.description)));

      if (Array.isArray(project.tech) && project.tech.length) {
        const techList = createElement("ul", "tag-list");
        project.tech.forEach((item) => {
          techList.appendChild(createElement("li", "", item));
        });
        article.appendChild(techList);
      }

      if (Array.isArray(project.highlights) && project.highlights.length) {
        const highlights = createElement("ul", "highlight-list");
        project.highlights.forEach((item) => {
          highlights.appendChild(createElement("li", "", item));
        });
        article.appendChild(highlights);
      }

      if (project.meta) {
        article.appendChild(createElement("p", "card-meta", text(project.meta)));
      }

      const actions = createElement("div", "card-actions");
      if (isUsableLink(project.github)) {
        actions.appendChild(createLink("Source", project.github));
      }
      if (isUsableLink(project.demo)) {
        actions.appendChild(createLink(linkLabels.demo, project.demo));
      }
      if (actions.children.length) {
        article.appendChild(actions);
      }

      container.appendChild(article);
    });
  }

  function renderSkills() {
    const container = document.getElementById("skills-list");
    if (!container) return;

    const groups = Array.isArray(data.skills) ? data.skills : [];
    if (!groups.length) {
      container.closest("section").hidden = true;
      return;
    }

    groups.forEach((group) => {
      const card = createElement("article", "skill-card");
      card.appendChild(createElement("h3", "", text(group.category, "Skills")));

      const list = createElement("ul", "tag-list tag-list-muted");
      const items = Array.isArray(group.items) ? group.items : [];
      items.forEach((item) => {
        list.appendChild(createElement("li", "", item));
      });

      card.appendChild(list);
      container.appendChild(card);
    });
  }

  function renderExperience() {
    const container = document.getElementById("experience-list");
    if (!container) return;

    const entries = Array.isArray(data.experience) ? data.experience : [];
    if (!entries.length) {
      container.closest("section").hidden = true;
      return;
    }

    entries.forEach((entry) => {
      const article = createElement("article", "timeline-item");
      if (isUsableLink(entry.icon)) {
        article.appendChild(createLogo(entry.icon, ""));
      }

      const body = createElement("div", "timeline-body");
      body.appendChild(createElement("p", "timeline-period", text(entry.period)));
      body.appendChild(createElement("h3", "", text(entry.role, "Role")));
      body.appendChild(createElement("p", "timeline-org", text(entry.organization)));
      body.appendChild(createElement("p", "", text(entry.description)));
      article.appendChild(body);
      container.appendChild(article);
    });
  }

  function setFooterYear() {
    const year = document.getElementById("footer-year");
    if (year) year.textContent = new Date().getFullYear().toString();
  }

  bindProfileText();
  renderActions("hero-actions");
  renderActions("contact-actions");
  renderGithubMini();
  renderAffiliations();
  renderProjects();
  renderSkills();
  renderExperience();
  setFooterYear();
})();
