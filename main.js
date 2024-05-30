(()=>{"use strict";const t=t=>{let e={};return e.length=t,e.hitCount=0,e.sunk=!1,e.orientation="horizontal",{getShip:()=>e,hit:()=>{e.hitCount+=1,e.hitCount===e.length&&(e.sunk=!0)},isSunk:()=>!0===e.sunk}},e=e=>({number:e,win:!1,board:(()=>{let e=[],r=[],n={l_ship:t(4),m_ship_I:t(3),m_ship_II:t(3),s_ship_I:t(2),s_ship_II:t(2),s_ship_III:t(2),xs_ship_I:t(1),xs_ship_II:t(1),xs_ship_III:t(1),xs_ship_IV:t(1)};return{createBoard:()=>{for(let t=0;t<10;t++){e[t]=[];for(let r=0;r<10;r++)e[t][r]=null}return e},placeShip:(t,r,n)=>{const s=n.getShip().length;let i=t,o=r;if("horizontal"===n.getShip().orientation)for(;o!==r+s;)e[t][o]=n,o+=1;else for(;i!==t+s;)e[i][r]=n,i+=1;return e},getBoard:()=>e,getShips:()=>n,receiveAttack:(t,n)=>(null===e[t][n]?r.push([t,n]):e[t][n].hit(),e),getMisses:()=>r,isAllSunk:()=>{const t=Object.values(n);let e=!1;return t.forEach((t=>{if(!1===t.getShip().sunk)return e=!1;e=!0})),e}}})(),isComp:!1}),r=t=>{const e=t.board.getBoard(),r=t.number;let n=document.getElementById(`board${r}`);for(let t=0;t<e.length;t++)for(let r=0;r<e.length;r++){const e=document.createElement("button");e.setAttribute("data-x",`${t}`),e.setAttribute("data-y",`${r}`),n.appendChild(e)}return n};let n=e("One"),s=e("Two");n.board.createBoard(),s.board.createBoard(),r(n),r(s)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1hLGNBRWhCdUIsRUFBWVUsR0FDWlYsRUFBWVcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2hpcCA9IChuKSA9PiB7XG4gIGxldCBzaGlwT2JqID0ge307XG5cbiAgc2hpcE9ialtcImxlbmd0aFwiXSA9IG47XG4gIHNoaXBPYmpbXCJoaXRDb3VudFwiXSA9IDA7XG4gIHNoaXBPYmpbXCJzdW5rXCJdID0gZmFsc2U7XG4gIHNoaXBPYmpbXCJvcmllbnRhdGlvblwiXSA9IFwiaG9yaXpvbnRhbFwiO1xuXG4gIGNvbnN0IGdldFNoaXAgPSAoKSA9PiBzaGlwT2JqO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBzaGlwT2JqLmhpdENvdW50ICs9IDE7XG4gICAgaWYgKHNoaXBPYmouaGl0Q291bnQgPT09IHNoaXBPYmoubGVuZ3RoKSBzaGlwT2JqLnN1bmsgPSB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcE9iai5zdW5rID09PSB0cnVlID8gdHJ1ZSA6IGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0U2hpcCxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IHsgU2hpcCB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9IChudW1iZXIpID0+IHtcbiAgbGV0IHdpbiA9IGZhbHNlO1xuICBsZXQgYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgbGV0IGlzQ29tcCA9IGZhbHNlO1xuXG4gIHJldHVybiB7XG4gICAgbnVtYmVyLFxuICAgIHdpbixcbiAgICBib2FyZCxcbiAgICBpc0NvbXAsXG4gIH07XG59O1xuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgbGV0IGJvYXJkID0gW107XG4gIGxldCBtaXNzZXMgPSBbXTtcblxuICBsZXQgYWxsU2hpcHMgPSB7XG4gICAgbF9zaGlwOiBTaGlwKDQpLFxuICAgIG1fc2hpcF9JOiBTaGlwKDMpLFxuICAgIG1fc2hpcF9JSTogU2hpcCgzKSxcbiAgICBzX3NoaXBfSTogU2hpcCgyKSxcbiAgICBzX3NoaXBfSUk6IFNoaXAoMiksXG4gICAgc19zaGlwX0lJSTogU2hpcCgyKSxcbiAgICB4c19zaGlwX0k6IFNoaXAoMSksXG4gICAgeHNfc2hpcF9JSTogU2hpcCgxKSxcbiAgICB4c19zaGlwX0lJSTogU2hpcCgxKSxcbiAgICB4c19zaGlwX0lWOiBTaGlwKDEpLFxuICB9O1xuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmQ7XG4gIGNvbnN0IGdldE1pc3NlcyA9ICgpID0+IG1pc3NlcztcbiAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiBhbGxTaGlwcztcblxuICBjb25zdCBjcmVhdGVCb2FyZCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGJvYXJkW2ldID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgYm9hcmRbaV1bal0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoeCwgeSwgc2hpcCkgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAuZ2V0U2hpcCgpLmxlbmd0aDtcbiAgICBsZXQgYSA9IHg7XG4gICAgbGV0IGIgPSB5O1xuXG4gICAgaWYgKHNoaXAuZ2V0U2hpcCgpLm9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgd2hpbGUgKGIgIT09IHkgKyBsZW5ndGgpIHtcbiAgICAgICAgYm9hcmRbeF1bYl0gPSBzaGlwO1xuICAgICAgICBiICs9IDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChhICE9PSB4ICsgbGVuZ3RoKSB7XG4gICAgICAgIGJvYXJkW2FdW3ldID0gc2hpcDtcbiAgICAgICAgYSArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoYm9hcmRbeF1beV0gPT09IG51bGwpIG1pc3Nlcy5wdXNoKFt4LCB5XSk7XG4gICAgZWxzZSB7XG4gICAgICBib2FyZFt4XVt5XS5oaXQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgaXNBbGxTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gT2JqZWN0LnZhbHVlcyhhbGxTaGlwcyk7XG4gICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAuZ2V0U2hpcCgpLnN1bmsgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAoc3RhdHVzID0gZmFsc2UpO1xuICAgICAgfSBlbHNlIHN0YXR1cyA9IHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RhdHVzO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlQm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIGdldEJvYXJkLFxuICAgIGdldFNoaXBzLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgZ2V0TWlzc2VzLFxuICAgIGlzQWxsU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiY29uc3QgcmVuZGVyQm9hcmQgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gcGxheWVyLmJvYXJkLmdldEJvYXJkKCk7XG4gIGNvbnN0IHBsYXllck51bSA9IHBsYXllci5udW1iZXI7XG4gIGxldCBjdXJyZW50Qm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYm9hcmQke3BsYXllck51bX1gKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZC5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgYCR7aX1gKTtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgYCR7an1gKTtcblxuICAgICAgY3VycmVudEJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnRCb2FyZDtcbn07XG5cbmV4cG9ydCB7IHJlbmRlckJvYXJkIH07XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IHJlbmRlckJvYXJkIH0gZnJvbSBcIi4vRE9NXCI7XG5cbmxldCBwbGF5ZXJPbmUgPSBQbGF5ZXIoXCJPbmVcIik7XG5sZXQgcGxheWVyVHdvID0gUGxheWVyKFwiVHdvXCIpO1xuXG5wbGF5ZXJPbmUuYm9hcmQuY3JlYXRlQm9hcmQoKTtcbnBsYXllclR3by5ib2FyZC5jcmVhdGVCb2FyZCgpO1xuXG5yZW5kZXJCb2FyZChwbGF5ZXJPbmUpO1xucmVuZGVyQm9hcmQocGxheWVyVHdvKTtcbiJdLCJuYW1lcyI6WyJTaGlwIiwibiIsInNoaXBPYmoiLCJnZXRTaGlwIiwiaGl0IiwiaGl0Q291bnQiLCJsZW5ndGgiLCJzdW5rIiwiaXNTdW5rIiwiUGxheWVyIiwibnVtYmVyIiwid2luIiwiYm9hcmQiLCJtaXNzZXMiLCJhbGxTaGlwcyIsImxfc2hpcCIsIm1fc2hpcF9JIiwibV9zaGlwX0lJIiwic19zaGlwX0kiLCJzX3NoaXBfSUkiLCJzX3NoaXBfSUlJIiwieHNfc2hpcF9JIiwieHNfc2hpcF9JSSIsInhzX3NoaXBfSUlJIiwieHNfc2hpcF9JViIsImNyZWF0ZUJvYXJkIiwiaSIsImoiLCJwbGFjZVNoaXAiLCJ4IiwieSIsInNoaXAiLCJhIiwiYiIsIm9yaWVudGF0aW9uIiwiZ2V0Qm9hcmQiLCJnZXRTaGlwcyIsInJlY2VpdmVBdHRhY2siLCJwdXNoIiwiZ2V0TWlzc2VzIiwiaXNBbGxTdW5rIiwic2hpcHMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzdGF0dXMiLCJmb3JFYWNoIiwiR2FtZWJvYXJkIiwiaXNDb21wIiwicmVuZGVyQm9hcmQiLCJwbGF5ZXIiLCJwbGF5ZXJOdW0iLCJjdXJyZW50Qm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3F1YXJlIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwicGxheWVyT25lIiwicGxheWVyVHdvIl0sInNvdXJjZVJvb3QiOiIifQ==