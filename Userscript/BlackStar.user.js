// ==UserScript==
// @name         BlackStar
// @namespace    Debloated Xserver utility script.
// @version      1.7.3
// @description  FormerlyUtilify is a natively dark-themed addon that aims to focus on practical use.
// @author       Simon.
// @credits      Death Wolf., ReZa, Sorry, Raptor, TunA, Comenxo, Zpayer.
// @match        *://*.kogama.com/*
// @match        *://*.kogama.com.br/*
// @match        *://kogama.com.br/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const CSS_ID = "BlackStarCSS";
  let sheet;

  const CSS = `
:root {
  --color-primary: #C94838;
  --color-primary-rgb: 201, 72, 56;
  --color-accent: #e0c4a0;
  --color-text: #c9a882;
  --color-text-muted: #a8adb3;
  --color-text-alt: #b89070;
  --color-bg-main: #080608;
  --color-bg-panel: #0c0809;

  --color-danger: #c06060;
  --color-danger-rgb: 180, 40, 40;
  --color-danger-dark: #8a5050;
  --color-danger-dark-rgb: 160, 40, 40;

  --color-black-rgb: 0, 0, 0;
  --color-white-rgb: 255, 255, 255;

  --rad-sm: 4px;
  --rad-md: 7px;
  --rad-lg: 9px;
  --rad-xl: 11px;
  --rad-panel: 12px;
  --rad-pill: 20px;

  --trans-base: 0.2s;
  --trans-smooth: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --trans-fast: 0.22s cubic-bezier(0.4, 0, 0.2, 1);
  --trans-bounce: 0.18s cubic-bezier(0.34, 1.56, 0.64, 1);
}

body#root-page-mobile, #root, #root * {
  --Paper-overlay: linear-gradient(rgba(var(--color-black-rgb), 0.45), rgba(var(--color-black-rgb), 0.45)) !important;
  --variant-containedBg: rgba(var(--color-black-rgb), 0.45) !important;
}

#root a, .css-1hitfzb {
  color: var(--color-primary) !important;
  text-decoration: none !important;
  transition: color var(--trans-smooth) !important;
}
#root a:hover, .css-1hitfzb:hover { color: var(--color-accent) !important; }

#root * { scrollbar-width: none !important; }
#root *::-webkit-scrollbar { display: none !important; }

._1RMYS, ._1Cwd5 { display: none !important; }
.MuiCollapse-root._2Nols { display: none !important; }
._4OXDk { display: none !important; }

body#root-page-mobile {
  background-color: var(--color-bg-main) !important;
  background-image: radial-gradient(ellipse at center, #120e0f 0%, #090607 50%, #040304 100%) !important;
  background-attachment: fixed !important;
}

.css-1qhuzmd {
  color: var(--color-primary) !important;
}

.css-1995t1d, .css-e5yc1l {
  background-color: transparent !important;
  background: linear-gradient(rgba(var(--color-black-rgb), 0.21), rgba(var(--color-black-rgb), 0.21)) !important;
}
.css-z05bui {
  background-color: transparent !important;
  background: linear-gradient(rgba(var(--color-black-rgb), 0.47), rgba(var(--color-black-rgb), 0.47)) !important;
  backdrop-filter: blur(17px) !important;
  border-radius: var(--rad-xl) !important;
}

._1q4mD ._1sUGu ._1u05O  background-color: transparent !important; }
._33DXe { background-image: none !important; }
.css-o4yc28 { background-color: transparent !important; border-radius: var(--rad-xl) !important; }

.CgH1- ._2LT6y { display: none !important; }
._13UrL._1F5Kt.CgH1-._2Hovk { width: auto !important; }
.CgH1- {
  display: flex !important;
  justify-content: left !important;
  flex-wrap: wrap !important;
  gap: 2px !important;
}
.CgH1- .MuiCard-root {
  display: inline-flex !important;
  background: none !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  min-width: unset !important;
  width: auto !important;
  margin: 13px !important;
}
.CgH1- .MuiCardContent-root {
  padding: 0 !important;
  display: flex !important;
  gap: 2px !important;
  align-items: baseline !important;
}
.CgH1- ._2fSqj,
.CgH1- ._2LT6y { font-size: 0.82em !important; line-height: 1 !important; }
.CgH1- ._2LT6y::before { content: "·" !important; margin-right: 4px !important; opacity: 0.4 !important; }
.css-em33cn {
  background-color: transparent !important;
  background: linear-gradient(rgba(var(--color-black-rgb), 0.47), rgba(var(--color-black-rgb), 0.47)) !important;
}
.css-wog98n {
  background: linear-gradient(rgba(var(--color-black-rgb), 0.45), rgba(var(--color-black-rgb), 0.45)) !important;
  background-color: transparent !important;
}
.css-e8xqt2 {
  --variant-containedBg: rgba(var(--color-black-rgb), 0.45) !important;
  transition: background-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
}
.css-e8xqt2:hover {
  --variant-containedBg: rgba(30,10,10,0.7) !important;
  background-color: rgba(30,10,10,0.7) !important;
}

.css-179vt2a { font-size: 0.670rem !important; opacity: 0.3 !important; transition: opacity 0.4s !important; }
.css-179vt2a:hover { opacity: 1 !important; }

._1pEP2, .tRx6U, .css-1atgupc { display: none !important; }
._3TORb {
  background-color: transparent !important;
  background: linear-gradient(rgba(var(--color-black-rgb), 0.21), rgba(var(--color-black-rgb), 0.21)) !important;
}
.zUJzi, ._375XK, ._375XK ._2drTe, .zUJzi .o_DA6 .uwn5j {
  border: none !important;
  background: rgba(var(--color-black-rgb), 0.3) !important;
  backdrop-filter: blur(6px) !important;
}

.zUJzi .o_DA6 .uwn5j ._3DYYr:hover {
  background: rgba(var(--color-primary-rgb), 0.08) !important;
  transition: background var(--trans-fast) !important;
}

._375XK .F3PyX {
  border: none !important;
}

.zUJzi .o_DA6 .uwn5j ._3DYYr._2dPu4 {
  background: rgba(var(--color-primary-rgb), 0.12) !important;
  border-left: 2px solid rgba(var(--color-primary-rgb), 0.7) !important;
  padding-left: 12px !important;
  transition: background var(--trans-fast), border-color var(--trans-fast) !important;
}

.uwn5j ._3DYYr ._1j2Cd {
  filter: blur(5px) !important;
  transition: filter var(--trans-smooth) !important;
}

.uwn5j ._3DYYr:hover ._1j2Cd {
  filter: blur(0px) !important;
}

.zUJzi ._2BvOT ._375XK textarea {
  background: transparent !important;
  color: var(--color-text) !important;
  caret-color: var(--color-primary) !important;
  transition: color var(--trans-base) !important;
}

.zUJzi ._2BvOT ._375XK textarea::placeholder {
  color: rgba(var(--color-primary-rgb), 0.3) !important;
}

.zUJzi ._2BvOT ._375XK textarea:focus {
  color: var(--color-accent) !important;
}

._375XK ._2XaOw ._1j2Cd p {
  background: rgba(var(--color-black-rgb), 0.21) !important;
  border: 1px solid rgba(var(--color-primary-rgb), 0.18) !important;
  border-radius: var(--rad-lg) !important;
  backdrop-filter: blur(10px) !important;
  padding: 10px 14px !important;
  color: var(--color-text-muted) !important;
  position: relative !important;
  transition: transform var(--trans-fast), border-color var(--trans-fast), background var(--trans-fast) !important;
}

._375XK ._2XaOw ._1j2Cd p:hover {
  transform: translateX(5px) !important;
  border-color: rgba(var(--color-primary-rgb), 0.35) !important;
  background: rgba(var(--color-black-rgb), 0.32) !important;
}

._375XK ._2XaOw ._1j2Cd p::before {
  content: "Them" !important;
  position: absolute !important;
  top: -10px !important;
  left: 8px !important;
  font-size: 6px !important;
  font-weight: 600 !important;
  color: rgba(var(--color-primary-rgb), 0.6) !important;
  text-transform: uppercase !important;
  letter-spacing: 2.5px !important;
  padding: 2px 6px !important;
  border-radius: var(--rad-sm) !important;
  z-index: 10 !important;
}

._375XK ._2XaOw ._1j2Cd._1Xzzq p {
  background: rgba(var(--color-primary-rgb), 0.08) !important;
  border: 1px solid rgba(var(--color-primary-rgb), 0.25) !important;
  border-radius: var(--rad-lg) !important;
  backdrop-filter: blur(10px) !important;
  padding: 10px 14px !important;
  color: var(--color-text) !important;
  position: relative !important;
  transition: transform var(--trans-fast), border-color var(--trans-fast), background var(--trans-fast) !important;
}

._375XK ._2XaOw ._1j2Cd._1Xzzq p:hover {
  transform: translateX(-5px) !important;
  border-color: rgba(var(--color-primary-rgb), 0.5) !important;
  background: rgba(var(--color-primary-rgb), 0.15) !important;
}

._375XK ._2XaOw ._1j2Cd._1Xzzq p::before {
  content: "You" !important;
  position: absolute !important;
  top: -10px !important;
  right: 8px !important;
  font-size: 6px !important;
  font-weight: 600 !important;
  color: rgba(var(--color-primary-rgb), 0.9) !important;
  text-transform: uppercase !important;
  letter-spacing: 2.5px !important;
  padding: 2px 6px !important;
  border-radius: var(--rad-sm) !important;
  z-index: 10 !important;
}


@keyframes tm-fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}

.tm-info-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
  animation: tm-fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tm-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 9px;
  border: 1px solid rgba(var(--color-primary-rgb), 0.2);
  border-radius: var(--rad-pill);
  font-size: 11px;
  font-weight: 500;
  color: var(--color-text);
  white-space: nowrap;
  cursor: pointer;
  transition: border-color var(--trans-base), color var(--trans-base), transform var(--trans-base);
  line-height: 1.3;
}
.tm-badge:hover {
  border-color: rgba(var(--color-primary-rgb), 0.5);
  color: var(--color-accent);
  transform: translateY(-1px);
}
.tm-badge.tm-expanded { white-space: normal; word-break: break-word; max-width: 320px; }
.tm-badge-full { display: none; color: var(--color-text-alt); font-size: 10.5px; }

.tm-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 9px;
  border: 1px solid rgba(var(--color-primary-rgb), 0.18);
  border-radius: var(--rad-pill);
  font-size: 11px;
  font-weight: 500;
  color: var(--color-text);
  text-decoration: none !important;
  white-space: nowrap;
  transition: border-color var(--trans-base), color var(--trans-base), transform var(--trans-base);
  line-height: 1.3;
}
.tm-link:hover {
  border-color: rgba(var(--color-primary-rgb), 0.45);
  color: var(--color-accent) !important;
  transform: translateY(-1px);
}

.tm-icon { width: 13px; height: 13px; fill: currentColor; opacity: 0.75; flex-shrink: 0; }
.tm-level { font-size: 12px; font-weight: 600; opacity: 0.6; margin-top: 2px; color: var(--color-text); }
._13UrL ._23KvS ._25Vmr ._2IqY6 ._2O_AH { margin-top: 4px !important; }
.bs-feed-card {
  cursor: pointer !important;
  transition: color 0.3s !important;
}
.bs-feed-card ._2fSqj { color: var(--color-primary) !important; }
.bs-feed-card:hover ._2fSqj { color: var(--color-accent) !important; }

#bs-feed-overlay {
  position: fixed;
  inset: 0;
  background: rgba(var(--color-black-rgb), 0.72);
  backdrop-filter: blur(5px);
  z-index: 100000;
  display: none;
  align-items: center;
  justify-content: center;
}
#bs-feed-overlay.open { display: flex; }

#bs-feed-panel {
  width: min(740px, 93vw);
  max-height: 84vh;
  background: var(--color-bg-panel);
  border: 1px solid rgba(var(--color-primary-rgb), 0.18);
  border-radius: var(--rad-panel);
  box-shadow: 0 20px 70px rgba(var(--color-black-rgb), 0.85), inset 0 1px 0 rgba(var(--color-primary-rgb), 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: inherit;
  animation: tm-fadeIn var(--trans-fast);
}

#bs-feed-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid rgba(var(--color-primary-rgb), 0.12);
  background: rgba(var(--color-black-rgb), 0.3);
  flex-shrink: 0;
}

#bs-feed-title {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(var(--color-primary-rgb), 0.6);
}

.bs-feed-hbtn {
  padding: 6px 14px;
  background: rgba(var(--color-primary-rgb), 0.08);
  border: 1px solid rgba(var(--color-primary-rgb), 0.2);
  border-radius: var(--rad-md);
  color: var(--color-text);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: background var(--trans-base), border-color var(--trans-base), color var(--trans-base), transform 0.15s;
  font-family: inherit;
}
.bs-feed-hbtn:hover {
  background: rgba(var(--color-primary-rgb), 0.16);
  border-color: rgba(var(--color-primary-rgb), 0.4);
  color: var(--color-accent);
  transform: translateY(-1px);
}
.bs-feed-hbtn:disabled { opacity: 0.35; cursor: not-allowed; transform: none; }
.bs-feed-hbtn.danger {
  background: rgba(var(--color-danger-rgb), 0.1);
  border-color: rgba(var(--color-danger-rgb), 0.25);
  color: var(--color-danger);
}
.bs-feed-hbtn.danger:hover {
  background: rgba(var(--color-danger-rgb), 0.2);
  border-color: rgba(var(--color-danger-rgb), 0.45);
  color: #e08080;
}

#bs-feed-content {
  flex: 1;
  overflow-y: auto;
  padding: 18px 20px;
}
#bs-feed-content::-webkit-scrollbar { display: none; }

.bs-feed-item {
  background: rgba(var(--color-white-rgb), 0.02);
  border: 1px solid rgba(var(--color-primary-rgb), 0.08);
  border-radius: var(--rad-lg);
  padding: 14px 16px;
  margin-bottom: 10px;
  transition: border-color var(--trans-base), background var(--trans-base);
}
.bs-feed-item:hover { border-color: rgba(var(--color-primary-rgb), 0.18); background: rgba(var(--color-white-rgb), 0.03); }

.bs-feed-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.bs-feed-date {
  font-size: 10px;
  color: rgba(var(--color-primary-rgb), 0.5);
  letter-spacing: 0.03em;
}

.bs-feed-type {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(var(--color-primary-rgb), 0.4);
  padding: 2px 7px;
  border: 1px solid rgba(var(--color-primary-rgb), 0.15);
  border-radius: var(--rad-sm);
}

.bs-feed-text {
  font-size: 13px;
  color: var(--color-text-muted);
  line-height: 1.55;
  margin-bottom: 10px;
  word-break: break-word;
}
.bs-feed-text a { color: var(--color-primary) !important; }
.bs-feed-text a:hover { color: var(--color-accent) !important; }

.bs-feed-actions {
  display: flex;
  gap: 6px;
  margin-top: 8px;
  flex-wrap: wrap;
}

.bs-feed-btn {
  padding: 4px 11px;
  font-size: 11px;
  border-radius: 6px;
  border: 1px solid rgba(var(--color-primary-rgb), 0.15);
  background: transparent;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: background 0.18s, border-color 0.18s, color 0.18s;
  font-family: inherit;
}
.bs-feed-btn:hover {
  background: rgba(var(--color-primary-rgb), 0.1);
  border-color: rgba(var(--color-primary-rgb), 0.3);
  color: var(--color-text);
}
.bs-feed-btn.del {
  border-color: rgba(var(--color-danger-dark-rgb), 0.2);
  color: var(--color-danger-dark);
}
.bs-feed-btn.del:hover {
  background: rgba(var(--color-danger-dark-rgb), 0.12);
  border-color: rgba(var(--color-danger-dark-rgb), 0.4);
  color: var(--color-danger);
}

.bs-comments {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(var(--color-primary-rgb), 0.08);
  display: none;
}
.bs-comments.open { display: block; }

.bs-comment {
  background: rgba(var(--color-black-rgb), 0.2);
  border: 1px solid rgba(var(--color-white-rgb), 0.04);
  border-radius: var(--rad-md);
  padding: 9px 12px;
  margin-bottom: 7px;
  font-size: 12px;
  color: var(--color-text-muted);
  display: flex;
  gap: 10px;
  align-items: flex-start;
}
.bs-comment-body { flex: 1; }
.bs-comment-author {
  font-size: 11px;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 3px;
}
.bs-comment-del {
  background: none;
  border: none;
  color: rgba(var(--color-danger-dark-rgb), 0.4);
  font-size: 14px;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  transition: color 0.15s;
  flex-shrink: 0;
}
.bs-comment-del:hover { color: var(--color-danger); }

.bs-comment-compose {
  display: flex;
  gap: 7px;
  margin-top: 8px;
}
.bs-comment-input {
  flex: 1;
  padding: 7px 11px;
  background: rgba(var(--color-black-rgb), 0.3);
  border: 1px solid rgba(var(--color-primary-rgb), 0.15);
  border-radius: var(--rad-md);
  color: var(--color-text);
  font-size: 12px;
  font-family: inherit;
  outline: none;
  transition: border-color var(--trans-base);
}
.bs-comment-input:focus { border-color: rgba(var(--color-primary-rgb), 0.35); }
.bs-comment-input::placeholder { color: rgba(var(--color-primary-rgb), 0.3); }

.bs-empty { text-align: center; padding: 40px 20px; font-size: 13px; color: rgba(var(--color-primary-rgb), 0.3); font-style: italic; }
.bs-loading { text-align: center; padding: 30px; font-size: 12px; color: rgba(var(--color-primary-rgb), 0.4); letter-spacing: 0.05em; }

@keyframes bs-fb-in {
  from { opacity: 0; transform: translateY(3px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes bs-fb-ripple {
  from { transform: scale(0); opacity: 0.35; }
  to   { transform: scale(2.8); opacity: 0; }
}
@keyframes bs-fb-sent-glow {
  0%   { box-shadow: 0 0 0 0 rgba(var(--color-primary-rgb), 0.45); }
  60%  { box-shadow: 0 0 0 7px rgba(var(--color-primary-rgb), 0); }
  100% { box-shadow: 0 0 0 0 rgba(var(--color-primary-rgb), 0); }
}

.bs-friend-wrap {
  position: relative;
  display: inline-flex;
  animation: bs-fb-in 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.bs-friend-btn {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 15px 6px 12px;
  background: rgba(var(--color-primary-rgb), 0.08);
  border: 1px solid rgba(var(--color-primary-rgb), 0.25);
  border-radius: 8px;
  color: var(--color-text);
  font-size: 12px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  letter-spacing: 0.02em;
  white-space: nowrap;
  transition:
    background  var(--trans-fast),
    border-color var(--trans-fast),
    color       var(--trans-fast),
    transform   var(--trans-bounce),
    opacity     0.18s ease;
  user-select: none;
}
.bs-friend-btn:hover:not(:disabled) {
  background: rgba(var(--color-primary-rgb), 0.15);
  border-color: rgba(var(--color-primary-rgb), 0.5);
  color: var(--color-accent);
  transform: translateY(-1px);
}
.bs-friend-btn:active:not(:disabled) { transform: scale(0.97) translateY(0); }
.bs-friend-btn:disabled { opacity: 0.45; cursor: not-allowed; }

.bs-friend-btn.bs-sent {
  background: rgba(var(--color-primary-rgb), 0.05);
  border-color: rgba(var(--color-primary-rgb), 0.2);
  color: rgba(var(--color-primary-rgb), 0.55);
  animation: bs-fb-sent-glow 0.55s ease-out;
}
.bs-friend-btn.bs-sent:hover:not(:disabled) {
  background: rgba(var(--color-danger-dark-rgb), 0.12);
  border-color: rgba(var(--color-danger-dark-rgb), 0.35);
  color: var(--color-danger);
}

.bs-friend-btn.bs-busy { pointer-events: none; opacity: 0.5; }

.bs-friend-btn .bs-fb-ripple {
  position: absolute;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-top: -30px;
  margin-left: -30px;
  background: rgba(var(--color-primary-rgb), 0.35);
  pointer-events: none;
  animation: bs-fb-ripple 0.5s ease-out forwards;
}

.bs-friend-btn svg {
  flex-shrink: 0;
  width: 13px;
  height: 13px;
  fill: currentColor;
  transition: transform var(--trans-fast);
}
.bs-friend-btn:hover:not(:disabled) svg { transform: scale(1.15); }
.bs-friend-btn.bs-sent svg { transform: scale(0.9); }

@keyframes ff-in {
  from { opacity: 0; transform: translate(-50%,-48%) scale(0.97); }
  to   { opacity: 1; transform: translate(-50%,-50%) scale(1); }
}

#ff-panel {
  position: fixed;
  z-index: 200000;
  left: 50%; top: 50%;
  transform: translate(-50%,-50%);
  width: min(860px, 93vw);
  max-height: 84vh;
  background: var(--color-bg-panel);
  border: 1px solid rgba(var(--color-primary-rgb), 0.18);
  border-radius: var(--rad-panel);
  box-shadow: 0 24px 80px rgba(var(--color-black-rgb), 0.88), inset 0 1px 0 rgba(var(--color-primary-rgb), 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: inherit;
  animation: ff-in var(--trans-fast) both;
}

#ff-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid rgba(var(--color-primary-rgb), 0.12);
  background: rgba(var(--color-black-rgb), 0.3);
  cursor: grab;
  user-select: none;
  flex-shrink: 0;
}
#ff-header.dragging { cursor: grabbing; }

#ff-title {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(var(--color-primary-rgb), 0.6);
}

#ff-hrow { display: flex; align-items: center; gap: 8px; }

#ff-search {
  padding: 5px 11px;
  background: rgba(var(--color-black-rgb), 0.35);
  border: 1px solid rgba(var(--color-primary-rgb), 0.15);
  border-radius: var(--rad-md);
  color: var(--color-text);
  font-size: 12px;
  font-family: inherit;
  outline: none;
  width: 180px;
  transition: border-color var(--trans-base);
}
#ff-search:focus { border-color: rgba(var(--color-primary-rgb), 0.35); }
#ff-search::placeholder { color: rgba(var(--color-primary-rgb), 0.3); }

.ff-hbtn {
  padding: 5px 13px;
  background: rgba(var(--color-primary-rgb), 0.08);
  border: 1px solid rgba(var(--color-primary-rgb), 0.2);
  border-radius: var(--rad-md);
  color: var(--color-text);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: background var(--trans-base), border-color var(--trans-base), color var(--trans-base), transform 0.15s;
}
.ff-hbtn:hover {
  background: rgba(var(--color-primary-rgb), 0.16);
  border-color: rgba(var(--color-primary-rgb), 0.4);
  color: var(--color-accent);
  transform: translateY(-1px);
}

#ff-body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 18px 20px;
  overflow-y: auto;
}
#ff-body.ff-two { grid-template-columns: repeat(2, 1fr); }
#ff-body::-webkit-scrollbar { display: none; }

@media (max-width: 640px) { #ff-body { grid-template-columns: 1fr !important; } }

.ff-section {
  background: rgba(var(--color-white-rgb), 0.02);
  border: 1px solid rgba(var(--color-primary-rgb), 0.08);
  border-radius: var(--rad-lg);
  padding: 14px 16px;
  min-height: 120px;
  max-height: 58vh;
  overflow-y: auto;
  transition: border-color var(--trans-base);
}
.ff-section:hover { border-color: rgba(var(--color-primary-rgb), 0.18); }
.ff-section::-webkit-scrollbar { display: none; }

.ff-section h3 {
  margin: 0 0 12px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: rgba(var(--color-primary-rgb), 0.55);
}

.ff-entry { display: inline; }

.ff-entry a {
  display: inline-block;
  color: var(--color-text) !important;
  text-decoration: none !important;
  font-size: 13px;
  padding: 2px 7px;
  border-radius: 5px;
  transition: background 0.18s, color 0.18s, transform 0.18s;
}
.ff-entry a:hover {
  background: rgba(var(--color-primary-rgb), 0.12);
  color: var(--color-accent) !important;
  transform: translateY(-1px);
}

.ff-sep { color: rgba(var(--color-primary-rgb), 0.25); font-size: 12px; margin-right: 2px; }

.ff-empty {
  color: rgba(var(--color-primary-rgb), 0.3);
  font-size: 12px;
  font-style: italic;
  padding: 6px 2px;
}

.ff-loading { color: rgba(var(--color-primary-rgb), 0.35); font-size: 12px; letter-spacing: 0.05em; }

#ff-pill {
  position: fixed;
  left: 50%;
  bottom: 26px;
  transform: translateX(-50%);
  z-index: 200000;
  padding: 8px 20px;
  background: rgba(var(--color-primary-rgb), 0.1);
  border: 1px solid rgba(var(--color-primary-rgb), 0.3);
  border-radius: var(--rad-pill);
  color: var(--color-text);
  font-size: 12px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  display: none;
  transition: background var(--trans-base), border-color var(--trans-base), color var(--trans-base), transform var(--trans-base);
}
#ff-pill:hover {
  background: rgba(var(--color-primary-rgb), 0.18);
  border-color: rgba(var(--color-primary-rgb), 0.5);
  color: var(--color-accent);
  transform: translateX(-50%) translateY(-2px);
}

@keyframes cd-in {
  from { opacity: 0; transform: translateY(3px); }
  to   { opacity: 1; transform: translateY(0); }
}

#bs-chip {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 5px 12px;
  background: rgba(var(--color-primary-rgb), 0.07);
  border: 1px solid rgba(var(--color-primary-rgb), 0.18);
  border-radius: var(--rad-md);
  font-size: 12px;
  font-weight: 500;
  animation: cd-in 0.28s cubic-bezier(0.4, 0, 0.2, 1) both;
  margin-bottom: 8px;
}

.cd-val {
  color: var(--color-text);
  font-weight: 600;
  position: relative;
  cursor: default;
}
.cd-val::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%) translateY(3px);
  background: var(--color-bg-panel);
  border: 1px solid rgba(var(--color-primary-rgb), 0.2);
  border-radius: var(--rad-sm);
  padding: 3px 8px;
  font-size: 10px;
  font-weight: 600;
  color: var(--color-text);
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.18s, transform 0.18s;
}
.cd-val:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.cd-dim { color: rgba(var(--color-primary-rgb), 0.4); font-size: 11px; }
.cd-sep { color: rgba(var(--color-primary-rgb), 0.25); font-size: 11px; }

.cd-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(var(--color-primary-rgb), 0.55);
  flex-shrink: 0;
}
  `;

  function adoptSheet() {
    if (!sheet) {
      sheet = new CSSStyleSheet();
      sheet.replaceSync(CSS);
    }
    if (!document.adoptedStyleSheets.includes(sheet)) {
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
    }
  }

  function fallbackInject() {
    if (document.getElementById(CSS_ID)) return;
    const el = document.createElement("style");
    el.id = CSS_ID;
    el.textContent = CSS;
    (document.head ?? document.documentElement).prepend(el);
  }

  function inject() {
    if (typeof CSSStyleSheet !== "undefined" && "replace" in CSSStyleSheet.prototype) {
      adoptSheet();
      return;
    }
    fallbackInject();
  }

  function watchForHead() {
    if (document.head) { inject(); return; }
    const obs = new MutationObserver(() => {
      if (!document.head) return;
      obs.disconnect();
      inject();
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
  }

  function guardSPA() {
    if (!sheet) return;
    new MutationObserver(() => {
      if (document.adoptedStyleSheets.includes(sheet)) return;
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
    }).observe(document.head ?? document.documentElement, { childList: true });
  }

  const origin = () => location.origin;

  const decodeHTML = s => {
    const t = document.createElement("textarea");
    t.innerHTML = s;
    return t.value;
  };

  const decodeAll = s => {
    if (!s) return "";
    let out = s;
    for (let i = 0; i < 3; i++) out = decodeHTML(out);
    out = out
      .replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
      .replace(/\\n/g, "\n")
      .replace(/\u2800/g, " ");
    return out.trim();
  };

  function debounce(fn, ms) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), ms);
    };
  }

  function hookBootstrap() {
    let _real = window.kogamaApp;
    Object.defineProperty(window, "kogamaApp", {
      configurable: true,
      set(fn) { _real = fn; },
      get() {
        return function (options) {
          if (options?.bootstrap) window.__capturedBootstrap = options.bootstrap;
          return _real?.apply(this, arguments);
        };
      },
    });
  }

  const waitDesc = () => new Promise(resolve => {
    const check = () => {
      const b = window.__capturedBootstrap;
      const raw = b?.object?.description ?? b?.current_user?.description;
      if (raw) { resolve(decodeAll(raw)); return; }
      requestAnimationFrame(check);
    };
    check();
  });

  const removeReactBits = root => {
    if (!document.contains(root)) return;
    for (const sel of ['[itemprop="description"]', ".MuiCollapse-root"]) {
      root.querySelectorAll(sel).forEach(n => root.contains(n) && n.remove());
    }
    root.querySelectorAll("button").forEach(b => {
      if (/show more/i.test(b.textContent) && root.contains(b)) b.remove();
    });
  };

  const buildBox = text => {
    const box = document.createElement("div");
    box.id = "tm-desc-box";
    Object.assign(box.style, {
      overflowY: "auto",
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
      color: "#a8adb3",
      fontSize: "0.92em",
      lineHeight: "1.45",
      padding: "14px 16px 22px",
      marginTop: "6px",
      background: "rgba(0,0,0,0.10)",
      borderRadius: "8px",
      scrollbarGutter: "stable",
      overscrollBehavior: "contain",
    });
    box.textContent = text;
    return box;
  };

  const fitHeight = (box, host) => {
    const ph = host.parentElement?.clientHeight ?? 0;
    const limit = ph > 0
      ? Math.floor(ph * 0.36)
      : Math.floor(window.innerHeight * 0.29);
    box.style.maxHeight = limit + "px";
  };

  const guardDesc = root => {
    let timer = null;
    new MutationObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(() => removeReactBits(root), 50);
    }).observe(root, { childList: true, subtree: true });
  };

  const run = async () => {
    const desc = await waitDesc();
    const waitMount = () => {
      const host = document.querySelector("div._1aUa_");
      if (!host) { requestAnimationFrame(waitMount); return; }
      if (host.dataset.tmMounted) return;
      host.dataset.tmMounted = "1";
      Object.assign(host.style, { height: "auto", maxHeight: "unset", overflow: "visible" });
      removeReactBits(host);
      guardDesc(host);
      const box = buildBox(desc);
      host.appendChild(box);
      fitHeight(box, host);
      new ResizeObserver(() => fitHeight(box, host)).observe(document.body);
    };
    waitMount();
  };

  function relativeTime(dateStr) {
    const s = Math.floor((Date.now() - new Date(dateStr)) / 1000);
    if (s < 60) return "just now";
    for (const { v, u } of [
      { v: 31536000, u: "y" }, { v: 2592000, u: "mo" },
      { v: 86400, u: "d" },   { v: 3600, u: "h" }, { v: 60, u: "m" },
    ]) {
      if (s >= v) return `${(s / v).toFixed(u === "y" || u === "mo" ? 1 : 0)}${u} ago`;
    }
    return "just now";
  }

  function verboseTime(dateStr, prefix) {
    const d = new Date(dateStr);
    const day = d.getDate();
    const sfx = [11,12,13].includes(day % 100) ? "th"
      : (["st","nd","rd"][day % 10 - 1] ?? "th");
    const months = ["January","February","March","April","May","June",
      "July","August","September","October","November","December"];
    const tz = -d.getTimezoneOffset();
    return `${prefix}${day}${sfx} ${months[d.getMonth()]} ${d.getFullYear()}, `
      + `${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")} `
      + `GMT${tz >= 0 ? "+" : "-"}${Math.floor(Math.abs(tz) / 60)}`;
  }

  function makeIcon(path) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.classList.add("tm-icon");
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("d", path);
    svg.appendChild(p);
    return svg;
  }

  const ICONS = {
    calendar: "M7 2v2H5V2H3v4h18V2h-2v2h-2V2h-2v2h-2V2H9v2H7V2zm-4 6v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8H3zm2 2h14v10H5V10z",
    eye:      "M12 5C5.636 5 2 12 2 12s3.636 7 10 7 10-7 10-7-3.636-7-10-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    archive:  "M4 3h16l2 4v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7l2-4zm0 4v12h16V7H4zm2 2h12v2H6V9zm0 4h12v2H6v-2z",
  };

  function makeBadge(iconKey, compact, full) {
    const el = document.createElement("div");
    el.className = "tm-badge";
    const compactSpan = document.createElement("span");
    compactSpan.textContent = compact;
    const fullSpan = document.createElement("span");
    fullSpan.className = "tm-badge-full";
    fullSpan.textContent = full;
    el.appendChild(makeIcon(ICONS[iconKey]));
    el.appendChild(compactSpan);
    el.appendChild(fullSpan);
    let open = false;
    el.addEventListener("click", e => {
      e.stopPropagation();
      open = !open;
      el.classList.toggle("tm-expanded", open);
      compactSpan.style.display = open ? "none" : "";
      fullSpan.style.display = open ? "inline" : "";
    });
    return el;
  }

  function makeArchiveLink() {
    const a = document.createElement("a");
    a.className = "tm-link";
    a.href = `https://web.archive.org/web/*/${location.href}`;
    a.target = "_blank";
    a.rel = "noopener";
    a.appendChild(makeIcon(ICONS.archive));
    const span = document.createElement("span");
    span.textContent = "Archive";
    a.appendChild(span);
    return a;
  }

  function getBootstrapObject() {
    if (window.__capturedBootstrap?.object) return window.__capturedBootstrap.object;
    for (const s of document.scripts) {
      if (!s.textContent?.includes("options.bootstrap")) continue;
      try {
        const m = s.textContent.match(/options\.bootstrap\s*=\s*({[\s\S]*?});/);
        if (m) return Function(`"use strict"; return (${m[1]});`)()?.object ?? null;
      } catch {}
    }
    return null;
  }

  function getFullBootstrap() {
    if (window.__capturedBootstrap) return window.__capturedBootstrap;
    for (const s of document.scripts) {
      if (!s.textContent?.includes("options.bootstrap")) continue;
      try {
        const m = s.textContent.match(/options\.bootstrap\s*=\s*(\{[\s\S]+?\});\s*options\.breadcrumb/);
        if (m) return JSON.parse(m[1]);
      } catch {}
    }
    return null;
  }

  function getSelfId() {
    const bs = window.__capturedBootstrap ?? getFullBootstrap();
    if (!bs) return null;
    if (bs.current_user?.id) return bs.current_user.id;
    if (bs.object?.is_me === true && bs.object?.id) return bs.object.id;
    return null;
  }

  function injectProfileInfo() {
    const span = document.querySelector("div._2IqY6 span._20K92");
    if (!span || span.dataset.enhanced) return false;
    const data = getBootstrapObject();
    if (!data?.created || !data?.last_ping) return false;
    span.dataset.enhanced = "1";
    span.innerHTML = "";
    const row = document.createElement("div");
    row.className = "tm-info-row";
    row.appendChild(makeBadge("calendar", relativeTime(data.created),  verboseTime(data.created,  "Created @ ")));
    row.appendChild(makeBadge("eye",      relativeTime(data.last_ping), verboseTime(data.last_ping, "Last seen @ ")));
    row.appendChild(makeArchiveLink());
    span.appendChild(row);
    return true;
  }

  function injectLevel() {
    const data = getBootstrapObject();
    if (typeof data?.level !== "number") return false;
    const box = document.querySelector("div._2IqY6");
    if (!box) return false;
    const h1 = box.querySelector("h1");
    if (!h1 || box.querySelector(".tm-level")) return false;
    const el = document.createElement("div");
    el.className = "tm-level";
    el.textContent = "Level " + data.level;
    h1.insertAdjacentElement("afterend", el);
    return true;
  }

  function runProfileEnhancements() {
    const done = () => injectProfileInfo() && injectLevel();
    if (done()) return;
    const obs = new MutationObserver(() => { if (done()) obs.disconnect(); });
    obs.observe(document.body, { childList: true, subtree: true });
    setTimeout(() => obs.disconnect(), 8000);
  }

  function obfuscateDots() {
    const WHITELIST = ["youtube.com", "youtu.be", "fonts.googleapis.com"];
    const URL_RE = /\bhttps?:\/\/(?:www\.)?([\w.-]+\.[a-z]{2,})(?:\/[^\s]*)?/gi;
    const isInput = el => el && (
      el.tagName === "TEXTAREA" ||
      (el.tagName === "INPUT" && ["text","search","url","email","tel","password"].includes(el.type))
    );
    const isWhitelisted = d => WHITELIST.some(w => d === w || d.endsWith("." + w));
    const obfuscate = text => text.replace(URL_RE, (match, domain) =>
      isWhitelisted(domain) ? match : match.replace(/\./g, "%2E")
    );
    const process = el => {
      const { selectionStart: s, selectionEnd: e } = el;
      const next = obfuscate(el.value);
      if (next === el.value) return;
      el.value = next;
      el.setSelectionRange(s, e);
    };
    document.addEventListener("input", e => {
      if (!isInput(e.target)) return;
      if (e.inputType && !e.inputType.startsWith("insert")) return;
      process(e.target);
    }, true);
    document.addEventListener("paste", e => {
      if (!isInput(e.target)) return;
      e.preventDefault();
      const text = (e.clipboardData ?? window.clipboardData).getData("text");
      document.execCommand("insertText", false, obfuscate(text));
    }, true);
  }


  const XHRInterceptor = (() => {
    const _open = XMLHttpRequest.prototype.open;
    const _send = XMLHttpRequest.prototype.send;
    const _fetch = window.fetch;

    const PULSE_RE = /^\/user\/\d+\/pulse\/?$/;
    const LDB_RE   = /(^|https?:\/\/(?:www\.)?kogama\.com\/)(api\/leaderboard\/around_me\/)([\d]+)(\/top\/?)(.*)$/i;
    const PROF_RE  = /^\/profile\/(\d+)\/leaderboard(\/|$)/i;

    let sessionOverride = "";
    let installed = false;

    function matchesPulse(resource) {
      try {
        const raw = resource instanceof Request ? resource.url : String(resource);
        return PULSE_RE.test(new URL(raw, location.href).pathname);
      } catch { return false; }
    }

    function getLeaderboardUid() {
      const m = location.pathname.match(PROF_RE);
      return m ? m[1] : null;
    }

    function rewriteLdb(urlStr) {
      try {
        const abs = new URL(String(urlStr), location.href).toString();
        const parts = abs.match(LDB_RE);
        const uid = getLeaderboardUid();
        if (!parts || !uid) return abs;
        const prefix = parts[1].startsWith("/") ? location.origin + "/" : parts[1];
        return prefix + parts[2] + uid + parts[4] + (parts[5] || "");
      } catch { return String(urlStr); }
    }

    function install() {
      if (installed) return;

      XMLHttpRequest.prototype.open = function (method, url) {
        this.__bs_method = (method || "").toUpperCase();
        this.__bs_url    = typeof url === "string" ? url : null;
        this.__bs_rurl   = this.__bs_url ? rewriteLdb(this.__bs_url) : this.__bs_url;
        return _open.call(this, method, this.__bs_rurl ?? url, ...Array.from(arguments).slice(2));
      };

      XMLHttpRequest.prototype.send = function (body) {
        if (this.__bs_method === "POST" && this.__bs_url) {
          try {
            if (PULSE_RE.test(new URL(this.__bs_url, location.href).pathname)) {
              this.abort?.();
              return;
            }
          } catch {}
          if (sessionOverride && this.__bs_url.includes("/locator/session/")) {
            try {
              const d = JSON.parse(body);
              if (d?.sessionID) { d.sessionID = sessionOverride; body = JSON.stringify(d); }
            } catch {}
          }
        }
        return _send.call(this, body);
      };

      window.fetch = async function (resource, init) {
        const method = (init?.method || (resource instanceof Request ? resource.method : "GET")).toUpperCase();
        if (method === "POST" && matchesPulse(resource)) {
          return Promise.resolve(new Response(null, { status: 204 }));
        }
        try {
          const urlStr = resource instanceof Request ? resource.url : String(resource);
          const rewritten = rewriteLdb(urlStr);
          if (rewritten !== urlStr) {
            if (resource instanceof Request) {
              const init2 = {
                method: resource.method, headers: resource.headers,
                mode: resource.mode, credentials: resource.credentials,
                cache: resource.cache, redirect: resource.redirect,
                referrer: resource.referrer, referrerPolicy: resource.referrerPolicy,
                integrity: resource.integrity, keepalive: resource.keepalive,
                signal: resource.signal,
              };
              try {
                const buf = await resource.clone().arrayBuffer();
                if (buf.byteLength) init2.body = buf;
              } catch {}
              return _fetch.call(window, new Request(rewritten, init2));
            }
            return _fetch.call(window, rewritten, init);
          }
        } catch {}
        return _fetch.call(window, resource, init);
      };

      window.__bs_origFetch = _fetch;
      installed = true;
    }

    function uninstall() {
      if (!installed) return;
      XMLHttpRequest.prototype.open  = _open;
      XMLHttpRequest.prototype.send  = _send;
      window.fetch = _fetch;
      installed = false;
    }

    function arm() {
      install();
      window.addEventListener("pageshow", e => { if (e.persisted) install(); });
    }

    function setSessionOverride(sid) { sessionOverride = sid; }

    function applyLdbHighlight() {
      const uid = getLeaderboardUid();
      if (!uid) return;
      document.querySelectorAll("tr._13LmU").forEach(tr => {
        if (tr.id !== uid + "Row") tr.classList.remove("_13LmU");
      });
      const tr = document.getElementById(uid + "Row");
      if (tr) tr.classList.add("_13LmU");
    }

    function armLdb() {
      const _push    = history.pushState;
      const _replace = history.replaceState;
      history.pushState    = function (...a) { const r = _push.apply(this, a);    window.dispatchEvent(new Event("locationchange")); return r; };
      history.replaceState = function (...a) { const r = _replace.apply(this, a); window.dispatchEvent(new Event("locationchange")); return r; };
      window.addEventListener("popstate", () => window.dispatchEvent(new Event("locationchange")));
      window.addEventListener("locationchange", () => setTimeout(applyLdbHighlight, 50));
      applyLdbHighlight();
      new MutationObserver(applyLdbHighlight).observe(document.documentElement, { childList: true, subtree: true });
    }

    return { arm, install, uninstall, setSessionOverride, armLdb };
  })();

  const PulseBlocker = {
    arm:       () => XHRInterceptor.arm(),
    install:   () => XHRInterceptor.install(),
    uninstall: () => XHRInterceptor.uninstall(),
  };


  const FeedManager = (() => {
    let overlay, panel, content;
    let userId = null;
    let feedData = [];
    let loading = false;
    let page = 1;
    let hasMore = true;

    function esc(text) {
      const d = document.createElement("div");
      d.textContent = text ?? "";
      return d.innerHTML;
    }

    function timeAgo(dateStr) {
      if (!dateStr) return "";
      const s = Math.floor((Date.now() - new Date(dateStr)) / 1000);
      if (s < 60) return "just now";
      for (const [v, u] of [[31536000,"y"],[2592000,"mo"],[86400,"d"],[3600,"h"],[60,"m"]]) {
        if (s >= v) return `${Math.floor(s / v)}${u} ago`;
      }
      return "just now";
    }

    function parseFeedText(item) {
      let data = {};
      try {
        data = typeof item._data === "string" ? JSON.parse(item._data) : (item.data ?? {});
      } catch {}
      const msg = data.status_message ?? data.message ?? item.message ?? "";
      const type = item.feed_type ?? "status";
      return { msg, type };
    }

    function buildCommentRow(feedId, comment) {
      const row = document.createElement("div");
      row.className = "bs-comment";
      row.dataset.commentId = comment.id;

      let text = "";
      try {
        const d = typeof comment._data === "string" ? JSON.parse(comment._data) : {};
        text = d.data ?? d.message ?? comment.message ?? "";
      } catch { text = comment.message ?? ""; }

      const body = document.createElement("div");
      body.className = "bs-comment-body";
      body.innerHTML = `<div class="bs-comment-author">${esc(comment.profile_username ?? "unknown")}</div>${esc(text)}`;

      const del = document.createElement("button");
      del.className = "bs-comment-del";
      del.textContent = "×";
      del.title = "Delete comment";
      del.addEventListener("click", async () => {
        del.disabled = true;
        try {
          await fetch(`${origin()}/api/feed/${feedId}/comment/${comment.id}/`, {
            method: "DELETE", credentials: "include"
          });
          row.style.opacity = "0";
          row.style.transition = "opacity 0.2s";
          setTimeout(() => row.remove(), 200);
        } catch { del.disabled = false; }
      });

      row.appendChild(body);
      row.appendChild(del);
      return row;
    }

    function buildCommentCompose(feedId, commentsSection) {
      const wrap = document.createElement("div");
      wrap.className = "bs-comment-compose";

      const input = document.createElement("input");
      input.className = "bs-comment-input";
      input.type = "text";
      input.placeholder = "Write a comment...";
      input.maxLength = 500;

      const btn = document.createElement("button");
      btn.className = "bs-feed-btn";
      btn.textContent = "Post";

      const submit = async () => {
        const val = input.value.trim();
        if (!val) return;
        btn.disabled = true;
        input.disabled = true;
        try {
          const res = await fetch(`${origin()}/api/feed/${feedId}/comment/`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ comment: val }),
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data = await res.json();
          const newComment = data?.data ?? { id: Date.now(), profile_username: "you", message: val, _data: JSON.stringify({ data: val }) };
          commentsSection.insertBefore(buildCommentRow(feedId, newComment), wrap);
          input.value = "";
        } catch {}
        btn.disabled = false;
        input.disabled = false;
        input.focus();
      };

      input.addEventListener("keydown", e => { if (e.key === "Enter") submit(); });
      btn.addEventListener("click", submit);

      wrap.appendChild(input);
      wrap.appendChild(btn);
      return wrap;
    }

    async function toggleComments(feedId, btn, commentsSection) {
      const open = commentsSection.classList.toggle("open");
      btn.textContent = open ? "Hide comments" : "Comments";
      if (!open || commentsSection.dataset.loaded) return;

      commentsSection.innerHTML = `<div class="bs-loading">loading...</div>`;
      try {
        const res = await fetch(`${origin()}/api/feed/${feedId}/comment/?count=50`, {
          credentials: "include"
        });
        const data = await res.json();
        const comments = Array.isArray(data?.data) ? data.data : [];
        commentsSection.innerHTML = "";
        if (comments.length === 0) {
          commentsSection.innerHTML = `<div style="font-size:11px;color:rgba(201,72,56,0.3);padding:6px 0;">no comments yet</div>`;
        } else {
          comments.forEach(c => commentsSection.appendChild(buildCommentRow(feedId, c)));
        }
        commentsSection.appendChild(buildCommentCompose(feedId, commentsSection));
        commentsSection.dataset.loaded = "1";
      } catch {
        commentsSection.innerHTML = `<div class="bs-loading">failed to load</div>`;
      }
    }

    function buildFeedItem(item) {
      const { msg, type } = parseFeedText(item);
      const div = document.createElement("div");
      div.className = "bs-feed-item";
      div.dataset.feedId = item.id;

      div.innerHTML = `
        <div class="bs-feed-meta">
          <span class="bs-feed-date">${timeAgo(item.created)}</span>
          <span class="bs-feed-type">${esc(type.replace(/_/g," "))}</span>
        </div>
        <div class="bs-feed-text">${esc(msg) || `<span style="opacity:0.3">no content</span>`}</div>
        <div class="bs-feed-actions"></div>
        <div class="bs-comments"></div>
      `;

      const actions = div.querySelector(".bs-feed-actions");
      const commentsSection = div.querySelector(".bs-comments");

      const commentBtn = document.createElement("button");
      commentBtn.className = "bs-feed-btn";
      commentBtn.textContent = "Comments";
      commentBtn.addEventListener("click", () => toggleComments(item.id, commentBtn, commentsSection));

      const delBtn = document.createElement("button");
      delBtn.className = "bs-feed-btn del";
      delBtn.textContent = "Delete";
      delBtn.addEventListener("click", async () => {
        if (!confirm("Delete this post?")) return;
        delBtn.disabled = true;
        try {
          await fetch(`${origin()}/api/feed/${userId}/${item.id}/`, {
            method: "DELETE", credentials: "include"
          });
          div.style.opacity = "0";
          div.style.transition = "opacity 0.2s";
          setTimeout(() => {
            div.remove();
            feedData = feedData.filter(f => f.id !== item.id);
            if (!content.querySelector(".bs-feed-item")) {
              content.innerHTML = `<div class="bs-empty">no posts</div>`;
            }
          }, 200);
        } catch { delBtn.disabled = false; }
      });

      actions.appendChild(commentBtn);
      actions.appendChild(delBtn);
      return div;
    }

    async function loadFeed(reset = false) {
      if (loading || (!hasMore && !reset)) return;
      if (reset) { feedData = []; page = 1; hasMore = true; content.innerHTML = `<div class="bs-loading">loading...</div>`; }
      loading = true;

      try {
        const res = await fetch(`${origin()}/api/feed/${userId}/?page=${page}&count=20`, {
          credentials: "omit",
          headers: { "Accept": "application/json" },
          cache: "no-store"
        });
        if (!res.ok) throw new Error();
        const data = await res.json();
        const items = Array.isArray(data) ? data
          : (Array.isArray(data?.feed) ? data.feed
          : (Array.isArray(data?.data) ? data.data : []));

        if (reset) content.innerHTML = "";

        if (items.length === 0) {
          hasMore = false;
          if (reset) content.innerHTML = `<div class="bs-empty">no posts found</div>`;
        } else {
          feedData.push(...items);
          items.forEach(item => content.appendChild(buildFeedItem(item)));
          page++;
        }
      } catch {
        if (reset) content.innerHTML = `<div class="bs-empty">failed to load feed</div>`;
      }
      loading = false;
    }

    async function deleteAll() {
      if (!confirm(`Delete all ${feedData.length} posts? This cannot be undone.`)) return;
      const btn = document.getElementById("bs-feed-deleteall");
      if (btn) { btn.disabled = true; btn.textContent = "deleting..."; }
      let i = 0;
      for (const item of [...feedData]) {
        try {
          await fetch(`${origin()}/api/feed/${userId}/${item.id}/`, {
            method: "DELETE", credentials: "include"
          });
          i++;
          if (btn) btn.textContent = `${i}/${feedData.length}`;
          await new Promise(r => setTimeout(r, 400));
        } catch {}
      }
      feedData = [];
      content.innerHTML = `<div class="bs-empty">all posts deleted</div>`;
      if (btn) { btn.disabled = false; btn.textContent = "delete all"; }
    }

    function buildPanel() {
      overlay = document.createElement("div");
      overlay.id = "bs-feed-overlay";
      overlay.addEventListener("click", e => { if (e.target === overlay) close(); });

      panel = document.createElement("div");
      panel.id = "bs-feed-panel";

      const header = document.createElement("div");
      header.id = "bs-feed-header";

      const title = document.createElement("div");
      title.id = "bs-feed-title";
      title.textContent = "Feed Manager";

      const btnRow = document.createElement("div");
      btnRow.style.cssText = "display:flex;gap:7px;";

      const delAllBtn = document.createElement("button");
      delAllBtn.id = "bs-feed-deleteall";
      delAllBtn.className = "bs-feed-hbtn danger";
      delAllBtn.textContent = "delete all";
      delAllBtn.addEventListener("click", deleteAll);

      const closeBtn = document.createElement("button");
      closeBtn.className = "bs-feed-hbtn";
      closeBtn.textContent = "×";
      closeBtn.style.padding = "6px 12px";
      closeBtn.addEventListener("click", close);

      btnRow.appendChild(delAllBtn);
      btnRow.appendChild(closeBtn);
      header.appendChild(title);
      header.appendChild(btnRow);

      content = document.createElement("div");
      content.id = "bs-feed-content";

      const sentinel = document.createElement("div");
      sentinel.style.height = "1px";
      content.appendChild(sentinel);

      new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore && !loading) loadFeed();
      }).observe(sentinel);

      panel.appendChild(header);
      panel.appendChild(content);
      overlay.appendChild(panel);
      document.body.appendChild(overlay);
    }

    function open() {
      if (!overlay) buildPanel();
      overlay.classList.add("open");
      loadFeed(true);
    }

    function close() {
      overlay?.classList.remove("open");
    }

    function injectCardButton(uid) {
      userId = uid;
      const tryInject = () => {
        const container = document.querySelector(".CgH1-");
        if (!container || container.querySelector(".bs-feed-card")) return false;

        const card = document.createElement("div");
        card.className = "MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root _2Hovk bs-feed-card css-wog98n";

        const inner = document.createElement("div");
        inner.className = "MuiCardContent-root _1l7RM css-15q2cw4";
        inner.innerHTML = `<div class="_2fSqj">Feed</div>`;

        card.appendChild(inner);
        card.addEventListener("click", open);

        const ref = container.firstChild ?? null;
        if (ref && ref.parentNode !== container) return false;
        try { container.insertBefore(card, ref); } catch { try { container.appendChild(card); } catch {} }
        return true;
      };

      if (tryInject()) return;
      const obs = new MutationObserver(() => { if (tryInject()) obs.disconnect(); });
      obs.observe(document.body, { childList: true, subtree: true });
    }

    return { injectCardButton };
  })();


  const FriendActivity = (() => {
    const gameCache = {};
    const projectCache = {};
    let profileId = null;
    let pollTimer = null;
    let listObserver = null;
    let watchRetryTimer = null;

    function resolveOwnId() {
      const bs = window.__capturedBootstrap;
      if (bs?.current_user?.id) return bs.current_user.id;
      const ku = window.kogama?.current_user ?? window.kogama?.bootstrap?.current_user;
      if (ku?.id) return ku.id;
      for (const s of document.scripts) {
        const t = s.textContent;
        if (!t?.includes('"current_user"')) continue;
        try {
          const m = t.match(/"current_user"\s*:\s*(\{[\s\S]+?"object_type_id"\s*:\s*\d+\s*\})/);
          if (m) {
            const cu = JSON.parse(m[1]);
            if (cu?.id) return cu.id;
          }
        } catch {}
      }
      return null;
    }

    async function fetchGameTitle(gid) {
      if (gameCache[gid]) return gameCache[gid];
      try {
        const res = await fetch(`${origin()}/games/play/${gid}/`, { credentials: "include" });
        if (!res.ok) return null;
        const html = await res.text();
        const doc = new DOMParser().parseFromString(html, "text/html");
        const raw = doc.querySelector("title")?.textContent ?? "";
        const title = raw.split(" - KoGaMa")[0].trim() || null;
        if (title) gameCache[gid] = title;
        return title;
      } catch { return null; }
    }

    async function fetchProjectName(pid) {
      if (projectCache[pid]) return projectCache[pid];
      try {
        const res = await fetch(`${origin()}/game/${pid}/member`, { credentials: "include" });
        if (!res.ok) return null;
        const data = await res.json();
        const name = data?.name ?? data?.data?.[0]?.name ?? null;
        if (name) projectCache[pid] = name;
        return name;
      } catch { return null; }
    }

    const stampStatus = debounce((username, text) => {
      document.querySelectorAll("._1taAL").forEach(el => {
        const nameEl   = el.querySelector("._3zDi-");
        const statusEl = el.querySelector("._40qZj");
        if (nameEl?.textContent?.trim() === username && statusEl) {
          statusEl.textContent = text;
        }
      });
    }, 80);

    function resolveLocation(username, loc) {
      if (!loc || loc === "/") return;
      const gameMatch = loc.match(/\/games\/play\/(\d+)\//);
      if (gameMatch) {
        fetchGameTitle(gameMatch[1]).then(t => t && stampStatus(username, t));
        return;
      }
      const projMatch =
        loc.match(/\/build\/\d+\/project\/(\d+)\//) ??
        loc.match(/\/game\/(\d+)\/member/);
      if (projMatch) {
        fetchProjectName(projMatch[1]).then(n => n && stampStatus(username, n));
      }
    }

    async function poll() {
      if (!profileId) return;
      try {
        const res = await fetch(`${origin()}/user/${profileId}/friend/chat/`, {
          credentials: "include"
        });
        if (!res.ok) return;
        const data = await res.json();
        (data?.data ?? []).forEach(f => resolveLocation(f.username, f.location ?? "/"));
      } catch {}
    }

    function processEntry(node) {
      if (node.nodeType !== 1) return;
      const nameEl   = node.querySelector("._3zDi-");
      const statusEl = node.querySelector("._40qZj");
      if (!nameEl) return;
      const loc =
        statusEl?.textContent?.trim() ||
        node.querySelector("a[href]")?.getAttribute("href") ||
        null;
      resolveLocation(nameEl.textContent.trim(), loc);
    }

    function watchList() {
      clearTimeout(watchRetryTimer);
      const target = document.querySelector("._1Yhgq, ._3Wytz");
      if (!target) {
        watchRetryTimer = setTimeout(watchList, 1200);
        return;
      }
      target.querySelectorAll("._1lvYU, ._1taAL").forEach(processEntry);
      if (listObserver) listObserver.disconnect();
      listObserver = new MutationObserver(muts => {
        for (const m of muts) m.addedNodes.forEach(processEntry);
      });
      listObserver.observe(target, { childList: true, subtree: true });
    }

    function start() {
      const tryStart = (attempts = 0) => {
        const uid = resolveOwnId();
        if (!uid) {
          if (attempts < 10) setTimeout(() => tryStart(attempts + 1), 300);
          return;
        }
        if (pollTimer) return;
        profileId = uid;
        poll();
        pollTimer = setInterval(poll, 15000);
        watchList();
      };
      tryStart();
    }

    return { start };
  })();


  const FriendButton = (() => {
    const SVG_ADD  = "M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z";
    const SVG_SENT = "M336 288h-16v-16C320 238.4 289.6 208 252 208H76C38.4 208 8 238.4 8 276v16H0v16c0 44.2 35.8 80 80 80h192c44.2 0 80-35.8 80-80v-16h-16zm-48 16c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48v-28c0-15.5 12.5-28 28-28H308c8.3 0 16 3.7 21.3 9.5 4.2 4.7 6.7 10.8 6.7 17.5v29zm176-240c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128S534.7 64 464 64zm64 144h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V128c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16z";

    function makeSvg(d) {
      const ns = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(ns, "svg");
      svg.setAttribute("viewBox", "0 0 640 512");
      svg.setAttribute("aria-hidden", "true");
      const path = document.createElementNS(ns, "path");
      path.setAttribute("d", d);
      svg.appendChild(path);
      return svg;
    }

    function spawnRipple(btn, evt) {
      const rect = btn.getBoundingClientRect();
      const spot = document.createElement("span");
      spot.className = "bs-fb-ripple";
      spot.style.left = (evt.clientX - rect.left) + "px";
      spot.style.top  = (evt.clientY - rect.top) + "px";
      btn.appendChild(spot);
      spot.addEventListener("animationend", () => spot.remove(), { once: true });
    }

    function buildButton(selfId, pid) {
      let state = "idle";

      const wrap = document.createElement("div");
      wrap.className = "bs-friend-wrap";
      wrap.dataset.bsFriend = "1";

      const btn = document.createElement("button");
      btn.className = "bs-friend-btn";
      btn.type = "button";

      const icon = makeSvg(SVG_ADD);
      const label = document.createElement("span");
      label.textContent = "Add Friend";

      btn.appendChild(icon);
      btn.appendChild(label);
      wrap.appendChild(btn);

      function syncUI() {
        if (state === "busy") {
          btn.disabled = true;
          btn.classList.remove("bs-sent");
          btn.classList.add("bs-busy");
          return;
        }
        btn.disabled = false;
        btn.classList.remove("bs-busy");
        if (state === "sent") {
          btn.classList.add("bs-sent");
          icon.querySelector("path").setAttribute("d", SVG_SENT);
          label.textContent = "Request Sent";
          btn.title = "Click to cancel";
          return;
        }
        btn.classList.remove("bs-sent");
        icon.querySelector("path").setAttribute("d", SVG_ADD);
        label.textContent = "Add Friend";
        btn.title = "";
      }

      btn.addEventListener("click", async evt => {
        if (state === "busy") return;
        spawnRipple(btn, evt);
        const wasIdle = state === "idle";
        state = "busy";
        syncUI();
        try {
          const res = await fetch(`${origin()}/user/${selfId}/friend/`, {
            method: wasIdle ? "POST" : "DELETE",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id: pid }),
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          state = wasIdle ? "sent" : "idle";
        } catch {
          state = wasIdle ? "idle" : "sent";
        }
        syncUI();
      });

      return wrap;
    }

    function tryInject(container, wrap) {
      if (!container || !document.contains(container)) return false;
      if (container.querySelector("[data-bs-friend]")) return true;
      const ref = container.children[1] ?? null;
      try {
        if (ref) container.insertBefore(wrap, ref);
        else container.appendChild(wrap);
      } catch {
        try { container.appendChild(wrap); } catch { return false; }
      }
      return true;
    }

    function start() {
      if (!/^\/profile\/\d+\/$/.test(location.pathname)) return;

      const bs = getFullBootstrap();
      if (!bs) return;

      const profileObj  = bs.object;
      const currentUser = bs.current_user;
      if (!profileObj || !currentUser) return;

      const friendStatus = bs.friend?.friend_status ?? null;
      if (profileObj.is_me === true || bs.is_friend === true || friendStatus === "pending") return;

      const wrap = buildButton(currentUser.id, profileObj.id);
      const CONTAINER_SEL = "._1Noq6";

      function attemptInject() {
        return tryInject(document.querySelector(CONTAINER_SEL), wrap);
      }

      let obs = null;

      setTimeout(() => {
        if (attemptInject()) return;
        obs = new MutationObserver(() => { if (attemptInject()) obs.disconnect(); });
        obs.observe(document.body, { childList: true, subtree: true });
        setTimeout(() => obs?.disconnect(), 12000);
      }, 600);

      new MutationObserver(() => {
        if (document.contains(wrap)) return;
        tryInject(document.querySelector(CONTAINER_SEL), wrap);
      }).observe(document.body, { childList: true, subtree: true });
    }

    return { start };
  })();


  const ChipDisplay = (() => {
    const GAME_RE = /^\/games\/play\/\d+\//;
    let attached = false;
    let chipObs = null;

    async function fetchCounts() {
      try {
        const res = await fetch(location.href);
        const html = await res.text();
        const m = html.match(/playing_now_members["']\s*:\s*(\d+).*?playing_now_tourists["']\s*:\s*(\d+)/s);
        return m ? { members: +m[1], tourists: +m[2] } : { members: 0, tourists: 0 };
      } catch { return { members: 0, tourists: 0 }; }
    }

    function buildChip(counts) {
      document.getElementById("bs-chip")?.remove();

      const chip = document.createElement("div");
      chip.id = "bs-chip";

      const dot = document.createElement("span");
      dot.className = "cd-dot";

      const total = document.createElement("span");
      total.className = "cd-val";
      total.textContent = counts.members + counts.tourists;
      total.dataset.tip = "Total Players";

      const sep1 = document.createElement("span");
      sep1.className = "cd-sep";
      sep1.textContent = "|";

      const members = document.createElement("span");
      members.className = "cd-val";
      members.textContent = counts.members;
      members.dataset.tip = "Members";

      const plus = document.createElement("span");
      plus.className = "cd-dim";
      plus.textContent = "+";

      const tourists = document.createElement("span");
      tourists.className = "cd-val";
      tourists.textContent = counts.tourists;
      tourists.dataset.tip = "Tourists";

      chip.appendChild(dot);
      chip.appendChild(total);
      chip.appendChild(sep1);
      chip.appendChild(members);
      chip.appendChild(plus);
      chip.appendChild(tourists);

      return chip;
    }

    function tryMount() {
      if (attached) return true;
      const anchor = document.querySelector(".MuiStack-root._2-zAt");
      if (!anchor) return false;

      fetchCounts().then(counts => {
        if (!document.contains(anchor)) return;
        const chip = buildChip(counts);
        const wrapper = document.createElement("div");
        wrapper.id = "bs-chip-wrap";
        wrapper.dataset.bsChip = "1";
        wrapper.appendChild(chip);
        anchor.parentElement.insertBefore(wrapper, anchor);
        attached = true;
      });
      return true;
    }

    function start() {
      if (!GAME_RE.test(location.pathname)) return;
      if (tryMount()) return;
      chipObs = new MutationObserver(() => {
        if (!tryMount()) return;
        chipObs?.disconnect();
        chipObs = null;
      });
      chipObs.observe(document.body, { childList: true, subtree: true });

      new MutationObserver(() => {
        if (document.getElementById("bs-chip-wrap")) return;
        attached = false;
        tryMount();
      }).observe(document.body, { childList: true, subtree: true });
    }

    return { start };
  })();


  const FasterFriend = (() => {
    const PAGE_RE = /^\/profile\/(\d+)\/friends\/?/;

    function alphaSort(a, b) {
      const sa = String(a || "").toLowerCase();
      const sb = String(b || "").toLowerCase();
      const al = /^[a-z]/.test(sa);
      const bl = /^[a-z]/.test(sb);
      if (al && !bl) return -1;
      if (!al && bl) return 1;
      return sa.localeCompare(sb, undefined, { sensitivity: "base" });
    }

    async function fetchJSON(url) {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 12000);
      try {
        const res = await fetch(url, { credentials: "include", signal: ctrl.signal });
        clearTimeout(t);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      } finally {
        clearTimeout(t);
      }
    }

    function makeSectionEl(label) {
      const sec = document.createElement("div");
      sec.className = "ff-section";
      const h = document.createElement("h3");
      h.textContent = label;
      sec.appendChild(h);
      return sec;
    }

    function renderEntries(sec, items) {
      sec.querySelectorAll(".ff-entry, .ff-empty, .ff-loading").forEach(n => n.remove());

      if (items.length === 0) {
        const n = document.createElement("div");
        n.className = "ff-empty";
        n.textContent = "none";
        sec.appendChild(n);
        return;
      }

      items.sort((a, b) => alphaSort(a.name, b.name)).forEach((it, i) => {
        const span = document.createElement("span");
        span.className = "ff-entry";
        span.dataset.name = it.name.toLowerCase();

        const a = document.createElement("a");
        a.href = it.href;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = it.name;
        span.appendChild(a);

        if (i < items.length - 1) {
          const sep = document.createElement("span");
          sep.className = "ff-sep";
          sep.textContent = ",";
          span.appendChild(sep);
        }

        sec.appendChild(span);
      });
    }

    function setLoading(sec) {
      sec.querySelectorAll(".ff-entry, .ff-empty, .ff-loading").forEach(n => n.remove());
      const d = document.createElement("div");
      d.className = "ff-loading";
      d.textContent = "loading...";
      sec.appendChild(d);
    }

    function errNote(sec) {
      sec.querySelectorAll(".ff-loading").forEach(n => n.remove());
      const d = document.createElement("div");
      d.className = "ff-empty";
      d.textContent = "failed to load";
      sec.appendChild(d);
    }

    function filterSections(query) {
      document.querySelectorAll(".ff-entry").forEach(span => {
        span.style.display = (!query || span.dataset.name.includes(query)) ? "" : "none";
      });
    }

    function setupDrag(panel, header) {
      let drag = null;

      const fix = () => {
        const r = panel.getBoundingClientRect();
        panel.style.left = r.left + "px";
        panel.style.top  = r.top  + "px";
        panel.style.transform = "";
      };

      header.addEventListener("mousedown", e => {
        if (e.target.closest(".ff-hbtn")) return;
        fix();
        header.classList.add("dragging");
        drag = { ox: e.clientX - parseFloat(panel.style.left), oy: e.clientY - parseFloat(panel.style.top) };
        panel.style.transition = "none";

        const move = e2 => {
          const x = Math.min(Math.max(8, e2.clientX - drag.ox), window.innerWidth  - panel.offsetWidth  - 8);
          const y = Math.min(Math.max(8, e2.clientY - drag.oy), window.innerHeight - panel.offsetHeight - 8);
          panel.style.left = x + "px";
          panel.style.top  = y + "px";
        };
        const up = () => {
          drag = null;
          header.classList.remove("dragging");
          panel.style.transition = "";
          document.removeEventListener("mousemove", move);
          document.removeEventListener("mouseup", up);
        };
        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", up);
      });
    }

    function buildPanel(isOwn) {
      document.getElementById("ff-panel")?.remove();
      document.getElementById("ff-pill")?.remove();

      const panel = document.createElement("div");
      panel.id = "ff-panel";

      const header = document.createElement("div");
      header.id = "ff-header";

      const title = document.createElement("div");
      title.id = "ff-title";
      title.textContent = isOwn ? "Friends & Requests" : "Friends Overview";

      const hrow = document.createElement("div");
      hrow.id = "ff-hrow";

      const search = document.createElement("input");
      search.id = "ff-search";
      search.type = "search";
      search.placeholder = "Search...";
      search.addEventListener("input", () => filterSections(search.value.trim().toLowerCase()));

      const closeBtn = document.createElement("button");
      closeBtn.className = "ff-hbtn";
      closeBtn.textContent = "×";

      hrow.appendChild(search);
      hrow.appendChild(closeBtn);
      header.appendChild(title);
      header.appendChild(hrow);

      const body = document.createElement("div");
      body.id = "ff-body";
      if (!isOwn) body.classList.add("ff-two");

      const friendsSec = makeSectionEl("Friends");
      body.appendChild(friendsSec);
      setLoading(friendsSec);

      let sentSec, requestsSec, mutualSec;

      if (isOwn) {
        sentSec = makeSectionEl("Sent");
        requestsSec = makeSectionEl("Incoming");
        body.appendChild(sentSec);
        body.appendChild(requestsSec);
        setLoading(sentSec);
        setLoading(requestsSec);
      } else {
        mutualSec = makeSectionEl("Mutual Friends");
        body.appendChild(mutualSec);
        setLoading(mutualSec);
      }

      panel.appendChild(header);
      panel.appendChild(body);
      document.body.appendChild(panel);

      const pill = document.createElement("button");
      pill.id = "ff-pill";
      pill.textContent = "Friends Panel";
      document.body.appendChild(pill);

      const hide = () => { panel.style.display = "none"; pill.style.display = "block"; };
      const show = () => { panel.style.display = ""; pill.style.display = "none"; };

      closeBtn.addEventListener("click", hide);
      pill.addEventListener("click", show);
      document.addEventListener("keydown", e => {
        if (e.key !== "Escape") return;
        panel.style.display === "none" ? show() : hide();
      });

      setupDrag(panel, header);

      return { friendsSec, sentSec, requestsSec, mutualSec };
    }

    async function fetchFriends(uid) {
      const data = await fetchJSON(`${origin()}/user/${uid}/friend/?count=555`);
      return (Array.isArray(data.data) ? data.data : [])
        .filter(f => f.friend_status === "accepted")
        .map(f => ({ name: f.friend_username || String(f.friend_profile_id), href: `${origin()}/profile/${f.friend_profile_id}/` }));
    }

    async function fetchRequests(uid) {
      const data = await fetchJSON(`${origin()}/user/${uid}/friend/requests/?page=1&count=1000`);
      const arr = Array.isArray(data.data) ? data.data : [];
      const sent = arr
        .filter(r => String(r.profile_id) === String(uid))
        .map(r => ({ name: r.friend_username || String(r.friend_profile_id), href: `${origin()}/profile/${r.friend_profile_id}/` }));
      const incoming = arr
        .filter(r => String(r.profile_id) !== String(uid))
        .map(r => ({ name: r.profile_username || String(r.profile_id), href: `${origin()}/profile/${r.profile_id}/` }));
      return { sent, incoming };
    }

    function start() {
      const m = location.pathname.match(PAGE_RE);
      if (!m) return;

      const bs = getFullBootstrap();
      const currentUser = bs?.current_user;
      if (!currentUser?.id) return;

      const viewedId = m[1];
      const isOwn = String(currentUser.id) === String(viewedId);
      const { friendsSec, sentSec, requestsSec, mutualSec } = buildPanel(isOwn);

      fetchFriends(viewedId)
        .then(items => renderEntries(friendsSec, items))
        .catch(() => errNote(friendsSec));

      if (isOwn) {
        fetchRequests(viewedId)
          .then(({ sent, incoming }) => {
            renderEntries(sentSec, sent);
            renderEntries(requestsSec, incoming);
          })
          .catch(() => { errNote(sentSec); errNote(requestsSec); });
        return;
      }

      fetchFriends(currentUser.id)
        .then(myFriends => {
          const mySet = new Set(myFriends.map(f => f.href));
          fetchFriends(viewedId)
            .then(theirFriends => renderEntries(mutualSec, theirFriends.filter(f => mySet.has(f.href))))
            .catch(() => errNote(mutualSec));
        })
        .catch(() => errNote(mutualSec));
    }

    return { start };
  })();


  PulseBlocker.arm();
  hookBootstrap();
  watchForHead();

  const INIT_DELAY = 150;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      guardSPA();
      XHRInterceptor.armLdb();
      setTimeout(() => {
        runProfileEnhancements();
        FriendButton.start();
        FasterFriend.start();
        ChipDisplay.start();
        const data = getBootstrapObject();
        if (data?.is_me && data?.id) FeedManager.injectCardButton(data.id);
        FriendActivity.start();
      }, INIT_DELAY);
    }, { once: true });
  } else {
    guardSPA();
    XHRInterceptor.armLdb();
    setTimeout(() => {
      runProfileEnhancements();
      FriendButton.start();
      FasterFriend.start();
      ChipDisplay.start();
      const data = getBootstrapObject();
      if (data?.is_me && data?.id) FeedManager.injectCardButton(data.id);
      FriendActivity.start();
    }, INIT_DELAY);
  }

  obfuscateDots();
  run();
})();