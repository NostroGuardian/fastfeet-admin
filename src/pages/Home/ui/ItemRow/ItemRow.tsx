import styles from './ItemRow.module.css';
import { ItemRowProps } from './ItemRow.props';

export const ItemRow = ({ article, title, amount }: ItemRowProps) => {
	return (
		<div className={styles.itemRow}>
			<span className={styles.article}>{article}</span>
			<span className={styles.title}>{title}</span>
			<span className={styles.amount}>{amount}</span>
		</div>
	);
};
