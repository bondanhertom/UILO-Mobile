function isEmail(email) {
    // Regex pattern untuk memeriksa format email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Mengembalikan nilai true jika email sesuai dengan format pattern
    return emailPattern.test(email);
}

module.exports = isEmail;
