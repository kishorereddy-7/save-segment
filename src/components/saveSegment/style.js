import styled from 'styled-components';
import { Button, Sidesheet } from "@innovaccer/design-system"

export const StyledButton = styled(Button)`
    margin: auto;
`;

export const StyledSidesheet = styled(Sidesheet)`
    .Sidesheet-header {
        background-color: #42eff5
    }
`;

export const FlexWrapper = styled.div`
    display: flex;
    align-items: ${props => props.alignItems}
    justify-content: ${props => props.justifyContent}
`;

export const FooterWrapper = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
`;

export const SaveSegButton = styled(Button)`
    background-color:  #0ca848;
    color: white;
`;

export const CancelSegButton = styled(Button)`
    background-color: white;
    color: red;
`;

export const SchemaWrapper = styled.div`
    border: 2px solid #42eff5
`