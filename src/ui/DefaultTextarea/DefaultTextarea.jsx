import { styled, TextareaAutosize } from '@mui/material';

export const DefaultTextarea = () => {
    const StyledTextarea = styled(TextareaAutosize)(
        () => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0;
    resize: none;
    height: 100% !important;
  
    &:focus-visible {
      outline: 0;
    }
    
    &::placeholder {
        font-weight: 700;
    }
  `
    );

    return <StyledTextarea aria-label='empty textarea' placeholder='Empty' />;
};
