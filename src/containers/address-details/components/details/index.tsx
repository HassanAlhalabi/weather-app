import { Box, CardContent, Grid, Typography, styled } from "@mui/material";
import { StyledCard } from "../../../../components/card";
import RoomIcon from '@mui/icons-material/Room';
// import mainImage from '../../../../assets/cloud-sub.PNG';
import {marker} from '../../../../assets/marker.PNG';

const StyledDate = styled(Typography)`
    color: #A6AFBD;
    font-weight: 200;
`

const StyledLocatinTitle = styled(Typography)`
    color: #101010;
    font-size: 28px;
`

const Details = () => {
    return <StyledCard>
                <CardContent>
                    <Box>
                        <Grid container spacing={3}>
                            <Grid item md={8}>
                                <StyledDate>Sat, 20 May</StyledDate>
                                <StyledLocatinTitle>
                                    Damascus 
                                </StyledLocatinTitle>
                            </Grid>
                            <Grid item md={4}>
                                {/* <img src={mainImage} /> */}
                            </Grid>
                        </Grid> 
                    </Box>
                    <Box>
                        
                    </Box>
                </CardContent>
            </StyledCard>;
}
 
export default Details;