// Обновите обработчики событий
document.querySelectorAll('.menu-item').forEach(item => {
    const submenu = item.querySelector('.submenu');
    let timeout;

    item.addEventListener('mouseenter', () => {
            clearTimeout(timeout);
            submenu.style.display = 'block';
            submenu.style.opacity = '1';
            submenu.style.transform = 'translateY(0)';
        });

    item.addEventListener('mouseleave', () => {
            timeout = setTimeout(() => {
                submenu.style.display = 'none';
                submenu.style.opacity = '0';
                submenu.style.transform = 'translateY(-10px)';
            }, 300);
        });

    submenu.addEventListener('mouseenter', () => clearTimeout(timeout));
    submenu.addEventListener('mouseleave', () => {
            timeout = setTimeout(() => {
                submenu.style.display = 'none';
                submenu.style.opacity = '0';
                submenu.style.transform = 'translateY(-10px)';
            }, 200);
        });
    });

document.getElementById('toc-toggle').addEventListener('click', function() {
        const tocList = document.getElementById('toc-list');
        const NotisExpanded = this.getAttribute('aria-expanded') === 'true';
        
        tocList.style.display = NotisExpanded ? 'block' : 'none';
        this.setAttribute('aria-expanded', !NotisExpanded);
        this.textContent = NotisExpanded ?   '[Скрыть]' : '[Показать]';
        });


const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    targetElement.scrollIntoView({behavior: 'smooth'});
                });
            });
