/*
 * @Author: ahmr-bot ahmrcxy@gmail.com
 * @Date: 2022-11-16 12:49:15
 * @LastEditors: ahmr-bot ahmrcxy@gmail.com
 * @LastEditTime: 2022-11-25 08:24:50
 * @FilePath: \Personal-Web\src\Copyright.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
