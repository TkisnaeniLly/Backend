const { User } = require("../../Models");
const checkEmail = async (email) => {
    try {
        // TODO : validasi email check email di database, email regex diganti
        const user = await User.findOne({ where: { email } });
        const userId = user.dataValues.user_id;
        return userId;
    } catch (error) {
        console.error("Error checkEmail:", error);
        return false;
    }
}

module.exports = checkEmail;