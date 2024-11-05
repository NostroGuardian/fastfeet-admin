import { Icons } from 'assets/icons/Icon';

import styles from './SecondaryButton.module.css';
import { SecondaryButtonProps } from './SecondaryButton.props';

export const SecondaryButton = ({ children, icon }: SecondaryButtonProps) => {
	return (
		<button className={styles.button}>
			<img src={Icons[icon]} alt={Icons[icon]} className={styles.icon} />
			{children}
		</button>
	);
};
