document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();

    let isDark = true;
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const wrapper = document.getElementById('app-wrapper');

    function updateTheme() {
        const titleLine = document.getElementById('title-line');
        const titleYear = document.getElementById('title-year');
        const projTitleH1 = document.getElementById('proj-title-h1');
        const projDescription = document.getElementById('proj-description');
        const actionBarBorder = document.getElementById('action-bar-border');
        const visionTextP1 = document.getElementById('vision-text-p1');
        const visionTextP2 = document.getElementById('vision-text-p2');
        const nextCtaBorder = document.getElementById('next-cta-border');
        const nextTitleCta = document.getElementById('next-title-cta');
        const footer = document.getElementById('footer');

        if (!isDark) {
            wrapper.classList.remove('dark');
            wrapper.classList.add('light');
            themeIcon.setAttribute('data-lucide', 'moon');
            themeBtn.className = "p-2 rounded-lg theme-transition bg-zinc-100 hover:bg-zinc-200 text-zinc-800";
            
            if(titleLine) {
                titleLine.classList.remove('bg-white/10');
                titleLine.classList.add('bg-zinc-200');
            }
            if(titleYear) {
                titleYear.classList.remove('text-[#a1a1aa]');
                titleYear.classList.add('text-zinc-500');
            }
            if(projTitleH1) {
                projTitleH1.className = "project-title mb-8 text-zinc-900";
            }
            if(projDescription) {
                projDescription.classList.remove('text-[#d4d4d8]');
                projDescription.classList.add('text-zinc-650');
            }
            if(actionBarBorder) {
                actionBarBorder.classList.remove('border-white/10');
                actionBarBorder.classList.add('border-zinc-200');
            }
            if(visionTextP1) {
                visionTextP1.classList.remove('text-[#d4d4d8]');
                visionTextP1.classList.add('text-zinc-600');
            }
            if(visionTextP2) {
                visionTextP2.classList.remove('text-[#d4d4d8]');
                visionTextP2.classList.add('text-zinc-640');
            }
            if(nextCtaBorder) {
                nextCtaBorder.classList.remove('border-white/5');
                nextCtaBorder.classList.add('border-zinc-200');
            }
            if(nextTitleCta) {
                nextTitleCta.className = "text-5xl md:text-8xl font-black uppercase italic tracking-tighter transition-transform group-hover:translate-x-4 text-zinc-900";
            }
            if(footer) {
                footer.classList.remove('border-white/5');
                footer.classList.add('border-zinc-200');
            }
        } else {
            wrapper.classList.remove('light');
            wrapper.classList.add('dark');
            themeIcon.setAttribute('data-lucide', 'sun');
            themeBtn.className = "p-2 rounded-lg theme-transition bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white";

            if(titleLine) {
                titleLine.classList.add('bg-white/10');
                titleLine.classList.remove('bg-zinc-200');
            }
            if(titleYear) {
                titleYear.classList.add('text-[#a1a1aa]');
                titleYear.classList.remove('text-zinc-500');
            }
            if(projTitleH1) {
                projTitleH1.className = "project-title mb-8 text-[#FFFFFF]";
            }
            if(projDescription) {
                projDescription.classList.add('text-[#d4d4d8]');
                projDescription.classList.remove('text-zinc-650');
            }
            if(actionBarBorder) {
                actionBarBorder.classList.add('border-white/10');
                actionBarBorder.classList.remove('border-zinc-200');
            }
            if(visionTextP1) {
                visionTextP1.classList.add('text-[#d4d4d8]');
                visionTextP1.classList.remove('text-zinc-600');
            }
            if(visionTextP2) {
                visionTextP2.classList.add('text-[#d4d4d8]');
                visionTextP2.classList.remove('text-zinc-640');
            }
            if(nextCtaBorder) {
                nextCtaBorder.classList.add('border-white/5');
                nextCtaBorder.classList.remove('border-zinc-200');
            }
            if(nextTitleCta) {
                nextTitleCta.className = "text-5xl md:text-8xl font-black uppercase italic tracking-tighter transition-transform group-hover:translate-x-4 text-white";
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
