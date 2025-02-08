const links = [
    "https://superprofile.bio/bookings/aryancosmofeed",
    "https://superprofile.bio/bookings/Sakshi123"
];
function getRandomLink() {
    const randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
}
document.getElementById("randomLinkButton").addEventListener("click", () => {
    const randomLink = getRandomLink();
    window.location.href = randomLink; link
});
