
  /* ── Products data ── */
  const products = [
    { id:1, name:'Cadeira Gamer GP', cat:'gamer', badge:'Gamer', badgeClass:'badge-gamer', desc:'Design ergonômico com suporte lombar ajustável.', price:'R$ 708,50',img:'./img/cadeira-gamer-gp.jpeg' },
    { id:2, name:'Cadeira izzi', cat:'escritorio', badge:'Escritório', badgeClass:'badge-escritorio', desc:'Design e Ergonomia,Mecanismo Relax. Ótimo custo-benefício.', price:'R$ 935,55', img:'./img/cadeira-izzi.jpeg' },
    { id:3, name:'Cadeira esteirinha', cat:'esteirinha', badge:'esteirinha', badgeClass:'badge-seminova', desc:'Estrutura robusta,couro ecológico(PU). Ótimo custo-benefício.', price:'R$ 695,55', img:'./img/cadeira-esteirinha.jpeg' },
    { id:4, name:'Cadeira Presidente tela', cat:'escritorio', badge:'Escritório', badgeClass:'badge-escritorio', desc:'Tela mesh respirável,base giratória cromada. Ótimo custo-benefício.', price:'R$ 715,88', img:'./img/cadeira-presidente-tela.jpeg' },
    { id:5, name:'Cadeira Gamer Stillus', cat:'gamer', badge:'Gamer', badgeClass:'badge-gamer', desc:'Visual gamer com ajuste de postura, espuma de alta densidade e design agressivo.', price:'R$ 895,55', img:'./img/cadeira-gamer-stilus.jpeg' },
    { id:6, name:'Cadeira escritório operativa', cat:'escritorio', badge:'Escritório', badgeClass:'badge-escritorio', desc:'Simples, resistente e confortável. Ideal para home office e estudos.', price:'R$ 438,50', img:'./img/cadeira-giratoria-com-super-relax.jpeg' },
    { id:7, name:'Cadeira esteirinha diretor', cat:'esteirinha', badge:'esteirinha', badgeClass:'badge-seminova', desc:'Estrutura robusta,couro ecológico(PU). Ótimo custo.', price:'R$ 695,85', img:'./img/cadeira-esteirinha-diretor.jpeg' },
    { id:8, name:'Cadeira Executivo Cavaletti', cat:'escritorio', badge:'Escritório', badgeClass:'badge-escritorio', desc:'Elegância e sofisticação para seu escritório. Revestimento premium.', price:'R$ 1.075,85', img:'./img/cadeira-executiva-cavaletti.jpeg' },
  ];

  function renderProducts(filter) {
    const grid = document.getElementById('products-grid');
    const filtered = filter === 'all' ? products : products.filter(p => p.cat === filter);
    grid.innerHTML = filtered.map(p => `
      <div class="product-card">
        <div class="product-img-wrap">
          <img class="product-img" src="${p.img}" alt="${p.name}" loading="lazy" />
          <span class="product-badge ${p.badgeClass}">${p.badge}</span>
        </div>
        <div class="product-body">
          <div class="product-name">${p.name}</div>
          <p class="product-desc">${p.desc}</p>
          <div class="product-footer">
            <div>
              <div class="product-installment">PARCELAMENTO NO CARTÃO</div>
              <div class="product-price">${p.price}</div>
            </div>
            <a href="https://wa.me/555484421304" target="_blank" class="btn-link">
            <button class="btn-cart">🛒</button>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  renderProducts('all');

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderProducts(tab.dataset.filter);
    });
  });

  function setFreight(el) {
    document.querySelectorAll('.freight-card').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
  }
  const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    item.classList.toggle("active");

  });
});
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});