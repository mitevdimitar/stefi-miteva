import { Grid, IconButton, styled } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GMobiledataIcon from '@mui/icons-material/GMobiledata';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useMobile } from '../hooks/useMobile';

const StyledIconButton = styled(IconButton)(() => ({
  color: 'white',
  padding: 0,
  marginLeft: 10,
}));

function Footer() {
  const isMobile = useMobile();

  return (
    <Grid
      container
      py={1}
      px={3}
      sx={{
        background:
          'radial-gradient(circle, rgba(171,179,158,1) 0%, rgba(83,141,174,1) 100%)',
        color: 'white',
      }}
    >
      <Grid
        container
        item
        xs={isMobile ? 12 : 4}
        justifyContent={isMobile ? 'center' : 'flex-start'}
        mb={isMobile ? 1 : 0}
      >
        © 2023 Приказките на Стефи
      </Grid>
      {!isMobile && (
        <Grid
          container
          item
          xs={4}
          justifyContent={'center'}
          sx={{ fontFamily: "'Norican', cursive", fontSize: 20 }}
        >
          DM Web Services
        </Grid>
      )}
      <Grid
        container
        item
        xs={isMobile ? 12 : 4}
        justifyContent={isMobile ? 'center' : 'flex-end'}
      >
        <StyledIconButton
          onClick={() =>
            window.open('https://www.facebook.com/PrikazkiteNaStefi', '_blank')
          }
        >
          <FacebookIcon />
        </StyledIconButton>
        <StyledIconButton
          onClick={() =>
            window.open('https://twitter.com/PrikazkiStefi', '_blank')
          }
        >
          <TwitterIcon />
        </StyledIconButton>
        <StyledIconButton
          onClick={() =>
            window.open('https://www.instagram.com/avtorskiprikazki/', '_blank')
          }
        >
          <InstagramIcon />
        </StyledIconButton>
        <StyledIconButton
          onClick={() =>
            window.open(
              'https://www.goodreads.com/book/show/48731425',
              '_blank'
            )
          }
        >
          <GMobiledataIcon />
        </StyledIconButton>
        <StyledIconButton
          onClick={() =>
            window.open(
              'https://www.youtube.com/results?search_query=%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D0%BE+%D0%BA%D1%80%D0%B0%D0%BB%D1%81%D1%82%D0%B2%D0%BE',
              '_blank'
            )
          }
        >
          <YouTubeIcon />
        </StyledIconButton>
      </Grid>
    </Grid>
  );
}

export default Footer;
