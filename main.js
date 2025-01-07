// main.js

import { computeHeavyTask } from "./computeHeavyTask.js";
import { computeHeavyTaskByWorker } from "./computeHeavyTaskByWorker.js";

const buttonHeavyComputation = document.getElementById("heavyComputation");
const buttonHeavyComputationWithWorker = document.getElementById(
  "heavyComputationWithWorker"
);

// Xử lý trên Main Thread (Gây lag UI)
buttonHeavyComputation.addEventListener("click", computeHeavyTask);

// Xử lý bằng Web Worker (Không lag UI)
buttonHeavyComputationWithWorker.addEventListener(
  "click",
  computeHeavyTaskByWorker
);
