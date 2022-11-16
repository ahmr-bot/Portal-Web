import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems } from '../src/DrawerList';
import Copyright from '../src/Copyright';
import Head from "next/head";
import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Link,
  Paper,
  Theme,
  Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
const drawerWidth: number = 240;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            minHeight: "calc(100vh - 16px)",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
        },
        paper: {
            padding: theme.spacing(4),
            marginBottom: theme.spacing(4),
            borderRadius: 8,
        },
    })
);

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();
export default function Index() {
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
<ThemeProvider theme={mdTheme}>

    <Head>
        <title>Aehxy 的个人主页</title>
    </Head>
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
            <Toolbar sx={{ 
              pr: '24px',
            }}>
                <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer} sx={{ marginRight: '36px', ...(open && { display: 'none' }), }}>
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    Aehxy 的个人主页
                </Typography>
            </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
            <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1], }}>
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                {mainListItems}
            </List>
        </Drawer>
        <Box component="main"
        sx={{ backgroundImage: "url(http://dl.mefrp.ximuc.top/aehxy.com/background.jpg)", 
        flexGrow: 1, height: '100vh', overflow: 'auto', 
        //首页背景img，还得去部署个Bing每日一图
        }}>
            <Toolbar />
            <Container maxWidth={ "md"} className={styles.container}>
                <Paper className={styles.paper} elevation={3}>
                    <Box width={ "100%"} display={ "flex"} flexDirection={ "column"} alignItems={ "center"} px={1} pb={1}>
                        <Box marginTop={2} marginBottom={1}>
                            <Box component={ "img"} src={ 'http://dl.mefrp.ximuc.top/aehxy.com/avatar.jpg'} alt={ "avatar"} height={96} width={96} borderRadius={ "50%"} />
                        </Box>
                        <Typography variant={ "h5"} component={ "div"}>
                            Aehxy
                        </Typography>
                        <Typography variant={ "body2"} component={ "div"} color={ "text.secondary"}>
                            高一学生（悲 |莱云运营|镜缘映射前/副站长
                        </Typography>
                        <Link href="https://qm.qq.com/cgi-bin/qm/qr?k=qSjhvnz8w5DYgTgWg8o14Vhd0_tb5AQs&noverify=0&personal_qrcode_source=1" color="secondary"> QQ
                        </Link>
                        <Link href="https://github.com/ahmr-bot" color="secondary"> Github
                        </Link>
                        <Link href="https://github.com/ahmr-bot" color="secondary"> Github
                        </Link>
                        <Link href="mailto:admin@mcserverx.com" color="secondary"> E-mail
                        </Link>
                        <Copyright />

                    </Box>
                </Paper>


            </Container>
        </Box>

    </Box>
</ThemeProvider>
  );
}
