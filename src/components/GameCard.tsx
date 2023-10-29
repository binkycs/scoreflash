/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './ui/card';
import Image from 'next/image';
import { Game, TeamElement } from '@/lib/nfl';
import { DateTime } from 'luxon';
import TeamCard from './TeamCard';

export default function GameCard({
	homeTeam,
	awayTeam,
	game,
}: {
	homeTeam: TeamElement;
	awayTeam: TeamElement;
	game: Game;
}) {
	const startTime = DateTime.fromJSDate(new Date(game.schedule.startTime));
	return (
		<Card className='w-80 hover:bg-muted'>
			<Link href='#'>
				<CardHeader className='pt-2 pb-4 px-4'>
					<CardTitle>
						{startTime.toLocaleString({
							month: '2-digit',
							day: 'numeric',
							hour: 'numeric',
							minute: '2-digit',
							weekday: 'short',
							timeZone: 'America/New_York',
						})}
					</CardTitle>
					<CardDescription className='text-xs'>
						Week {game.schedule.week}
					</CardDescription>
				</CardHeader>
				<CardContent className='px-4 pb-3 space-y-4'>
					<TeamCard team={awayTeam} game={game} />
					<div className='mx-2'>@</div>
					<TeamCard team={homeTeam} game={game} />
				</CardContent>
			</Link>
		</Card>
	);
}
