const mongoose = require('mongoose');

const HackerApplicationSchema = new mongoose.Schema({
  HackerID: { type: mongoose.Schema.Types.ObjectId, ref: 'Hacker', required: true },
  Time: { type: Date, default: Date.now },
  Understand: { type: Boolean, required: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  PreferredFirstName: { type: String },
  Pronouns: { type: String },
  Age: { type: Number, required: true },
  Hackathons: { type: Number, required: true },
  Email: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
  Country: { type: String, required: true },
  Province: { type: String, required: true },
  EducationLevel: { type: String, required: true },
  GraduationYear: { type: String, required: true },
  School: { type: String, required: true },
  YorkID: { type: Number, required: true },
  FieldOfStudy: { type: String, required: true },
  Resume: { type: String, required: true },
  PermissionToShareResume: { type: Boolean, required: true },
  LinkedinProfile: { type: String },
  DietaryRestrictions: { type: String },
  ShirtSize: { type: String, required: true },
  InPersonHackathon: { type: Boolean, required: true },
  RequireOvernightAccommodations: { type: Boolean, required: true },
  MLHCodeOfConduct: { type: Boolean, required: true },
  AuthorizeShareInfoWithMLH: { type: Boolean, required: true },
  AuthorizeMLHEmails: { type: Boolean, required: true },
  AdditionalInfo: { type: String }
}, { collection: 'HackerApplication' });

module.exports = mongoose.model('HackerApplication', HackerApplicationSchema);