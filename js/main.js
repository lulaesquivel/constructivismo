document.addEventListener('DOMContentLoaded', function () {
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

    // Custom Lightbox for gallery
    const customLightbox = document.getElementById('custom-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const galleryLinks = document.querySelectorAll('.gallery-grid .gallery-item a');
    const closeBtn = document.querySelector('.close-btn');

    if (customLightbox && lightboxImg && galleryLinks.length > 0 && closeBtn) {
        galleryLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                customLightbox.style.display = 'flex';
                lightboxImg.src = this.href;
            });
        });

        const closeModal = () => {
            customLightbox.style.display = 'none';
        };

        closeBtn.addEventListener('click', closeModal);
        customLightbox.addEventListener('click', function (e) {
            if (e.target === customLightbox) {
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
    const artistSearch = document.getElementById('artist-search');

    if (artistItems.length > 0 && artistLightbox) {
        artistItems.forEach(item => {
            item.addEventListener('click', function () {
                const name = this.querySelector('h3').textContent;
                const bio = this.dataset.bio;
                const works = this.dataset.works.split(',');
                const imgSrc = this.querySelector('img').src;

                artistLightboxName.textContent = name;
                artistLightboxBio.textContent = bio;
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

        if (artistSearch) {
            artistSearch.addEventListener('keyup', function (e) {
                const searchTerm = e.target.value.toLowerCase();

                artistItems.forEach(item => {
                    const artistName = item.querySelector('h3').textContent.toLowerCase();
                    if (artistName.includes(searchTerm)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        }
    }

    // Blog Page
    const blogItems = document.querySelectorAll('.blog-item');
    const blogLightbox = document.getElementById('blog-lightbox');
    const blogLightboxImg = document.getElementById('lightbox-blog-img');
    const blogLightboxTitle = document.getElementById('lightbox-blog-title');
    const blogLightboxText = document.getElementById('lightbox-blog-text');
    const blogCloseBtn = blogLightbox ? blogLightbox.querySelector('.close-btn') : null;

    if (blogItems.length > 0 && blogLightbox) {
        blogItems.forEach(item => {
            item.addEventListener('click', function () {
                const title = this.querySelector('h3').textContent;
                const shortText = this.querySelector('p').textContent;
                const fullText = this.dataset.fullText;
                const imgSrc = this.querySelector('img').src;

                blogLightboxTitle.textContent = title;
                blogLightboxText.innerHTML = shortText + '<br><br>' + fullText;
                blogLightboxImg.src = imgSrc;

                blogLightbox.style.display = 'flex';
            });
        });

        const closeBlogModal = () => {
            blogLightbox.style.display = 'none';
        };

        if (blogCloseBtn) {
            blogCloseBtn.addEventListener('click', closeBlogModal);
        }

        blogLightbox.addEventListener('click', function (e) {
            if (e.target === blogLightbox) {
                closeBlogModal();
            }
        });
    }
});
