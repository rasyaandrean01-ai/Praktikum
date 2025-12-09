const submit_btn = document.getElementById('submit');   

submit_btn.addEventListener('click', () => {
    console.log("login");
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username);
    // username=ahmad2017 , password=integrity
    if (username === "rasya" && password === "rasya123") {
        alert("Login Berhasil");
        window.location.href = "home.html";
    }else {
        alert("Login Gagal");
    }
})