document.addEventListener('DOMContentLoaded', function () {
    // --- Blog Lightbox ---
    const blogLightbox = document.getElementById('blog-lightbox');
    if (blogLightbox) {
        const blogItems = document.querySelectorAll('.blog-item');
        const blogLightboxImg = document.getElementById('lightbox-blog-img');
        const blogLightboxTitle = document.getElementById('lightbox-blog-title');
        const blogLightboxText = document.getElementById('lightbox-blog-text');
        const blogCloseBtn = blogLightbox.querySelector('.close-btn');

        blogItems.forEach(item => {
            item.addEventListener('click', function() {
                // 1. Obtener la información de la tarjeta clickeada
                const imgSrc = this.querySelector('img').src;
                const title = this.querySelector('h3').innerText;
                const fullText = this.getAttribute('data-full-text');

                // 2. Poblar el lightbox con esa información
                blogLightboxImg.src = imgSrc;
                blogLightboxTitle.innerText = title;
                blogLightboxText.innerHTML = fullText; // Usamos innerHTML para renderizar las etiquetas del texto

                // 3. Mostrar el lightbox
                blogLightbox.style.display = 'flex';
            });
        });

        // Función para cerrar el lightbox
        function closeLightbox() {
            blogLightbox.style.display = 'none';
        }

        // Eventos para cerrar el lightbox
        blogCloseBtn.addEventListener('click', closeLightbox);
        blogLightbox.addEventListener('click', function(event) {
            // Se cierra solo si se hace clic en el fondo oscuro (el overlay)
            if (event.target === blogLightbox) {
                closeLightbox();
            }
        });
    }
    
    // ... Aquí puede ir otro código que tengas en main.js
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    // El menú hamburguesa ya no existe en el nuevo diseño, pero dejamos el código
    // de forma segura por si se reutiliza en el futuro.
    if (hamburgerMenu && navMenu) {
        hamburgerMenu.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }

    const carousel = document.querySelector('.simple-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (carousel && prevBtn && nextBtn) {
        const scrollAmount = 300; // Ajusta este valor según sea necesario

        prevBtn.addEventListener('click', function () {
            carousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', function () {
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // --- Nueva Galería Interactiva y Lightbox ---
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryLightbox = document.getElementById('gallery-lightbox');
    const galleryLightboxImg = document.getElementById('lightbox-img');
    const galleryLightboxTitle = document.getElementById('lightbox-title');
    const galleryLightboxDescription = document.getElementById('lightbox-description');
    const galleryCloseBtn = galleryLightbox ? galleryLightbox.querySelector('.close-btn') : null;

    if (galleryItems.length > 0 && galleryLightbox) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.querySelector('img').src;
                const title = item.querySelector('.overlay-title').textContent;
                const description = item.querySelector('.overlay-description').innerHTML;

                galleryLightboxImg.src = imgSrc;
                galleryLightboxTitle.textContent = title;
                galleryLightboxDescription.innerHTML = description;

                galleryLightbox.style.display = 'flex';
            });
        });

        const closeModal = () => {
            galleryLightbox.style.display = 'none';
        };

        if (galleryCloseBtn) {
            galleryCloseBtn.addEventListener('click', closeModal);
        }

        galleryLightbox.addEventListener('click', (e) => {
            // Cierra si se hace clic en el fondo oscuro, no en el contenido
            if (e.target === galleryLightbox) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && galleryLightbox.style.display === 'flex') {
                closeModal();
            }
        });
    }

    // Artist Page
    const artistItems = document.querySelectorAll('.artist-item');
    const artistLightbox = document.getElementById('artist-lightbox');
    const artistLightboxImg = document.getElementById('lightbox-artist-img');
    const artistLightboxName = document.getElementById('lightbox-artist-name');
    const artistLightboxBio = document.getElementById('lightbox-artist-bio');
    const artistLightboxWorks = document.getElementById('lightbox-artist-works');
    const artistCloseBtn = artistLightbox ? artistLightbox.querySelector('.close-btn') : null;

    if (artistItems.length > 0 && artistLightbox) {
        artistItems.forEach(item => {
            item.addEventListener('click', function () {
                const name = this.querySelector('h3').textContent;
                const bio = this.dataset.bio;
                const works = this.dataset.works.split(',');
                const imgSrc = this.querySelector('img').src;

                artistLightboxName.textContent = name;
                artistLightboxBio.innerHTML = bio;
                artistLightboxImg.src = imgSrc;
                artistLightboxWorks.innerHTML = '';
                works.forEach(work => {
                    const li = document.createElement('li');
                    li.textContent = work;
                    artistLightboxWorks.appendChild(li);
                });

                artistLightbox.style.display = 'flex';
            });
        });

        const closeArtistModal = () => {
            artistLightbox.style.display = 'none';
        };

        if (artistCloseBtn) {
            artistCloseBtn.addEventListener('click', closeArtistModal);
        }

        artistLightbox.addEventListener('click', function (e) {
            if (e.target === artistLightbox) {
                closeArtistModal();
            }
        });
    }
});
