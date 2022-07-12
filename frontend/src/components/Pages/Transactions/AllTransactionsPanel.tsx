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
  role: string,
  asset: string,
  assetTitle: string,
  fat: number,
  carbs: number,
  protein: number,
  blockChainType: Array <string>,
  transactionDate: string,
  
) {
  return { name, role, asset, assetTitle, fat, carbs, protein, blockChainType, transactionDate };
}

const rows = [
  createData('Lorem Ipsum', '', 'curators/asset-1.png', 'Lorem Ipsum', 6.0, 24, 4.0, ['Ethereum', 'Polygon', 'No Blockchain'], '2020-01-01'),
  createData('Lorem Ipsum', '', 'curators/asset-2.png', 'Lorem Ipsum', 9.0, 37, 4.3, ['Ethereum', 'Polygon', 'No Blockchain'], '2020-01-01'),
  createData('Lorem Ipsum', '', 'curators/asset-3.png', 'Lorem Ipsum', 16.0, 24, 6.0, [ 'Polygon', 'No Blockchain'], '2020-01-01'), 
  createData('Lorem Ipsum', '', 'curators/curator-3.jpg', 'Lorem Ipsum', 3.7, 67, 4.3, ['Ethereum',  'No Blockchain'], '2020-01-01'),
  createData('Lorem Ipsum', '','curators/avatar-1.png', 'Lorem Ipsum', 16.0, 49, 3.9, ['Ethereum', 'Polygon', ], '2020-01-01'),
];

export default function AllTransactionsPanel() {
  return (
    <TableContainer >
      <Table sx={{minWidth:900}} aria-label="simple table">
        <TableHead sx={{background:'#F5F5F5'}}>
          <TableRow>
            <StyledTableCell>Users</StyledTableCell>
            <StyledTableCell>Primary Roles</StyledTableCell>
            <StyledTableCell >Assets</StyledTableCell>
            <StyledTableCell >Assets Title</StyledTableCell>
            <StyledTableCell >Category</StyledTableCell>
            <StyledTableCell >Art Type</StyledTableCell>
            <StyledTableCell >Metadata</StyledTableCell>
            <StyledTableCell >Collection</StyledTableCell>
            <StyledTableCell>Copyright Owner</StyledTableCell>
            <StyledTableCell>Type of Sale</StyledTableCell>
            <StyledTableCell >Transaction</StyledTableCell>
            <StyledTableCell>Transaction Hash</StyledTableCell>
            <StyledTableCell >Transferor</StyledTableCell>
            <StyledTableCell >Transferee</StyledTableCell>
            <StyledTableCell >Transaction Date</StyledTableCell>
            <StyledTableCell >Mode of Transaction</StyledTableCell>
            <StyledTableCell>TRX-success & TRX-False</StyledTableCell>
            <StyledTableCell>Currency</StyledTableCell>
            <StyledTableCell >Blockchain Type</StyledTableCell>
            <StyledTableCell>Sales Type</StyledTableCell>
            <StyledTableCell >Additional Content</StyledTableCell>
            <StyledTableCell >Fixed Sales Period</StyledTableCell>
            <StyledTableCell >Auction Sales Period</StyledTableCell>
            <StyledTableCell >Starting Price</StyledTableCell>
            <StyledTableCell>Bid Increement</StyledTableCell>
            <StyledTableCell>Reserve Price</StyledTableCell>
            <StyledTableCell >Auction Sales Price</StyledTableCell>
            <StyledTableCell>Licence</StyledTableCell>
            <StyledTableCell >Licence Usage</StyledTableCell>
            <StyledTableCell >Licence Condition</StyledTableCell>
            <StyledTableCell >Licence Teritory</StyledTableCell>
            <StyledTableCell >Sales Condition</StyledTableCell>
            <StyledTableCell >Royalties</StyledTableCell>
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
              <StyledCell >{row.role}</StyledCell>
              <StyledCell ><Image alt='Asset'
                            width={100}
                            height={100}
                            src={`/images/${row.asset}`}/> </StyledCell>
              <StyledCell >{row.assetTitle}</StyledCell>
              <StyledCell >{row.protein}</StyledCell>
              <StyledCell >{row.assetTitle}</StyledCell>
              <StyledCell >{row.fat}</StyledCell>
              <StyledCell >{row.carbs}</StyledCell>
              <StyledCell >{row.protein}</StyledCell>
              <StyledCell >{row.assetTitle}</StyledCell>
              <StyledCell >{row.fat}</StyledCell>
              <StyledCell >{row.carbs}</StyledCell>
              <StyledCell >{row.protein}</StyledCell>
              <StyledCell >{row.assetTitle}</StyledCell>
              <StyledCell >{row.transactionDate}</StyledCell>
              <StyledCell >{row.carbs}</StyledCell>
              <StyledCell >{row.protein}</StyledCell>
              <StyledCell >{row.assetTitle}</StyledCell>
              <StyledCell >{row.blockChainType.map((blockChainType) => (
                        <BlockButton className={blockChainType}>{blockChainType}</BlockButton>))
                    }
                  </StyledCell>
              <StyledCell >{row.carbs}</StyledCell>
              <StyledCell >{row.protein}</StyledCell>
              <StyledCell >{row.assetTitle}</StyledCell>
              <StyledCell >{row.fat}</StyledCell>
              <StyledCell >{row.carbs}</StyledCell>
              <StyledCell >{row.protein}</StyledCell>
              <StyledCell >{row.assetTitle}</StyledCell>
              <StyledCell >{row.fat}</StyledCell>
              <StyledCell >{row.carbs}</StyledCell>
              <StyledCell >{row.protein}</StyledCell>
              <StyledCell >{row.assetTitle}</StyledCell>
              <StyledCell >{row.fat}</StyledCell>
              <StyledCell >{row.carbs}</StyledCell>
              <StyledCell >{row.protein}</StyledCell>
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