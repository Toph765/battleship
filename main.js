(()=>{"use strict";const e=e=>{let t={};return t.length=e,t.hitCount=0,t.sunk=!1,t.orientation="horizontal",t.comp=[],t.hitCoor=[],{getShip:()=>t,hit:()=>{t.hitCount+=1,t.hitCount===t.length&&(t.sunk=!0)},isSunk:()=>!0===t.sunk}},t=()=>{let t=[],r=[],o=[],n={l_ship:e(4),m_ship_I:e(3),m_ship_II:e(3),s_ship_I:e(2),s_ship_II:e(2),s_ship_III:e(2),xs_ship_I:e(1),xs_ship_II:e(1),xs_ship_III:e(1),xs_ship_IV:e(1)};const a=e=>{let r=!0;return e.forEach((e=>{if(e[0]>9||e[1]>9||(o=e[0],n=e[1],null!==t[o][n]))return r=!1;var o,n})),r},l=(e,t,r)=>{const o=r.getShip().length;let n=[],a=e,l=t;if("horizontal"===r.getShip().orientation)for(;l!==t+o;)n.push([e,l]),l+=1;else for(;a!==e+o;)n.push([a,t]),a+=1;return n},i=(e,r,o)=>{let n=[],i=!0;return r+length-1>9||e>9||e+length-1>9||r>9?alert("Ship is out of bound"):(n=l(e,r,o),i=a(n),!1===i?(i=!0,n=[],alert("square is already occupied")):(o.getShip().comp=n,o.getShip().comp.forEach((e=>{t[e[0]][e[1]]=o})),t))};return{createBoard:()=>{for(let e=0;e<10;e++){t[e]=[];for(let r=0;r<10;r++)t[e][r]=null}return t},placeShip:i,getBoard:()=>t,getShips:()=>n,receiveAttack:(e,n)=>(null===t[e][n]?r.push([e,n]):(o.push([e,n]),t[e][n].hit(),t[e][n].getShip().hitCoor.push([e,n])),t),getMisses:()=>r,getHits:()=>o,isAllSunk:()=>{const e=Object.values(n);let t=!1;return e.forEach((e=>{if(!1===e.getShip().sunk)return t=!1;t=!0})),t},populateBd:()=>{const e=Object.keys(n),r=["horizontal","vertical"];return e.forEach((e=>{const t=n[e],o=t.getShip().length;let s=Math.floor(10*Math.random()),u=Math.floor(10*Math.random()),c=Math.floor(2*Math.random());t.getShip().orientation=r[c];let d=l(s,u,t),h=a(d);for(;u+o-1>9||s+o-1>9||!1===h;)s=Math.floor(10*Math.random()),u=Math.floor(10*Math.random()),c=Math.floor(2*Math.random()),t.getShip().orientation=r[c],d=l(s,u,t),h=a(d);i(s,u,t)})),t}}},r=e=>({number:e,win:!1,board:t(),isComp:!1}),o=(e,t,r,o,n)=>{const a=e.board.getMisses();null===t?a.find((e=>e[0]===o&&e[1]===n))?r.setAttribute("style","background-color: yellow;"):r.setAttribute("style","background-color: blue;"):t.getShip().hitCoor.find((e=>e[0]===o&&e[1]===n))&&r.setAttribute("style","background-color: red;")},n=e=>{e.board.createBoard(),(e=>{e.board.getBoard();const t=e.board.getShips();Object.keys(t).forEach((r=>{const o=t[r].getShip().comp;if(0!==o.length){const n=o[0][0],a=o[0][1];e.board.placeShip(n,a,t[r])}}))})(e);const t=e.board.getBoard(),r=e.number;let n=document.getElementById(`board${r}`);for(;n.lastElementChild;)n.removeChild(n.lastElementChild);for(let a=0;a<t.length;a++)for(let l=0;l<t.length;l++){const i=document.createElement("div");i.classList.add(`${r}-square`),i.setAttribute("data-x",`${a}`),i.setAttribute("data-y",`${l}`),o(e,t[a][l],i,a,l),n.appendChild(i)}return n},a=e=>{const t=e.board.getShips(),r=Object.keys(t),o=document.querySelector(`#player${e.number}-ships`);return r.forEach((e=>{const t=document.createElement("option");t.textContent=e,o.appendChild(t)})),o},l=(e,t)=>{document.querySelector("#placeShipBtn").addEventListener("click",(r=>{r.preventDefault();let o=document.querySelector("form").getAttribute("id");const a=parseInt(document.querySelector("#y-coor").value),l=parseInt(document.querySelector("#x-coor").value),i=document.querySelector("#ships").value,s=document.querySelector("#orientation").value;let u;u="playerOne-form"===o?e.board.getShips()[i]:t.board.getShips()[i],u.getShip().orientation=s,Number.isNaN(a)||Number.isNaN(l)||("playerOne-form"===o?(e.board.placeShip(a,l,u),n(e)):(t.board.placeShip(a,l,u),n(t)))}))},i=e=>{const t=document.querySelector("main"),r=document.querySelector(`#player${e.number}-finBtn`),o=document.querySelector(`#player${e.number}-form`),n=e.board.getShips(),a=Object.values(n);let l=!1;r.addEventListener("click",(r=>{r.preventDefault();const n=t.getAttribute("class");a.forEach((e=>{const t=e.getShip().comp;return l=0!==t.length})),l?(o.setAttribute("style","display: none;"),s(e),("pvc"===n||"Two"===e.number)&&document.querySelector(".dialog").showModal()):alert("Please place all the ships first")}))},s=e=>{document.querySelectorAll(`.${e.number}-square`).forEach((e=>{e.setAttribute("disabled",""),e.setAttribute("style","background-color: gray;")}))},u=(e,t)=>{const r=document.querySelector("main"),o=document.querySelector(".dialog"),a=document.querySelector("#play-window");document.querySelector("#play").addEventListener("click",(l=>{l.preventDefault();let i=a.getAttribute("data-id");if("player-Two"===i)return n(e),c(t),a.setAttribute("data-id",`player-${e.number}`),o.close();if("player-One"===i){const l=r.getAttribute("class");return a.setAttribute("data-id",`player-${t.number}`),"pvc"===l?(h(e,t),o.close()):(n(t),c(e),o.close())}}))},c=e=>{const t=e.board.getBoard(),r=e.board.getMisses(),o=document.querySelector(`#board${e.number}`);for(;o.lastElementChild;)o.removeChild(o.lastElementChild);for(let n=0;n<t.length;n++)for(let a=0;a<t.length;a++){const l=t[n][a],i=document.createElement("button");i.classList.add(`${e.number}-square`),i.setAttribute("data-x",`${n}`),i.setAttribute("data-y",`${a}`),d(e,i),null!==l&&l.getShip().hitCount>0&&l.getShip().hitCoor.find((e=>e[0]===n&&e[1]===a))&&(i.setAttribute("style","background-color: red;"),i.setAttribute("disabled","")),r.find((e=>e[0]===n&&e[1]===a))&&(i.setAttribute("style","background-color: green;"),i.setAttribute("disabled","")),o.appendChild(i)}},d=(e,t)=>{const r=e.board,o=r.getBoard(),n=document.querySelector(".dialog"),a=parseInt(t.getAttribute("data-x")),l=parseInt(t.getAttribute("data-y"));t.addEventListener("click",(i=>{i.preventDefault(),r.receiveAttack(a,l),null===o[a][l]?(s(e),t.setAttribute("style","background-color: red;"),n.showModal()):t.setAttribute("style","background-color: green;")}))},h=(e,t)=>{const r=e.board,o=r.getBoard(),a=r.getMisses(),l=r.getHits(),i=document.querySelector("#play-window");let s=Math.floor(10*Math.random()),u=Math.floor(10*Math.random()),d=!0;for(;!0===d;)a.find((e=>e[0]===s&&e[1]===u))||l.find((e=>e[0]===s&&e[1]===u))?(s=Math.floor(10*Math.random()),u=Math.floor(10*Math.random())):(r.receiveAttack(s,u),null===o[s][u]?(i.setAttribute("data-id",`player-${e.number}`),n(e),c(t),d=!1):(s=Math.floor(10*Math.random()),u=Math.floor(10*Math.random())))},p=document.querySelector(".game_mode"),m=document.querySelector("#pvp"),b=document.querySelector("#pvc"),g=r("One"),f=r("Two");m.addEventListener("click",(e=>(e.preventDefault(),n(g),n(f),a(g),l(g,f),i(g),u(g,f),p.close()))),b.addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector("main");var r;return n(g),n(f),a(g),l(g,f),i(g),u(g,f),(r=f).board.populateBd(),n(r),s(r),t.classList.add("pvc"),p.close()})),document.addEventListener("onload",p.showModal())})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTaGlwID0gKG4pID0+IHtcbiAgbGV0IHNoaXBPYmogPSB7fTtcblxuICBzaGlwT2JqW1wibGVuZ3RoXCJdID0gbjtcbiAgc2hpcE9ialtcImhpdENvdW50XCJdID0gMDtcbiAgc2hpcE9ialtcInN1bmtcIl0gPSBmYWxzZTtcbiAgc2hpcE9ialtcIm9yaWVudGF0aW9uXCJdID0gXCJob3Jpem9udGFsXCI7XG4gIHNoaXBPYmpbXCJjb21wXCJdID0gW107XG4gIHNoaXBPYmpbXCJoaXRDb29yXCJdID0gW107XG5cbiAgY29uc3QgZ2V0U2hpcCA9ICgpID0+IHNoaXBPYmo7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIHNoaXBPYmouaGl0Q291bnQgKz0gMTtcbiAgICBpZiAoc2hpcE9iai5oaXRDb3VudCA9PT0gc2hpcE9iai5sZW5ndGgpIHNoaXBPYmouc3VuayA9IHRydWU7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwT2JqLnN1bmsgPT09IHRydWUgPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRTaGlwLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgeyBTaGlwIH07XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGxldCBib2FyZCA9IFtdO1xuICBsZXQgbWlzc2VzID0gW107XG4gIGxldCBoaXRzID0gW107XG5cbiAgbGV0IGFsbFNoaXBzID0ge1xuICAgIGxfc2hpcDogU2hpcCg0KSxcbiAgICBtX3NoaXBfSTogU2hpcCgzKSxcbiAgICBtX3NoaXBfSUk6IFNoaXAoMyksXG4gICAgc19zaGlwX0k6IFNoaXAoMiksXG4gICAgc19zaGlwX0lJOiBTaGlwKDIpLFxuICAgIHNfc2hpcF9JSUk6IFNoaXAoMiksXG4gICAgeHNfc2hpcF9JOiBTaGlwKDEpLFxuICAgIHhzX3NoaXBfSUk6IFNoaXAoMSksXG4gICAgeHNfc2hpcF9JSUk6IFNoaXAoMSksXG4gICAgeHNfc2hpcF9JVjogU2hpcCgxKSxcbiAgfTtcblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuICBjb25zdCBnZXRNaXNzZXMgPSAoKSA9PiBtaXNzZXM7XG4gIGNvbnN0IGdldFNoaXBzID0gKCkgPT4gYWxsU2hpcHM7XG4gIGNvbnN0IGdldEhpdHMgPSAoKSA9PiBoaXRzO1xuXG4gIGNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBib2FyZFtpXVtqXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IGlzRW1wdHkgPSAoeCwgeSkgPT4ge1xuICAgIHJldHVybiBib2FyZFt4XVt5XSA9PT0gbnVsbCA/IHRydWUgOiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBpc0ZpdCA9IChhcnIpID0+IHtcbiAgICBsZXQgc3RhdHVzID0gdHJ1ZTtcblxuICAgIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbVswXSA+IDkgfHwgaXRlbVsxXSA+IDkgfHwgIWlzRW1wdHkoaXRlbVswXSwgaXRlbVsxXSkpXG4gICAgICAgIHJldHVybiAoc3RhdHVzID0gZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfTtcblxuICBjb25zdCBjcmVhdGVDb21wID0gKHgsIHksIHNoaXApID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwLmdldFNoaXAoKS5sZW5ndGg7XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBzaGlwLmdldFNoaXAoKS5vcmllbnRhdGlvbjtcbiAgICBsZXQgdGVtcCA9IFtdO1xuICAgIGxldCBhID0geDtcbiAgICBsZXQgYiA9IHk7XG5cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICB3aGlsZSAoYiAhPT0geSArIGxlbmd0aCkge1xuICAgICAgICB0ZW1wLnB1c2goW3gsIGJdKTtcbiAgICAgICAgYiArPSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoYSAhPT0geCArIGxlbmd0aCkge1xuICAgICAgICB0ZW1wLnB1c2goW2EsIHldKTtcbiAgICAgICAgYSArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZW1wO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9ICh4LCB5LCBzaGlwKSA9PiB7XG4gICAgbGV0IHRlbXAgPSBbXTtcbiAgICBsZXQgc3RhdHVzID0gdHJ1ZTtcblxuICAgIGlmICh5ICsgbGVuZ3RoIC0gMSA+IDkgfHwgeCA+IDkgfHwgeCArIGxlbmd0aCAtIDEgPiA5IHx8IHkgPiA5KSB7XG4gICAgICByZXR1cm4gYWxlcnQoXCJTaGlwIGlzIG91dCBvZiBib3VuZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcCA9IGNyZWF0ZUNvbXAoeCwgeSwgc2hpcCk7XG4gICAgICBzdGF0dXMgPSBpc0ZpdCh0ZW1wKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzID09PSBmYWxzZSkge1xuICAgICAgc3RhdHVzID0gdHJ1ZTtcbiAgICAgIHRlbXAgPSBbXTtcbiAgICAgIHJldHVybiBhbGVydChcInNxdWFyZSBpcyBhbHJlYWR5IG9jY3VwaWVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGlwLmdldFNoaXAoKS5jb21wID0gdGVtcDtcblxuICAgICAgc2hpcC5nZXRTaGlwKCkuY29tcC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGJvYXJkW2l0ZW1bMF1dW2l0ZW1bMV1dID0gc2hpcDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICBjb25zdCBwb3B1bGF0ZUJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhbGxTaGlwcyk7XG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFtcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBzaGlwID0gYWxsU2hpcHNba2V5XTtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAuZ2V0U2hpcCgpLmxlbmd0aDtcblxuICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGxldCB6ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cbiAgICAgIHNoaXAuZ2V0U2hpcCgpLm9yaWVudGF0aW9uID0gZGlyZWN0aW9uc1t6XTtcbiAgICAgIGxldCB0ZW1wID0gY3JlYXRlQ29tcCh4LCB5LCBzaGlwKTtcbiAgICAgIGxldCBmaXQgPSBpc0ZpdCh0ZW1wKTtcblxuICAgICAgd2hpbGUgKHkgKyBsZW5ndGggLSAxID4gOSB8fCB4ICsgbGVuZ3RoIC0gMSA+IDkgfHwgZml0ID09PSBmYWxzZSkge1xuICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB6ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cbiAgICAgICAgc2hpcC5nZXRTaGlwKCkub3JpZW50YXRpb24gPSBkaXJlY3Rpb25zW3pdO1xuICAgICAgICB0ZW1wID0gY3JlYXRlQ29tcCh4LCB5LCBzaGlwKTtcbiAgICAgICAgZml0ID0gaXNGaXQodGVtcCk7XG4gICAgICB9XG5cbiAgICAgIHBsYWNlU2hpcCh4LCB5LCBzaGlwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoYm9hcmRbeF1beV0gPT09IG51bGwpIG1pc3Nlcy5wdXNoKFt4LCB5XSk7XG4gICAgZWxzZSB7XG4gICAgICBoaXRzLnB1c2goW3gsIHldKTtcbiAgICAgIGJvYXJkW3hdW3ldLmhpdCgpO1xuICAgICAgYm9hcmRbeF1beV0uZ2V0U2hpcCgpLmhpdENvb3IucHVzaChbeCwgeV0pO1xuICAgIH1cblxuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICBjb25zdCBpc0FsbFN1bmsgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBPYmplY3QudmFsdWVzKGFsbFNoaXBzKTtcbiAgICBsZXQgc3RhdHVzID0gZmFsc2U7XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5nZXRTaGlwKCkuc3VuayA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIChzdGF0dXMgPSBmYWxzZSk7XG4gICAgICB9IGVsc2Ugc3RhdHVzID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdGF0dXM7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVCb2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgZ2V0Qm9hcmQsXG4gICAgZ2V0U2hpcHMsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBnZXRNaXNzZXMsXG4gICAgZ2V0SGl0cyxcbiAgICBpc0FsbFN1bmssXG4gICAgcG9wdWxhdGVCZCxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9IChudW1iZXIpID0+IHtcbiAgbGV0IHdpbiA9IGZhbHNlO1xuICBsZXQgYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgbGV0IGlzQ29tcCA9IGZhbHNlO1xuXG4gIHJldHVybiB7XG4gICAgbnVtYmVyLFxuICAgIHdpbixcbiAgICBib2FyZCxcbiAgICBpc0NvbXAsXG4gIH07XG59O1xuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImNvbnN0IGZpbGxTcXIgPSAocGxheWVyLCBzcXIsIHRhZywgeCwgeSkgPT4ge1xuICBjb25zdCBtaXNzZXMgPSBwbGF5ZXIuYm9hcmQuZ2V0TWlzc2VzKCk7XG5cbiAgaWYgKHNxciA9PT0gbnVsbCkge1xuICAgIGlmIChcbiAgICAgIG1pc3Nlcy5maW5kKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtWzBdID09PSB4ICYmIGl0ZW1bMV0gPT09IHk7XG4gICAgICB9KVxuICAgICkge1xuICAgICAgdGFnLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFnLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcIik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHNxci5nZXRTaGlwKCkuaGl0Q29vci5maW5kKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbVswXSA9PT0geCAmJiBpdGVtWzFdID09PSB5O1xuICAgIH0pXG4gICkge1xuICAgIHRhZy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJlZDtcIik7XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlclNoaXAgPSAocGxheWVyKSA9PiB7XG4gIGxldCBib2FyZCA9IHBsYXllci5ib2FyZC5nZXRCb2FyZCgpO1xuICBjb25zdCBzaGlwc09iaiA9IHBsYXllci5ib2FyZC5nZXRTaGlwcygpO1xuICBjb25zdCBzaGlwc0xpc3QgPSBPYmplY3Qua2V5cyhzaGlwc09iaik7XG5cbiAgc2hpcHNMaXN0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICBjb25zdCBjb21wID0gc2hpcHNPYmpbc2hpcF0uZ2V0U2hpcCgpLmNvbXA7XG5cbiAgICBpZiAoY29tcC5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IHhDb29yID0gY29tcFswXVswXTtcbiAgICAgIGNvbnN0IHlDb29yID0gY29tcFswXVsxXTtcbiAgICAgIHBsYXllci5ib2FyZC5wbGFjZVNoaXAoeENvb3IsIHlDb29yLCBzaGlwc09ialtzaGlwXSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYm9hcmQ7XG59O1xuXG5jb25zdCByZW5kZXJCb2FyZCA9IChwbGF5ZXIpID0+IHtcbiAgcGxheWVyLmJvYXJkLmNyZWF0ZUJvYXJkKCk7XG5cbiAgcmVuZGVyU2hpcChwbGF5ZXIpO1xuXG4gIGNvbnN0IGJvYXJkID0gcGxheWVyLmJvYXJkLmdldEJvYXJkKCk7XG4gIGNvbnN0IHBsYXllck51bSA9IHBsYXllci5udW1iZXI7XG4gIGxldCBjdXJyZW50Qm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYm9hcmQke3BsYXllck51bX1gKTtcblxuICB3aGlsZSAoY3VycmVudEJvYXJkLmxhc3RFbGVtZW50Q2hpbGQpXG4gICAgY3VycmVudEJvYXJkLnJlbW92ZUNoaWxkKGN1cnJlbnRCb2FyZC5sYXN0RWxlbWVudENoaWxkKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZC5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKGAke3BsYXllck51bX0tc3F1YXJlYCk7XG5cbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgYCR7aX1gKTtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgYCR7an1gKTtcblxuICAgICAgZmlsbFNxcihwbGF5ZXIsIGJvYXJkW2ldW2pdLCBzcXVhcmUsIGksIGopO1xuXG4gICAgICBjdXJyZW50Qm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3VycmVudEJvYXJkO1xufTtcblxuY29uc3QgZ3JhYlBsYXllclNoaXBzID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBzaGlwc09iaiA9IHBsYXllci5ib2FyZC5nZXRTaGlwcygpO1xuICBjb25zdCBzaGlwcyA9IE9iamVjdC5rZXlzKHNoaXBzT2JqKTtcbiAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllciR7cGxheWVyLm51bWJlcn0tc2hpcHNgKTtcblxuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBzaGlwO1xuICAgIHNlbGVjdGlvbi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcblxuICByZXR1cm4gc2VsZWN0aW9uO1xufTtcblxuY29uc3QgaW5pdFBsYWNlU2hpcCA9IChwT25lLCBwVHdvKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGFjZVNoaXBCdG5gKTtcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGxldCBpZCA9IGZvcm0uZ2V0QXR0cmlidXRlKFwiaWRcIik7XG5cbiAgICBjb25zdCB4Q29vciA9IHBhcnNlSW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN5LWNvb3JgKS52YWx1ZSk7XG4gICAgY29uc3QgeUNvb3IgPSBwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjeC1jb29yYCkudmFsdWUpO1xuICAgIGNvbnN0IHNoaXBOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NoaXBzYCkudmFsdWU7XG5cbiAgICBjb25zdCBvcmllbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjb3JpZW50YXRpb25gKS52YWx1ZTtcblxuICAgIGxldCBzaGlwO1xuICAgIGlkID09PSBcInBsYXllck9uZS1mb3JtXCJcbiAgICAgID8gKHNoaXAgPSBwT25lLmJvYXJkLmdldFNoaXBzKClbc2hpcE5hbWVdKVxuICAgICAgOiAoc2hpcCA9IHBUd28uYm9hcmQuZ2V0U2hpcHMoKVtzaGlwTmFtZV0pO1xuXG4gICAgc2hpcC5nZXRTaGlwKCkub3JpZW50YXRpb24gPSBvcmllbnQ7XG5cbiAgICBpZiAoTnVtYmVyLmlzTmFOKHhDb29yKSB8fCBOdW1iZXIuaXNOYU4oeUNvb3IpKSByZXR1cm47XG4gICAgZWxzZSB7XG4gICAgICBpZiAoaWQgPT09IFwicGxheWVyT25lLWZvcm1cIikge1xuICAgICAgICBwT25lLmJvYXJkLnBsYWNlU2hpcCh4Q29vciwgeUNvb3IsIHNoaXApO1xuICAgICAgICByZW5kZXJCb2FyZChwT25lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBUd28uYm9hcmQucGxhY2VTaGlwKHhDb29yLCB5Q29vciwgc2hpcCk7XG4gICAgICAgIHJlbmRlckJvYXJkKHBUd28pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBpbml0RmluU2V0dXAgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllciR7cGxheWVyLm51bWJlcn0tZmluQnRuYCk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyJHtwbGF5ZXIubnVtYmVyfS1mb3JtYCk7XG4gIGNvbnN0IHNoaXBzT2JqID0gcGxheWVyLmJvYXJkLmdldFNoaXBzKCk7XG4gIGNvbnN0IHNoaXBzID0gT2JqZWN0LnZhbHVlcyhzaGlwc09iaik7XG4gIGxldCBpc0FsbFBsYWNlZCA9IGZhbHNlO1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBtb2RlID0gbWFpbi5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IGNvbXAgPSBzaGlwLmdldFNoaXAoKS5jb21wO1xuICAgICAgaWYgKGNvbXAubGVuZ3RoID09PSAwKSByZXR1cm4gKGlzQWxsUGxhY2VkID0gZmFsc2UpO1xuICAgICAgZWxzZSByZXR1cm4gKGlzQWxsUGxhY2VkID0gdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICBpZiAoaXNBbGxQbGFjZWQpIHtcbiAgICAgIGZvcm0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcbiAgICAgIGhpZGVCb2FyZChwbGF5ZXIpO1xuXG4gICAgICBpZiAobW9kZSA9PT0gXCJwdmNcIiB8fCBwbGF5ZXIubnVtYmVyID09PSBcIlR3b1wiKSB7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlhbG9nXCIpO1xuICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIHBsYWNlIGFsbCB0aGUgc2hpcHMgZmlyc3RcIik7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGhpZGVCb2FyZCA9IChwbGF5ZXIpID0+IHtcbiAgbGV0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtwbGF5ZXIubnVtYmVyfS1zcXVhcmVgKTtcblxuICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1wiKTtcbiAgfSk7XG59O1xuXG5jb25zdCBpbml0cGxheUJ0biA9IChQT25lLCBQVHdvKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaWFsb2dcIik7XG4gIGNvbnN0IHBsYXlXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXktd2luZG93XCIpO1xuICBjb25zdCBwbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5XCIpO1xuXG4gIHBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBwbGF5ZXIgPSBwbGF5V2luZG93LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG5cbiAgICBpZiAocGxheWVyID09PSBcInBsYXllci1Ud29cIikge1xuICAgICAgcmVuZGVyQm9hcmQoUE9uZSk7XG4gICAgICByZW5kZXJQbGF5QmQoUFR3byk7XG4gICAgICBwbGF5V2luZG93LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgYHBsYXllci0ke1BPbmUubnVtYmVyfWApO1xuICAgICAgcmV0dXJuIGRpYWxvZy5jbG9zZSgpO1xuICAgIH0gZWxzZSBpZiAocGxheWVyID09PSBcInBsYXllci1PbmVcIikge1xuICAgICAgY29uc3QgbW9kZSA9IG1haW4uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik7XG4gICAgICBwbGF5V2luZG93LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgYHBsYXllci0ke1BUd28ubnVtYmVyfWApO1xuICAgICAgaWYgKG1vZGUgPT09IFwicHZjXCIpIHtcbiAgICAgICAgYXV0b0F0ayhQT25lLCBQVHdvKTtcbiAgICAgICAgcmV0dXJuIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyQm9hcmQoUFR3byk7XG4gICAgICAgIHJlbmRlclBsYXlCZChQT25lKTtcbiAgICAgICAgcmV0dXJuIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCByZW5kZXJQbGF5QmQgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gcGxheWVyLmJvYXJkLmdldEJvYXJkKCk7XG4gIGNvbnN0IG1pc3NlcyA9IHBsYXllci5ib2FyZC5nZXRNaXNzZXMoKTtcbiAgY29uc3QgY3VyckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2JvYXJkJHtwbGF5ZXIubnVtYmVyfWApO1xuXG4gIHdoaWxlIChjdXJyQm9hcmQubGFzdEVsZW1lbnRDaGlsZClcbiAgICBjdXJyQm9hcmQucmVtb3ZlQ2hpbGQoY3VyckJvYXJkLmxhc3RFbGVtZW50Q2hpbGQpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBpdGVtID0gYm9hcmRbaV1bal07XG5cbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChgJHtwbGF5ZXIubnVtYmVyfS1zcXVhcmVgKTtcblxuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCBgJHtpfWApO1xuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCBgJHtqfWApO1xuXG4gICAgICBpbml0U3FyQnRuKHBsYXllciwgc3F1YXJlKTtcblxuICAgICAgaWYgKFxuICAgICAgICBpdGVtICE9PSBudWxsICYmXG4gICAgICAgIGl0ZW0uZ2V0U2hpcCgpLmhpdENvdW50ID4gMCAmJlxuICAgICAgICBpdGVtLmdldFNoaXAoKS5oaXRDb29yLmZpbmQoKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gaXRlbVswXSA9PT0gaSAmJiBpdGVtWzFdID09PSBqO1xuICAgICAgICB9KVxuICAgICAgKSB7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJlZDtcIik7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBtaXNzZXMuZmluZCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiBpdGVtWzBdID09PSBpICYmIGl0ZW1bMV0gPT09IGo7XG4gICAgICAgIH0pXG4gICAgICApIHtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XCIpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICB9XG5cbiAgICAgIGN1cnJCb2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgaW5pdFNxckJ0biA9IChwbGF5ZXIsIHNxdWFyZSkgPT4ge1xuICBjb25zdCBib2FyZCA9IHBsYXllci5ib2FyZDtcbiAgY29uc3QgYm9hcmRMaXN0ID0gYm9hcmQuZ2V0Qm9hcmQoKTtcbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaWFsb2dcIik7XG4gIGNvbnN0IHggPSBwYXJzZUludChzcXVhcmUuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpKTtcbiAgY29uc3QgeSA9IHBhcnNlSW50KHNxdWFyZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIikpO1xuXG4gIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIGlmIChib2FyZExpc3RbeF1beV0gPT09IG51bGwpIHtcbiAgICAgIGhpZGVCb2FyZChwbGF5ZXIpO1xuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmVkO1wiKTtcbiAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjb21wTW9kZSA9IChwbGF5ZXIpID0+IHtcbiAgcGxheWVyLmJvYXJkLnBvcHVsYXRlQmQoKTtcbiAgcmVuZGVyQm9hcmQocGxheWVyKTtcbiAgaGlkZUJvYXJkKHBsYXllcik7XG59O1xuXG5jb25zdCBhdXRvQXRrID0gKHBsYXlPbmUsIHBsYXlUd28pID0+IHtcbiAgY29uc3QgYm9hcmQgPSBwbGF5T25lLmJvYXJkO1xuICBjb25zdCBib2FyZExpc3QgPSBib2FyZC5nZXRCb2FyZCgpO1xuICBjb25zdCBtaXNzZXMgPSBib2FyZC5nZXRNaXNzZXMoKTtcbiAgY29uc3QgaGl0cyA9IGJvYXJkLmdldEhpdHMoKTtcbiAgY29uc3QgcGxheVdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheS13aW5kb3dcIik7XG4gIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgbGV0IGNvbnQgPSB0cnVlO1xuXG4gIHdoaWxlIChjb250ID09PSB0cnVlKSB7XG4gICAgaWYgKFxuICAgICAgbWlzc2VzLmZpbmQoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW1bMF0gPT09IHggJiYgaXRlbVsxXSA9PT0geTtcbiAgICAgIH0pIHx8XG4gICAgICBoaXRzLmZpbmQoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW1bMF0gPT09IHggJiYgaXRlbVsxXSA9PT0geTtcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG5cbiAgICBpZiAoYm9hcmRMaXN0W3hdW3ldID09PSBudWxsKSB7XG4gICAgICBwbGF5V2luZG93LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgYHBsYXllci0ke3BsYXlPbmUubnVtYmVyfWApO1xuICAgICAgcmVuZGVyQm9hcmQocGxheU9uZSk7XG4gICAgICByZW5kZXJQbGF5QmQocGxheVR3byk7XG4gICAgICBjb250ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgcmVuZGVyQm9hcmQsXG4gIGdyYWJQbGF5ZXJTaGlwcyxcbiAgaW5pdFBsYWNlU2hpcCxcbiAgaW5pdEZpblNldHVwLFxuICBpbml0cGxheUJ0bixcbiAgY29tcE1vZGUsXG59O1xuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQge1xuICByZW5kZXJCb2FyZCxcbiAgZ3JhYlBsYXllclNoaXBzLFxuICBpbml0UGxhY2VTaGlwLFxuICBpbml0RmluU2V0dXAsXG4gIGluaXRwbGF5QnRuLFxuICBjb21wTW9kZSxcbn0gZnJvbSBcIi4vRE9NXCI7XG5cbmNvbnN0IGdhbWVNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lX21vZGVcIik7XG5jb25zdCBwdnBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3B2cFwiKTtcbmNvbnN0IHB2Y0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHZjXCIpO1xuY29uc3QgcGxheWVyT25lID0gUGxheWVyKFwiT25lXCIpO1xuY29uc3QgcGxheWVyVHdvID0gUGxheWVyKFwiVHdvXCIpO1xuXG5wdnBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgcmVuZGVyQm9hcmQocGxheWVyT25lKTtcbiAgcmVuZGVyQm9hcmQocGxheWVyVHdvKTtcblxuICBncmFiUGxheWVyU2hpcHMocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuICAvL2dyYWJQbGF5ZXJTaGlwcyhwbGF5ZXJUd28pO1xuXG4gIGluaXRQbGFjZVNoaXAocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuICAvL2luaXRQbGFjZVNoaXAocGxheWVyVHdvKTtcblxuICBpbml0RmluU2V0dXAocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuICAvL2luaXRGaW5TZXR1cChwbGF5ZXJUd28pO1xuXG4gIGluaXRwbGF5QnRuKHBsYXllck9uZSwgcGxheWVyVHdvKTtcblxuICByZXR1cm4gZ2FtZU1vZGUuY2xvc2UoKTtcbn0pO1xuXG5wdmNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIC8vY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyVHdvLWZvcm1cIik7XG5cbiAgcmVuZGVyQm9hcmQocGxheWVyT25lKTtcbiAgcmVuZGVyQm9hcmQocGxheWVyVHdvKTtcbiAgZ3JhYlBsYXllclNoaXBzKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgaW5pdFBsYWNlU2hpcChwbGF5ZXJPbmUsIHBsYXllclR3byk7XG4gIGluaXRGaW5TZXR1cChwbGF5ZXJPbmUsIHBsYXllclR3byk7XG4gIC8vaW5pdEZpblNldHVwKHBsYXllclR3byk7XG4gIGluaXRwbGF5QnRuKHBsYXllck9uZSwgcGxheWVyVHdvKTtcblxuICBjb21wTW9kZShwbGF5ZXJUd28pO1xuXG4gIC8vZm9ybS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJwdmNcIik7XG5cbiAgcmV0dXJuIGdhbWVNb2RlLmNsb3NlKCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubG9hZFwiLCBnYW1lTW9kZS5zaG93TW9kYWwoKSk7XG4iXSwibmFtZXMiOlsiU2hpcCIsIm4iLCJzaGlwT2JqIiwiZ2V0U2hpcCIsImhpdCIsImhpdENvdW50IiwibGVuZ3RoIiwic3VuayIsImlzU3VuayIsIkdhbWVib2FyZCIsImJvYXJkIiwibWlzc2VzIiwiaGl0cyIsImFsbFNoaXBzIiwibF9zaGlwIiwibV9zaGlwX0kiLCJtX3NoaXBfSUkiLCJzX3NoaXBfSSIsInNfc2hpcF9JSSIsInNfc2hpcF9JSUkiLCJ4c19zaGlwX0kiLCJ4c19zaGlwX0lJIiwieHNfc2hpcF9JSUkiLCJ4c19zaGlwX0lWIiwiaXNGaXQiLCJhcnIiLCJzdGF0dXMiLCJmb3JFYWNoIiwiaXRlbSIsIngiLCJ5IiwiY3JlYXRlQ29tcCIsInNoaXAiLCJ0ZW1wIiwiYSIsImIiLCJvcmllbnRhdGlvbiIsInB1c2giLCJwbGFjZVNoaXAiLCJhbGVydCIsImNvbXAiLCJjcmVhdGVCb2FyZCIsImkiLCJqIiwiZ2V0Qm9hcmQiLCJnZXRTaGlwcyIsInJlY2VpdmVBdHRhY2siLCJoaXRDb29yIiwiZ2V0TWlzc2VzIiwiZ2V0SGl0cyIsImlzQWxsU3VuayIsInNoaXBzIiwiT2JqZWN0IiwidmFsdWVzIiwicG9wdWxhdGVCZCIsImtleXMiLCJkaXJlY3Rpb25zIiwia2V5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieiIsImZpdCIsIlBsYXllciIsIm51bWJlciIsIndpbiIsImlzQ29tcCIsImZpbGxTcXIiLCJwbGF5ZXIiLCJzcXIiLCJ0YWciLCJmaW5kIiwic2V0QXR0cmlidXRlIiwicmVuZGVyQm9hcmQiLCJzaGlwc09iaiIsInhDb29yIiwieUNvb3IiLCJyZW5kZXJTaGlwIiwicGxheWVyTnVtIiwiY3VycmVudEJvYXJkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxhc3RFbGVtZW50Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInNxdWFyZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImdyYWJQbGF5ZXJTaGlwcyIsInNlbGVjdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJvcHRpb24iLCJ0ZXh0Q29udGVudCIsImluaXRQbGFjZVNoaXAiLCJwT25lIiwicFR3byIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJpZCIsImdldEF0dHJpYnV0ZSIsInBhcnNlSW50IiwidmFsdWUiLCJzaGlwTmFtZSIsIm9yaWVudCIsIk51bWJlciIsImlzTmFOIiwiaW5pdEZpblNldHVwIiwibWFpbiIsImJ1dHRvbiIsImZvcm0iLCJpc0FsbFBsYWNlZCIsIm1vZGUiLCJoaWRlQm9hcmQiLCJzaG93TW9kYWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5pdHBsYXlCdG4iLCJQT25lIiwiUFR3byIsImRpYWxvZyIsInBsYXlXaW5kb3ciLCJyZW5kZXJQbGF5QmQiLCJjbG9zZSIsImF1dG9BdGsiLCJjdXJyQm9hcmQiLCJpbml0U3FyQnRuIiwiYm9hcmRMaXN0IiwicGxheU9uZSIsInBsYXlUd28iLCJjb250IiwiZ2FtZU1vZGUiLCJwdnBCdG4iLCJwdmNCdG4iLCJwbGF5ZXJPbmUiLCJwbGF5ZXJUd28iXSwic291cmNlUm9vdCI6IiJ9