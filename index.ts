interface TodoType {
	id: number;
	content: string;
	category: string;
	isCompleted: boolean;
	tag?: string[];
}

interface ReadOnly {
	readonly id: number;
}
