 // Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Credentials Form Logic
const form = document.getElementById("credentialsForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const experience = document.getElementById("experience").value;
    const email = document.getElementById("email").value;

    output.innerHTML = `
        <h3>Saved Credentials</h3>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;

    form.reset();
});
