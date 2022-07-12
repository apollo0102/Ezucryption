import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styled from '@emotion/styled';
import Image from 'next/image';

function createData(
  name: string,
  role: Array<string>, 
  status: Array<string>,
  email: string,
  asset: string,
  assetTitle: string,
  fat: number,
  carbs: number,
  protein: number,
  blockChainType: Array <string>,
  transactionDate: string,
  
) {
  return { name, role, status, email, asset, assetTitle, fat, carbs, protein, blockChainType, transactionDate };
}

const rows = [
  createData(
            'Lorem Ipsum', 
            ['Creators', 'Curators', 'Collectors', 'Others'], 
            ['Active', 'Ban', 'Suspend', ],
            'mail@xyz.com',
            'curators/asset-1.png', 'Lorem Ipsum', 6.0, 24, 4.0, 
            ['Ethereum', 'Polygon', 'No Blockchain'], 
            '2020-01-01'),
  createData('Lorem Ipsum', 
            ['Creators', 'Curators', 'Collectors', 'Others'],
            ['Active', 'Ban', 'Suspend', ], 
            'mail@xyz.com',            
          'curators/asset-2.png', 'Lorem Ipsum', 9.0, 37, 4.3, ['Ethereum', 'Polygon', 'No Blockchain'], '2020-01-01'),
  createData('Lorem Ipsum', 
            ['Creators', 'Curators', 'Collectors', 'Others'],
            ['Active', 'Ban', 'Suspend', ], 
            'mail@xyz.com',
             'curators/asset-3.png', 'Lorem Ipsum', 16.0, 24, 6.0, [ 'Polygon', 'No Blockchain'], '2020-01-01'), 
  createData('Lorem Ipsum', 
              ['Creators', 'Curators', 'Collectors', 'Others'], 
              ['Active', 'Ban', 'Suspend', ],
              'mail@xyz.com',
              'curators/curator-3.jpg', 'Lorem Ipsum', 3.7, 67, 4.3, ['Ethereum',  'No Blockchain'], '2020-01-01'),
  createData('Lorem Ipsum', 
            ['Creators', 'Curators', 'Collectors', 'Others'],
            ['Active', 'Ban', 'Suspend', ], 
            'mail@xyz.com',
            'curators/avatar-1.png', 'Lorem Ipsum', 16.0, 49, 3.9, ['Ethereum', 'Polygon', ], '2020-01-01'),
];

