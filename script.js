// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Force PDF Download
function downloadResume() {
    const link = document.createElement("a");
    link.href = "Kshitij_Chauhan_Resume.pdf";  // Exact filename
    link.download = "Kshitij_Chauhan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}