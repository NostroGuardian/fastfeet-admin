import cn from 'classnames';

import styles from './Logo.module.css';
import { LogoProps } from './Logo.props';

export const Logo = ({ appearance = 'small' }: LogoProps) => {
	return (
		<div className={cn(styles.logo, styles[appearance])}>
			<img src={`src/assets/logo${appearance}.png`} alt="Logo" />
			<span>fastfeet</span>
		</div>
	);
};
