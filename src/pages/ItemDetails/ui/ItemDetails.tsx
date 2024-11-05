import { SecondaryButton } from 'shared/ui';

export const ItemDetails = () => {
	return (
		<>
			ITEM DETAILS PAGE
			<SecondaryButton icon="returnBack">Вернуться назад</SecondaryButton>
			<SecondaryButton icon="trash">Удалить товар</SecondaryButton>
			<SecondaryButton icon="add">Добавить товар</SecondaryButton>
		</>
	);
};
