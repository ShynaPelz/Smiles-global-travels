const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const navBtn = document.getElementById('nav-btn');
const hamLines = document.querySelectorAll('.ham-line');
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        // Scrolled down — white background like screenshot
        navbar.classList.add('bg-[#F0F1F7]', 'shadow-md', 'py-2');
        navbar.classList.remove('bg-transparent', 'py-4');

        // Links turn dark navy
        navLinks.forEach(link => {
            link.classList.add('text-white');
            link.classList.remove('text-white');
        });

        // Button turns dark navy with navy border
        navBtn.classList.add('bg-white', 'text-[#0F2355]', 'border-[#0F2355]', 'border' );
        navBtn.classList.remove('bg-[#0F2355]', 'text-white', 'border-white');

        hamLines.forEach(line => {
        line.style.backgroundColor = '#0F2355';
    });
    }
    else {
        // Back to top — transparent
        navbar.classList.remove('bg-[#F0F1F7]', 'shadow-md', 'py-2');
        navbar.classList.add('bg-transparent', 'py-4');

        // Links back to white
        navLinks.forEach(link => {
            link.classList.add('text-white');
            link.classList.remove('text-[#0F2355]');
        });

        // Button back to white
        navBtn.classList.add('bg-[#0F2355]', 'text-white', 'border');
        navBtn.classList.remove('bg-white', 'text-[#0F2355]', 'border-[#0F2355]');

        hamLines.forEach(line => {
        line.style.backgroundColor = 'white';
    });
    }
}); 

function openSidebar() {
document.getElementById('sidebar').classList.remove('-translate-x-full');
document.getElementById('sidebar').classList.add('translate-x-0');
document.getElementById('sidebar-overlay').classList.remove('hidden');
}

function closeSidebar() {
document.getElementById('sidebar').classList.remove('translate-x-0');
document.getElementById('sidebar').classList.add('-translate-x-full');
document.getElementById('sidebar-overlay').classList.add('hidden');
}