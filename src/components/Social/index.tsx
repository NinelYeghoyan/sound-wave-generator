import { FC } from 'react';

import { socialList } from '@constants/social';

import { StyledSocial } from './styled';

export const Social: FC = () => {
    return (
        <StyledSocial className="SG-social flex align-center">
            {socialList.map((item) => {
                return (
                    <li key={item.id}>
                        <a href={item.ref} rel="noreferrer" target="_blank" aria-label="logo">
                            {item.logo}
                        </a>
                    </li>
                );
            })}
        </StyledSocial>
    );
};
