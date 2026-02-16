(function () {
  'use strict';

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-list a');
  const contactForm = document.getElementById('contactForm');

  // 모바일 네비게이션 토글
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('is-open');
      nav.classList.toggle('is-open');
      document.body.style.overflow = nav.classList.contains('is-open') ? 'hidden' : '';
    });

    // 링크 클릭 시 메뉴 닫기
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('is-open');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    // ESC 키로 메뉴 닫기
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        navToggle.classList.remove('is-open');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }

  // Contact 폼 제출
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      if (!name || !email || !message || !submitBtn) return;

      const originalText = submitBtn.textContent;
      submitBtn.textContent = '전송 중...';
      submitBtn.disabled = true;

      // 실제 백엔드 연동 시 여기서 fetch 등 처리
      setTimeout(function () {
        submitBtn.textContent = '전송 완료';
        submitBtn.style.background = 'var(--accent-hover)';
        contactForm.reset();

        setTimeout(function () {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
        }, 2000);
      }, 600);
    });
  }

  // 스크롤 시 헤더 배경 강조 (선택)
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(15, 15, 18, 0.95)';
      } else {
        header.style.background = 'rgba(15, 15, 18, 0.85)';
      }
    });
  }
})();
