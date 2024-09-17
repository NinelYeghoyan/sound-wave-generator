import { FC, ReactNode } from 'react';

import StyledDropdown from '@components/Dropdown/styled';

type DropdownPropsType = {
    $isSecondary?: boolean;
    component: ReactNode;
};

const Dropdown: FC<DropdownPropsType> = ({ component, $isSecondary = false }) => {
    return (
        <StyledDropdown $isSecondary={$isSecondary} className="SG-dropdown">
            {component}
        </StyledDropdown>
    );
};

export default Dropdown;
