import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      <MuiLink color="inherit" href="https://beian.miit.gov.cn/">
      蜀ICP备2022026470号-4
      </MuiLink>
      <br />
      {'Copyright © '}
      <MuiLink color="inherit" href="https://aehxy.com/">
      Aehxy
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
