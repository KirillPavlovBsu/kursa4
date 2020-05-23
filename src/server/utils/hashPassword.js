const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(password, salt);
        return { salt, password:hash };
    } catch (error) {
        throw new Error('Hashing failed', error)
    }
};

module.exports = hashPassword;