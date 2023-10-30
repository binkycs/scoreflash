import { Game, TeamElement } from '@/lib/nfl';
import Image from 'next/image';

export default function TeamCard({
	team,
	game,
}: {
	team: TeamElement;
	game: Game;
}) {
	const { quarters } = game.score;
	const teamIsHome = game.schedule.homeTeam.id === team.team.id;

	let quarterScores: (number | string)[] = teamIsHome
		? quarters.map((q) => q.homeScore)
		: quarters.map((q) => q.awayScore);
	quarterScores = quarterScores.concat(['-', '-', '-', '-']).slice(0, 4);

	let totalScore: number | string = teamIsHome
		? game.score.homeScoreTotal || '-'
		: game.score.awayScoreTotal || '-';

	const { standings } = team.stats;
	return (
		<>
			<div className='flex justify-between items-center'>
				<div className='flex items-center'>
					<Image
						src={team.team.officialLogoImageSrc}
						alt={team.team.name}
						width={42}
						height={42}
						className='mr-2'
					/>
					<div>
						<h3 className='font-bold text-lg leading-none truncate text-foreground'>
							{team.team.name}
						</h3>
						<span className='font-light text-xs'>
							{standings.wins}-{standings.losses}-{standings.ties}
						</span>
					</div>
				</div>
				<div className='flex items-center'>
					<span className='hidden sm:block'>
						{quarterScores.map((x) => {
							return (
								<span
									key={x}
									className='mx-1 min-w-[15px] inline-block text-center'
								>
									{x}
								</span>
							);
						})}
					</span>
					<span className='ml-4 w-6 text-right text-2xl font-bold'>
						{totalScore}
					</span>
				</div>
			</div>
		</>
	);
}
