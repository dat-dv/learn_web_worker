import { TIME_COMPLEXITY } from "./constanst.js";
import { appendListItem, fakePerformanceBlocking } from "./helper.js";

const resultList = document.getElementById("result");
const useSetTimeoutCheckbox = document.getElementById("useSetTimeout");
let countClickButtonHeavy = 0;

function heavyComputeHandler(processId, cb) {
  let sum = 0;
  cb(`(${processId}) ⏳ Đang tính toán...`);
  for (let i = 1; i <= TIME_COMPLEXITY; i++) {
    sum += Math.sqrt(i);
    if (i % 2_000_000 === 0) {
      cb(`Tiến trình: ${Math.round((i / TIME_COMPLEXITY) * 100)}%`);
      fakePerformanceBlocking(400);
    }
  }
  cb(`(${processId}) ✅ Kết quả: ${sum}`);
}

export function computeHeavyTask() {
  countClickButtonHeavy = countClickButtonHeavy + 1;
  const newSession = document.createElement("ul");
  resultList.appendChild(newSession);
  function cb(text) {
    appendListItem(newSession, text);
  }
  if (useSetTimeoutCheckbox.checked) {
    setTimeout(() => heavyComputeHandler(countClickButtonHeavy, cb), 0);
  } else {
    heavyComputeHandler(countClickButtonHeavy, cb);
  }
}
