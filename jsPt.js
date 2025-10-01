document.addEventListener('DOMContentLoaded', function() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Убираем активные классы
            navBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Активируем выбранную вкладку
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Подсветка важных терминов
    const importantTerms = document.querySelectorAll('.important-term');
    importantTerms.forEach(term => {
        term.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 15px rgba(100, 200, 255, 0.6)';
        });
        
        term.addEventListener('mouseleave', function() {
            this.style.textShadow = '0 0 10px rgba(100, 200, 255, 0.3)';
        });
    });
});