export default function AllTransactionsPanel() {
  return (
    <TableContainer >
      <Table sx={{minWidth:900}} aria-label="simple table">
        <TableHead sx={{background:'#F5F5F5'}}>
          <TableRow>
            <StyledTableCell>Users</StyledTableCell>
            <StyledTableCell>Primary Roles</StyledTableCell>
            <StyledTableCell >Additional Roles</StyledTableCell>
            <StyledTableCell >Status</StyledTableCell>
            <StyledTableCell >Collections</StyledTableCell>
            <StyledTableCell >Email</StyledTableCell>
            <StyledTableCell >Psudonym</StyledTableCell>
            <StyledTableCell >First Name</StyledTableCell>
            <StyledTableCell>Last Name</StyledTableCell>
            <StyledTableCell>Display Name</StyledTableCell>
            <StyledTableCell >Organization  Name</StyledTableCell>
            <StyledTableCell>Billing Address</StyledTableCell>
            <StyledTableCell >Mobile</StyledTableCell>
            <StyledTableCell >Facebook ID</StyledTableCell>
            <StyledTableCell >Twitter ID</StyledTableCell>
            <StyledTableCell >Instagram ID</StyledTableCell>
            <StyledTableCell>Profile Image</StyledTableCell>
            <StyledTableCell>Cover Image</StyledTableCell>
            <StyledTableCell >Display Image</StyledTableCell>
            <StyledTableCell>Short Bio</StyledTableCell>
            <StyledTableCell >Bio</StyledTableCell>
            <StyledTableCell >Following</StyledTableCell>
            <StyledTableCell >Followers(Count)</StyledTableCell>
            <StyledTableCell >Likes(Count)</StyledTableCell>
            <StyledTableCell>Language</StyledTableCell>
            <StyledTableCell>Public Wallet Address</StyledTableCell>
            <StyledTableCell >Privacy</StyledTableCell>
            <StyledTableCell>Digital Identity (True/False)</StyledTableCell>
            <StyledTableCell >User Verification (True/False)</StyledTableCell>
            <StyledTableCell >Creation Date</StyledTableCell>
            <StyledTableCell >Billing Information</StyledTableCell>
            <StyledTableCell >Team Members</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              
            >
              <StyledCell component="th" scope="row">
                {row.name}
              </StyledCell>
              <StyledCell >{
                      row.role.map((role) => (
                        <RollButton className={role}>{role}</RollButton>
                      ))
              }</StyledCell>
              <StyledCell >{
                      row.role.map((role) => (
                        <RollButton className={role}>{role}</RollButton>
                      ))} </StyledCell>
              <StyledCell >{
                      row.status.map((status) => (
                        <RollButton className={status}>{status}</RollButton>
                      ))}</StyledCell>
              <StyledCell >{row.protein}</StyledCell>
              <StyledCell >{row.email}</StyledCell>
              <StyledCell > </StyledCell>
              <StyledCell >Lorem</StyledCell>
              <StyledCell >Ipsum</StyledCell>
              <StyledCell >Lorem Ipsum</StyledCell>
              <StyledCell >Lorem Ipsum</StyledCell>
              <StyledCell >Lorem Ipsum</StyledCell>
              <StyledCell >+1278993 </StyledCell>
              <StyledCell >Lorem Ipsum</StyledCell>
              <StyledCell >Lorem Ipsum</StyledCell>
              <StyledCell >Lorem Ipsum</StyledCell>
              <StyledCell ><Image src={`/images/${row.asset}`} alt={row.asset} width={25} height={25}  /></StyledCell>
              <StyledCell ><Image src={`/images/${row.asset}`} alt={row.asset} width={25} height={25}  /></StyledCell>
              <StyledCell ><Image src={`/images/${row.asset}`} alt={row.asset} width={25} height={25}  /></StyledCell>
              <StyledCell ></StyledCell>
              <StyledCell ></StyledCell>
              <StyledCell >{row.assetTitle}</StyledCell>
              <StyledCell >{row.fat}</StyledCell>
              <StyledCell >{row.carbs}</StyledCell>
              <StyledCell ></StyledCell>
              <StyledCell >{row.assetTitle}</StyledCell>
              <StyledCell ></StyledCell>
              <StyledCell >True</StyledCell>
              <StyledCell >true</StyledCell>
              <StyledCell >{row.transactionDate}</StyledCell>
              <StyledCell ></StyledCell>
              <StyledCell ></StyledCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const TableContainer = styled.div`
margin-top: 20px;
border: 1px solid #D2D2D6;
overflow-x: scroll;
`
const StyledTableCell = styled(TableCell)`
white-space:nowrap;
color: #000000;
opacity: 0.5;
font-family: 'Kern';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
border-right: 1px solid #D2D2D6;
`
const StyledCell = styled(TableCell)`
font-family: 'Kern';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
border-right: 1px solid #D2D2D6;
`
const BlockButton = styled.button`
background: #E4F2C5;
border-radius: 10px;
outline: none;
border: none;
padding: 5px 10px;
margin-bottom: 10px;
font-family: 'Kern';
font-style: normal;
font-weight: 300;
font-size: 12px;
white-space:nowrap;
&.Polygon{
    background:#BCE1E4
}
&.Ethereum{
    background: rgba(196, 196, 196, 0.5);
}
`
const RollButton = styled.button`
background: #E4F2C5;
border-radius: 10px;
outline: none;
border: none;
padding: 5px 10px;
margin-bottom: 10px;
font-family: 'Kern';
font-style: normal;
font-weight: 300;
font-size: 12px;
white-space:nowrap;
&.Creators{
    background:#BAE5F8;
}
&.Currators{
    background:#E3D4EA;
}
&.Collectors{
    background:#BAF8CF;
}
&.Others{
    background: #F8BABA;
}
&.Active{
    background: #BAF8F4;
}
&.Ban{
  background: #D2D2D6;
}
&.Suspend{
  background: #D2D2D6;
}
`