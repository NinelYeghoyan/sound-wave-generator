import { FC } from 'react';

import colorlessLogo from '@assets/colorless_logo.svg';
import colorfulLogo from '@assets/logo_colorful.svg';
import mobileLogo from '@assets/logo_small.svg';

type LogoPropsType = {
    isHeader?: boolean;
};

const Logo: FC<LogoPropsType> = ({ isHeader = false }) => {
    return (
        <div className="SG-logo">
            <a href="https://www.renderforest.com/" target="_blank" className="SG-logo block" rel="noreferrer">
                {isHeader && (
                    <picture>
                        <source
                            media="(min-width: 1601px)"
                            height="40"
                            width="175"
                            type="image/png"
                            srcSet={colorfulLogo}
                        />
                        <img height="40" width="31" draggable="false" alt="Header Logo" src={mobileLogo} />
                    </picture>
                )}

                {!isHeader && <img src={colorlessLogo} alt="Footer Logo" width="100%" height="100%" loading="lazy" />}
            </a>
        </div>
    );
};

export default Logo;
