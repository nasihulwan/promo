const promoEndDate = new Date("2025-08-30T23:59:59").getTime();
const announceDate = new Date("2025-09-16T23:59:59").getTime();
const countdown = document.getElementById("countdown");
const title = document.getElementById("countdown-title");

function updateCountdown() {
  const now = new Date().getTime();
  let distance, label;

  if (now < promoEndDate) {
    distance = promoEndDate - now;
    label = "Promo Berakhir Dalam:";
  } else if (now < announceDate) {
    distance = announceDate - now;
    label = "Pengumuman Pemenang Dalam:";
  } else {
    countdown.innerHTML = "Promo dan Pengumuman Selesai.";
    title.textContent = "";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  title.textContent = label;
  countdown.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown(); // jalankan pertama kali
