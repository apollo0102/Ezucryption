import styled from '@emotion/styled';
import NotificationTable from '../../../components/Pages/Settings/NotificationTable';
import Navlink from '../../../components/Pages/Settings/SettingsNav';
import SettingsTab from '../../../components/Pages/Settings/SettingsTabs';

import { Container } from '@mui/material';

const Settings = () =>{
    return(
        <Container>
        <CardWrapper>
            <SettingsTab />
            
        </CardWrapper>
        </Container>
        
    )
}
export default Settings

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 160px;
width:100%;
`
