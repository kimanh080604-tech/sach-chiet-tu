/**
 * Shared Header and Footer Component for Chiết Tự Hán Ngữ Web Platform
 * Unified navigation across: Hành trình, Bảng tuần hoàn, Luyện viết, Bảng Pinyin, Đọc báo, Kinh Thành 3D, Thi thử HSK
 */
(function() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  const NAV_ITEMS = [
    { id: 'hanh-trinh', title: 'Hành Trình', icon: '🏔️', href: 'index.html', matches: ['index.html', 'website_gioi_thieu_chiet_tu.html', ''] },
    { id: 'bang-tuan-hoan', title: 'Bảng Tuần Hoàn', icon: '🧪', href: 'bang_tuan_hoan_chiet_tu.html', matches: ['bang_tuan_hoan_chiet_tu.html'] },
    { id: 'luyen-viet', title: 'Luyện Viết A4', icon: '✍️', href: 'luyen_viet_sheet.html', matches: ['luyen_viet_sheet.html'] },
    { id: 'bang-pinyin', title: 'Bảng Pinyin', icon: '🔊', href: 'bang_pinyin_audio.html', matches: ['bang_pinyin_audio.html'] },
    { id: 'doc-bao', title: 'Đọc Báo Song Ngữ', icon: '📰', href: 'doc_bao_han_ngu.html', matches: ['doc_bao_han_ngu.html'] },
    { id: 'thanh-pho-3d', title: 'Kinh Thành 3D', icon: '🏯', href: 'thanh_pho_3d.html', matches: ['thanh_pho_3d.html'] },
    { id: 'thi-thu', title: 'Thi Thử HSK', icon: '📝', href: 'thi_thu_hsk.html', matches: ['thi_thu_hsk.html'] },
  ];

  function renderHeader() {
    const headerContainer = document.getElementById('global-header-slot');
    if (!headerContainer) return;

    const navLinksHtml = NAV_ITEMS.map(item => {
      const isActive = item.matches.includes(currentPath);
      const activeClass = isActive 
        ? 'text-gold-bright bg-white/10 shadow-[0_0_12px_rgba(212,175,55,0.3)] border-gold/40' 
        : 'text-stone-300 hover:text-gold hover:bg-white/5 border-transparent';
      return `<a href="${item.href}" class="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all flex items-center gap-1.5 whitespace-nowrap ${activeClass}">
        <span>${item.icon}</span>
        <span>${item.title}</span>
      </a>`;
    }).join('');

    const mobileLinksHtml = NAV_ITEMS.map(item => {
      const isActive = item.matches.includes(currentPath);
      const activeClass = isActive 
        ? 'text-gold-bright bg-gold/15 font-semibold' 
        : 'text-stone-300 hover:text-gold hover:bg-stone-800';
      return `<a href="${item.href}" class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${activeClass}">
        <span class="text-lg">${item.icon}</span>
        <span>${item.title}</span>
      </a>`;
    }).join('');

    headerContainer.innerHTML = `
      <header class="sticky top-0 z-50 backdrop-blur-md bg-stone-950/90 border-b border-gold/20 shadow-2xl">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <!-- Brand Logo -->
          <a href="index.html" class="flex items-center gap-2.5 group shrink-0">
            <div class="w-9 h-9 rounded-lg bg-cinnabar flex items-center justify-center text-ricepaper font-cjk font-bold text-lg shadow-[0_0_15px_rgba(194,59,42,0.6)] group-hover:scale-105 transition-transform border border-gold/40">
              拆
            </div>
            <div class="leading-tight">
              <div class="font-display font-extrabold text-xs sm:text-sm tracking-wider text-gold-bright group-hover:text-gold transition-colors">
                CHIẾT TỰ HÁN NGỮ
              </div>
              <div class="text-[10px] text-stone-400 font-sans tracking-wide">
                Đề Án Cải Cách Giáo Dục 2026
              </div>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center gap-1 overflow-x-auto py-1 scrollbar-none">
            ${navLinksHtml}
          </nav>

          <!-- Right Action & Mobile Toggle -->
          <div class="flex items-center gap-2 sm:gap-3 shrink-0">
            <a href="index.html#sach" class="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cinnabar to-red-700 text-ricepaper text-xs font-semibold shadow-md hover:brightness-110 active:scale-95 transition-all border border-cinnabar-glow/30">
              <span>📖</span>
              <span>Đặt Sách</span>
            </a>

            <!-- Mobile Hamburger Button -->
            <button id="mobile-nav-toggle" type="button" class="lg:hidden p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-gold focus:outline-none" aria-label="Menu điều hướng">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Drawer Menu -->
        <div id="mobile-nav-menu" class="hidden lg:hidden border-t border-stone-800 bg-stone-950 px-4 py-4 space-y-1">
          ${mobileLinksHtml}
          <div class="pt-3 border-t border-stone-800">
            <a href="index.html#sach" class="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-cinnabar text-ricepaper font-semibold text-sm shadow-lg">
              <span>📖</span>
              <span>Đặt Trọn Bộ Sách Chiết Tự 1-4</span>
            </a>
          </div>
        </div>
      </header>
    `;

    // Mobile toggle logic
    const toggleBtn = document.getElementById('mobile-nav-toggle');
    const menuEl = document.getElementById('mobile-nav-menu');
    if (toggleBtn && menuEl) {
      toggleBtn.addEventListener('click', () => {
        menuEl.classList.toggle('hidden');
      });
    }
  }

  function renderFooter() {
    const footerContainer = document.getElementById('global-footer-slot');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
      <footer class="border-t border-stone-800 bg-stone-950 text-stone-400 py-12 px-4 print:hidden">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div class="space-y-3 md:col-span-1">
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded bg-cinnabar flex items-center justify-center text-ricepaper font-cjk font-bold text-sm">拆</div>
              <span class="font-display font-bold text-gold-bright text-sm">CHIẾT TỰ HÁN NGỮ</span>
            </div>
            <p class="text-xs leading-relaxed text-stone-400">
              Phương pháp giải mã chữ Hán qua cấu trúc IDC, 214 bộ thủ tượng hình và tranh thủy mặc Cổ phong tân thời.
            </p>
            <div class="text-[11px] text-stone-500">
              Bản quyền © 2026 Đề án Cải cách Giáo dục Chiết Tự. Bảo lưu mọi quyền.
            </div>
          </div>

          <div>
            <h4 class="text-xs font-semibold text-stone-200 uppercase tracking-wider mb-3 text-gold">Hệ Sinh Thái Web App</h4>
            <ul class="space-y-2 text-xs">
              <li><a href="index.html" class="hover:text-gold transition-colors">🏔️ Hành Trình Cuộn Tranh 3D</a></li>
              <li><a href="bang_tuan_hoan_chiet_tu.html" class="hover:text-gold transition-colors">🧪 Bảng Tuần Hoàn Bộ Thủ</a></li>
              <li><a href="luyen_viet_sheet.html" class="hover:text-gold transition-colors">✍️ Sheet Luyện Viết Ô Mễ A4</a></li>
              <li><a href="bang_pinyin_audio.html" class="hover:text-gold transition-colors">🔊 Bảng Âm Thanh Pinyin</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-semibold text-stone-200 uppercase tracking-wider mb-3 text-gold">Ứng Dụng Mở Rộng</h4>
            <ul class="space-y-2 text-xs">
              <li><a href="doc_bao_han_ngu.html" class="hover:text-gold transition-colors">📰 Đọc Báo Song Ngữ & Tra Từ</a></li>
              <li><a href="thanh_pho_3d.html" class="hover:text-gold transition-colors">🏯 Kinh Thành 3D Kim Bảng</a></li>
              <li><a href="thi_thu_hsk.html" class="hover:text-gold transition-colors">📝 Phòng Thi Thử HSK 3.0</a></li>
              <li><a href="index.html#flipbook" class="hover:text-gold transition-colors">📖 Đọc Thử Sách 3D Flipbook</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-semibold text-stone-200 uppercase tracking-wider mb-3 text-gold">Liên Hệ & Xuất Bản</h4>
            <p class="text-xs text-stone-400 mb-3">Hỗ trợ giáo viên, trung tâm tiếng Trung và độc giả toàn quốc.</p>
            <div class="space-y-1.5 text-xs text-stone-300">
              <div>📍 Hà Nội & TP. Hồ Chí Minh</div>
              <div>📧 sachchietuhanngu@gmail.com</div>
              <div>⚡ Hotline: 0988.xxx.xxx</div>
            </div>
          </div>
        </div>

        <div class="max-w-7xl mx-auto pt-6 border-t border-stone-800/80 text-center text-xs text-stone-400">
          Thiết kế & phát triển với chuẩn mực giao diện Cổ Phong Tân Thời · Tương thích hoàn hảo mọi thiết bị di động và máy in A4.
        </div>
      </footer>
    `;
  }

  // Auto init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      renderHeader();
      renderFooter();
    });
  } else {
    renderHeader();
    renderFooter();
  }
})();
