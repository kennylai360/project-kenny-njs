import Link from "next/link";
import styles from "./menu.module.css";

export default function Menu(): React.ReactNode {
	return (
		<>
			<Link href="/" className={styles.links}>
				Home
			</Link>
			<Link href="/about" className={styles.links}>
				About
			</Link>
			<hr></hr>
		</>
	);
}
