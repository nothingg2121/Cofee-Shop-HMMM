let search = document.querySelector('.search-box'); 


document.querySelector('#search-icon').onclick = () => { 
        search.classList.toggle('active'); 
        navbar.classList.remove("active");
 }

let navbar = document.querySelector('.navbar'); 

document.querySelector('#menu-icon').onclick = () => { 
        navbar.classList.toggle('active'); 
        search.classList.remove('active'); 
}

window.onscroll = () => { 
        navbar.classList.remove('active'); 
        search.classList.remove('active'); 
}

// Pilih elemen gambar yang ingin dianimasikan
const imagesToAnimate = document.querySelectorAll('.menu-item img');

// Buat observer untuk mendeteksi scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Tambahkan kelas animasi
        }
    });
}, {
    threshold: 0.5 // Gambar minimal 50% terlihat untuk animasi
});

// Pantau setiap gambar
imagesToAnimate.forEach(img => observer.observe(img));



const cursor = document.querySelector('.cursor');

// Menggerakkan kursor
document.addEventListener('mousemove', (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Menambahkan efek saat hover
const hoverElements = document.querySelectorAll('a, button, .btn');
hoverElements.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-grow');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-grow');
  });
});




let header = document.querySelector('header'); 

window.addEventListener('scroll', () => { 
        header.classList.toggle('shadow', window.scrollY > 0);
});


