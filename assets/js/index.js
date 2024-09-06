let ps;

function showSection(sectionId) {
    // Ẩn tất cả các section
    document.querySelectorAll('.section').forEach(function (section) {
        section.style.display = 'none';
    });

    // Hiển thị section được chọn
    document.getElementById(sectionId).style.display = 'block';

    // Xóa lớp active từ tất cả các nav-item
    document.querySelectorAll('.nav-item').forEach(function (item) {
        item.classList.remove('active');
    });

    // Thêm lớp active vào nav-item được chọn
    document.querySelector(`.nav-item[data-section="${sectionId}"]`).classList.add('active');
}

// Hiển thị mặc định section đầu tiên khi tải trang
document.addEventListener("DOMContentLoaded", function () {
    showSection('home');
});

// Thêm code để xử lý toggle menu
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const rightSideMenu = document.getElementById('right-side-menu');
    const container = document.querySelector('.container-fluid');
    const menuIcon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', function() {
        rightSideMenu.classList.toggle('menu-active');
        container.classList.toggle('menu-open');
        menuIcon.classList.toggle('ti-close');
        menuIcon.classList.toggle('ti-menu');
    });

    // Đóng menu khi click bên ngoài
    document.addEventListener('click', function(event) {
        if (!rightSideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            rightSideMenu.classList.remove('menu-active');
            container.classList.remove('menu-open');
            menuIcon.classList.remove('ti-close');
            menuIcon.classList.add('ti-menu');
        }
    });
});

// Thêm code để xử lý chuyển đổi chế độ sáng/tối
document.addEventListener("DOMContentLoaded", function() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;
    const avatarImg = document.querySelector('.header-photo img');

    // Kiểm tra và áp dụng chế độ đã lưu
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateThemeIcon(savedTheme === 'light-mode');
        updateAvatar(savedTheme === 'light-mode');
    }

    themeToggleBtn.addEventListener('click', function() {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark-mode');
            updateThemeIcon(false);
            updateAvatar(false);
        } else {
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
            updateThemeIcon(true);
            updateAvatar(true);
        }
    });

    function updateThemeIcon(isLightMode) {
        const icon = themeToggleBtn.querySelector('i');
        if (isLightMode) {
            icon.classList.remove('ti-light-bulb');
            icon.classList.add('ti-shine');
        } else {
            icon.classList.remove('ti-shine');
            icon.classList.add('ti-light-bulb');
        }
    }

    function updateAvatar(isLightMode) {
        if (avatarImg) {
            if (isLightMode) {
                avatarImg.src = './assets/img/avatar-light.jpg';
            } else {
                avatarImg.src = './assets/img/avatar.png';
            }
        }
    }
});


