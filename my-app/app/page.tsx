import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import SignInPage from "./signin/page";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Easy&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>scheduling&nbsp;</h1>
				<br />
				<h1 className={title()}>
					meeting ahead for your need.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					just fews click, have quick meeting.
				</h2>
			</div>

			<div className="flex gap-3">
				<SignInPage />
				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					Learn more
				</Link>
			</div>
		</section>
	);
}
