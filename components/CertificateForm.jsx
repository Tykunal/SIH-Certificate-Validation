"use client";

import { useState } from "react";
import { NextResponse } from "next/server";
import certificate_submitted from "./certificate_submitted";

export default function CertificateForm() {
	const [student_name, set_student_name] = useState("");
	const [institute_name, set_institute_name] = useState("");
	const [course_name, set_course_name] = useState("");
	const [validity, set_validity] = useState("");
	const [date, set_date] = useState("");
	const [error, set_error] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(student_name, institute_name, course_name, validity, date);

		const res = await fetch("api/certificate", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				student_name,
				institute_name,
				course_name,
				validity,
				date,
			}),
		});
		const { msg } = await res.json();

		set_error(msg);
		console.log(error);
		// Router.reload(window.location.pathname);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="student_name">Student Name</label>
				<input
					onChange={(e) => set_student_name(e.target.value)}
					value={student_name}
					type="text"
					id="student_name"
					placeholder="student_name"
				/>
			</div>
			<div>
				<label htmlFor="institute_name">Institute Name</label>
				<input
					onChange={(e) => set_institute_name(e.target.value)}
					value={institute_name}
					type="text"
					id="institute_name"
					placeholder="institute_name"
				/>
			</div>
			<div>
				<label htmlFor="course_name">Course Name</label>
				<input
					onChange={(e) => set_course_name(e.target.value)}
					value={course_name}
					type="text"
					id="course_name"
					placeholder="course_name"
				/>
			</div>
			<div>
				<label htmlFor="validity">Valid Till</label>
				<input
					onChange={(e) => set_validity(e.target.value)}
					value={validity}
					type="number"
					id="validity"
					placeholder="validity"
				/>
			</div>
			<div>
				<label htmlFor="date">Date</label>
				<input
					onChange={(e) => set_date(e.target.value)}
					value={date}
					type="date"
					id="date"
					placeholder="date"
				/>
			</div>

			<button type="submit">Upload Certificate</button>
		</form>
	);
}
