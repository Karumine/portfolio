let sections = document.querySelectorAll(".section");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll(".nav-links li"); // เลือก list items ของ navbar
let currentSection = 0;
let isScrolling = false;

// ฟังก์ชันที่เลื่อนหน้าจอ
function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return;
    isScrolling = true;

    sections[index].scrollIntoView({ behavior: "smooth" });

    // ซ่อน Navbar เมื่อไปที่ Section 0
    if (index === 0) {
        navbar.style.top = "-100px"; // ซ่อน Navbar
    } else {
        navbar.style.top = "0"; // แสดง Navbar เมื่อเลื่อนไปหน้าอื่น
    }

    setTimeout(() => {
        currentSection = index;
        isScrolling = false;
    }, 500); // ลดค่าหน่วงให้เร็วขึ้น (200ms)
}

// ฟังก์ชันตรวจสอบตำแหน่งการเลื่อนและเปลี่ยนแปลง Navbar
function updateNavbarOnScroll() {
    let currentSectionIndex = 0;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;

        // ตรวจสอบว่าถึง section ที่กำหนดหรือไม่
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionIndex = index;
        }
    });

    // เปลี่ยนสถานะ active ของ navbar
    navLinks.forEach((link, index) => {
        if (currentSectionIndex === index) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // ซ่อน Navbar เมื่ออยู่ที่ Section 0
    if (currentSectionIndex === 0) {
        navbar.style.top = "-100px"; // ซ่อน Navbar
    } else {
        navbar.style.top = "0"; // แสดง Navbar เมื่ออยู่ใน Section อื่นๆ
    }
    // อัปเดต currentSection หลังจากตรวจสอบการเลื่อน
    currentSection = currentSectionIndex;
}



// ดักจับการ Scroll Mouse
window.addEventListener("wheel", function (event) {
    if (isScrolling) return;

    if (event.deltaY > 0) {
        scrollToSection(currentSection + 1);
    } else {
        scrollToSection(currentSection - 1);
    }
});

// ดักจับการกดปุ่มลูกศรบนคีย์บอร์ด
window.addEventListener("keydown", function (event) {
    if (isScrolling) return;

    if (event.key === "ArrowDown") {
        scrollToSection(currentSection + 1);
    } else if (event.key === "ArrowUp") {
        scrollToSection(currentSection - 1);
    }
});

// ใช้ฟังก์ชัน updateNavbarOnScroll ในการตรวจจับตำแหน่งการเลื่อน
window.addEventListener('scroll', updateNavbarOnScroll);