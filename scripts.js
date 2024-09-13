document.getElementById('toggle-mode').addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    document.getElementById('toggle-mode').textContent = isDarkMode ? 'Mode Siang' : 'Mode Malam';
});
