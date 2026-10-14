(function () {
  /* ---------- Ilustrasi galeri (SVG) ---------- */
  function laptop(x, y, c) {
    return '<rect x="' + x + '" y="' + y + '" width="46" height="30" rx="3" fill="' + c + '"/>' +
      '<rect x="' + (x + 5) + '" y="' + (y + 5) + '" width="20" height="3" rx="1.5" fill="#7dd3fc"/>' +
      '<rect x="' + (x + 5) + '" y="' + (y + 11) + '" width="30" height="3" rx="1.5" fill="#fde68a"/>' +
      '<rect x="' + (x + 5) + '" y="' + (y + 17) + '" width="16" height="3" rx="1.5" fill="#86efac"/>' +
      '<rect x="' + (x - 6) + '" y="' + (y + 30) + '" width="58" height="5" rx="2.5" fill="#94a3b8"/>';
  }
  function person(x, y, shirt, skin, r) {
    r = r || 15;
    return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + skin + '"/>' +
      '<path d="M' + (x - r - 8) + ' ' + (y + r + 46) + 'v-14a' + (r + 8) + ' ' + (r + 8) + ' 0 0 1 ' + (2 * r + 16) + ' 0v14z" fill="' + shirt + '"/>';
  }
  var S = {
    workshop: function () {
      return '<rect width="400" height="260" fill="#dbeafe"/><rect y="190" width="400" height="70" fill="#1e3a8a"/>' +
        '<rect x="30" y="20" width="120" height="70" rx="4" fill="#fff"/><rect x="42" y="34" width="60" height="6" rx="3" fill="#2547e8"/><rect x="42" y="48" width="90" height="5" rx="2.5" fill="#cbd5e1"/><rect x="42" y="60" width="76" height="5" rx="2.5" fill="#cbd5e1"/>' +
        person(70, 120, '#f59e0b', '#e8b48f') + person(200, 118, '#10b981', '#c68a62') + person(330, 120, '#ec4899', '#f1c9a5') +
        laptop(47, 172, '#0f172a') + laptop(177, 172, '#0f172a') + laptop(307, 172, '#0f172a');
    },
    review: function () {
      return '<rect width="400" height="260" fill="#0f172a"/><rect x="40" y="28" width="320" height="170" rx="10" fill="#1e293b"/>' +
        '<rect x="60" y="48" width="70" height="7" rx="3.5" fill="#7dd3fc"/><rect x="140" y="48" width="100" height="7" rx="3.5" fill="#fde68a"/>' +
        '<rect x="76" y="68" width="140" height="7" rx="3.5" fill="#86efac"/>' +
        '<rect x="52" y="86" width="296" height="22" fill="#14532d" opacity="0.7"/><rect x="76" y="93" width="190" height="7" rx="3.5" fill="#86efac"/>' +
        '<rect x="52" y="108" width="296" height="22" fill="#7f1d1d" opacity="0.7"/><rect x="76" y="115" width="150" height="7" rx="3.5" fill="#fca5a5"/>' +
        '<rect x="76" y="138" width="120" height="7" rx="3.5" fill="#7dd3fc"/><rect x="76" y="156" width="170" height="7" rx="3.5" fill="#cbd5e1"/>' +
        '<rect x="228" y="150" width="112" height="34" rx="8" fill="#ffb627"/><path d="M250 184l-8 12 20-12z" fill="#ffb627"/><rect x="238" y="160" width="70" height="5" rx="2.5" fill="#3a2700"/><rect x="238" y="170" width="46" height="5" rx="2.5" fill="#3a2700"/>' +
        '<rect x="150" y="198" width="100" height="10" fill="#334155"/><rect x="120" y="208" width="160" height="8" rx="4" fill="#475569"/>' +
        person(52, 240, '#2547e8', '#e8b48f', 0).replace(/<path[^>]*>/, '');
    },
    hackathon: function () {
      var notes = '';
      var cols = ['#fde68a', '#fca5a5', '#86efac', '#7dd3fc', '#fde68a', '#c4b5fd'];
      for (var i = 0; i < 6; i++) { notes += '<rect x="' + (28 + (i % 3) * 52) + '" y="' + (30 + Math.floor(i / 3) * 52) + '" width="42" height="42" fill="' + cols[i] + '" transform="rotate(' + ((i * 7) % 11 - 5) + ' ' + (49 + (i % 3) * 52) + ' ' + (51 + Math.floor(i / 3) * 52) + ')"/>'; }
      return '<rect width="400" height="260" fill="#1b1340"/>' + notes +
        '<circle cx="320" cy="70" r="42" fill="#0f0a2a" stroke="#ffb627" stroke-width="5"/><path d="M320 70V42M320 70l20 12" stroke="#ffb627" stroke-width="5" stroke-linecap="round"/><text x="320" y="132" fill="#ffb627" font-family="monospace" font-size="16" text-anchor="middle">24:00:00</text>' +
        '<rect y="190" width="400" height="70" fill="#0f0a2a"/>' + person(110, 150, '#f472b6', '#e8b48f', 14) + person(250, 150, '#38bdf8', '#c68a62', 14) +
        laptop(87, 176, '#312e81') + laptop(227, 176, '#312e81');
    },
    mentoring: function () {
      return '<rect width="400" height="260" fill="#fef3c7"/><rect y="200" width="400" height="60" fill="#92400e"/>' +
        person(120, 100, '#2547e8', '#c68a62', 17) + person(290, 100, '#10b981', '#f1c9a5', 17) +
        laptop(177, 160, '#0f172a') + '<path d="M168 152l-18-26M236 152l24-30" stroke="#c68a62" stroke-width="7" stroke-linecap="round"/>' +
        '<rect x="30" y="24" width="96" height="30" rx="8" fill="#fff"/><text x="78" y="44" font-family="monospace" font-size="13" text-anchor="middle" fill="#0f1b2d">for i in range</text>' +
        '<rect x="276" y="24" width="96" height="30" rx="8" fill="#fff"/><text x="324" y="44" font-family="monospace" font-size="13" text-anchor="middle" fill="#0f1b2d">oh, paham!</text>';
    },
    demo: function () {
      var heads = '';
      for (var i = 0; i < 8; i++) { heads += '<circle cx="' + (30 + i * 48) + '" cy="' + (214 + (i % 2) * 10) + '" r="16" fill="#0f172a"/>'; }
      return '<rect width="400" height="260" fill="#cffafe"/><rect x="50" y="22" width="300" height="150" rx="6" fill="#fff" stroke="#0f1b2d" stroke-width="4"/>' +
        '<rect x="80" y="110" width="30" height="42" fill="#2547e8"/><rect x="124" y="86" width="30" height="66" fill="#2547e8"/><rect x="168" y="64" width="30" height="88" fill="#ffb627"/><rect x="212" y="94" width="30" height="58" fill="#2547e8"/><rect x="256" y="50" width="30" height="102" fill="#2547e8"/>' +
        '<rect x="80" y="152" width="230" height="3" fill="#0f1b2d"/><rect x="82" y="34" width="90" height="8" rx="4" fill="#0f1b2d"/>' +
        '<rect y="190" width="400" height="70" fill="#0e7490"/>' + heads;
    },
    wisuda: function () {
      return '<rect width="400" height="260" fill="#fce7f3"/><rect y="200" width="400" height="60" fill="#831843"/>' +
        '<rect x="100" y="34" width="200" height="140" rx="6" fill="#fff" stroke="#ffb627" stroke-width="6"/>' +
        '<rect x="136" y="58" width="128" height="9" rx="4.5" fill="#0f1b2d"/><rect x="156" y="78" width="88" height="6" rx="3" fill="#94a3b8"/><rect x="146" y="94" width="108" height="6" rx="3" fill="#cbd5e1"/><rect x="146" y="108" width="108" height="6" rx="3" fill="#cbd5e1"/>' +
        '<circle cx="200" cy="146" r="14" fill="#ffb627"/><path d="M192 156l-6 20 14-8 14 8-6-20z" fill="#2547e8"/>' +
        person(52, 130, '#2547e8', '#c68a62', 14) + person(348, 130, '#10b981', '#e8b48f', 14) +
        '<path d="M30 112l22-10 22 10-22 10z" fill="#0f1b2d"/><path d="M326 112l22-10 22 10-22 10z" fill="#0f1b2d"/>';
    }
  };

  var items = [
    { k: 'workshop', cat: 'Kelas', date: '12 Jan 2026', place: 'Lab 1, Jakarta', title: 'Workshop Dasar Pemrograman',
      desc: 'Hari pertama angkatan 11. Peserta belajar logika, variabel, dan perulangan, lalu langsung menulis program pertama di laptop masing-masing.' },
    { k: 'review', cat: 'Mentoring', date: '03 Mar 2026', place: 'Ruang Diskusi', title: 'Code Review Bersama Mentor',
      desc: 'Mentor membahas kode proyek peserta baris demi baris: penamaan, struktur fungsi, dan cara menulis pesan commit yang jelas.' },
    { k: 'hackathon', cat: 'Event', date: '18 Apr 2026', place: 'Aula Utama', title: 'Hackathon 24 Jam',
      desc: 'Enam tim membangun aplikasi layanan warga dalam satu hari penuh, dengan papan ide, pizza tengah malam, dan presentasi pagi hari.' },
    { k: 'mentoring', cat: 'Mentoring', date: '09 Jun 2026', place: 'Lab 2, Jakarta', title: 'Pair Programming 1 Lawan 1',
      desc: 'Satu peserta mengetik, satu mentor mengarahkan. Sesi ini membantu peserta memahami pola pikir saat memecah masalah menjadi langkah kecil.' },
    { k: 'demo', cat: 'Event', date: '22 Agu 2026', place: 'Aula Utama', title: 'Demo Day Proyek Akhir',
      desc: 'Setiap tim memperagakan aplikasinya di depan mitra industri, lengkap dengan data pengguna uji dan rencana pengembangan berikutnya.' },
    { k: 'wisuda', cat: 'Kelas', date: '19 Sep 2026', place: 'Aula Utama', title: 'Penyerahan Sertifikat Angkatan 12',
      desc: 'Lulusan angkatan 12 menerima sertifikat kompetensi dan portofolio proyek, serta terhubung dengan perusahaan mitra penyalur kerja.' }
  ];

  var gal = document.getElementById('gallery');
  items.forEach(function (it) {
    var fig = document.createElement('figure');
    fig.className = 'card';
    fig.dataset.cat = it.cat;
    fig.innerHTML =
      '<div class="photo" role="img" aria-label="Ilustrasi: ' + it.title + '"><svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' + S[it.k]() + '</svg></div>' +
      '<figcaption><div class="meta"><span class="tag">' + it.cat + '</span><span>' + it.date + '</span><span>' + it.place + '</span></div>' +
      '<h3>' + it.title + '</h3><p>' + it.desc + '</p></figcaption>';
    gal.appendChild(fig);
  });

  /* filter */
  var chips = document.querySelectorAll('.chip');
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      chips.forEach(function (x) { x.setAttribute('aria-pressed', x === c ? 'true' : 'false'); });
      var f = c.dataset.filter;
      gal.querySelectorAll('.card').forEach(function (card) {
        card.hidden = !(f === 'all' || card.dataset.cat === f);
      });
    });
  });

  /* ---------- Tampilan / tab ---------- */
  var views = { galeri: document.getElementById('view-galeri'), daftar: document.getElementById('view-daftar') };
  function show() {
    var h = (location.hash || '#galeri').replace('#', '');
    if (!views[h]) h = 'galeri';
    Object.keys(views).forEach(function (k) {
      views[k].hidden = k !== h;
      var t = document.getElementById('tab-' + k);
      if (k === h) t.setAttribute('aria-current', 'page'); else t.removeAttribute('aria-current');
    });
    document.title = (h === 'daftar' ? 'Pendaftaran' : 'Galeri') + ' | Nusa Coding Academy';
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', show);
  show();

  /* ---------- Form ---------- */
  var form = document.getElementById('form');
  var el = {
    nik: document.getElementById('nik'), nama: document.getElementById('nama'),
    hp: document.getElementById('hp'), alamat: document.getElementById('alamat'),
    bahasa: document.getElementById('bahasa')
  };
  var count = document.getElementById('nik-count');
  el.nik.addEventListener('input', function () {
    el.nik.value = el.nik.value.replace(/\D/g, '').slice(0, 16);
    count.textContent = el.nik.value.length + '/16';
  });
  el.hp.addEventListener('input', function () { el.hp.value = el.hp.value.replace(/[^\d+\s-]/g, ''); });

  function setErr(id, msg, field) {
    document.getElementById('err-' + id).textContent = msg || '';
    if (field) { field.classList.toggle('invalid', !!msg); field.setAttribute('aria-invalid', msg ? 'true' : 'false'); }
  }
  function validate() {
    var ok = true, first = null;
    function check(cond, id, msg, field) {
      if (!cond) { setErr(id, msg, field); ok = false; if (!first) first = field || document.getElementById('jk-l'); }
      else setErr(id, '', field);
    }
    check(/^\d{16}$/.test(el.nik.value), 'nik', 'NIK harus 16 digit angka. Saat ini ' + el.nik.value.length + ' digit.', el.nik);
    check(el.nama.value.trim().length >= 3, 'nama', 'Isi nama lengkap, minimal 3 huruf.', el.nama);
    check(!!form.querySelector('input[name="jk"]:checked'), 'jk', 'Pilih salah satu jenis kelamin.', null);
    var hp = el.hp.value.replace(/[\s-]/g, '');
    check(/^(\+62|62|0)8\d{8,12}$/.test(hp), 'hp', 'Nomor HP tidak valid. Gunakan format 08xxxxxxxxxx atau +628xxxxxxxxxx.', el.hp);
    check(el.alamat.value.trim().length >= 10, 'alamat', 'Alamat terlalu singkat. Tulis jalan, kelurahan, dan kota.', el.alamat);
    check(!!el.bahasa.value, 'bahasa', 'Pilih bahasa pemrograman yang diminati.', el.bahasa);
    if (first) first.focus();
    return ok;
  }

  /* ---------- Dialog konfirmasi ---------- */
  var overlay = document.getElementById('confirm');
  var yes = document.getElementById('confirm-yes');
  var no = document.getElementById('confirm-no');
  var lastFocus = null;
  function openConfirm() { lastFocus = document.activeElement; overlay.hidden = false; yes.focus(); }
  function closeConfirm() { overlay.hidden = true; if (lastFocus) lastFocus.focus(); }
  no.addEventListener('click', closeConfirm);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) closeConfirm(); });
  document.addEventListener('keydown', function (e) {
    if (overlay.hidden) return;
    if (e.key === 'Escape') closeConfirm();
    if (e.key === 'Tab') { // fokus tetap di dalam dialog
      var order = [no, yes], i = order.indexOf(document.activeElement);
      e.preventDefault();
      order[(i + (e.shiftKey ? -1 : 1) + order.length) % order.length].focus();
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validate()) openConfirm();
  });

  /* ---------- Simpan & tampilkan hasil ---------- */
  var saved = [];
  var resEmpty = document.getElementById('result-empty');
  var resBox = document.getElementById('result');
  var resData = document.getElementById('result-data');
  var rows = document.getElementById('rows');
  var total = document.getElementById('total');

  function addDt(dl, label, value, cls) {
    var dt = document.createElement('dt'); dt.textContent = label;
    var dd = document.createElement('dd');
    if (cls === 'pill') { var s = document.createElement('span'); s.className = 'lang-pill'; s.textContent = value; dd.appendChild(s); }
    else { dd.textContent = value; if (cls) dd.className = cls; }
    dl.appendChild(dt); dl.appendChild(dd);
  }
  function renderRows() {
    rows.innerHTML = '';
    if (!saved.length) {
      rows.innerHTML = '<tr><td colspan="7" style="color:var(--muted);white-space:normal">Belum ada pendaftar.</td></tr>';
    }
    saved.forEach(function (d, i) {
      var tr = document.createElement('tr');
      [String(i + 1), d.nik, d.nama, d.jk === 'Laki-laki' ? 'L' : 'P', d.hp, d.bahasa, d.alamat].forEach(function (v, c) {
        var td = document.createElement('td'); td.textContent = v;
        if (c === 1 || c === 4) td.className = 'mono';
        if (c === 6) td.className = 'wrapcell';
        tr.appendChild(td);
      });
      rows.appendChild(tr);
    });
    total.textContent = saved.length + ' orang';
  }

  yes.addEventListener('click', function () {
    var d = {
      nik: el.nik.value,
      nama: el.nama.value.trim().replace(/\s+/g, ' '),
      jk: form.querySelector('input[name="jk"]:checked').value,
      hp: el.hp.value.trim(),
      alamat: el.alamat.value.trim(),
      bahasa: el.bahasa.value
    };
    saved.push(d);

    resData.innerHTML = '';
    addDt(resData, 'NIK', d.nik, 'mono');
    addDt(resData, 'Nama lengkap', d.nama);
    addDt(resData, 'Jenis kelamin', d.jk);
    addDt(resData, 'No HP', d.hp, 'mono');
    addDt(resData, 'Alamat', d.alamat);
    addDt(resData, 'Bahasa diminati', d.bahasa, 'pill');
    resEmpty.hidden = true; resBox.hidden = false;
    renderRows();

    overlay.hidden = true;
    form.reset();
    count.textContent = '0/16';
    Object.keys(el).forEach(function (k) { el[k].classList.remove('invalid'); el[k].removeAttribute('aria-invalid'); });
    ['nik', 'nama', 'jk', 'hp', 'alamat', 'bahasa'].forEach(function (k) { setErr(k, ''); });
    resBox.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });

  document.getElementById('btn-reset').addEventListener('click', function () {
    form.reset(); count.textContent = '0/16';
    Object.keys(el).forEach(function (k) { el[k].classList.remove('invalid'); });
    ['nik', 'nama', 'jk', 'hp', 'alamat', 'bahasa'].forEach(function (k) { setErr(k, ''); });
  });
})();
