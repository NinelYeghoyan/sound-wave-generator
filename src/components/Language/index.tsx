import { FC } from 'react';

import flag from '@assets/flag.svg';
import IconArrow from '@assets/icons/Arrow';
import Dropdown from '@components/Dropdown';
import StyledLanguage from '@components/Language/styled';
import LanguageMenu from '@components/LanguageMenu';
import { useBreakpoint } from '@hooks/useBreakpoint';

const Language: FC = () => {
    const { mdUp } = useBreakpoint();

    return (
        <StyledLanguage className="SG-language relative">
            <div className="h100 flex-between flex-md-start cursor-pointer">
                <div className="flex align-center">
                    <div className="SG-language__flag flex-center">
                        <img src={flag} alt="Flag" width="24px" height="24px" loading="lazy" />
                    </div>

                    <p className="SG-language__text md-display-none ml-12">English</p>
                </div>

                <div className="SG-language__icon flex-center">
                    <IconArrow />
                </div>
            </div>

            {mdUp && <Dropdown component={<LanguageMenu />} $isSecondary />}
        </StyledLanguage>
    );
};

export default Language;
