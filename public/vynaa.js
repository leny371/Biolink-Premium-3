// ==============================
// Configuration - Easy to edit
// ==============================
const config = {
profile: {
name: "🎀I,𝚖 𝚕𝚎𝚗𝚗𝚢 𝚌𝚑𝚊𝚗🎀",
bio: "jangan lupa mam, kalo ga mam ku gigit:v"
},

slides: [
"https://c.termai.cc/i160/BnYoUZj.jpg",
"https://files.catbox.moe/pull9m.jpg"
],

buttons: [
{
icon: "https://img.icons8.com/color/48/000000/whatsapp--v1.png",
text: "WhatsApp",
actionText: "Chat",
link: "https://wa.me/6285739225210"
},
{
icon: "https://img.icons8.com/color/48/000000/youtube-play.png",
text: "YouTube",
actionText: "Subscribe",
link: "https://youtube.com/@lenyleny-m5n?si=XLd0Epf07KbhE7AJ"
},
{
icon: "https://img.icons8.com/fluency/48/000000/instagram-new.png",
text: "Instagram",
actionText: "PLAY",
link: "https://instagram.com/cutieelyn2"
},
{
icon: "https://img.icons8.com/ios-filled/50/000000/tiktok.png",
text: "TikTok",
actionText: "TikTok",
link: "http://tiktok.com/@elynn2005"
},
{
icon: "https://img.icons8.com/color/48/qr-code.png",
text: "QRIS",
actionText: "Bayar",
qris: "https://files.catbox.moe/z8t3gh.jpg"
}
],

socialLinks: [
{ icon: "fab fa-facebook-f", link: "#" },
{ icon: "fab fa-twitter", link: "#" },
{ icon: "fab fa-instagram", link: "#" },
{ icon: "fab fa-youtube", link: "#" }
]
};

// ==============================
// INITIALIZE PAGE
// ==============================
document.addEventListener('DOMContentLoaded', function () {

const audio = document.createElement("audio");
audio.src = "https://files.catbox.moe/6er4t0.mp3";
audio.autoplay = true;
audio.loop = true;
audio.volume = 0.3;
audio.muted = true;
document.body.appendChild(audio);

setTimeout(() => {
audio.muted = false;
audio.play().catch(() => {});
}, 1000);

document.getElementById('profile-name').textContent = config.profile.name;
document.getElementById('profile-bio').textContent = config.profile.bio;

const slideBox = document.getElementById('slideBox');
const indicators = document.getElementById('indicators');

config.slides.forEach((slide, i) => {
const img = document.createElement('img');
img.src = slide;
img.alt = `Slide ${i + 1}`;
slideBox.appendChild(img);

const indicator = document.createElement('div');
indicator.className = 'indicator' + (i === 0 ? ' active' : '');
indicator.onclick = () => showSlide(i);
indicators.appendChild(indicator);

});

const buttonGroup = document.getElementById('button-group');

config.buttons.forEach(button => {

const btn = document.createElement('a');
btn.className = 'btn';
btn.href = "javascript:void(0)";

btn.innerHTML = `
  <span><img src="${button.icon}" alt="${button.text}"/> ${button.text}</span>
  <span>${button.actionText}</span>
`;

if (button.qris) {

  btn.onclick = () => {

    const modal = document.createElement("div");

    modal.style.cssText = `
      position:fixed;
      inset:0;
      background:rgba(0,0,0,.8);
      display:flex;
      justify-content:center;
      align-items:center;
      backdrop-filter:blur(8px);
      z-index:99999;
    `;

    modal.innerHTML = `
      <div style="
        width:90%;
        max-width:420px;
        background:#fff;
        border-radius:20px;
        padding:18px;
        text-align:center;
        position:relative;
        animation:popup .25s ease;
      ">

        <span id="closeQris"
        style="
          position:absolute;
          top:10px;
          right:15px;
          font-size:30px;
          cursor:pointer;
        ">&times;</span>

        <h2 style="color:#ff69b4;">💖 Leny Store QRIS 💖</h2>

        <img src="${button.qris}"
        style="width:100%;border-radius:15px;">

        <p>Scan QRIS untuk pembayaran 🩷</p>

      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("closeQris").onclick = () => modal.remove();

    modal.onclick = e => {
      if (e.target === modal) modal.remove();
    };

  };

} else {

  btn.onclick = () => {
    window.open(button.link, "_blank");
  };

}

buttonGroup.appendChild(btn);

});

initSlider();

});
