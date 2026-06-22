/* ============================================
   JCD — Johannes Conseil & Développement
   main.js — Scripts principaux
   ============================================ */

/* ── Smart Navbar ── */
(function () {
  const nav = document.getElementById('nav');
  let lastScrollY = 0;

  function handleScroll() {
    const y = window.scrollY;
    if (y <= 60 || y < lastScrollY) {
      nav.classList.add('show');
    } else {
      nav.classList.remove('show');
    }
    lastScrollY = y;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  nav.classList.add('show'); // visible au chargement
})();

/* ── Scroll Animations ── */
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('vi');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.fi, .si').forEach((el) => observer.observe(el));
})();

/* ── Onglets Offres ── */
function pole(p, btn) {
  document.getElementById('ent').style.display = p === 'ent' ? 'grid' : 'none';
  document.getElementById('ins').style.display = p === 'ins' ? 'grid' : 'none';
  document.querySelectorAll('.tab').forEach((b) => b.classList.remove('on'));
  btn.classList.add('on');
}

/* ── Formulaire Formspree ── */
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const successMsg = document.getElementById('form-success');
    const originalText = btn.textContent;

    btn.textContent = 'Envoi en cours…';
    btn.disabled = true;

    try {
      const response = await fetch('https://formspree.io/f/mkolnwee', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form),
      });

      if (response.ok) {
        form.reset();
        if (successMsg) {
          successMsg.classList.add('show');
          successMsg.textContent = '✓ Message envoyé ! Nous vous répondons dans les plus brefs délais.';
        }
        btn.textContent = '✓ Message envoyé';
        btn.style.background = '#27AE60';
      } else {
        btn.textContent = 'Erreur — réessayez';
        btn.disabled = false;
      }
    } catch (err) {
      btn.textContent = 'Erreur réseau — réessayez';
      btn.disabled = false;
    }
  });
})();
