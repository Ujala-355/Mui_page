import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid"
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;
 
export default function Page() {
  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 ,backgroundColor:"#000"}}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
              Create by Ujala
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto'}}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3}}>
        <Toolbar />
        <Grid container spacing={3} sx={{justifyContent:"space-between"}}>
            <Grid item>
                <img src="https://format.creatorcdn.com/49bf48f4-1e3e-4944-92f2-ab951fc723de/0/0/0/0,0,2400,3000,700,3000/0-0-0/5a25066b-1561-4048-b320-00da1bbe90c5/1/1/Anthony+Bowens+26+Magazine-cover.png?fjkss=exp=2022227190~hmac=d82c045cd5f82559df04509f0d8ae386dba9572f205f3f78e66038173189c88a&700" 
                    alt="one1"
                    style={{maxWidth:"450px",height:"720px"}}
                />
            </Grid>
            <Grid item>
                <img src="https://format.creatorcdn.com/49bf48f4-1e3e-4944-92f2-ab951fc723de/0/0/0/0,0,2660,3326,700,3326/0-0-0/35523303-7b7f-4b51-967c-28fdf7b8e1a6/1/1/Anthony+Bowens+26+Magazine-30.png?fjkss=exp=2022227190~hmac=93f897456d10390478350104ad994173c925629a852d2c55311d4beb5d69f069&700" 
                    alt="one1"
                    style={{maxWidth:"450px",height:"720px"}}
                />
            </Grid>
            <Grid item>
                <img src="https://format.creatorcdn.com/49bf48f4-1e3e-4944-92f2-ab951fc723de/0/0/0/0,0,2660,3326,700,3326/0-0-0/4f768171-1180-4964-b0f6-ec02be157a09/1/1/Anthony+Bowens+26+Magazine-27.png?fjkss=exp=2022227190~hmac=93f897456d10390478350104ad994173c925629a852d2c55311d4beb5d69f069&700" 
                    alt="one1"
                    style={{maxWidth:"450px",height:"720px"}}
                />
            </Grid>


            <Grid item ld={4}>
                <img src="https://format.creatorcdn.com/49bf48f4-1e3e-4944-92f2-ab951fc723de/0/0/0/0,0,2429,3643,1200,3643/0-0-0/c96f770a-fe01-4e41-b052-c44e9ae81570/1/1/IMG_5670.jpg?fjkss=exp=2022227190~hmac=4720e0e463705121ba720803aa047700c02b76d518586718cf5aa0bc84c3268e&1200" 
                    alt="one1"
                    style={{maxWidth:"450px", height:"850px"}}
                />
            </Grid>

            <Grid item ld={4}> 
                <img src="https://format.creatorcdn.com/49bf48f4-1e3e-4944-92f2-ab951fc723de/0/0/0/0,0,2429,3643,1600,3643/0-0-0/c651452b-360d-4d51-bd30-67ede070bf61/1/1/IMG_6775.jpg?fjkss=exp=2022227190~hmac=3297a3d0f75b8f7f0026d080489099cd544faf3da465179e2e958357798f08c3" 
                    alt="one1"
                    style={{maxWidth:"450px", height:"850px"}}
                />
            </Grid >

            <Grid item  ld={4}>
                <img src="https://format.creatorcdn.com/49bf48f4-1e3e-4944-92f2-ab951fc723de/0/0/0/0,0,2429,3643,1200,3643/0-0-0/e398fd89-b3c9-4bce-aed5-f5a6b85639a4/1/1/IMG_6028.jpg?fjkss=exp=2022227190~hmac=4720e0e463705121ba720803aa047700c02b76d518586718cf5aa0bc84c3268e&1200" 
                    alt="one1"
                    style={{maxWidth:"450px",height:"850px"}}
                />
            </Grid>
            <Grid item>
                <img src="https://format.creatorcdn.com/49bf48f4-1e3e-4944-92f2-ab951fc723de/0/0/0/0,0,2615,3384,1200,3384/0-0-0/62373ee7-76fd-494f-8851-8ea4422cd6b1/1/1/Sch%25C3%25B6nPride_15.jpg?fjkss=exp=2022227190~hmac=4edc2d20e9722acbf052f7c1c2add312369e527c0bf790ce95417165a07c05ea&1200" 
                        alt="one1"
                        style={{maxWidth:"450px",height:"620px"}}
                />
            </Grid>
            <Grid item sx={{height:"410px",pt:0}}>
                <img src="https://format.creatorcdn.com/49bf48f4-1e3e-4944-92f2-ab951fc723de/0/0/0/0,0,1632,1056,1200,1056/0-0-0/125db5d0-4226-472c-89c0-0763b860dee6/1/1/Schon_Magazine_youmeherhimthemus-.jpg?fjkss=exp=2022227190~hmac=d37f3cf6944600f7118294d02a104159ebc47284c37f4fcfffa7096373dc9e92&1200" 
                        alt="one1"
                        style={{maxWidth:"500px"}}
                />
            </Grid>
            <Grid item>
                <img src="https://format.creatorcdn.com/49bf48f4-1e3e-4944-92f2-ab951fc723de/0/0/0/0,0,2614,3384,1200,3384/0-0-0/4e9bf32f-1342-4a2a-9772-40e14de11532/1/1/Sch%25C3%25B6nPride_26.jpg?fjkss=exp=2022227190~hmac=457c61c8e44ef6fcca9bcd6249ce1e30c1fb0e6cbd0e3e97d46279ebc0b5af61&1200" 
                    alt="one1"
                    style={{maxWidth:"450px",height:"620px"}}
                />
            </Grid>
            <Grid item>
                <img src="https://format.creatorcdn.com/49bf48f4-1e3e-4944-92f2-ab951fc723de/0/0/0/0,0,2429,3643,1200,3643/0-0-0/4974a1fe-ceaf-4267-9d40-077fad3e34cb/1/1/IMG_2005.jpg?fjkss=exp=2022227190~hmac=4720e0e463705121ba720803aa047700c02b76d518586718cf5aa0bc84c3268e&1200" 
                    alt="one1"
                    style={{maxWidth:"450px",height:"620px"}}
                />
            </Grid>
            <Grid item>
                <img src="https://format.creatorcdn.com/49bf48f4-1e3e-4944-92f2-ab951fc723de/0/0/0/0,0,2429,3643,1200,3643/0-0-0/13d44601-f96f-4d2d-8d82-b8284974d971/1/1/IMG_1979.jpg?fjkss=exp=2022227190~hmac=4720e0e463705121ba720803aa047700c02b76d518586718cf5aa0bc84c3268e&1200" 
                    alt="one1"
                    style={{maxWidth:"450px",height:"620px"}}
                />
            </Grid>
            <Grid item>
                <img src="https://format.creatorcdn.com/49bf48f4-1e3e-4944-92f2-ab951fc723de/0/0/0/0,0,2429,3643,1200,3643/0-0-0/805eb361-50c5-4d18-8709-e585d12aa5ae/1/1/IMG_1966.jpg?fjkss=exp=2022227190~hmac=4720e0e463705121ba720803aa047700c02b76d518586718cf5aa0bc84c3268e&1200" 
                    alt="one1"
                    style={{maxWidth:"450px",height:"620px"}}
                />
            </Grid>
            
            <Grid item>
                <img src="https://format.creatorcdn.com/49bf48f4-1e3e-4944-92f2-ab951fc723de/0/0/0/0,0,2615,3384,1200,3384/0-0-0/8e372338-c13d-42e0-b9bd-7f38d68ce1d5/1/1/Judith+Ann_34292.jpg?fjkss=exp=2022227190~hmac=4edc2d20e9722acbf052f7c1c2add312369e527c0bf790ce95417165a07c05ea&1200" 
                    alt="one1"
                    style={{maxWidth:"450px",height:"620px"}}
                />
            </Grid>
            <Grid item>
                <img src="https://format.creatorcdn.com/49bf48f4-1e3e-4944-92f2-ab951fc723de/0/0/0/0,0,2615,3384,700,3384/0-0-0/0c2cc67f-7048-4d81-832d-34367a14deaa/1/1/Judith+Ann_34244.jpg?fjkss=exp=2022227190~hmac=cbaf399eedf8032fbe375de1c7d11be1803ab724b15688fe5f323d009e6dbf5d&700" 
                    alt="one1"
                    style={{maxWidth:"450px",height:"620px"}}
                />
            </Grid>
            <Grid item>
                <img src="https://format.creatorcdn.com/49bf48f4-1e3e-4944-92f2-ab951fc723de/0/0/0/0,0,2615,3384,700,3384/0-0-0/aacf2d43-d38d-499e-882a-8aad5102f52d/1/1/Judith+Ann_34329.jpg?fjkss=exp=2022227190~hmac=cbaf399eedf8032fbe375de1c7d11be1803ab724b15688fe5f323d009e6dbf5d&700" 
                    alt="one1"
                    style={{maxWidth:"450px",height:"620px"}}
                />
            </Grid>
            
            <Grid item>
                <img src="https://format.creatorcdn.com/49bf48f4-1e3e-4944-92f2-ab951fc723de/0/0/0/0,0,2429,3643,700,3643/0-0-0/49952dad-2a40-4360-8f80-034ce0fde86d/1/1/Brandon+x+YUMES_1107.jpg?fjkss=exp=2022227190~hmac=d8fdb6834f146f4d5df19e92569ed71f67faee965afce8a51a2c20937f8d0873&700" 
                    alt="one1"
                    style={{maxWidth:"450px",height:"720px"}}
                />
            </Grid>
            <Grid item>
                <img src="https://format.creatorcdn.com/49bf48f4-1e3e-4944-92f2-ab951fc723de/0/0/0/0,0,2429,3643,700,3643/0-0-0/f1233741-f475-4f64-ad6a-2273b880458a/1/1/Brandon+x+YUMES_0703.jpg?fjkss=exp=2022227190~hmac=d8fdb6834f146f4d5df19e92569ed71f67faee965afce8a51a2c20937f8d0873&700" 
                    alt="one1"
                    style={{maxWidth:"450px",height:"720px"}}
                />
            </Grid>
            <Grid item>
                <img src="https://format.creatorcdn.com/49bf48f4-1e3e-4944-92f2-ab951fc723de/0/0/0/0,0,2429,3643,700,3643/0-0-0/6619856b-95ec-497b-8547-e9f4b3c40640/1/1/Brandon+x+YUMES_0804.jpg?fjkss=exp=2022227190~hmac=d8fdb6834f146f4d5df19e92569ed71f67faee965afce8a51a2c20937f8d0873&700" 
                    alt="one1"
                    style={{maxWidth:"450px",height:"720px"}}
                />
            </Grid>
        </Grid>
      </Box>
    </Box>
  );
}