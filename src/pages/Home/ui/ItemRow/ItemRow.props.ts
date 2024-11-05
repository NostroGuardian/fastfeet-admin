import { HTMLAttributes } from 'react';

export interface ItemRowProps extends HTMLAttributes<HTMLDivElement> {
	article: string;
	title: string;
	amount: number;
}
