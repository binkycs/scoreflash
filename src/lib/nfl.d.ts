export interface GameList {
	lastUpdatedOn: Date;
	games: Game[];
	references: References;
}

export interface Game {
	schedule: Schedule;
	score: Score;
}

export interface Schedule {
	id: number;
	week: number;
	startTime: Date;
	endedTime: Date;
	awayTeam: Team;
	homeTeam: Team;
	venue: Venue;
	venueAllegiance: VenueAllegiance;
	scheduleStatus: ScheduleStatus;
	originalStartTime: null;
	delayedOrPostponedReason: null;
	playedStatus: PlayedStatus;
	attendance: number;
	officials: Official[];
	broadcasters: string[];
	weather: Weather;
}

export interface Team {
	id: number;
	abbreviation: string;
}

export interface Official {
	id: number;
	title: Title;
	firstName: string;
	lastName: string;
}

export enum Title {
	BackJudge = 'Back Judge',
	DownJudge = 'Down Judge',
	FieldJudge = 'Field Judge',
	LineJudge = 'Line Judge',
	Referee = 'Referee',
	ReplayOfficial = 'Replay Official',
	SideJudge = 'Side Judge',
	Umpire = 'Umpire',
}

export enum PlayedStatus {
	Completed = 'COMPLETED',
}

export enum ScheduleStatus {
	Normal = 'NORMAL',
}

export interface Venue {
	id: number;
	name: string;
}

export enum VenueAllegiance {
	Home = 'HOME',
}

export interface Weather {
	type: string;
	description: string;
	wind: Wind;
	temperature: Temperature;
	precipitation: Precipitation;
	humidityPercent: number;
}

export interface Precipitation {
	type: null | string;
	percent: null;
	amount: Amount;
}

export interface Amount {
	millimeters: number | null;
	centimeters: null;
	inches: null;
	feet: null;
}

export interface Temperature {
	fahrenheit: number;
	celsius: number;
}

export interface Wind {
	speed: Speed;
	direction: Direction;
}

export interface Direction {
	degrees: number;
	label: null | string;
}

export interface Speed {
	milesPerHour: number;
	kilometersPerHour: number;
}

export interface Score {
	currentQuarter: null;
	currentQuarterSecondsRemaining: null;
	currentIntermission: null;
	teamInPossession: null;
	currentDown: null;
	currentYardsRemaining: null;
	lineOfScrimmage: null;
	awayScoreTotal: number;
	homeScoreTotal: number;
	quarters: Quarter[];
}

export interface Quarter {
	quarterNumber: number;
	awayScore: number;
	homeScore: number;
}

export interface References {
	teamReferences: TeamReference[];
	venueReferences: VenueReference[];
}

export interface TeamReference {
	id: number;
	city: string;
	name: string;
	abbreviation: string;
	homeVenue: Venue;
	teamColoursHex: string[];
	socialMediaAccounts: SocialMediaAccount[];
	officialLogoImageSrc: string;
}

export interface SocialMediaAccount {
	mediaType: MediaType;
	value: string;
}

export enum MediaType {
	Twitter = 'TWITTER',
}

export interface VenueReference {
	id: number;
	name: string;
	city: string;
	country: Country;
	geoCoordinates: GeoCoordinates;
	capacitiesByEventType: CapacitiesByEventType[];
	playingSurface: string;
	baseballDimensions: any[];
	hasRoof: boolean;
	hasRetractableRoof: boolean;
}

export interface CapacitiesByEventType {
	eventType: string;
	capacity: number;
}

export enum Country {
	Usa = 'USA',
}

export interface GeoCoordinates {
	latitude: number;
	longitude: number;
}

export interface Standings {
	lastUpdatedOn: Date;
	teams: TeamElement[];
	references: References;
}

export interface References {
	teamStatReferences: TeamStatReference[];
}

export interface TeamStatReference {
	category: string;
	fullName: string;
	description: string;
	abbreviation: string;
	type: Type;
}

export enum Type {
	Decimal = 'DECIMAL',
	Integer = 'INTEGER',
}

export interface TeamElement {
	team: TeamTeam;
	stats: Stats;
	overallRank: OverallRank;
	conferenceRank: ConferenceRank;
	divisionRank: DivisionRank;
	playoffRank: PlayoffRank;
}

export interface ConferenceRank {
	conferenceName: ConferenceName;
	rank: number;
	gamesBack: number;
}

export enum ConferenceName {
	Afc = 'AFC',
	NFC = 'NFC',
}

export interface DivisionRank {
	divisionName: string;
	rank: number;
	gamesBack: number;
}

export interface OverallRank {
	rank: number;
	gamesBack: number;
}

export interface PlayoffRank {
	conferenceName: ConferenceName;
	divisionName: null;
	appliesTo: AppliesTo;
	rank: number;
}

export enum AppliesTo {
	Conference = 'CONFERENCE',
}

export interface Stats {
	gamesPlayed: number;
	passing: { [key: string]: number };
	rushing: { [key: string]: number };
	receiving: { [key: string]: number };
	tackles: Tackles;
	interceptions: { [key: string]: number };
	fumbles: Fumbles;
	kickoffReturns: { [key: string]: number };
	puntReturns: { [key: string]: number };
	fieldGoals: { [key: string]: number };
	extraPointAttempt: ExtraPointAttempt;
	kickoffs: { [key: string]: number };
	punting: { [key: string]: number };
	miscellaneous: { [key: string]: number };
	standings: StandingsClass;
	twoPointAttempts: { [key: string]: number };
	snapCounts: SnapCounts;
}

export interface ExtraPointAttempt {
	xpBlk: number;
	xpMade: number;
	xpAtt: number;
	xpPct: number;
	fgAndXpPts: number;
}

export interface Fumbles {
	fumbles: number;
	fumLost: number;
	fumForced: number;
	fumOwnRec: number;
	fumOppRec: number;
	fumRecYds: number;
	fumTotalRec: number;
	fumTD: number;
}

export interface SnapCounts {
	offenseSnaps: number;
	defenseSnaps: number;
	specialTeamSnaps: number;
}

export interface StandingsClass {
	wins: number;
	losses: number;
	ties: number;
	otWins: number;
	otLosses: number;
	winPct: number;
	pointsFor: number;
	pointsAgainst: number;
	pointDifferential: number;
}

export interface Tackles {
	tackleSolo: number;
	tackleTotal: number;
	tackleAst: number;
	sacks: number;
	sackYds: number;
	tacklesForLoss: number;
}

export interface TeamTeam {
	id: number;
	city: string;
	name: string;
	abbreviation: string;
	homeVenue: HomeVenue;
	teamColoursHex: string[];
	socialMediaAccounts: SocialMediaAccount[];
	officialLogoImageSrc: string;
}

export interface HomeVenue {
	id: number;
	name: string;
}

export interface SocialMediaAccount {
	mediaType: MediaType;
	value: string;
}

export enum MediaType {
	Twitter = 'TWITTER',
}
