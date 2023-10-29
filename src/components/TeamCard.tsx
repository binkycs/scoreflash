import { Game, TeamElement } from '@/lib/nfl';
import Image from 'next/image';

export default function TeamCard({
	team,
	game,
}: {
	team: TeamElement;
	game: Game;
}) {
	const quarters = game.score.quarters;
	const teamIsHome = game.schedule.homeTeam.id === team.team.id;

	const quarterScores = teamIsHome
		? quarters.map((q) => q.homeScore)
		: quarters.map((q) => q.awayScore);
	const totalScore = teamIsHome
		? game.score.homeScoreTotal
		: game.score.awayScoreTotal;

	const standing = team.stats.standings;
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
							{standing.wins}-{standing.losses}-{standing.ties}
						</span>
					</div>
				</div>
				<div className='flex items-center'>
					<span>{quarterScores.join('-')}</span>
					<span className='ml-4 w-6 text-right text-2xl font-bold'>
						{totalScore}
					</span>
				</div>
			</div>
		</>
	);
}
