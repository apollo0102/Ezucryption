import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';

function dummyRoyaltyData(
  name: string,
  avatar: string,
  split: number,
  terms: string,
  role: string,
  tokenAddress: string,
  action: Array<string>,
) {
  return { name, split, terms, role, tokenAddress, action, avatar };
}

const rows = [
  dummyRoyaltyData('Leslie Alexandar', 'curator-1.jpg', 1, '1 Year', 'Curator', '8xdf...89gb', ['Terminate', 'Pause'] ),
  dummyRoyaltyData('Broklyn Simmons', "curator-3.jpg", 1, "3 Years", "Collector",  '8xdf...89gb', ['Terminate', 'Pause'] ),
  dummyRoyaltyData('Kristin Watson', "curator-2.jpg", 1, "4 Years", 'Currator',  '8xdf...89gb', ['Terminate', 'Pause']),
];


export default function SecondaryRoyaltyTable() {
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
                align='center'>Name</TableCell>
            <TableCell
             sx={{
                fontSize: "12px",
                textTransform:'capitalize',
                lineHeight:'14px',
                fontWeight:500,
                opacity:0.5,

            }}
             align="right">% Split</TableCell>
            <TableCell 
                sx={{
                    fontSize: "12px",
                    textTransform:'capitalize',
                    lineHeight:'14px',
                    fontWeight:500,
                    opacity:0.5,
    
                }}
            align="right">Terms</TableCell>
            <TableCell 
                sx={{
                    fontSize: "12px",
                    textTransform:'capitalize',
                    lineHeight:'14px',
                    fontWeight:500,
                    opacity:0.5,
    
                }}
                align="center">Role </TableCell>
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
                align="center">Actions</TableCell>
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
              key={row.name}
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
                {row.name}
              </TableCell>
              <TableCell align="right">{row.split}</TableCell>
              <TableCell align="right">{row.terms}</TableCell>
              <TableCell align="right">{row.role}</TableCell>
              <TableCell align="right">{row.tokenAddress}</TableCell>
              <TableCell align="right">
              <Button 
                 style={{
                    fontSize: "14px",
                    textTransform:'capitalize',
                    textDecoration:'underline',
                    lineHeight:'18px',
                    fontWeight:700 }} 
                    variant="text">
                    {row.action[0]}
            </Button>
            <Button
                style={{
                    fontSize: "14px",
                    textTransform:'capitalize',
                    textDecoration:'underline',
                    lineHeight:'18px',
                    fontWeight:700
                }}
                variant="text">
                {row.action[1]}
            </Button>
            
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

