(()=>{"use strict";const e=e=>{let t={};return t.length=e,t.hitCount=0,t.sunk=!1,t.orientation="horizontal",t.xCoor=null,t.yCoor=null,{getShip:()=>t,hit:()=>{t.hitCount+=1,t.hitCount===t.length&&(t.sunk=!0)},isSunk:()=>!0===t.sunk}},t=t=>({number:t,win:!1,board:(()=>{let t=[],r=[],o={l_ship:e(4),m_ship_I:e(3),m_ship_II:e(3),s_ship_I:e(2),s_ship_II:e(2),s_ship_III:e(2),xs_ship_I:e(1),xs_ship_II:e(1),xs_ship_III:e(1),xs_ship_IV:e(1)};return{createBoard:()=>{for(let e=0;e<10;e++){t[e]=[];for(let r=0;r<10;r++)t[e][r]=null}return t},placeShip:(e,r,o)=>{const n=o.getShip().length;let l=e,u=r;if(o.getShip().xCoor=e,o.getShip().yCoor=r,"horizontal"===o.getShip().orientation){if(r+n-1>9||e>9)return console.log("error");for(;u!==r+n;)t[e][u]=o,u+=1}else{if(e+n-1>9||r>9)return console.log("error");for(;l!==e+n;)t[l][r]=o,l+=1}return t},getBoard:()=>t,getShips:()=>o,receiveAttack:(e,o)=>(null===t[e][o]?r.push([e,o]):t[e][o].hit(),t),getMisses:()=>r,isAllSunk:()=>{const e=Object.values(o);let t=!1;return e.forEach((e=>{if(!1===e.getShip().sunk)return t=!1;t=!0})),t}}})(),isComp:!1}),r=e=>{e.board.createBoard(),(e=>{e.board.getBoard();const t=e.board.getShips();Object.keys(t).forEach((r=>{const o=t[r].getShip().xCoor,n=t[r].getShip().yCoor;null!==o&&e.board.placeShip(o,n,t[r])}))})(e);const t=e.board.getBoard(),r=e.number;let o=document.getElementById(`board${r}`);for(;o.lastElementChild;)o.removeChild(o.lastElementChild);for(let e=0;e<t.length;e++)for(let n=0;n<t.length;n++){const l=document.createElement("div");l.classList.add(`${r}-square`),l.setAttribute("data-x",`${e}`),l.setAttribute("data-y",`${n}`),null===t[e][n]&&l.setAttribute("style","background-color: blue;"),o.appendChild(l)}return o},o=e=>{const t=e.board.getShips(),r=Object.keys(t),o=document.querySelector(`#player${e.number}-ships`);return r.forEach((e=>{const t=document.createElement("option");t.textContent=e,o.appendChild(t)})),o},n=e=>{document.querySelector(`#placeShipBtn-${e.number}`).addEventListener("click",(t=>{t.preventDefault();const o=parseInt(document.querySelector(`#player${e.number}-y`).value),n=parseInt(document.querySelector(`#player${e.number}-x`).value),l=document.querySelector(`#player${e.number}-ships`).value,u=document.querySelector(`#player${e.number}-orient`).value,a=e.board.getShips()[l];a.getShip().orientation=u,console.log(u),e.board.placeShip(o,n,a),r(e)}))},l=e=>{const t=e.number,r=document.querySelector(`#player${t}`),o=document.createElement("form"),n=document.createElement("select"),l=document.createElement("select"),u=document.createElement("input"),a=document.createElement("input"),i=document.createElement("button"),s=document.createElement("option"),c=document.createElement("option"),d=document.createElement("button");return o.setAttribute("id",`player${t}-form`),n.setAttribute("name","ships"),n.setAttribute("id",`player${t}-ships`),l.setAttribute("name","orientation"),l.setAttribute("id",`player${t}-orient`),u.setAttribute("type","text"),u.setAttribute("id",`player${t}-x`),u.setAttribute("name","x-coor"),u.setAttribute("placeholder","x"),a.setAttribute("type","text"),a.setAttribute("id",`player${t}-y`),a.setAttribute("name","y-coor"),a.setAttribute("placeholder","y"),i.setAttribute("id",`placeShipBtn-${t}`),i.textContent="Place",d.setAttribute("id",`player${t}-finBtn`),d.textContent="Finish set up",s.textContent="horizontal",c.textContent="vertical",l.append(s,c),o.append(n,u,a,l,i,d),r.appendChild(o),r},u=e=>{const t=document.querySelector(`#player${e.number}-finBtn`),r=document.querySelector(`#player${e.number}-form`),o=e.board.getShips(),n=Object.values(o);let l=!1;n.forEach((e=>{if(null===e.getShip().xCoor)return l=!1;l=!0})),t.addEventListener("click",(t=>{t.preventDefault(),n.forEach((e=>{if(null===e.getShip().xCoor)return l=!1;l=!0})),l?r.setAttribute("style","display: none;"):console.log("Please place all the ships first"),a(e),"Two"===e.number&&document.querySelector(".dialog").showModal()}))},a=e=>{document.querySelectorAll(`.${e.number}-square`).forEach((e=>{e.setAttribute("disabled",""),e.setAttribute("style","background-color: gray;")}))},i=e=>{const t=e.board.getBoard(),r=document.querySelector(`#board${e.number}`);for(;r.lastElementChild;)r.removeChild(r.lastElementChild);for(let o=0;o<t.length;o++)for(let n=0;n<t.length;n++){const t=document.createElement("button");t.classList.add(`${e.number}-square`),t.setAttribute("data-x",`${o}`),t.setAttribute("data-y",`${n}`),s(e,t),r.appendChild(t)}},s=(e,t)=>{const r=e.board,o=r.getBoard(),n=document.querySelector(".dialog"),l=t.getAttribute("data-x"),u=t.getAttribute("data-y");t.addEventListener("click",(i=>{i.preventDefault(),r.receiveAttack(l,u),null===o[l][u]?(a(e),t.setAttribute("style","background-color: red;"),n.showModal()):t.setAttribute("style","background-color: green;")}))};let c=t("One"),d=t("Two");r(c),r(d),l(c),l(d),o(c),o(d),n(c),n(d),u(c),u(d),((e,t)=>{const o=document.querySelector(".dialog"),n=document.querySelector("#play-window");document.querySelector("#play").addEventListener("click",(l=>{l.preventDefault();let u=n.getAttribute("data-id");return"player-Two"===u?(r(e),i(t),n.setAttribute("data-id",`player-${e.number}`),o.close()):"player-One"===u?(r(t),i(e),n.setAttribute("data-id",`player-${t.number}`),o.close()):void 0}))})(c,d)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBV3NCLEdBQ1h0QixFQUFXdUIsR0FFWHBDLEVBQWdCbUMsR0FDaEJuQyxFQUFnQm9DLEdBRWhCL0IsRUFBYzhCLEdBQ2Q5QixFQUFjK0IsR0FFZFosRUFBYVcsR0FDYlgsRUFBYVksR0RpS08sRUFBQ0MsRUFBTUMsS0FDekIsTUFBTUwsRUFBUzNDLFNBQVNZLGNBQWMsV0FDaENxQyxFQUFhakQsU0FBU1ksY0FBYyxnQkFDMUJaLFNBQVNZLGNBQWMsU0FFL0JJLGlCQUFpQixTQUFVQyxJQUNqQ0EsRUFBRUMsaUJBQ0YsSUFBSXhCLEVBQVN1RCxFQUFXTCxhQUFhLFdBRXJDLE1BQWUsZUFBWGxELEdBQ0ZELEVBQVlzRCxHQUNaUixFQUFhUyxHQUNiQyxFQUFXekMsYUFBYSxVQUFXLFVBQVV1QyxFQUFLaEcsVUFDM0M0RixFQUFPTyxTQUNNLGVBQVh4RCxHQUNURCxFQUFZdUQsR0FDWlQsRUFBYVEsR0FDYkUsRUFBV3pDLGFBQWEsVUFBVyxVQUFVd0MsRUFBS2pHLFVBQzNDNEYsRUFBT08sY0FKVCxDQUtQLEdBQ0EsRUNuTEpDLENBQVlOLEVBQVdDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNoaXAgPSAobikgPT4ge1xuICBsZXQgc2hpcE9iaiA9IHt9O1xuXG4gIHNoaXBPYmpbXCJsZW5ndGhcIl0gPSBuO1xuICBzaGlwT2JqW1wiaGl0Q291bnRcIl0gPSAwO1xuICBzaGlwT2JqW1wic3Vua1wiXSA9IGZhbHNlO1xuICBzaGlwT2JqW1wib3JpZW50YXRpb25cIl0gPSBcImhvcml6b250YWxcIjtcbiAgc2hpcE9ialtcInhDb29yXCJdID0gbnVsbDtcbiAgc2hpcE9ialtcInlDb29yXCJdID0gbnVsbDtcblxuICBjb25zdCBnZXRTaGlwID0gKCkgPT4gc2hpcE9iajtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgc2hpcE9iai5oaXRDb3VudCArPSAxO1xuICAgIGlmIChzaGlwT2JqLmhpdENvdW50ID09PSBzaGlwT2JqLmxlbmd0aCkgc2hpcE9iai5zdW5rID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBPYmouc3VuayA9PT0gdHJ1ZSA/IHRydWUgOiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFNoaXAsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5jb25zdCBQbGF5ZXIgPSAobnVtYmVyKSA9PiB7XG4gIGxldCB3aW4gPSBmYWxzZTtcbiAgbGV0IGJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGxldCBpc0NvbXAgPSBmYWxzZTtcblxuICByZXR1cm4ge1xuICAgIG51bWJlcixcbiAgICB3aW4sXG4gICAgYm9hcmQsXG4gICAgaXNDb21wLFxuICB9O1xufTtcblxuZXhwb3J0IHsgUGxheWVyIH07XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGxldCBib2FyZCA9IFtdO1xuICBsZXQgbWlzc2VzID0gW107XG5cbiAgbGV0IGFsbFNoaXBzID0ge1xuICAgIGxfc2hpcDogU2hpcCg0KSxcbiAgICBtX3NoaXBfSTogU2hpcCgzKSxcbiAgICBtX3NoaXBfSUk6IFNoaXAoMyksXG4gICAgc19zaGlwX0k6IFNoaXAoMiksXG4gICAgc19zaGlwX0lJOiBTaGlwKDIpLFxuICAgIHNfc2hpcF9JSUk6IFNoaXAoMiksXG4gICAgeHNfc2hpcF9JOiBTaGlwKDEpLFxuICAgIHhzX3NoaXBfSUk6IFNoaXAoMSksXG4gICAgeHNfc2hpcF9JSUk6IFNoaXAoMSksXG4gICAgeHNfc2hpcF9JVjogU2hpcCgxKSxcbiAgfTtcblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuICBjb25zdCBnZXRNaXNzZXMgPSAoKSA9PiBtaXNzZXM7XG4gIGNvbnN0IGdldFNoaXBzID0gKCkgPT4gYWxsU2hpcHM7XG5cbiAgY29uc3QgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBib2FyZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGJvYXJkW2ldW2pdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHgsIHksIHNoaXApID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwLmdldFNoaXAoKS5sZW5ndGg7XG4gICAgbGV0IGEgPSB4O1xuICAgIGxldCBiID0geTtcblxuICAgIHNoaXAuZ2V0U2hpcCgpLnhDb29yID0geDtcbiAgICBzaGlwLmdldFNoaXAoKS55Q29vciA9IHk7XG5cbiAgICBpZiAoc2hpcC5nZXRTaGlwKCkub3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAoeSArIGxlbmd0aCAtIDEgPiA5IHx8IHggPiA5KSByZXR1cm4gY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgICAgIHdoaWxlIChiICE9PSB5ICsgbGVuZ3RoKSB7XG4gICAgICAgIGJvYXJkW3hdW2JdID0gc2hpcDtcbiAgICAgICAgYiArPSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoeCArIGxlbmd0aCAtIDEgPiA5IHx8IHkgPiA5KSByZXR1cm4gY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgICAgIHdoaWxlIChhICE9PSB4ICsgbGVuZ3RoKSB7XG4gICAgICAgIGJvYXJkW2FdW3ldID0gc2hpcDtcbiAgICAgICAgYSArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoYm9hcmRbeF1beV0gPT09IG51bGwpIG1pc3Nlcy5wdXNoKFt4LCB5XSk7XG4gICAgZWxzZSB7XG4gICAgICBib2FyZFt4XVt5XS5oaXQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgaXNBbGxTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gT2JqZWN0LnZhbHVlcyhhbGxTaGlwcyk7XG4gICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAuZ2V0U2hpcCgpLnN1bmsgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAoc3RhdHVzID0gZmFsc2UpO1xuICAgICAgfSBlbHNlIHN0YXR1cyA9IHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RhdHVzO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlQm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIGdldEJvYXJkLFxuICAgIGdldFNoaXBzLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgZ2V0TWlzc2VzLFxuICAgIGlzQWxsU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiY29uc3QgZmlsbFNxciA9IChzcXIsIHRhZykgPT4ge1xuICBpZiAoc3FyID09PSBudWxsKSB7XG4gICAgdGFnLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcIik7XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlclNoaXAgPSAocGxheWVyKSA9PiB7XG4gIGxldCBib2FyZCA9IHBsYXllci5ib2FyZC5nZXRCb2FyZCgpO1xuICBjb25zdCBzaGlwc09iaiA9IHBsYXllci5ib2FyZC5nZXRTaGlwcygpO1xuICBjb25zdCBzaGlwc0xpc3QgPSBPYmplY3Qua2V5cyhzaGlwc09iaik7XG5cbiAgc2hpcHNMaXN0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICBjb25zdCB4Q29vciA9IHNoaXBzT2JqW3NoaXBdLmdldFNoaXAoKS54Q29vcjtcbiAgICBjb25zdCB5Q29vciA9IHNoaXBzT2JqW3NoaXBdLmdldFNoaXAoKS55Q29vcjtcblxuICAgIGlmICh4Q29vciAhPT0gbnVsbCkge1xuICAgICAgcGxheWVyLmJvYXJkLnBsYWNlU2hpcCh4Q29vciwgeUNvb3IsIHNoaXBzT2JqW3NoaXBdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBib2FyZDtcbn07XG5cbmNvbnN0IHJlbmRlckJvYXJkID0gKHBsYXllcikgPT4ge1xuICBwbGF5ZXIuYm9hcmQuY3JlYXRlQm9hcmQoKTtcblxuICByZW5kZXJTaGlwKHBsYXllcik7XG5cbiAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKTtcbiAgY29uc3QgcGxheWVyTnVtID0gcGxheWVyLm51bWJlcjtcbiAgbGV0IGN1cnJlbnRCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBib2FyZCR7cGxheWVyTnVtfWApO1xuXG4gIHdoaWxlIChjdXJyZW50Qm9hcmQubGFzdEVsZW1lbnRDaGlsZClcbiAgICBjdXJyZW50Qm9hcmQucmVtb3ZlQ2hpbGQoY3VycmVudEJvYXJkLmxhc3RFbGVtZW50Q2hpbGQpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoYCR7cGxheWVyTnVtfS1zcXVhcmVgKTtcblxuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCBgJHtpfWApO1xuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCBgJHtqfWApO1xuXG4gICAgICBmaWxsU3FyKGJvYXJkW2ldW2pdLCBzcXVhcmUpO1xuXG4gICAgICBjdXJyZW50Qm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3VycmVudEJvYXJkO1xufTtcblxuY29uc3QgZ3JhYlBsYXllclNoaXBzID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBzaGlwc09iaiA9IHBsYXllci5ib2FyZC5nZXRTaGlwcygpO1xuICBjb25zdCBzaGlwcyA9IE9iamVjdC5rZXlzKHNoaXBzT2JqKTtcbiAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllciR7cGxheWVyLm51bWJlcn0tc2hpcHNgKTtcblxuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBzaGlwO1xuICAgIHNlbGVjdGlvbi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcblxuICByZXR1cm4gc2VsZWN0aW9uO1xufTtcblxuY29uc3QgaW5pdFBsYWNlU2hpcCA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYWNlU2hpcEJ0bi0ke3BsYXllci5udW1iZXJ9YCk7XG5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHhDb29yID0gcGFyc2VJbnQoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyJHtwbGF5ZXIubnVtYmVyfS15YCkudmFsdWVcbiAgICApO1xuICAgIGNvbnN0IHlDb29yID0gcGFyc2VJbnQoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyJHtwbGF5ZXIubnVtYmVyfS14YCkudmFsdWVcbiAgICApO1xuICAgIGNvbnN0IHNoaXBOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjcGxheWVyJHtwbGF5ZXIubnVtYmVyfS1zaGlwc2BcbiAgICApLnZhbHVlO1xuXG4gICAgY29uc3Qgb3JpZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjcGxheWVyJHtwbGF5ZXIubnVtYmVyfS1vcmllbnRgXG4gICAgKS52YWx1ZTtcblxuICAgIGNvbnN0IHNoaXAgPSBwbGF5ZXIuYm9hcmQuZ2V0U2hpcHMoKVtzaGlwTmFtZV07XG5cbiAgICBzaGlwLmdldFNoaXAoKS5vcmllbnRhdGlvbiA9IG9yaWVudDtcbiAgICBjb25zb2xlLmxvZyhvcmllbnQpO1xuXG4gICAgcGxheWVyLmJvYXJkLnBsYWNlU2hpcCh4Q29vciwgeUNvb3IsIHNoaXApO1xuICAgIHJlbmRlckJvYXJkKHBsYXllcik7XG4gIH0pO1xufTtcblxuY29uc3QgcmVuZGVyRm9ybSA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgcGxheWVyTm8gPSBwbGF5ZXIubnVtYmVyO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyJHtwbGF5ZXJOb31gKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbnN0IG9yaWVudGF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3QgaW5wdXRYID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBpbnB1dFkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGNyb3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3QgbG9uZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbnN0IGZpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcGxheWVyJHtwbGF5ZXJOb30tZm9ybWApO1xuXG4gIHNlbGVjdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic2hpcHNcIik7XG4gIHNlbGVjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcGxheWVyJHtwbGF5ZXJOb30tc2hpcHNgKTtcblxuICBvcmllbnRhdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwib3JpZW50YXRpb25cIik7XG4gIG9yaWVudGF0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBwbGF5ZXIke3BsYXllck5vfS1vcmllbnRgKTtcblxuICBpbnB1dFguc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGlucHV0WC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcGxheWVyJHtwbGF5ZXJOb30teGApO1xuICBpbnB1dFguc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIngtY29vclwiKTtcbiAgaW5wdXRYLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwieFwiKTtcblxuICBpbnB1dFkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGlucHV0WS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcGxheWVyJHtwbGF5ZXJOb30teWApO1xuICBpbnB1dFkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInktY29vclwiKTtcbiAgaW5wdXRZLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwieVwiKTtcblxuICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYHBsYWNlU2hpcEJ0bi0ke3BsYXllck5vfWApO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIlBsYWNlXCI7XG5cbiAgZmluLnNldEF0dHJpYnV0ZShcImlkXCIsIGBwbGF5ZXIke3BsYXllck5vfS1maW5CdG5gKTtcbiAgZmluLnRleHRDb250ZW50ID0gXCJGaW5pc2ggc2V0IHVwXCI7XG5cbiAgY3Jvc3MudGV4dENvbnRlbnQgPSBcImhvcml6b250YWxcIjtcbiAgbG9uZy50ZXh0Q29udGVudCA9IFwidmVydGljYWxcIjtcblxuICBvcmllbnRhdGlvbi5hcHBlbmQoY3Jvc3MsIGxvbmcpO1xuICBmb3JtLmFwcGVuZChzZWxlY3Rpb24sIGlucHV0WCwgaW5wdXRZLCBvcmllbnRhdGlvbiwgYnV0dG9uLCBmaW4pO1xuICBtYWluLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIHJldHVybiBtYWluO1xufTtcblxuY29uc3QgaW5pdEZpblNldHVwID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyJHtwbGF5ZXIubnVtYmVyfS1maW5CdG5gKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXIke3BsYXllci5udW1iZXJ9LWZvcm1gKTtcbiAgY29uc3Qgc2hpcHNPYmogPSBwbGF5ZXIuYm9hcmQuZ2V0U2hpcHMoKTtcbiAgY29uc3Qgc2hpcHMgPSBPYmplY3QudmFsdWVzKHNoaXBzT2JqKTtcbiAgbGV0IGlzQWxsUGxhY2VkID0gZmFsc2U7XG5cbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGlmIChzaGlwLmdldFNoaXAoKS54Q29vciA9PT0gbnVsbCkgcmV0dXJuIChpc0FsbFBsYWNlZCA9IGZhbHNlKTtcbiAgICBlbHNlIGlzQWxsUGxhY2VkID0gdHJ1ZTtcbiAgfSk7XG5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLmdldFNoaXAoKS54Q29vciA9PT0gbnVsbCkgcmV0dXJuIChpc0FsbFBsYWNlZCA9IGZhbHNlKTtcbiAgICAgIGVsc2UgaXNBbGxQbGFjZWQgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgaXNBbGxQbGFjZWRcbiAgICAgID8gZm9ybS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpXG4gICAgICA6IGNvbnNvbGUubG9nKFwiUGxlYXNlIHBsYWNlIGFsbCB0aGUgc2hpcHMgZmlyc3RcIik7XG5cbiAgICBoaWRlQm9hcmQocGxheWVyKTtcblxuICAgIGlmIChwbGF5ZXIubnVtYmVyID09PSBcIlR3b1wiKSB7XG4gICAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpYWxvZ1wiKTtcbiAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgaGlkZUJvYXJkID0gKHBsYXllcikgPT4ge1xuICBsZXQgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3BsYXllci5udW1iZXJ9LXNxdWFyZWApO1xuXG4gIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IGdyYXk7XCIpO1xuICB9KTtcbn07XG5cbmNvbnN0IGluaXRwbGF5QnRuID0gKFBPbmUsIFBUd28pID0+IHtcbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaWFsb2dcIik7XG4gIGNvbnN0IHBsYXlXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXktd2luZG93XCIpO1xuICBjb25zdCBwbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5XCIpO1xuXG4gIHBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBwbGF5ZXIgPSBwbGF5V2luZG93LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG5cbiAgICBpZiAocGxheWVyID09PSBcInBsYXllci1Ud29cIikge1xuICAgICAgcmVuZGVyQm9hcmQoUE9uZSk7XG4gICAgICByZW5kZXJQbGF5QmQoUFR3byk7XG4gICAgICBwbGF5V2luZG93LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgYHBsYXllci0ke1BPbmUubnVtYmVyfWApO1xuICAgICAgcmV0dXJuIGRpYWxvZy5jbG9zZSgpO1xuICAgIH0gZWxzZSBpZiAocGxheWVyID09PSBcInBsYXllci1PbmVcIikge1xuICAgICAgcmVuZGVyQm9hcmQoUFR3byk7XG4gICAgICByZW5kZXJQbGF5QmQoUE9uZSk7XG4gICAgICBwbGF5V2luZG93LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgYHBsYXllci0ke1BUd28ubnVtYmVyfWApO1xuICAgICAgcmV0dXJuIGRpYWxvZy5jbG9zZSgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCByZW5kZXJQbGF5QmQgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gcGxheWVyLmJvYXJkLmdldEJvYXJkKCk7XG4gIGNvbnN0IGN1cnJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNib2FyZCR7cGxheWVyLm51bWJlcn1gKTtcblxuICB3aGlsZSAoY3VyckJvYXJkLmxhc3RFbGVtZW50Q2hpbGQpXG4gICAgY3VyckJvYXJkLnJlbW92ZUNoaWxkKGN1cnJCb2FyZC5sYXN0RWxlbWVudENoaWxkKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZC5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKGAke3BsYXllci5udW1iZXJ9LXNxdWFyZWApO1xuXG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIGAke2l9YCk7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsIGAke2p9YCk7XG5cbiAgICAgIGluaXRTcXJCdG4ocGxheWVyLCBzcXVhcmUpO1xuXG4gICAgICBjdXJyQm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGluaXRTcXJCdG4gPSAocGxheWVyLCBzcXVhcmUpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuYm9hcmQ7XG4gIGNvbnN0IGJvYXJkTGlzdCA9IGJvYXJkLmdldEJvYXJkKCk7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlhbG9nXCIpO1xuICBjb25zdCB4ID0gc3F1YXJlLmdldEF0dHJpYnV0ZShcImRhdGEteFwiKTtcbiAgY29uc3QgeSA9IHNxdWFyZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIik7XG5cbiAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgaWYgKGJvYXJkTGlzdFt4XVt5XSA9PT0gbnVsbCkge1xuICAgICAgaGlkZUJvYXJkKHBsYXllcik7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XCIpO1xuICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcIik7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlbmRlckJvYXJkLFxuICBncmFiUGxheWVyU2hpcHMsXG4gIGluaXRQbGFjZVNoaXAsXG4gIHJlbmRlckZvcm0sXG4gIGluaXRGaW5TZXR1cCxcbiAgaW5pdHBsYXlCdG4sXG59O1xuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQge1xuICByZW5kZXJCb2FyZCxcbiAgZ3JhYlBsYXllclNoaXBzLFxuICBpbml0UGxhY2VTaGlwLFxuICByZW5kZXJGb3JtLFxuICBpbml0RmluU2V0dXAsXG4gIGluaXRwbGF5QnRuLFxufSBmcm9tIFwiLi9ET01cIjtcblxubGV0IHBsYXllck9uZSA9IFBsYXllcihcIk9uZVwiKTtcbmxldCBwbGF5ZXJUd28gPSBQbGF5ZXIoXCJUd29cIik7XG5cbnJlbmRlckJvYXJkKHBsYXllck9uZSk7XG5yZW5kZXJCb2FyZChwbGF5ZXJUd28pO1xuXG5yZW5kZXJGb3JtKHBsYXllck9uZSk7XG5yZW5kZXJGb3JtKHBsYXllclR3byk7XG5cbmdyYWJQbGF5ZXJTaGlwcyhwbGF5ZXJPbmUpO1xuZ3JhYlBsYXllclNoaXBzKHBsYXllclR3byk7XG5cbmluaXRQbGFjZVNoaXAocGxheWVyT25lKTtcbmluaXRQbGFjZVNoaXAocGxheWVyVHdvKTtcblxuaW5pdEZpblNldHVwKHBsYXllck9uZSk7XG5pbml0RmluU2V0dXAocGxheWVyVHdvKTtcblxuaW5pdHBsYXlCdG4ocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuIl0sIm5hbWVzIjpbIlNoaXAiLCJuIiwic2hpcE9iaiIsImdldFNoaXAiLCJoaXQiLCJoaXRDb3VudCIsImxlbmd0aCIsInN1bmsiLCJpc1N1bmsiLCJQbGF5ZXIiLCJudW1iZXIiLCJ3aW4iLCJib2FyZCIsIm1pc3NlcyIsImFsbFNoaXBzIiwibF9zaGlwIiwibV9zaGlwX0kiLCJtX3NoaXBfSUkiLCJzX3NoaXBfSSIsInNfc2hpcF9JSSIsInNfc2hpcF9JSUkiLCJ4c19zaGlwX0kiLCJ4c19zaGlwX0lJIiwieHNfc2hpcF9JSUkiLCJ4c19zaGlwX0lWIiwiY3JlYXRlQm9hcmQiLCJpIiwiaiIsInBsYWNlU2hpcCIsIngiLCJ5Iiwic2hpcCIsImEiLCJiIiwieENvb3IiLCJ5Q29vciIsIm9yaWVudGF0aW9uIiwiY29uc29sZSIsImxvZyIsImdldEJvYXJkIiwiZ2V0U2hpcHMiLCJyZWNlaXZlQXR0YWNrIiwicHVzaCIsImdldE1pc3NlcyIsImlzQWxsU3VuayIsInNoaXBzIiwiT2JqZWN0IiwidmFsdWVzIiwic3RhdHVzIiwiZm9yRWFjaCIsIkdhbWVib2FyZCIsImlzQ29tcCIsInJlbmRlckJvYXJkIiwicGxheWVyIiwic2hpcHNPYmoiLCJrZXlzIiwicmVuZGVyU2hpcCIsInBsYXllck51bSIsImN1cnJlbnRCb2FyZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsYXN0RWxlbWVudENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJzcXVhcmUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJncmFiUGxheWVyU2hpcHMiLCJzZWxlY3Rpb24iLCJxdWVyeVNlbGVjdG9yIiwib3B0aW9uIiwidGV4dENvbnRlbnQiLCJpbml0UGxhY2VTaGlwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcnNlSW50IiwidmFsdWUiLCJzaGlwTmFtZSIsIm9yaWVudCIsInJlbmRlckZvcm0iLCJwbGF5ZXJObyIsIm1haW4iLCJmb3JtIiwiaW5wdXRYIiwiaW5wdXRZIiwiYnV0dG9uIiwiY3Jvc3MiLCJsb25nIiwiZmluIiwiYXBwZW5kIiwiaW5pdEZpblNldHVwIiwiaXNBbGxQbGFjZWQiLCJoaWRlQm9hcmQiLCJzaG93TW9kYWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVuZGVyUGxheUJkIiwiY3VyckJvYXJkIiwiaW5pdFNxckJ0biIsImJvYXJkTGlzdCIsImRpYWxvZyIsImdldEF0dHJpYnV0ZSIsInBsYXllck9uZSIsInBsYXllclR3byIsIlBPbmUiLCJQVHdvIiwicGxheVdpbmRvdyIsImNsb3NlIiwiaW5pdHBsYXlCdG4iXSwic291cmNlUm9vdCI6IiJ9