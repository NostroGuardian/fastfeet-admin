import { Button } from 'shared/ui';

import { ItemRow } from './ItemRow/ItemRow';

export const Home = () => {
	return (
		<>
			HOME PAGE
			<Button>Добавить</Button>
			<ItemRow article="523672" title="Крутые кросы" amount={10} />
		</>
	);
};
