function openBooking(title, posterUrl) {
  document.querySelector("#booking").classList.remove("hidden");
  document.querySelector("#show-title").textContent = `Đặt suất: ${title}`;
  document.querySelector("#poster-img").src = posterUrl;

  const today = new Date().toISOString().split("T")[0];
  document.querySelector("#date-input").value = today;

  document.querySelector("#booking").scrollIntoView({ behavior: "smooth" });
}

function submitForm(e) {
  e.preventDefault();
  alert("Đặt suất thành công! Chúng tôi sẽ liên hệ lại với bạn sớm.");
  document.querySelector("#booking").classList.add("hidden");
}
