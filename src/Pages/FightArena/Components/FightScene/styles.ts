import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const getMainStyle = () => ({
  width: "90vw",
  height: "70vh",
  backgroundImage: "url('/Frame 664.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "80px",
});
export const CardContainer = styled.div<{ shake: boolean; rotate?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;

  ${({ shake }) =>
    shake &&
    `
    animation: shake 1s;
  `}

  ${({ rotate }) =>
    rotate &&
    `
    animation: rotate 1s ease-in-out;
  `}

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-10px);
    }
    50% {
      transform: translateX(10px);
    }
    75% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes rotate {
    0%,
    100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(45deg);
    }
  }
`;
