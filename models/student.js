import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  generalNotes: String,
  generalReport: String
});

export const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);
