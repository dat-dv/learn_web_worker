
export function appendListItem(list, text) {
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

export function fakePerformanceBlocking(ms) {
  const start = performance.now();
  while (performance.now() - start < ms) {
    // Block thread trong ms giây
  }
}