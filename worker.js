import { TIME_COMPLEXITY } from "./constanst.js";
import { fakePerformanceBlocking } from "./helper.js";

function heavyComputeHandlerByWorker(processId) {
  let sum = 0;
  for (let i = 1; i <= TIME_COMPLEXITY; i++) {
    sum += Math.sqrt(i);
    if (i % 2_000_000 === 0) {
      self.postMessage(
        `(${processId}) Tiến trình: ${Math.round((i / TIME_COMPLEXITY) * 100)}%`
      );
      fakePerformanceBlocking(400); // Giả lập độ trễ để thấy tiến trình
    }
  }
  self.postMessage(`(${processId}) ✅ Kết quả: ${sum}`);
}

self.onmessage = function (event) {
  const processId = event.data;
  heavyComputeHandlerByWorker(processId); // Sử dụng hàm từ self
};
