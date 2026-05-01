const projects = [
  {
    title: "SmartGift.vn",
    category: "web",
    image: "assets/images/Portfolio/smartgift.png",
    url: "https://smartgift.vn",
    description: "A comprehensive online gifting platform",
    tags: ["React", "Laravel"]
  },
  {
    title: "MVV Academy",
    category: "web",
    image: "assets/images/Portfolio/mvva.png",
    url: "https://mvvacademy.edu.vn/",
    tags: ["React", "Laravel"]
  },
  {
    title: "Sắm Tết tại TH true mart - Nhận hơn 54000 quà",
    category: "miniapp",
    image: "assets/images/Portfolio/miniapp_1.png",
    qrImage: "assets/images/Portfolio/miniapp_1.png",
    url: "https://zalo.me/s/2483089663888679660/?utm_source=zalo-qr",
    tags: ["React", "Redux"]
  },
  {
    title: "TH Tích sao đổi quà cho bé - Hơn 28000 quà tặng",
    category: "miniapp",
    image: "assets/images/Portfolio/miniapp_2.png",
    qrImage: "assets/images/Portfolio/miniapp_2.png",
    url: "https://zalo.me/s/994190062822283682/?utm_source=zalo-qr"
  },
];

const container = document.getElementById('projects-container');

if (container) {
  container.innerHTML = '';
  projects.forEach(project => {
    let linkElement = '';

    if (project.category === 'web') {
      linkElement = `<a href="${project.url}" target="_blank" class="view-btn"><i class="fas fa-link"></i></a>`;
    } else if (project.category === 'miniapp') {
      const qrBtn = `<a data-effect="mfp-newspaper" href="${project.qrImage}" class="view-btn popup-link qr-btn" title="View QR Code"><i class="fas fa-qrcode"></i></a>`;
      const urlBtn = project.url ? `<a href="${project.url}" target="_blank" class="view-btn explore-btn" title="Open Mini App">Explore</a>` : '';
      
      linkElement = `
        <div class="buttons-wrapper" style="display: flex; gap: 1.5rem; align-items: center;">
          ${qrBtn}
          ${urlBtn}
        </div>
      `;
    }

    const descriptionHTML = project.description ? `<p class="desc">${project.description}</p>` : '';

    let tagsHTML = '';
    if (project.tags && project.tags.length > 0) {
      tagsHTML = `<div class="tags-container">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>`;
    }

    const itemHTML = `
      <div class="portfolio-item image ${project.category}">
        <img src="${project.image}" alt="${project.title}" />
        <div class="content">
          <h4>${project.title}</h4>
          <p>${project.category}</p>
          ${descriptionHTML}
          ${tagsHTML}
          ${linkElement}
        </div>
      </div>
    `;
    container.innerHTML += itemHTML;
  });
}
