if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

window.onload = function() {
    window.scrollTo(0, 0);
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 10);
};

document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
    // Initialize Lucide Icons
    lucide.createIcons();

    // Theme Logic
    let isDark = true;
    const themeBtn = document.getElementById('theme-toggle');
    const mobileThemeBtn = document.getElementById('mobile-theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const wrapper = document.getElementById('app-wrapper');
    
    // Elements to update styles manually for vanilla
    const shadow = document.getElementById('image-shadow');
    const borderDecor = document.getElementById('border-decor');
    const marqueeBg = document.getElementById('marquee-bg');
    const arrowBtn = document.getElementById('down-arrow-btn');
    const aboutSection = document.getElementById('about');
    const themeBorders = document.querySelectorAll('.theme-border');
    const ctaSection = document.getElementById('cta-section');
    const ctaStroke = document.getElementById('cta-stroke');
    const ctaDiv = document.getElementById('cta-divider');
    const ctaBtn = document.getElementById('cta-btn');
    const supSection = document.getElementById('supporters');
    const footer = document.getElementById('footer');
    const heroImage = document.getElementById('hero-image');
    const heroImageContainer = document.getElementById('hero-image-container');

    function updateTheme() {
        if (!isDark) {
            wrapper.classList.remove('dark');
            wrapper.classList.add('light');
            themeIcon.setAttribute('data-lucide', 'moon');
            if(mobileThemeBtn) mobileThemeBtn.innerHTML = '<i data-lucide="moon" class="w-[14px] h-[14px] pointer-events-none"></i>';
            
            if(heroImage) {
                heroImage.src = 'img/whistebackground.png';
            }
            if(heroImageContainer) {
                heroImageContainer.classList.remove('shadow-2xl');
            }

            // Dynamic classes logic
            if(shadow) {
                shadow.classList.remove('shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]');
                shadow.classList.add('shadow-[inset_0_0_100px_rgba(255,255,255,0.2)]');
            }
            if(borderDecor) {
                borderDecor.classList.remove('border-white/20');
                borderDecor.classList.add('border-zinc-200');
            }
            if(marqueeBg) {
                marqueeBg.classList.remove('bg-white/5', 'border-white/5');
                marqueeBg.classList.add('bg-zinc-50', 'border-zinc-200');
            }
            if(arrowBtn) {
                arrowBtn.classList.remove('bg-white', 'text-black');
                arrowBtn.classList.add('bg-zinc-900', 'text-white');
            }
            if(aboutSection) {
                aboutSection.classList.remove('bg-[#050505]', 'border-white/5');
                aboutSection.classList.add('bg-zinc-50', 'border-zinc-200');
            }
            themeBorders.forEach(b => {
                b.classList.remove('border-white', 'border-opacity-10');
                b.classList.add('border-zinc-200');
            });
            document.querySelectorAll('.project-card-border').forEach(p => {
                p.classList.remove('border-white/10');
                p.classList.add('border-zinc-200');
            });
            document.querySelectorAll('.project-link-circle').forEach(p => {
                p.classList.remove('border-white/20', 'hover:bg-white', 'hover:text-black');
                p.classList.add('border-zinc-200', 'hover:bg-zinc-900', 'hover:text-white');
            });
            if(ctaSection) {
                ctaSection.classList.remove('bg-[#000000]', 'border-white/5');
                ctaSection.classList.add('bg-white', 'border-zinc-200');
            }
            if(ctaStroke) {
                ctaStroke.classList.remove('text-stroke-white');
                ctaStroke.classList.add('text-stroke-black');
            }
            if(ctaDiv) {
                ctaDiv.classList.remove('bg-white/10');
                ctaDiv.classList.add('bg-zinc-200');
            }
            if(ctaBtn) {
                ctaBtn.classList.remove('bg-white', 'text-black', 'hover:bg-white/90');
                ctaBtn.classList.add('bg-zinc-900', 'text-white', 'hover:bg-zinc-800');
            }
            if(supSection) {
                supSection.classList.remove('bg-[#050505]');
                supSection.classList.add('bg-zinc-50');
            }
            if(footer) {
                footer.classList.remove('border-white/5');
                footer.classList.add('border-zinc-200');
            }
        } else {
            wrapper.classList.remove('light');
            wrapper.classList.add('dark');
            themeIcon.setAttribute('data-lucide', 'sun');
            if(mobileThemeBtn) mobileThemeBtn.innerHTML = '<i data-lucide="sun" class="w-[14px] h-[14px] pointer-events-none"></i>';

            if(heroImage) {
                heroImage.src = 'img/darkbackground.png';
            }
            if(heroImageContainer) {
                heroImageContainer.classList.add('shadow-2xl');
            }

            if(shadow) {
                shadow.classList.add('shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]');
                shadow.classList.remove('shadow-[inset_0_0_100px_rgba(255,255,255,0.2)]');
            }
            if(borderDecor) {
                borderDecor.classList.add('border-white/20');
                borderDecor.classList.remove('border-zinc-200');
            }
            if(marqueeBg) {
                marqueeBg.classList.add('bg-white/5', 'border-white/5');
                marqueeBg.classList.remove('bg-zinc-50', 'border-zinc-200');
            }
            if(arrowBtn) {
                arrowBtn.classList.add('bg-white', 'text-black');
                arrowBtn.classList.remove('bg-zinc-900', 'text-white');
            }
            if(aboutSection) {
                aboutSection.classList.add('bg-[#050505]', 'border-white/5');
                aboutSection.classList.remove('bg-zinc-50', 'border-zinc-200');
            }
            themeBorders.forEach(b => {
                b.classList.add('border-white', 'border-opacity-10');
                b.classList.remove('border-zinc-200');
            });
            document.querySelectorAll('.project-card-border').forEach(p => {
                p.classList.add('border-white/10');
                p.classList.remove('border-zinc-200');
            });
            document.querySelectorAll('.project-link-circle').forEach(p => {
                p.classList.add('border-white/20', 'hover:bg-white', 'hover:text-black');
                p.classList.remove('border-zinc-200', 'hover:bg-zinc-900', 'hover:text-white');
            });
            if(ctaSection) {
                ctaSection.classList.add('bg-[#000000]', 'border-white/5');
                ctaSection.classList.remove('bg-white', 'border-zinc-200');
            }
            if(ctaStroke) {
                ctaStroke.classList.add('text-stroke-white');
                ctaStroke.classList.remove('text-stroke-black');
            }
            if(ctaDiv) {
                ctaDiv.classList.add('bg-white/10');
                ctaDiv.classList.remove('bg-zinc-200');
            }
            if(ctaBtn) {
                ctaBtn.classList.add('bg-white', 'text-black', 'hover:bg-white/90');
                ctaBtn.classList.remove('bg-zinc-900', 'text-white', 'hover:bg-zinc-800');
            }
            if(supSection) {
                supSection.classList.add('bg-[#050505]');
                supSection.classList.remove('bg-zinc-50');
            }
            if(footer) {
                footer.classList.add('border-white/5');
                footer.classList.remove('border-zinc-200');
            }
        }
        lucide.createIcons();
    }

    if(themeBtn) {
        themeBtn.addEventListener('click', () => {
            isDark = !isDark;
            updateTheme();
        });
    }
    if(mobileThemeBtn) {
        mobileThemeBtn.addEventListener('click', () => {
            isDark = !isDark;
            updateTheme();
        });
    }

    // Mobile Menu
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    if(mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if(isMenuOpen) {
                mobileMenu.classList.add('active');
                mobileToggle.innerHTML = '<i data-lucide="x"></i>';
            } else {
                mobileMenu.classList.remove('active');
                mobileToggle.innerHTML = '<i data-lucide="menu"></i>';
            }
            lucide.createIcons();
        });

        mobileMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.remove('active');
                mobileToggle.innerHTML = '<i data-lucide="menu"></i>';
                lucide.createIcons();
            });
        });
    }

    // Entry Animations
    setTimeout(() => {
        document.querySelectorAll('.js-animate').forEach(el => {
            el.classList.add('is-visible');
        });
    }, 100);

    // Video Modal Logic
    const openVideoModal = document.getElementById('open-video-modal');
    const closeVideoModal = document.getElementById('close-video-modal');
    const videoModal = document.getElementById('video-modal');
    const videoModalContent = videoModal ? videoModal.querySelector('.aspect-video') : null;
    const YOUTUBE_URL = "https://www.youtube.com/embed/V_9CyxKZzkg?autoplay=1";

    if (openVideoModal && closeVideoModal && videoModal && videoModalContent) {
        openVideoModal.addEventListener('click', (e) => {
            e.preventDefault();
            videoModalContent.innerHTML = `<iframe width="100%" height="100%" src="${YOUTUBE_URL}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="absolute inset-0"></iframe>`;
            videoModal.classList.remove('opacity-0', 'pointer-events-none');
            // Prevent scrolling on body
            document.body.style.overflow = 'hidden';
        });

        const closeVideo = () => {
            videoModal.classList.add('opacity-0', 'pointer-events-none');
            // Remove iframe to stop video
            setTimeout(() => {
                videoModalContent.innerHTML = '';
                document.body.style.overflow = '';
            }, 300); // Wait for transition
        };

        closeVideoModal.addEventListener('click', closeVideo);
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) closeVideo();
        });
    }

});

