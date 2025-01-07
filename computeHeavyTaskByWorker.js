import { appendListItem } from "./helper.js";

const worker = new Worker("./worker.js", { type: "module" });
const workerResultList = document.getElementById("workerResult");
let countClickButtonHeavyWithWorker = 0;


export function computeHeavyTaskByWorker() {
  countClickButtonHeavyWithWorker = countClickButtonHeavyWithWorker + 1;
  const newWorkerSession = document.createElement("ul");
  workerResultList.appendChild(newWorkerSession);
  appendListItem(
    newWorkerSession,
    `(${countClickButtonHeavyWithWorker}) ⏳ Đang tính toán...`
  );
  worker.postMessage(countClickButtonHeavyWithWorker);
  worker.onmessage = function (event) {
    appendListItem(newWorkerSession, event.data);
  };
}
