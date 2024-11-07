import { HTMLAttributes } from 'react';

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
	appearance?: 'big' | 'small';
}
