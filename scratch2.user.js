// ==UserScript==
// @name         Scratch 2.0 Theme
// @match        https://scratch.mit.edu/projects/*
// @version      1.0
// @author       Clockiscool1234
// @grant        none
// ==/UserScript==
'use strict';
const bevelFilters = [
	`<filter id="bevelFilter" x0="-50%" y0="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="1 1" result="blur-1"></feGaussianBlur>
      <feFlood flood-color="#fff" flood-opacity="0.15" result="flood-2"></feFlood>
      <feOffset in="blur-1" dx="2" dy="2" result="offset-3"></feOffset>
      <feComposite k2="1" k3="-1" operator="arithmetic" in="SourceAlpha" in2="offset-3" result="comp-4"></feComposite>
      <feComposite operator="in" in="flood-2" in2="comp-4" result="comp-5"></feComposite>
      <feFlood flood-color="#000" flood-opacity="0.7" result="flood-6"></feFlood>
      <feOffset in="blur-1" dx="-2" dy="-2" result="offset-7"></feOffset>
      <feComposite k2="1" k3="-1" operator="arithmetic" in="SourceAlpha" in2="offset-7" result="comp-8"></feComposite>
      <feComposite operator="in" in="flood-6" in2="comp-8" result="comp-9"></feComposite>
      <feMerge result="merge-10">
        <feMergeNode in="SourceGraphic"></feMergeNode>
        <feMergeNode in="comp-5"></feMergeNode>
        <feMergeNode in="comp-9"></feMergeNode>
      </feMerge>
    </filter>`,
	`<filter id="inputBevelFilter" x0="-50%" y0="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="1 1" result="blur-1"></feGaussianBlur>
      <feFlood flood-color="#fff" flood-opacity="0.15" result="flood-2"></feFlood>
      <feOffset in="blur-1" dx="-2" dy="-2" result="offset-3"></feOffset>
      <feComposite k2="1" k3="-1" operator="arithmetic" in="SourceAlpha" in2="offset-3" result="comp-4"></feComposite>
      <feComposite operator="in" in="flood-2" in2="comp-4" result="comp-5"></feComposite>
      <feFlood flood-color="#000" flood-opacity="0.7" result="flood-6"></feFlood>
      <feOffset in="blur-1" dx="2" dy="2" result="offset-7"></feOffset>
      <feComposite k2="1" k3="-1" operator="arithmetic" in="SourceAlpha" in2="offset-7" result="comp-8"></feComposite>
      <feComposite operator="in" in="flood-6" in2="comp-8" result="comp-9"></feComposite>
      <feMerge result="merge-10">
        <feMergeNode in="SourceGraphic"></feMergeNode>
        <feMergeNode in="comp-5"></feMergeNode>
        <feMergeNode in="comp-9"></feMergeNode>
      </feMerge>
    </filter>`,
	`<filter id="inputDarkFilter" x0="-50%" y0="-50%" width="200%" height="200%">
      <feFlood flood-color="#000" flood-opacity="0.2" result="flood-1"></feFlood>
      <feComposite operator="in" in="flood-1" in2="SourceAlpha" result="comp-2"></feComposite>
      <feMerge result="merge-3">
        <feMergeNode in="SourceGraphic"></feMergeNode>
        <feMergeNode in="comp-2"></feMergeNode>
      </feMerge>
    </filter>`,
]
let check = setInterval(() => {
	if (document.querySelector(".injectionDiv > svg > defs") && !document.querySelector(".injectionDiv > svg > defs > #bevelFilter")) {
		bevelFilters.forEach((filter) => {
			const filterElement = document.createElement("filter");
			document.querySelector(".injectionDiv > svg > defs").appendChild(filterElement);
			filterElement.outerHTML = filter;
		});
	}
}, 1500);
let check2 = setInterval(() => {
	if (document.querySelector('[class^="gui_blocks-wrapper"]')) {
		let elem = document.querySelector('[class^="gui_blocks-wrapper"]');
		let childable = elem[Object.keys(elem).find((k) => k.startsWith("__reactFiber$"))]
		while (((childable = childable.child), !childable || !childable.stateNode || !childable.stateNode.ScratchBlocks)) {}
		window.ScratchBlocks = childable.stateNode.ScratchBlocks;
		ScratchBlocks.Blocks["event_whenflagclicked"].init = function() {
			this.jsonInit({
				id: "event_whenflagclicked",
				message0: ScratchBlocks.Msg.EVENT_WHENFLAGCLICKED,
				args0: [{
					type: "field_image",
					src: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 21'%3E%3Cpath d='M 1.504 21 L 0 19.493 L 4.567 0 h 1.948 l -0.5 2.418 s 1.002 -0.502 3.006 0 c 2.006 0.503 3.008 2.01 6.517 2.01 c 3.508 0 4.463 -0.545 4.463 -0.545 l -0.823 9.892 s -2.137 1.005 -5.144 0.696 c -3.007 -0.307 -3.007 -2.007 -6.014 -2.51 c -3.008 -0.502 -4.512 0.503 -4.512 0.503 L 1.504 21 Z' fill='%233f8d15'/%3E%3C/svg%3E`,
					width: 27,
					height: 27,
					alt: "flag"
				}],
				category: ScratchBlocks.Categories.event,
				extensions: ["colours_event", "shape_hat"]
			})
		}
		ScratchBlocks.Blocks["motion_turnleft"].init = function() {
			this.jsonInit({
				message0: ScratchBlocks.Msg.MOTION_TURNLEFT,
				args0: [{
					type: "field_image",
					src: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -0.0000573397 15 12'%3E%3Cpath d='M 3.637 1.794 A 6.825 6.825 0 0 1 8.277 0 C 11.99 0 15 2.91 15 6.5 c 0 2.316 -1.253 4.35 -3.14 5.5 H 9.83 v -1.256 c 1.808 -0.618 3.103 -2.285 3.103 -4.244 c 0 -2.485 -2.083 -4.5 -4.654 -4.5 c -1.14 0 -2.184 0.396 -2.993 1.053 L 6.69 4.13 c 0.45 0.344 0.398 0.826 -0.11 1.08 L 0 8.5 L 1.142 0.992 c 0.083 -0.547 0.514 -0.714 0.963 -0.37 l 1.532 1.172 Z' fill='%23fff'/%3E%3C/svg%3E`,
					width: 24,
					height: 24
				}, {
					type: "input_value",
					name: "DEGREES"
				}],
				category: ScratchBlocks.Categories.motion,
				extensions: ["colours_motion", "shape_statement"]
			})
		}
		ScratchBlocks.Blocks["motion_turnright"].init = function() {
			this.jsonInit({
				message0: ScratchBlocks.Msg.MOTION_TURNRIGHT,
				args0: [{
					type: "field_image",
					src: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -0.0000576973 15 12'%3E%3Cpath d='M 6.724 0 C 3.01 0 0 2.91 0 6.5 c 0 2.316 1.253 4.35 3.14 5.5 H 5.17 v -1.256 C 3.364 10.126 2.07 8.46 2.07 6.5 C 2.07 4.015 4.152 2 6.723 2 c 1.14 0 2.184 0.396 2.993 1.053 L 8.31 4.13 c -0.45 0.344 -0.398 0.826 0.11 1.08 L 15 8.5 L 13.858 0.992 c -0.083 -0.547 -0.514 -0.714 -0.963 -0.37 l -1.532 1.172 A 6.825 6.825 0 0 0 6.723 0 Z' fill='%23fff'/%3E%3C/svg%3E`,
					width: 24,
					height: 24
				}, {
					type: "input_value",
					name: "DEGREES"
				}],
				category: ScratchBlocks.Categories.motion,
				extensions: ["colours_motion", "shape_statement"]
			})
		}
	}
}, 1500);