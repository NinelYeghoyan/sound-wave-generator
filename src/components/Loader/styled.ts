import styled, { keyframes } from 'styled-components';

const single = keyframes`
  0% {
    transform: translateY(3px);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(3px);
  }
`;

const double = keyframes`
  0% {
    transform: translateY(-3px);
  }
  50% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(-3px);
  }
`;

export const StyledLoader = styled.div`
    .BS-animation-load-button {
        width: 12px;
        height: 12px;
        border-radius: 50%;

        display: inline-block;

        margin-left: 4px;

        background-image: radial-gradient(
            81.41% 207.84% at 17.81% 36.38%,
            #eff8ff 0%,
            #b6dbfd 45.08%,
            #9aceff 61.89%,
            #6272ff 100%
        );
    }

    .BS-animation-load-button-single {
        animation: 0.6s linear 0s infinite normal none running ${single};
    }

    .BS-animation-load-button-double {
        animation: 0.6s linear 0s infinite normal none running ${double};
    }
`;
