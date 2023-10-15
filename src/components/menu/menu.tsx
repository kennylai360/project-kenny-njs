import Link from "next/link";
import styles from "./menu.module.css";
import { VscGithub } from "react-icons/vsc";
import { RiTwitterXFill } from "react-icons/ri";
import { ImTwitch } from "react-icons/im";

export default function Menu(): React.ReactNode {
	return (
		<>
			<div className={styles.menuRoot}>
				<section className={styles.sectionLinks}>
					<Link href="/" className={styles.links}>
						Home
					</Link>
					<Link href="/about" className={styles.links}>
						About
					</Link>
					<Link href="/resume" className={styles.links}>
						Résumé
					</Link>
				</section>

				<section className={styles.sectionSocials}>
					<Link href="https://github.com/kennylai360" className={styles.links}>
						<VscGithub />
					</Link>

					<Link href="https://twitter.com/KENIII26" className={styles.links}>
						<RiTwitterXFill />
					</Link>

					<Link href="https://twitch.tv/KENIII26" className={styles.links}>
						<ImTwitch />
					</Link>
				</section>
			</div>

			<hr></hr>
		</>
	);
}
