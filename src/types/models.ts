export type Key = {
	name: string;
	owner: string | null;
	floor: number;
};

export type Teacher = {
	id: number;
	name: string;
};

export type Room = {
	id: string;
	name: string;
};

export type LessonHint = {
	message: string;
	currentLesson?: {
		teacher: string,
		timeFrom: string,
		timeTo: string
	};
	nextLesson?: {
		teacher: string,
		timeFrom: string,
		timeTo: string
	};
}
