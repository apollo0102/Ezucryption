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
  source: string,
  avatar: string,
  infringer: string,
  startDate: string,
  role: string,
  action: Array<string>,
) {
  return { source, infringer, startDate, role, action, avatar };
}

const rows = [
  dummyRoyaltyData('htttp://www.stolenart.com', 'curator-1.jpg', 'Dianne Russell', '03-03-2022', '03-03-2022', ['Take Down', 'Details'] ),
  dummyRoyaltyData('htttp://www.stolenart.com', "curator-3.jpg", 'Courtney Henry', "03-03-2022", "03-03-2022",   ['Take Down', 'Details'] ),
  dummyRoyaltyData('htttp://www.artcryption.com/vitamindd', "curator-2.jpg",  'Annet Black', "03-03-2022", '03-03-2022',  ['Take Down', 'Details']),
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
                align='left'>Image</TableCell>
                 <TableCell 
                sx={{
                    fontSize: "12px",
                    textTransform:'capitalize',
                    lineHeight:'14px',
                    fontWeight:500,
                    opacity:0.5,
    
                }}
                align='left'>Infringing Source</TableCell>
            <TableCell
             sx={{
                fontSize: "12px",
                textTransform:'capitalize',
                lineHeight:'14px',
                fontWeight:500,
                opacity:0.5,

            }}
            align='left'>Possible Infringer</TableCell>
            <TableCell 
                sx={{
                    fontSize: "12px",
                    textTransform:'capitalize',
                    lineHeight:'14px',
                    fontWeight:500,
                    opacity:0.5,
    
                }}
                align='left'>Start Date</TableCell>
            <TableCell 
                sx={{
                    fontSize: "12px",
                    textTransform:'capitalize',
                    lineHeight:'14px',
                    fontWeight:500,
                    opacity:0.5,
    
                }}
                align='left'>Detection Date </TableCell>
            <TableCell 
                sx={{
                    fontSize: "12px",
                    textTransform:'capitalize',
                    lineHeight:'14px',
                    fontWeight:500,
                    opacity:0.5,
    
                }}
                align='left'>Actions</TableCell>
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
              key={row.source}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th">
                <Avatar
                    style={{marginRight:'20px'}}
                    src={`/images/curators/${row.avatar}`}
                />
              </TableCell>
              <TableCell align="left">{row.source}</TableCell>
              <TableCell align="left">{row.infringer}</TableCell>
              <TableCell align="left">{row.startDate}</TableCell>
              <TableCell align="left">{row.role}</TableCell>
              <TableCell align="left">
              <Button 
                 style={{
                    fontSize: "14px",
                    textTransform:'capitalize',
                    textDecoration:'underline',
                    color:'#000000',
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
                    fontWeight:700,
                    color:'#000000',

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

