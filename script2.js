const nameEl = document.querySelector("#input-delName input");

const btnEl = document.querySelector("#input-delName button");

// style =("margin-top: 1px; padding: 3px 5px; border-radius: 5px; background-color: darkgrey; margin-left: 5px; font-size:14px ;");

// 1.setAttribute :

// btnEl.setAttribute(
//   "style",
//   "padding: 3px 5px; border-radius: 5px; background-color: darkgrey; margin-left: 7px; font-size:14px; box-shadow: 4px 4px 4px rgb(130, 119, 119)"
// );

//----------------------------------------

// 2.Direct Property Access :

// console.log(btnEl);
// btnEl.style.padding = "5px 5px";
// btnEl.style.borderRadius = "5px";
// btnEl.style.backgroundColor = "darkgrey";
// btnEl.style.marginLeft = "7px";
// btnEl.style.fontSize = "14px";
// btnEl.style.boxShadow = "4px 4px 4px rgb(130, 119, 119";

//---------------------------------------

// 3.CSSText :

btnEl.style.cssText =
  "padding: 3px 5px; border-radius: 5px; background-color: darkgrey; margin-left: 7px; font-size:14px; box-shadow: 4px 4px 4px rgb(130, 119, 119)";

btnEl.style.cssText += "font-weight:bold;";

// Getting the Style :

console.log(btnEl.style.backgroundColor);
