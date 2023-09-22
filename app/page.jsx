import CertificateForm from "@/components/CertificateForm";

export default function Home() {
	return (
		<div className="p-4 max-w-3xl mx-auto">
			<h1>Enter Data:</h1>
			<p>Please fill the form below,</p>
			{/* <a href="http://localhost:3000/generate_certificate">
				Generate Certificate
			</a> */}
			<a href="/generate_certificate">Generate Certificate</a>
		</div>
	);
}
