import { d as slot, c as pop, p as push, e as ensure_array_like, h as head } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
const configuration = {
  personal: {
    firstName: "Parham",
    lastName: "Moradi",
    description: "Data Scientist Developer | Expert in Python, SQL, and ...",
    InterestedArea: [
      "Data Science",
      "Complex Systems",
      "Network Science",
      "Data Engineering",
      "Computational Social Science",
      "Full Stack Development"
    ],
    skills: {
      Backend: [
        "Python",
        "SQL",
        "FastAPI",
        "REST",
        "Postgresql",
        "MongoDB",
        "ETL",
        "Docker",
        "CI/CD",
        "Microservices",
        "Linux",
        "/(Reg)Ex/",
        "Vim"
      ],
      Libraries: [
        "Numpy",
        "Pandas",
        "matplotlib",
        "Networkx",
        "nltk",
        "SQLAlchemy",
        "Tensorflow",
        "Scikit-learn",
        "SciPy",
        "seaborn"
      ],
      Tools: [
        "Git",
        "GitHub",
        "VS Code",
        "Jira",
        "Agile",
        "Postman",
        "Kanban",
        "Trello",
        "Slack",
        "Discord"
      ],
      SoftSkills: [
        "Teamwork",
        "Communication",
        "Decision Making",
        "Problem Solving",
        "Critical Thinking",
        "Time Management",
        "Organization",
        "Flexibility",
        "Adaptability",
        "Innovation"
      ]
    }
  },
  assets: {
    image: "/profile.jpeg"
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/parhammrd/",
    github: "https://github.com/parhammrd",
    CV: "/Parham_Moradi_CV.pdf",
    scroll: "#projects"
  },
  more: {
    // Portfolio: "",
    GoogleScholar: "https://scholar.google.com/citations?user=CqaZoNMAAAAJ",
    instagram: "https://www.instagram.com/parhammrd/"
  },
  colors: {
    primary: "#0E1116",
    secondary: "#EFF6EE"
  },
  contact: {
    email: "me@pmoradi.dev"
  }
};
function Background($$payload, $$props) {
  push();
  let primaryColor = configuration.colors.primary;
  let secondaryColor = configuration.colors.secondary;
  $$payload.out += `<section${attr("style", `color: ${secondaryColor}; background-color: ${primaryColor}`)} class="svelte-pv9k5r"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></section>`;
  pop();
}
function Avatar($$payload, $$props) {
  push();
  let avatarImage = configuration.assets.image;
  $$payload.out += `<img${attr("src", avatarImage)} alt="avatar" width="200" height="200" fetchpriority="high" class="svelte-6vkw7e">`;
  pop();
}
function Contact($$payload, $$props) {
  push();
  let { email } = configuration.contact;
  $$payload.out += `<section class="svelte-16kmehv"><h5 class="svelte-16kmehv">Let's talk 👋 <span class="svelte-16kmehv">${escape_html(email)}</span></h5> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></section>`;
  pop();
}
function Titles($$payload, $$props) {
  push();
  let { firstName, lastName } = configuration.personal;
  let secondaryColor = configuration.colors.secondary;
  $$payload.out += `<section${attr("style", `color: ${secondaryColor}`)} class="svelte-1mvftp1"><h1 class="svelte-1mvftp1">${escape_html(firstName)}</h1> <h1 class="svelte-1mvftp1">${escape_html(lastName)}</h1></section>`;
  pop();
}
function Skills($$payload, $$props) {
  push();
  let { skills } = configuration.personal;
  let skilks_list = Object.keys(skills);
  const each_array = ensure_array_like(skilks_list);
  $$payload.out += `<section class="skills svelte-1pz9crq"><h1 class="svelte-1pz9crq">Skills</h1> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let skillTitle = each_array[$$index_1];
    const each_array_1 = ensure_array_like(skills[skillTitle]);
    $$payload.out += `<div class="svelte-1pz9crq"><h4 class="svelte-1pz9crq">${escape_html(skillTitle)}</h4> <ul class="svelte-1pz9crq"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let skill = each_array_1[$$index];
      $$payload.out += `<li class="svelte-1pz9crq">${escape_html(skill)}</li>`;
    }
    $$payload.out += `<!--]--></ul></div>`;
  }
  $$payload.out += `<!--]--></section>`;
  pop();
}
function Socials($$payload, $$props) {
  push();
  let socials2 = configuration.socials;
  let userName = configuration.personal.firstName;
  const each_array = ensure_array_like(Object.entries(socials2));
  $$payload.out += `<section class="socials svelte-1975aa4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [socialName, socialLink] = each_array[$$index];
    if (socialName === "scroll") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${attr("href", socialLink)} alt="scrolling" class="svelte-1975aa4">Scroll Down 👇</a>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<a${attr("href", socialLink)} target="__blank"${attr("alt", userName + "'s " + socialName)} class="svelte-1975aa4">${escape_html(socialName)}</a>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></section>`;
  pop();
}
function Projects($$payload, $$props) {
  push();
  $$payload.out += `<section class="projects svelte-ouzvml" id="projects"><h1 class="svelte-ouzvml">Projects</h1> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></section>`;
  pop();
}
function More($$payload, $$props) {
  push();
  let more = configuration.more;
  let userName = configuration.personal.firstName;
  const each_array = ensure_array_like(Object.entries(more));
  $$payload.out += `<section class="more svelte-j2w2lu"><h1 class="svelte-j2w2lu">More About Me</h1> <div class="svelte-j2w2lu"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [socialName, socialLink] = each_array[$$index];
    $$payload.out += `<a${attr("href", socialLink)} target="__blank"${attr("alt", userName + "'s " + socialName)} class="svelte-j2w2lu">${escape_html(socialName)}</a>`;
  }
  $$payload.out += `<!--]--></div></section>`;
  pop();
}
function Interest($$payload, $$props) {
  push();
  let { InterestedArea } = configuration.personal;
  const each_array = ensure_array_like(InterestedArea);
  $$payload.out += `<section class="interests svelte-538v3n"><h1 class="svelte-538v3n">Interests</h1> <div class="svelte-538v3n"><ul class="svelte-538v3n"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let interestTitle = each_array[$$index];
    $$payload.out += `<li class="svelte-538v3n">${escape_html(interestTitle)}</li>`;
  }
  $$payload.out += `<!--]--></ul></div></section>`;
  pop();
}
let { personal, socials } = configuration;
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>
    ${escape_html(personal.firstName)}
    ${escape_html(personal.lastName)}
    | ${escape_html(personal.description)}
  </title>`;
    $$payload2.out += `<meta name="description"${attr("content", personal.description)}>`;
  });
  Background($$payload, {
    children: ($$payload2) => {
      Avatar($$payload2);
      $$payload2.out += `<!----> `;
      Titles($$payload2);
      $$payload2.out += `<!----> `;
      Socials($$payload2);
      $$payload2.out += `<!----> `;
      Interest($$payload2);
      $$payload2.out += `<!----> `;
      Skills($$payload2);
      $$payload2.out += `<!----> `;
      if (socials.scroll) {
        $$payload2.out += "<!--[-->";
        Projects($$payload2);
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      More($$payload2);
      $$payload2.out += `<!----> `;
      Contact($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
