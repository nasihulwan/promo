const csNumbers = [
    "6289655740006",
    "6285228600086"
];

function getNextCS() {
  let index = localStorage.getItem("csIndex") || 0;
  const csNumber = csNumbers[index];

  index = (parseInt(index) + 1) % csNumbers.length;
  localStorage.setItem("csIndex", index);

  return csNumber;
}

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const telepon = document.getElementById("telepon").value;
  const alamat = document.getElementById("alamat").value;

  const csNumber = getNextCS();

  // Tracking GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "formOrder",
    nama: nama,
  });

  const message = `Halo, Kak! 👋 Perkenalkan \n\nNama: ${nama}\nNo Telepon: ${telepon}\nAlamat: ${alamat}\n\nSaya tertarik dan ingin tahu lebih banyak tentang kainnya. Boleh minta infonya lebih lanjut? Terima kasih! ✨`;
  const encoded = encodeURIComponent(message);
  const waURL = `https://wa.me/${csNumber}?text=${encoded}`;
  window.open(waURL, "_blank");
});
