import { Schema, mongoose } from "mongoose";

const certificateSchema = new Schema({
	student_name: {
		type: String,
		maxLength: [50, "Name must be less than 50 characters"],
		required: [true, "required"],
	},
	institute_name: {
		type: String,
		maxLength: [50, "Name must be less than 50 characters"],
		required: [true, "required"],
	},
	course_name: {
		type: String,
		maxLength: [50, "Name must be less than 50 characters"],
		required: [true, "required"],
	},
	validity: {
		type: Number,
		required: [true, "required"],
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const Certificate =
	mongoose.models.Certificate ||
	mongoose.model("Certificate", certificateSchema);

export default Certificate;
