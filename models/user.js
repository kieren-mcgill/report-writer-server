import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    organisation: String,
    yearGroup: Number,
})

export const User = mongoose.models.User || mongoose.model('User', userSchema);