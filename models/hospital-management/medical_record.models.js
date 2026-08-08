import mongoose from 'mongoose';

const medicalRecordaSchema = new mongoose.Schema({}, { timestamps: true });

export const MedicalReport = mongoose.model(
  'MedicalReport',
  medicalRecordaSchema
);
