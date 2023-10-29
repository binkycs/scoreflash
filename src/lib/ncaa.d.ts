export interface NcaaGameList {
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
	endedTime: null;
	awayTeam: Team;
	homeTeam: Team;
	venue: Venue;
	venueAllegiance: VenueAllegiance;
	scheduleStatus: ScheduleStatus;
	originalStartTime: null;
	delayedOrPostponedReason: null;
	playedStatus: PlayedStatus;
	attendance: number | null;
	officials: any[];
	broadcasters: any[];
	weather: null;
}

export interface Team {
	id: number;
	abbreviation: string;
}

export enum PlayedStatus {
	Completed = 'COMPLETED',
	CompletedPendingReview = 'COMPLETED_PENDING_REVIEW',
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

export interface Score {
	currentQuarter: null;
	currentQuarterSecondsRemaining: null;
	currentIntermission: number | null;
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
	teamColoursHex: any[];
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
	eventType: EventType;
	capacity: number;
}

export enum EventType {
	General = 'GENERAL',
}

export enum Country {
	Usa = 'USA',
}

export interface GeoCoordinates {
	latitude: number;
	longitude: number;
}
