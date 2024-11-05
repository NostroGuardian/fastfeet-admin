import add from './add.png';
import returnBack from './returnBack.png';
import search from './search.png';
import trash from './trash.png';

export const Icons = {
	returnBack,
	trash,
	search,
	add,
};

export type IconType = keyof typeof Icons;
