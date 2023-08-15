export default function OverviewLyout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<div>
				{children}
			</div>
		</section>
	);
}
