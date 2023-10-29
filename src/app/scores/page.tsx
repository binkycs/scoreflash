import GameCard from '@/components/GameCard';
import { GameList, Standings } from '@/lib/nfl';
import { downloadJson } from '@/lib/utils';

export const dynamic = 'force-dynamic';

async function getData() {
	const gameList = (await downloadJson(
		process.env.API_URL + '/nfl/games.json'
	)) as GameList;

	const standings = (await downloadJson(
		process.env.API_URL + '/nfl/standings.json'
	)) as Standings;

	return { gameList, standings };
}

export default async function Page() {
	const { gameList, standings } = await getData();
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

// export default Scores;
