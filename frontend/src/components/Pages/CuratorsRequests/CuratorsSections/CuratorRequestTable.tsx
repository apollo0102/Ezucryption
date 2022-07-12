import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Avatar } from '@mui/material';
import styled from "@emotion/styled";
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CuratorRequestModal  from  './CurratorRequestModal';

function DummyRurratorData(
  asset: string,
  avatar: string,
  creator: string,
  royalty: string,
  terms: string,
  tokenAddress: string,
  status: string,
  owners: Array<string>,
) {
  return { asset, creator, royalty, terms, status, tokenAddress, owners, avatar };
}

const rows = [
  DummyRurratorData('Alpha Betty Doodle #1234', 'curator-1.jpg', 'Kristin Watson', '3 %', '1 Year', '8xdf...89gb', 'accepted', ['Accept', 'Counter', 'Reject'] ),
  DummyRurratorData('Alpha Betty Doodle #1234', 'curator-2.jpg', 'Devon Lane', '3 %', '2 Year', '8xdf...89gb', 'pending', ['Accept', 'Counter', 'Reject'] ),
  DummyRurratorData('Alpha Betty Doodle #1234', 'curator-2.jpg', 'Courtney Henry', '3 %', '2 Year', '8xdf...89gb', 'countered', ['Accept', 'Counter', 'Reject'] ),
  DummyRurratorData('Alpha Betty Doodle #1234', 'curator-2.jpg', 'Jacob Jones', '3 %', '2 Year', '8xdf...89gb', 'rejected', ['Accept', 'Counter', 'Reject'] ),
  DummyRurratorData('Alpha Betty Doodle #1234', 'curator-1.jpg', 'Robert Fox', '3 %', '1 Year', '8xdf...89gb', 'accepted', ['Accept', 'Counter', 'Reject'] ),
  DummyRurratorData('Alpha Betty Doodle #1234', 'curator-2.jpg', 'Albert Florex', '3 %', '2 Year', '8xdf...89gb', 'pending', ['Accept', 'Counter', 'Reject'] ),
  DummyRurratorData('Alpha Betty Doodle #1234', 'curator-2.jpg', 'Jarome Bells', '3 %', '2 Year', '8xdf...89gb', 'countered', ['Accept', 'Counter', 'Reject'] ),
  DummyRurratorData('Alpha Betty Doodle #1234', 'curator-2.jpg', 'Jane Cooper', '3 %', '2 Year', '8xdf...89gb', 'rejected', ['Accept', 'Counter', 'Reject'] ),



];


export default function CuratorRequestTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <TableContainer  sx={{ marginBottom:"50px" }}>
      <Table sx={{ minWidth: 650,}} aria-label="royalty table">
        <TableHead >
          <TableRow          >
            <TableCell 
                sx={{
                    fontSize: "12px",
                    textTransform:'capitalize',
                    lineHeight:'14px',
                    fontWeight:500,
                    opacity:0.5,
    
                }}
                align='left'>asset</TableCell>
            <TableCell
             sx={{
                fontSize: "12px",
                textTransform:'capitalize',
                lineHeight:'14px',
                fontWeight:500,
                opacity:0.5,

            }}
             align="left">creator</TableCell>
            <TableCell 
                sx={{
                    fontSize: "12px",
                    textTransform:'capitalize',
                    lineHeight:'14px',
                    fontWeight:500,
                    opacity:0.5,
    
                }}
            align="right">royalty</TableCell>
            <TableCell 
                sx={{
                    fontSize: "12px",
                    textTransform:'capitalize',
                    lineHeight:'14px',
                    fontWeight:500,
                    opacity:0.5,
    
                }}
                align="center">Terms </TableCell>
               <TableCell 
                sx={{
                    fontSize: "12px",
                    textTransform:'capitalize',
                    lineHeight:'14px',
                    fontWeight:500,
                    opacity:0.5,
    
                }}
                align="center">status </TableCell>
            <TableCell 
                sx={{
                    fontSize: "12px",
                    textTransform:'capitalize',
                    lineHeight:'14px',
                    fontWeight:500,
                    opacity:0.5,
    
                }}
                align="right">Token Address</TableCell>
            <TableCell 
                sx={{
                    fontSize: "12px",
                    textTransform:'capitalize',
                    lineHeight:'14px',
                    fontWeight:500,
                    opacity:0.5,
    
                }}
                align="center">owners</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
                style={{
                    fontSize: "14px",
                    textTransform:'capitalize',
                    lineHeight:'18px',
                    fontWeight:700

                }}
              key={row.asset}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell 
                sx={{display:'flex', alignItems:'center'}}
                component="th" 
                scope="row">
                <Avatar
                    style={{marginRight:'20px'}}
                    src={`/images/curators/${row.avatar}`}
                />
                {row.asset}
              </TableCell>
              <TableCell align="left">{row.creator}</TableCell>
              <TableCell align="center">{row.royalty}</TableCell>
              <TableCell align="center">{row.terms}</TableCell>
              <TableCell align="center"><Button  className={`${row.status}`}>{row.status}</Button></TableCell>
              <TableCell align="center">{row.tokenAddress}</TableCell>
              <TableCell align="right">
              <Button onClick={handleOpen}>{row.owners[0]}</Button>
              <Button>{row.owners[1]}</Button>
              <Button>{row.owners[2]}</Button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalCenterd>
            <CuratorRequestModal
              modalTitle="Curator Requests"
            />
          </ModalCenterd>
         
        </Fade>
      </Modal>
    </TableContainer>
  );
}

const Button = styled.button`
font-size: 14px;
text-transform:capitalize;
text-decoration:underline;
line-height:18px;
font-weight:700;
background: none;
border:none;
margin-right:20px;
cursor:pointer;
&:hover{

}
&.accepted{
font-family: 'Kern';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
text-decoration:none;
color: #000000;
background: #BAF8CF;
border-radius: 24px;
padding:5px 15px;
margin:0;
}
&.pending{
  font-family: 'Kern';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-decoration:none;
  color: #000000;
  background: #F8E8BA;
  border-radius: 24px;
  padding:5px 15px;
  margin:0;
}
&.countered{
  font-family: 'Kern';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-decoration:none;
  color: #000000;
  background: #BAE5F8;
  border-radius: 24px;
  padding:5px 15px;
  margin:0;
}
&.rejected{
  font-family: 'Kern';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-decoration:none;
  color: #000000;
  background: #F8BABA;
  border-radius: 24px;
  padding:5px 15px;
  margin:0;
}

`
const ModalCenterd = styled.div`
display:flex;
align-items:center;
justify-content:center;

`