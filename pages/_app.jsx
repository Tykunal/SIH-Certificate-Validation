import App from "next/app";

export default function MyApp({ Component, pageProps, example }) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}
