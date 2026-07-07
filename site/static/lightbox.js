// Lightbox — vanilla JS, no dependencies
document.addEventListener('DOMContentLoaded', () => {
  const groups = {};

  document.querySelectorAll('a[data-lightbox]').forEach(link => {
    const group = link.dataset.lightbox;
    if (!groups[group]) groups[group] = [];
    groups[group].push(link);
  });

  if (Object.keys(groups).length === 0) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-label', 'Image viewer');
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Close">&times;</button>
    <button class="lightbox-fullscreen" aria-label="Fullscreen" title="Fullscreen (F)">\u26F6</button>
    <button class="lightbox-prev" aria-label="Previous image">&lsaquo;</button>
    <button class="lightbox-next" aria-label="Next image">&rsaquo;</button>
    <div class="lightbox-loader"></div>
    <img class="lightbox-img" src="" alt="">
    <div class="lightbox-description"></div>
  `;
  document.body.appendChild(overlay);

  const img = overlay.querySelector('.lightbox-img');
  const loader = overlay.querySelector('.lightbox-loader');
  const closeBtn = overlay.querySelector('.lightbox-close');
  const prevBtn = overlay.querySelector('.lightbox-prev');
  const nextBtn = overlay.querySelector('.lightbox-next');
  const fullscreenBtn = overlay.querySelector('.lightbox-fullscreen');
  const descEl = overlay.querySelector('.lightbox-description');

  let currentGroup = null;
  let currentIndex = -1;

  function show(src) {
    loader.style.display = 'block';
    img.style.display = 'none';
    img.onload = () => {
      loader.style.display = 'none';
      img.style.display = 'block';
    };
    img.src = src;
  }

  function updateDescription() {
    if (!currentGroup) return;
    const links = groups[currentGroup];
    if (!links || !links[currentIndex]) return;
    const desc = links[currentIndex].dataset.description;
    if (desc) {
      descEl.textContent = desc;
      descEl.style.display = 'block';
    } else {
      descEl.style.display = 'none';
    }
  }

  function open(group, index) {
    currentGroup = group;
    currentIndex = index;
    const links = groups[group];
    if (!links || !links[index]) return;
    show(links[index].href);
    updateDescription();
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateNavButtons();
  }

  function close() {
    if (document.fullscreenElement) document.exitFullscreen();
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    currentGroup = null;
    currentIndex = -1;
    img.src = '';
    descEl.style.display = 'none';
  }

  function navigate(direction) {
    if (!currentGroup) return;
    const links = groups[currentGroup];
    if (!links) return;
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < links.length) {
      currentIndex = newIndex;
      show(links[currentIndex].href);
      updateDescription();
      updateNavButtons();
    }
  }

  function updateNavButtons() {
    const links = groups[currentGroup];
    if (!links) return;
    prevBtn.style.display = currentIndex > 0 ? 'block' : 'none';
    nextBtn.style.display = currentIndex < links.length - 1 ? 'block' : 'none';
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      overlay.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  }

  document.addEventListener('fullscreenchange', () => {
    if (!overlay.classList.contains('active')) return;
    if (document.fullscreenElement) {
      fullscreenBtn.innerHTML = '\u29C8';
      fullscreenBtn.setAttribute('aria-label', 'Exit fullscreen');
    } else {
      fullscreenBtn.innerHTML = '\u26F6';
      fullscreenBtn.setAttribute('aria-label', 'Fullscreen');
    }
  });

  Object.entries(groups).forEach(([group, links]) => {
    links.forEach((link, index) => {
      link.addEventListener('click', e => {
        e.preventDefault();
        open(group, index);
      });
    });
  });

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
    if (e.key === 'f' || e.key === 'F') toggleFullscreen();
  });

  prevBtn.addEventListener('click', e => { e.stopPropagation(); navigate(-1); });
  nextBtn.addEventListener('click', e => { e.stopPropagation(); navigate(1); });
  fullscreenBtn.addEventListener('click', e => { e.stopPropagation(); toggleFullscreen(); });
});
