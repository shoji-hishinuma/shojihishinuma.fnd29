"use strict";

function gatorRelease() {
	let input = document.getElementById("input").value;
	// console.log(typeof input);
	let inputNum = Number(input);
	// console.log(typeof inputNum);
	for (let i = 0; i < inputNum; i++) {
		document.getElementsByClassName("rectangle-blue")[0].append("🐊");
	}
}
