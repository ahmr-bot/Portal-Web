(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return __webpack_require__(591)}])},591:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Index}});var emotion_react_jsx_runtime_browser_esm=__webpack_require__(5944),react=__webpack_require__(7294),styled=__webpack_require__(1719),createTheme=__webpack_require__(6044),ThemeProvider=__webpack_require__(8452),Drawer=__webpack_require__(7937),AppBar=__webpack_require__(5050),Toolbar=__webpack_require__(784),List=__webpack_require__(5214),IconButton=__webpack_require__(562),Menu=__webpack_require__(326),ChevronLeft=__webpack_require__(9572),ListItemButton=__webpack_require__(5982),ListItemIcon=__webpack_require__(9901),ListItemText=__webpack_require__(4548),Dashboard=__webpack_require__(5709),Divider=__webpack_require__(4412);let mainListItems=(0,emotion_react_jsx_runtime_browser_esm.BX)(react.Fragment,{children:[(0,emotion_react_jsx_runtime_browser_esm.BX)(ListItemButton.Z,{href:"#",children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(ListItemIcon.Z,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Dashboard.Z,{})}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(ListItemText.Z,{primary:"首页"})]}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Divider.Z,{sx:{my:1}})]});var Typography=__webpack_require__(9630),Link=__webpack_require__(8346);function Copyright(){return(0,emotion_react_jsx_runtime_browser_esm.BX)(Typography.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,emotion_react_jsx_runtime_browser_esm.tZ)(Link.Z,{color:"inherit",href:"https://aehxy.com/",children:"Aehxy"})," ",new Date().getFullYear(),"."]})}var head=__webpack_require__(9008),head_default=__webpack_require__.n(head),Box=__webpack_require__(1953),CssBaseline=__webpack_require__(7822),Container=__webpack_require__(6336),Paper=__webpack_require__(918),makeStyles=__webpack_require__(9874),createStyles=__webpack_require__(3327);let useStyles=(0,makeStyles.Z)(theme=>(0,createStyles.Z)({container:{minHeight:"calc(100vh - 16px)",display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center"},paper:{padding:theme.spacing(4),marginBottom:theme.spacing(4),borderRadius:8}})),pages_AppBar=(0,styled.ZP)(AppBar.Z,{shouldForwardProp:prop=>"open"!==prop})(param=>{let{theme,open}=param;return{zIndex:theme.zIndex.drawer+1,transition:theme.transitions.create(["width","margin"],{easing:theme.transitions.easing.sharp,duration:theme.transitions.duration.leavingScreen}),...open&&{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:theme.transitions.create(["width","margin"],{easing:theme.transitions.easing.sharp,duration:theme.transitions.duration.enteringScreen})}}}),pages_Drawer=(0,styled.ZP)(Drawer.ZP,{shouldForwardProp:prop=>"open"!==prop})(param=>{let{theme,open}=param;return{"& .MuiDrawer-paper":{position:"relative",whiteSpace:"nowrap",width:240,transition:theme.transitions.create("width",{easing:theme.transitions.easing.sharp,duration:theme.transitions.duration.enteringScreen}),boxSizing:"border-box",...!open&&{overflowX:"hidden",transition:theme.transitions.create("width",{easing:theme.transitions.easing.sharp,duration:theme.transitions.duration.leavingScreen}),width:theme.spacing(7),[theme.breakpoints.up("sm")]:{width:theme.spacing(9)}}}}}),mdTheme=(0,createTheme.Z)();function Index(){let styles=useStyles(),[open,setOpen]=react.useState(!1),toggleDrawer=()=>{setOpen(!open)};return(0,emotion_react_jsx_runtime_browser_esm.BX)(ThemeProvider.Z,{theme:mdTheme,children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(head_default(),{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)("title",{children:"Aehxy 的个人主页"})}),(0,emotion_react_jsx_runtime_browser_esm.BX)(Box.Z,{sx:{display:"flex"},children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(CssBaseline.ZP,{}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(pages_AppBar,{position:"absolute",open:open,children:(0,emotion_react_jsx_runtime_browser_esm.BX)(Toolbar.Z,{sx:{pr:"24px"},children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(IconButton.Z,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:toggleDrawer,sx:{marginRight:"36px",...open&&{display:"none"}},children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Menu.Z,{})}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"Aehxy 的个人主页"})]})}),(0,emotion_react_jsx_runtime_browser_esm.BX)(pages_Drawer,{variant:"permanent",open:open,children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Toolbar.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(IconButton.Z,{onClick:toggleDrawer,children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(ChevronLeft.Z,{})})}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Divider.Z,{}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(List.Z,{component:"nav",children:mainListItems})]}),(0,emotion_react_jsx_runtime_browser_esm.BX)(Box.Z,{component:"main",sx:{backgroundImage:"url(https://dl.mefrp.ximuc.top/aehxy.com/background.jpg)",flexGrow:1,height:"100vh",overflow:"auto"},children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Toolbar.Z,{}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Container.Z,{maxWidth:"md",className:styles.container,children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Paper.Z,{className:styles.paper,elevation:3,children:(0,emotion_react_jsx_runtime_browser_esm.BX)(Box.Z,{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",px:1,pb:1,children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Box.Z,{marginTop:2,marginBottom:1,children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Box.Z,{component:"img",src:"https://dl.mefrp.ximuc.top/aehxy.com/avatar.jpg",alt:"avatar",height:96,width:96,borderRadius:"50%"})}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,{variant:"h5",component:"div",children:"Aehxy"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Typography.Z,{variant:"body2",component:"div",color:"text.secondary",children:"高一学生（悲 |莱云运营|镜缘映射前/副站长"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Link.Z,{href:"https://qm.qq.com/cgi-bin/qm/qr?k=qSjhvnz8w5DYgTgWg8o14Vhd0_tb5AQs&noverify=0&personal_qrcode_source=1",color:"secondary",children:" QQ"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Link.Z,{href:"https://github.com/ahmr-bot",color:"secondary",children:" Github"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Link.Z,{href:"https://github.com/ahmr-bot",color:"secondary",children:" Github"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Link.Z,{href:"mailto:admin@mcserverx.com",color:"secondary",children:" E-mail"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(Copyright,{})]})})})]})]})]})}}},function(__webpack_require__){__webpack_require__.O(0,[889,774,888,179],function(){return __webpack_require__(__webpack_require__.s=8312)}),_N_E=__webpack_require__.O()}]);