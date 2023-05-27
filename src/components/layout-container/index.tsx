import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

const StyledLayoutContainer = styled('div')`
    background-color: #F3F4F7;
    height: 100vh;
`

const LayoutContainer = ({children}:{children: ReactNode}) => <StyledLayoutContainer>
                                        {children}
                                    </StyledLayoutContainer>

export default LayoutContainer;