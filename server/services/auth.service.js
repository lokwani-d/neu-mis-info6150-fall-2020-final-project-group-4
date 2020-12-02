import User from './../models/userSchema';

const login = (email, password) => {
    const promise = User.findOne({email: email}).exec();
    return promise;
}

const register = (email, password) => {
    const promise = User.findOne({email: email}).exec();
    return promise;
}

export default {
    login: login,
    register: register
}
