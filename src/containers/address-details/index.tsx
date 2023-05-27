import { Container, Grid } from "@mui/material";
import Details from "./components/details";
import Map from "./components/map";

const AddressContainer = () => {
    return  <Container>
                <Grid container spacing={3} >
                    <Grid item md={6}>
                        <Details />
                    </Grid>
                    <Grid item md={6}>
                        <Map />
                    </Grid>
                </Grid>
            </Container>
}
 
export default AddressContainer;