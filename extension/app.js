const sample = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}\n===TEXT===\nContact support at admin@cloud.io or dev@infra.net.";

const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');
const statsEl = document.getElementById('output-stats') || document.getElementById('stats');

function process() {
  const parts = inputEl.value.split(/===+TEXT===+/);
  const pattern = (parts[0] || '').trim();
  const text = (parts[1] || '').trim();
  const res = QuickRegex.testPattern(pattern, 'g', text);
  outputEl.value = JSON.stringify(res, null, 2);
  if (statsEl) statsEl.textContent = res.valid ? `Found ${res.count} regex matches` : res.error;
}

document.getElementById('btn-run').addEventListener('click', process);
inputEl.addEventListener('input', process);
document.getElementById('btn-sample').addEventListener('click', () => { inputEl.value = sample; process(); });
document.getElementById('btn-copy').addEventListener('click', () => { navigator.clipboard.writeText(outputEl.value); alert('Copied regex report!'); });
if (document.getElementById('btn-clear')) document.getElementById('btn-clear').addEventListener('click', () => { inputEl.value = ''; outputEl.value = ''; });
