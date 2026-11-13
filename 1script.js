
let cart = [];

function addCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    document.getElementById("count").innerText = cart.length;

    alert(name + " added successfully!");
}

function showCart() {
    if (cart.length === 0) {
        alert("Your shopping cart is empty!");
        return;
    }

    let total = 0;
    let details = "RUHI SHOPPING CART\n\n";

    cart.forEach((item, index) => {
        details += `${index + 1}. ${item.name} - ₹${item.price}\n`;
        total += item.price;
    });

    details += "\nTotal: ₹" + total;

    alert(details);
}

function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    this.reset();
});

document.getElementById("newsletter-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for subscribing to RUHI!");
    this.reset();
});
