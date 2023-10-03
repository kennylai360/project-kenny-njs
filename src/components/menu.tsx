import Link from "next/link";

export default function Menu() {
	return (
		<>
			<button type="button">
				<Link href="/">Home</Link>
			</button>

			<button type="button">
				<Link href="/about">About</Link>
			</button>
		</>
	);
}
