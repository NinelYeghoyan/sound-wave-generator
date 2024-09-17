import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { normalizeKey } from '@utils/index';

type ResponsiveImagePropsType = {
    assetWeb: string;
    assetMobile: string;
    alt: string;
};

const ResponsiveImage: FC<ResponsiveImagePropsType> = ({ assetWeb, assetMobile, alt }) => {
    const { t } = useTranslation();

    return (
        <picture>
            <source media="(min-width: 480px)" className="responsive-img" type="image/png" srcSet={assetWeb} />
            <img className="responsive-img" draggable="false" alt={t(normalizeKey(alt))} src={assetMobile} />
        </picture>
    );
};

export default ResponsiveImage;
