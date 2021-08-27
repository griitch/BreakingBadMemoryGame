import styled from "styled-components";
import CenteredDiv from "../shared/CenteredDiv";

const Header = styled(CenteredDiv) `
    padding: 1rem 0;
    font-size: 1.2rem;
    background-color: #369457;
    color: #032202;
    font-weight: 800;
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`;

export default Header;

