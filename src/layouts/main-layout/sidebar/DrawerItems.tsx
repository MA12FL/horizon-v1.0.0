import { fontFamily } from 'theme/typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import ListItem from './list-items/ListItem';
import CollapseListItem from './list-items/CollapseListItem';
import HorizonLogo from 'assets/images/logo-main.png';
import Image from 'components/base/Image';
import SidebarCard from './SidebarCard';
import sitemap from 'routes/sitemap';

const DrawerItems = () => {
  return (
    <>
      <Stack
        pt={5}
        pb={4.5}
        px={4.5}
        justifyContent="flex-start"
        position="sticky"
        top={0}
        borderBottom={1}
        borderColor="info.main"
        bgcolor="info.lighter"
        zIndex={1000}
      >
        <ButtonBase component={Link} href="/" disableRipple>
          <Image src={HorizonLogo} alt="logo" height={44} width={44} sx={{ mr: 1.75 }} />
          <Typography
            variant="h3"
            textTransform="uppercase"
            letterSpacing={1}
            fontFamily={fontFamily.poppins}
          >
            Horizon
          </Typography>
        </ButtonBase>
      </Stack>

      <List component="nav" sx={{ mt: 2.5, mb: 10, p: 0, pl: 3 }}>
        {sitemap.map((route) =>
          route.items ? (
            <CollapseListItem key={route.id} {...route} />
          ) : (
            <ListItem key={route.id} {...route} />
          ),
        )}
      </List>

      <Box mt="auto" px={3} pt={15} pb={5}>
        <SidebarCard />
      </Box>
    </>
  );
};

export default DrawerItems;
