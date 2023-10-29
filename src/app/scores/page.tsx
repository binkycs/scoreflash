'use server';
import GameCard from '@/components/GameCard';
import { GameList, Standings } from '@/lib/nfl';
import Games from '@/app/api/nfl/games.json';
import StandingsJson from '@/app/api/nfl/standings.json';

async function Scores() {
	const gameList = Games as unknown as GameList;
	const standings = StandingsJson as unknown as Standings;
	const brahnsGame = gameList.games.find(
		(game) => game.schedule.awayTeam.abbreviation === 'CLE'
	);

	const awayTeamId = brahnsGame?.schedule.awayTeam.id;
	const homeTeamId = brahnsGame?.schedule.homeTeam.id;

	standings.teams.find((team) => team.team.id === 1);
	const awayTeam = standings.teams.find((team) => team.team.id === awayTeamId)!;
	const homeTeam = standings.teams.find((team) => team.team.id === homeTeamId)!;

	return (
		<>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{gameList.games.map((game) => {
					const awayTeam = standings.teams.find(
						(team) => team.team.id === game.schedule.awayTeam.id
					);
					const homeTeam = standings.teams.find(
						(team) => team.team.id === game.schedule.homeTeam.id
					);
					if (!awayTeam || !homeTeam) return undefined;
					return (
						<div className='flex' key={game.schedule.id}>
							<GameCard homeTeam={homeTeam!} awayTeam={awayTeam!} game={game} />
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Scores;
