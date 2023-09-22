import Certificate from "@/app/models/certificate";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";

export async function POST(req) {
	const { student_name, institute_name, course_name, validity, date } =
		await req.json();

	try {
		await connectDB();
		await Certificate.create({
			student_name,
			institute_name,
			course_name,
			validity,
			date,
		});

		return NextResponse.json({
			msg: ["Certificate Uploaded successfully"],
		});
	} catch (error) {
		if (error instanceof mongoose.Error.ValidationError) {
			let errorList = [];
			for (let e in error.errors) {
				errorList.push(error.errors[e].message);
			}
			console.log(errorList);
			return NextResponse.json({ msg: errorList });
		} else {
			return NextResponse.json({ msg: "Unable to send message" });
		}
	}
}
