import { FormControl, Input, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const SearchInput = styled(Input)`
    background-color: #FFF !important;
    border: none;
    padding: 4px 8px;
    border-radius: 5px;
    color: #494949;
    width: 100%;
    &::before {
        border: none;
    }
`

const Search = () => {
    return <FormControl variant="standard" fullWidth>
                <SearchInput 
                    placeholder="Find Locations"
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon fontSize="small"/>
                        </InputAdornment>
                    }
                />
            </FormControl>;
}
 
export default Search;