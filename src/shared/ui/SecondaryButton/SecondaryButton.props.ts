import { IconType } from 'assets/icons/Icon';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	icon: IconType;
}
