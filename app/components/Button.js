import styled, { css } from 'styled-components';

const ButtonStyles = css`
  padding: ${(props) => props.padding || '10px 20px'};
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.bgColor || '#A53DFF'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderRadius || '4px'};
  cursor: pointer;
  display:  ${(props) => props.flex || 'inline-block'};
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${(props) => props.hoverBgColor || '#9223EB'};
    color: ${(props) => props.hoverColor || 'white'};
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.outlined &&
    css`
      background-color: transparent;
      border: 2px solid ${(props) => props.borderColor || '#A53DFF'};
      color: ${(props) => props.textColor || '#A53DFF'};

      &:hover {
        background-color: ${(props) => props.borderColor || '#A53DFF'};
        color: white;
      }
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyles}
`;

const StyledLinkButton = styled.a`
  ${ButtonStyles}
`;

export default function Button({
  children,
  onClick,
  as = 'button',
  href,
  ...props
}) {
  if (as === 'a') {
    return (
      <StyledLinkButton href={href} {...props} onClick={onClick}>
        {children}
      </StyledLinkButton>
    );
  }
  return (
    <StyledButton {...props} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
