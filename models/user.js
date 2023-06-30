import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    organisation: String
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);