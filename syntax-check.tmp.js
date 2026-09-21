import { useEffect, useState } from "react";
import listJson from "./data/listData.js";
import gameCssUrl from "../css/game.css?url";
import searchCssUrl from "../css/searcPage.css?url";
const asset = (value) => value?.startsWith("http") ? value : `/${value?.replace(/^\.\//, "")}`;
const navigate = (url) => {
  window.history.pushState({}, "", url);
  window.dispatchEvent(new PopStateEvent("popstate"));
};
function Header() {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [value, setValue] = useState("");
  const categories = [...new Set(listJson.slice(0, 5).map((item) => item.category))];
  const submit = () => value && navigate(`/search.html?value=${encodeURIComponent(value)}`);
  const toggleMenu = () => {
    const next = !menu;
    setMenu(next);
    setSearch(false);
    document.documentElement.style.overflowY = next ? "hidden" : "auto";
  };
  const toggleSearch = () => {
    const next = !search;
    setSearch(next);
    setMenu(false);
    document.documentElement.style.overflowY = next ? "hidden" : "auto";
  };
  const selectCategory = (category) => {
    setMenu(false);
    setSearch(false);
    document.documentElement.style.overflowY = "auto";
    navigate(`/classify.html?type=${category}`);
  };
  return /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", { className: "header" }, /* @__PURE__ */ React.createElement("div", { className: "left", onClick: () => {
    window.location.href = "/index.html";
  } }, /* @__PURE__ */ React.createElement("img", { src: "/images/logo.png", alt: "" })), /* @__PURE__ */ React.createElement("div", { className: `center ${menu ? "open" : ""}`, style: { left: menu ? "0px" : void 0 } }, categories.map((item) => /* @__PURE__ */ React.createElement("div", { className: "centerLi", key: item, onClick: () => selectCategory(item) }, item))), /* @__PURE__ */ React.createElement("div", { className: "right" }, /* @__PURE__ */ React.createElement("div", { className: "menu", onClick: toggleMenu }, /* @__PURE__ */ React.createElement("img", { src: menu ? "/images/close.png" : "/images/menu.png", alt: "" })), /* @__PURE__ */ React.createElement("div", { className: "search", onClick: toggleSearch }, /* @__PURE__ */ React.createElement("img", { src: search ? "/images/close.png" : "/images/search.png", alt: "" }))), /* @__PURE__ */ React.createElement("div", { className: "searchBox", style: { display: search ? "flex" : void 0 } }, /* @__PURE__ */ React.createElement("input", { value, onChange: (event) => setValue(event.target.value), onKeyDown: (event) => event.key === "Enter" && submit(), placeholder: "Search Game", id: "search", autoComplete: "off" }), /* @__PURE__ */ React.createElement("p", { className: "searchBtn", onClick: submit }, /* @__PURE__ */ React.createElement("img", { src: "/images/search.png", alt: "" })))));
}
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("div", { className: "footerBox" }, /* @__PURE__ */ React.createElement("div", null, "\xA92026  wizzogame All Rights Reserved"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", { href: "/Privacy.html" }, "Privacy Policy"), /* @__PURE__ */ React.createElement("a", { href: "/Terms.html" }, "Terms of Service"), /* @__PURE__ */ React.createElement("a", { href: "/copyright.html" }, "Copyright"))));
}
function Card({ item }) {
  return /* @__PURE__ */ React.createElement("div", { className: "smallList", onClick: () => navigate(`/game.html?game=${item.id}`) }, /* @__PURE__ */ React.createElement("img", { src: asset(item.thumb), alt: "" }), /* @__PURE__ */ React.createElement("p", null, item.category, " Game"), /* @__PURE__ */ React.createElement("p", null, item.title));
}
function Listing({ classify = false }) {
  const params = new URLSearchParams(window.location.search);
  const type = (params.get("type") || "all").toLowerCase();
  const value = (params.get("value") || "").toLowerCase();
  const items = classify ? listJson.filter((item) => type === "all" || item.category.toLowerCase() === type) : listJson.filter((item) => item.title.toLowerCase().includes(value) || item.description.toLowerCase().includes(value));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", { className: "classTitle" }, /* @__PURE__ */ React.createElement("i", null, classify ? `${type} games` : "search games")), /* @__PURE__ */ React.createElement("div", { className: "masonry masonry1" }, items.map((item) => /* @__PURE__ */ React.createElement(Card, { item, key: item.id })))), /* @__PURE__ */ React.createElement(Footer, null));
}
function Player() {
  const url = new URLSearchParams(window.location.search).get("url") || "";
  useEffect(() => {
    const bodyBackground = document.body.style.backgroundColor;
    const bodyImage = document.body.style.backgroundImage;
    document.body.style.backgroundColor = "#000";
    document.body.style.backgroundImage = "none";
    return () => {
      document.body.style.backgroundColor = bodyBackground;
      document.body.style.backgroundImage = bodyImage;
    };
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("style", null, `html,body{background-color:#000!important;background-image:none!important}#root{min-height:100vh;display:flex;flex-direction:column}.playerMain{width:100%!important;max-width:none!important;min-height:0!important;flex:1!important;display:flex}.playerMain .mainbox{padding:0;width:100%;display:flex}.playerMain .ifamerCon{width:100%;height:auto;min-height:0;flex:1;background:#000;display:flex;align-items:center;justify-content:center;margin:0}.playerMain iframe{width:100%;height:100%;max-width:1000px}.playerFooter footer{margin:0!important}`), /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", { className: "playerMain" }, /* @__PURE__ */ React.createElement("div", { className: "mainbox", id: "play" }, /* @__PURE__ */ React.createElement("div", { className: "ifamerCon" }, /* @__PURE__ */ React.createElement("iframe", { src: url, frameBorder: "0", title: "Game player" })))), /* @__PURE__ */ React.createElement("div", { className: "playerFooter" }, /* @__PURE__ */ React.createElement(Footer, null)));
}
function GameDetail() {
  const item = listJson.find((entry) => entry.id === new URLSearchParams(window.location.search).get("game")) || listJson[0];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", { className: "mainbox", id: "play" }, /* @__PURE__ */ React.createElement("div", { className: "gameCon" }, /* @__PURE__ */ React.createElement("div", { className: "gamePlay", style: { backgroundImage: `url(${asset(item.thumb)})` } }), /* @__PURE__ */ React.createElement("div", { className: "gamedet" }, /* @__PURE__ */ React.createElement("div", { className: "gamedetLeft" }, /* @__PURE__ */ React.createElement("div", { className: "baifenbaiBox" }, /* @__PURE__ */ React.createElement("div", { className: "gameimgBox" }, /* @__PURE__ */ React.createElement("img", { src: asset(item.thumb), alt: "" }))), /* @__PURE__ */ React.createElement("div", { className: "buttonBox" }, /* @__PURE__ */ React.createElement("button", { id: "sdk__splash-button", onClick: () => navigate(`/gamedet.html?url=${encodeURIComponent(item.url)}`) }, "Play Game"))))), /* @__PURE__ */ React.createElement("div", { className: "gameDet" }, /* @__PURE__ */ React.createElement("div", { className: "gameDetBottom" }, /* @__PURE__ */ React.createElement("b", null, item.title), /* @__PURE__ */ React.createElement("br", null), item.description)), /* @__PURE__ */ React.createElement("div", { className: "classTitle" }, /* @__PURE__ */ React.createElement("i", null, "recommend games")), /* @__PURE__ */ React.createElement("div", { className: "masonry masonry1" }, listJson.slice(0, 9).map((entry) => /* @__PURE__ */ React.createElement(Card, { item: entry, key: entry.id }))))), /* @__PURE__ */ React.createElement(Footer, null));
}
function LegalPage({ path }) {
  if (path === "/Terms.html") return /* @__PURE__ */ React.createElement("div", { className: "main" }, /* @__PURE__ */ React.createElement("div", { className: "title" }, "Terms of Use"), /* @__PURE__ */ React.createElement("p", null, 'By accessing or using our Services, you agree to be bound by the terms and conditions of these Terms of Use (this Agreement). The term "Services," means, collectively, various websites, applications, widgets through which you have accessed this Agreement.'), /* @__PURE__ */ React.createElement("h2", null, "Your Access and Use of our Services"), /* @__PURE__ */ React.createElement("p", null, "You are only entitled to access and use our Services for lawful purposes and pursuant to the terms and conditions of this Agreement and the Privacy Policy."), /* @__PURE__ */ React.createElement("p", null, "Your access and use of our Services may be interrupted from time to time for any of several reasons, including, without limitation, the malfunction of equipment, periodic updating, maintenance or repair of our Services or other actions that we, in our sole discretion, may elect to take. We reserve the right to suspend or discontinue the availability of our Services and/or any portion or feature of our Services at any time in our sole discretion and without prior notice."), /* @__PURE__ */ React.createElement("p", null, "Any action by you that, in our sole discretion: (i) violates the terms and conditions of this Agreement and/or the Privacy Policy; (ii) restricts, inhibits or prevents any access, use or enjoyment of our Services; or (iii) through the use of our Services, defames, abuses, harasses, offends or threatens, shall not be permitted, and may result in your loss of the right to access and use our Services. You shall not modify, scrape, embed, or frame our Services without our prior written permission."), /* @__PURE__ */ React.createElement("h2", null, "Our Intellectual Property Rights"), /* @__PURE__ */ React.createElement("p", null, "Our names, graphics, logos, game headers, button icons, scripts, and service names are our trademarks or trade dress in the United States and/or other countries. We make no proprietary claim to any third-party names, trademarks or service marks appearing on our Services. Any third-party names, trademarks, and service marks are property of their respective owners."), /* @__PURE__ */ React.createElement("p", null, 'The information, data, software and content viewable on, contained in, or downloadable from our Services (collectively, the "Content"), including, without limitation, all text, graphics, charts, pictures, photographs, images, videos, line art, icons and renditions, are copyrighted by, or otherwise licensed to, us or our Content suppliers. We also own a copyright of a collective work in the selection, coordination, arrangement, presentation, display and enhancement of the Content (the "Collective Work").'), /* @__PURE__ */ React.createElement("p", null, "You are solely responsible for any damages resulting from your infringement of our or any third-party's intellectual property rights regarding the Trademarks, the Content, and the Collective Work."), /* @__PURE__ */ React.createElement("h2", null, "Your Use of the Content"), /* @__PURE__ */ React.createElement("p", null, "You may not modify the Content or the Collective Work or utilize them for any commercial purpose or other public display, performance, sale, or rental, decompile, reverse engineer, or disassemble the Content and the Collective Work, or transfer the Content or the Collective Work to another person or entity."), /* @__PURE__ */ React.createElement("p", null, "Except as otherwise permitted under the copyright laws of the United States, no other copying, distribution, redistribution, transmission, publication or use, other than the non-commercial use of the Content and the Collective Work as permitted by this Agreement, is permitted by you without our prior written permission."));
  if (path === "/Privacy.html") return /* @__PURE__ */ React.createElement("div", { className: "main" }, /* @__PURE__ */ React.createElement("div", { className: "title" }, "Privacy Policy"), /* @__PURE__ */ React.createElement("h2", null, "Introduction"), /* @__PURE__ */ React.createElement("p", null, "This Privacy Policy applies to the operations of wizzogame, which Services are directed at all users. By using our Website and our Services, you acknowledge you have read and understood this Privacy Policy."), /* @__PURE__ */ React.createElement("h2", null, "Non - Personal Information"), /* @__PURE__ */ React.createElement("p", null, "This is a free service. When you download and use the Website, we do not require you to provide any information and we will not collect any personal information, in addition to non- personal information, such as your device type, operating system, species, in order to optimize the display on your device screen game and to provide you with a better experience."), /* @__PURE__ */ React.createElement("h2", null, "Links from wizzogame to Other Websites"), /* @__PURE__ */ React.createElement("p", null, "On this Website we may provide links to other websites that are controlled by third parties. Linked websites may have their own privacy notices or policies, which we strongly suggest you review."), /* @__PURE__ */ React.createElement("h2", null, "Contact Information"), /* @__PURE__ */ React.createElement("p", null, "Thank you for reading the Privacy Policy. If you would like to contact us to understand more about our Privacy Policy, please email or write to us at:"), /* @__PURE__ */ React.createElement("p", null, "Email: ", /* @__PURE__ */ React.createElement("a", { href: "/cdn-cgi/l/email-protection" }, "wizzogame@gmail.com")));
  return /* @__PURE__ */ React.createElement("div", { className: "main" }, /* @__PURE__ */ React.createElement("div", { className: "title" }, "Copyright"), /* @__PURE__ */ React.createElement("h2", null, "Copyright Notice"), /* @__PURE__ */ React.createElement("p", null, "All contents posted on wizzogame are protected by their respective owners' copyrights and have been posted with their permission or under a Creative Commons License."), /* @__PURE__ */ React.createElement("h2", null, "DMCA Policy"), /* @__PURE__ */ React.createElement("p", null, "If you suspect the content on wizzogame may infringe on your intellectual property rights, please contact us at ", /* @__PURE__ */ React.createElement("a", { href: "/cdn-cgi/l/email-protection" }, "wizzogame@gmail.com")));
}
function App() {
  const [, refresh] = useState(0);
  const path = window.location.pathname;
  useEffect(() => {
    const update = () => refresh((value) => value + 1);
    addEventListener("popstate", update);
    return () => removeEventListener("popstate", update);
  }, []);
  useEffect(() => {
    const url = path.endsWith("gamedet.html") || path.endsWith("game.html") ? gameCssUrl : path.endsWith("search.html") ? searchCssUrl : null;
    if (!url) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
    return () => link.remove();
  }, [path]);
  if (path === "/Terms.html" || path === "/Privacy.html" || path === "/copyright.html") return /* @__PURE__ */ React.createElement(LegalPage, { path });
  if (path.endsWith("gamedet.html")) return /* @__PURE__ */ React.createElement(Player, null);
  if (path.endsWith("game.html")) return /* @__PURE__ */ React.createElement(GameDetail, null);
  if (path.endsWith("classify.html")) return /* @__PURE__ */ React.createElement(Listing, { classify: true });
  return /* @__PURE__ */ React.createElement(Listing, null);
}
export default App;
