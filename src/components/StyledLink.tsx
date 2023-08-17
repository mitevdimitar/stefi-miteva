import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)(() => ({
  textDecoration: 'none',
}));

export default StyledLink;
