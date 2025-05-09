const branches = [
  {
    name: "TRIX AMBIENTAL - LICENCIAMENTO AMBIENTAL / AVCB / COLETA DE RESÍDUOS / LIMPEZA DE TANQUES",
    lat:-9.559462792125032,
    lng:-35.77078575071475,
    
    address: "Maceio, Alagoas ",
    phone: "123456789",
  
  },
  {
    name: "Sesi Senai",
    lat: -9.551300214985362,
    lng: -35.734613942468606,
    
    address: "Maceio, Alagoas ",
    phone: "987654321",
  },
  {
    name: "Análise Ambiental (Estação de tratamento Offsite)",
    lat:-9.538268491302102,
    lng:-35.77288352220756,
    address: "Maceio, Alagoas ",
    phone: "456789123",
  },
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
      <p><strong>Telefone:</strong> ${branch.phone}</p>
    </div>
  `;
}