function validateForm() {
    const item = document.getElementById('item').value.trim();
    const price = document.getElementById('price').value.trim();
    const category = document.getElementById('category').value.trim();
    const date = document.getElementById('date').value;

    if (!item || !price || !category || !date) {
        alert("All fields are required.");
        return false;
    }

    if (parseFloat(price) <= 0) {
        alert("Price must be greater than 0.");
        return false;
    }

    return true;
}
