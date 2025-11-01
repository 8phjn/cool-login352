const loginBtn = document.getElementById("loginBtn");
const demoBtn = document.getElementById("demoBtn");
const message = document.getElementById("message");

function showMessage(text) {
  message.textContent = text;
  setTimeout(() => message.textContent = "", 3000);
}

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "demo@example.com" && password === "password123") {
    showMessage("✅ เข้าสู่ระบบสำเร็จ!");
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1500);
  } else {
    showMessage("❌ อีเมลหรือรหัสผ่านไม่ถูกต้อง");
  }
});

demoBtn.addEventListener("click", () => {
  document.getElementById("email").value = "demo@example.com";
  document.getElementById("password").value = "password123";
  showMessage("กรอกข้อมูลตัวอย่างแล้ว — กด 'เข้าสู่ระบบ'");
});

document.getElementById("forgot").addEventListener("click", (e) => {
  e.preventDefault();
  showMessage("ฟังก์ชันนี้กำลังพัฒนาอยู่");
});

document.getElementById("signup").addEventListener("click", (e) => {
  e.preventDefault();
  showMessage("หน้า 'สมัครสมาชิก' จะมาเร็ว ๆ นี้!");
});
