const storageKey = 'today-promise-tasks-v1';
const defaultTasks = [
  { text: '물 6잔 마시기', done: false },
  { text: '20분 걷기', done: false },
  { text: '공부 30분 하기', done: false },
  { text: '오늘 할 일 하나 마무리하기', done: false }
];
let tasks;
try { tasks = JSON.parse(localStorage.getItem(storageKey)) || defaultTasks; } catch { tasks = defaultTasks; }

const list = document.getElementById('tasks');
const count = document.getElementById('count');
const remaining = document.getElementById('remaining');
const progress = document.getElementById('progress');
const bar = document.getElementById('bar');
const message = document.getElementById('message');
document.getElementById('date').textContent = new Intl.DateTimeFormat('ko-KR', { month:'long', day:'numeric', weekday:'long' }).format(new Date());

function save() { localStorage.setItem(storageKey, JSON.stringify(tasks)); }
function render() {
  list.replaceChildren();
  if (!tasks.length) { const empty = document.createElement('li'); empty.className = 'empty'; empty.textContent = '오늘의 약속을 하나 적어보세요.'; list.append(empty); }
  tasks.forEach((task, index) => {
    const item = document.createElement('li');
    if (task.done) item.classList.add('done');
    const check = document.createElement('input'); check.type = 'checkbox'; check.id = `task-${index}`; check.checked = task.done;
    check.addEventListener('change', () => { task.done = check.checked; save(); render(); });
    const label = document.createElement('label'); label.htmlFor = check.id; label.textContent = task.text;
    const remove = document.createElement('button'); remove.className = 'delete'; remove.type = 'button'; remove.textContent = '삭제'; remove.setAttribute('aria-label', `${task.text} 삭제`);
    remove.addEventListener('click', () => { tasks.splice(index, 1); save(); render(); });
    item.append(check, label, remove); list.append(item);
  });
  const done = tasks.filter(task => task.done).length;
  const percent = tasks.length ? Math.round(done / tasks.length * 100) : 0;
  count.textContent = `${done} / ${tasks.length}`;
  remaining.textContent = tasks.length ? `${tasks.length - done}개 남음` : '';
  progress.setAttribute('aria-valuenow', String(percent)); bar.style.width = `${percent}%`;
  message.textContent = tasks.length && done === tasks.length ? '오늘의 약속을 전부 지켰어요! ✨' : done ? '좋아요. 하나씩 해내고 있어요.' : '부담 없이, 하나씩 시작해요.';
}
document.getElementById('form').addEventListener('submit', event => {
  event.preventDefault(); const input = document.getElementById('task-input'); const text = input.value.trim();
  if (!text) return; tasks.push({ text, done:false }); save(); input.value = ''; render();
});
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js'));
render();