// Lightbox Feature
document.addEventListener("DOMContentLoaded", () => {
    const lightboxModal = document.createElement('div');
    lightboxModal.className = 'fixed inset-0 z-[100] bg-black/90 hidden items-center justify-center opacity-0 transition-opacity duration-300 backdrop-blur-sm cursor-zoom-out p-4 md:p-8';
    
    const lightboxImg = document.createElement('img');
    lightboxImg.className = 'max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-300 scale-95';
    
    lightboxModal.appendChild(lightboxImg);
    document.body.appendChild(lightboxModal);

    const images = document.querySelectorAll('img:not([alt*="Logo"]):not([alt*="logo"])');
    images.forEach(img => {
        if(img.closest('a') !== null) return;
        if(img.closest('nav')) return;
        if(img.id === 'hero-image' || (img.parentNode && typeof img.parentNode.className === 'string' && img.parentNode.className.includes('aspect-[21/9]'))) return;
        
        img.classList.add('cursor-zoom-in');
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxModal.classList.remove('hidden');
            lightboxModal.style.display = 'flex';
            setTimeout(() => {
                lightboxModal.classList.remove('opacity-0');
                lightboxImg.classList.remove('scale-95');
                lightboxImg.classList.add('scale-100');
                document.body.style.overflow = 'hidden';
            }, 10);
        });
    });

    lightboxModal.addEventListener('click', () => {
        lightboxModal.classList.add('opacity-0');
        lightboxImg.classList.remove('scale-100');
        lightboxImg.classList.add('scale-95');
        setTimeout(() => {
            lightboxModal.classList.add('hidden');
            lightboxModal.style.display = '';
            document.body.style.overflow = '';
        }, 300);
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !lightboxModal.classList.contains('hidden')) {
            lightboxModal.click();
        }
    });
});
