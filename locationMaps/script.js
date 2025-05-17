const branches = [
  {
    name: "Ponto Energia - Pilhas e baterias",
    lat:-9.559462792125032,
    lng:-35.77078575071475,
    
    address: "Maceio, Alagoas ",
    descarte: " Pilhas comuns, baterias recarregáveis, baterias de lítio (como de celular e notebook), controles remotos e similares.",
    formaDescarte: " Leve as pilhas e baterias descarregadas até pontos de coleta específicos, localizados em supermercados, bancos, lojas de eletrônicos ou ecopontos que aceitam resíduos perigosos.",
    motivoDescarte: " Pilhas e baterias contêm metais pesados tóxicos como chumbo, cádmio e mercúrio. O descarte correto evita a contaminação do solo e da água e impede a liberação de gases poluentes na queima ou decomposição irregular."
  
  },
  {
    name: " Ponto Papel – Papel e Papelão",
    lat: -9.551300214985362,
    lng: -35.734613942468606,
    
    address: "Maceio, Alagoas ",
    descarte: " Jornais, caixas de papelão, cadernos, folhas, embalagens de papel limpas e secas.",
    formaDescarte: "Devem ser entregues em cooperativas de reciclagem, ecopontos ou coletores públicos de papel. É importante que estejam limpos e sem restos de alimentos ou gordura.",
    motivoDescarte: "Papel e papelão reciclados economizam energia e reduzem a emissão de CO₂ da produção a partir da celulose virgem. Além disso, evitam a liberação de metano em aterros quando se decompõem."
  },
  {
    name: "Ponto Orgânico – Resíduos de Alimentos",
    lat:  -9.554581,
    lng: -35.717054,
    
    address: "Maceio, Alagoas ",
    descarte: " Restos de frutas, legumes, verduras, borra de café, cascas, folhas secas e sobras de alimentos naturais.",
    formaDescarte: "Os resíduos devem ser depositados em composteiras caseiras ou comunitárias, ou levados a hortas urbanas e centros de compostagem identificados no CarboClean.",
    motivoDescarte: "A decomposição de orgânicos em aterros gera metano, um gás 25 vezes mais potente que o CO₂. A compostagem transforma esses resíduos em adubo, reduzindo emissões e promovendo agricultura sustentável."
  },
  {
    name: "Ponto Plástico – Plásticos em Geral",
    lat:-9.538268491302102,
    lng:-35.77288352220756,
    address: "Maceio, Alagoas ",
    descarte: " Garrafas PET, sacolas plásticas, potes de alimentos, tampas, embalagens de produtos de higiene e limpeza, entre outros.",
    formaDescarte: " Os plásticos devem ser limpos e secos antes de serem levados a pontos de coleta seletiva ou cooperativas que trabalham com esse tipo de material.",
    motivoDescarte: " A queima ou decomposição de plásticos libera CO₂ e compostos tóxicos. A reciclagem reduz drasticamente essas emissões e diminui a demanda por petróleo, base da fabricação do plástico."
  }
];


const map = L.map("map").setView([-9.551300214985362,-35.734613942468606],12);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    maxZoom:18,
}).addTo(map);

branches.forEach(branch => {
    const marker = L.marker([branch.lat , branch.lng]).addTo(map);
    marker.on("click",()=>{
        showInfo(branch)
    })
});

function showInfo(branch) {
  document.getElementById("info").innerHTML = `
    <div class="info-item">
      <h3>${branch.name}</h3>
      <p><strong>Endereço:</strong> ${branch.address}</p>
      <p><strong>O que pode ser descartado aqui:</strong>${branch.descarte}</p>
      <p><strong>Como é realizado o descarte:</strong> ${branch.formaDescarte}</p>
      <p><strong>Por que descartar aqui:</strong> ${branch.motivoDescarte}</p>
    </div>
  `;
}