import { Box, Container,  Grid, Typography, styled } from "@mui/material";
import Search from "./search";


const StyledHeader = styled(Box)`
    border-bottom: 1px solid #EEE;
    margin-bottom: 25px;
`

const Header = () => {

    return <StyledHeader>
                <Container>
                    <Grid container spacing={2} padding='20px'>
                        <Grid item xs={4}>
                            <Typography fontSize="32px" color='#5F8AD7' variant="h1">
                                Weather c
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Search />
                        </Grid>
                        <Grid item xs={4}>
                            asa
                        </Grid>
                    </Grid>
                </Container>
            </StyledHeader>
}
 
export default Header;