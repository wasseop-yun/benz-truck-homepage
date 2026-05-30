// 모바일 메뉴 토글
const ham = document.getElementById('hamburger');
const menu = document.getElementById('menu');
if (ham && menu) {
  ham.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}
