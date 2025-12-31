const checkEmail = (email) => {
    try {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // TODO : validasi email check email di database, email regex diganti
        return emailRegex.test(email);
    } catch (error) {
        console.error("Error checkEmail:", error);
        return false;
    }
}

module.exports = checkEmail;