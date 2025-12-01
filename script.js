// DOM 요소 선택
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('.icon');
const body = document.body;

// 로컬 스토리지에서 사용자 테마 설정 가져오기
const currentTheme = localStorage.getItem('theme');

// 저장된 테마가 있다면 적용
if (currentTheme) {
    body.classList.add(currentTheme);
    updateIcon(currentTheme === 'dark-theme');
}

// 버튼 클릭 이벤트 리스너
themeToggleBtn.addEventListener('click', () => {
    // body에 dark-theme 클래스 토글
    body.classList.toggle('dark-theme');

    // 현재 다크모드 상태인지 확인
    const isDarkMode = body.classList.contains('dark-theme');

    // 아이콘 업데이트
    updateIcon(isDarkMode);

    // 로컬 스토리지에 현재 상태 저장
    localStorage.setItem('theme', isDarkMode ? 'dark-theme' : 'light-theme');
});

// 아이콘 변경 함수
function updateIcon(isDark) {
    // 다크 모드면 해(☀️), 라이트 모드면 달(🌙) 아이콘으로 변경
    themeIcon.textContent = isDark ? '☀️' : '🌙';
}
