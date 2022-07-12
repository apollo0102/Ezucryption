import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SearchIcon from '@mui/icons-material/Search';
import FilterIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
// import Button from '@mui/material/Button';
import styled from "@emotion/styled";
import Link from '@mui/material/Link';

function dummyRoyaltyData(
  title: string,
  isNew: string,
  buyer: string,
  artist: string,
  info: string,
  timeAgo: string,
  price: string,
  date: string,
  action: Array<string>,
) {
  return { title, isNew, buyer, artist, info, timeAgo, price, date, action };
}

const rows = [
  dummyRoyaltyData('Purchase the Asset', 'new',  'Vadana Taxali', 'David Russo', 'purchases the asset from', 'a minute ago', 'view details', 'Nov 3, 2021', ['Purchase'] ),
  dummyRoyaltyData('Resell the Asset', 'new',  'Vadana Taxali', 'David Russo', 'purchases the asset from', 'a minute ago', 'view details', 'Nov 3, 2021', ['Resell'] ),
  dummyRoyaltyData('Purchase the Asset', '',  'Vadana Taxali', 'David Russo', 'purchases the asset from', 'a minute ago', 'view details', 'Nov 3, 2021', ['Purchase'] ),
  dummyRoyaltyData('Purchase the Asset', '',  'Vadana Taxali', 'David Russo', 'purchases the asset from', 'a minute ago', 'view details', 'Nov 3, 2021', ['Purchase'] ),

];


export default function NotificationTable() {
  return (

    <TableContainer  sx={{ marginBottom:"50px", marginTop:'40px' }}>
      <Filter>
          <FilterItem>
            <SearchIcon  sx={{marginRight:'5px'}}/>
                    Search
          </FilterItem>
          <FilterItem>
          <FilterIcon sx={{marginRight:'5px'}} />
                    Filter
          </FilterItem>
          <FilterItem>
                    <SortIcon sx={{marginRight:'5px'}} />
                    Sort
          </FilterItem>
      </Filter>
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
                align='left'>Notification</TableCell>
                <TableCell 
                sx={{
                    fontSize: "12px",
                    textTransform:'capitalize',
                    lineHeight:'14px',
                    fontWeight:500,
                    opacity:0.5,
    
                }}
                align="left">Actions</TableCell>
            <TableCell
             sx={{
                fontSize: "12px",
                textTransform:'capitalize',
                lineHeight:'14px',
                fontWeight:500,
                opacity:0.5,

            }}
             align="left">Date</TableCell>
            <TableCell 
                sx={{
                    fontSize: "12px",
                    textTransform:'capitalize',
                    lineHeight:'14px',
                    fontWeight:500,
                    opacity:0.5,
    
                }}
            align="left">Price</TableCell>
            
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
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell 
                sx={{display:'flex', flexDirection:'column', alignItems:'left'}}
                component="th" 
                scope="row">
                <Header> <h3>{row.title}</h3>  <Span className={row.isNew}>{row.isNew}</Span></Header>
                <Paragraph> 
                  <Link 
                  underline="always"
                  style={{ textTransform:'capitalize', color:'#000000'}} 
                  href=''>{row.buyer}</Link> {row.info} <Link style={{ textTransform:'capitalize', color:'#000000'}}  href=''>{row.artist}</Link > {row.timeAgo}</Paragraph>
              </TableCell>
              <TableCell align="left">
              <Button className={row.action[0]}> {row.action[0]}</Button>
            
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left"> <Link style={{color:'#000000', cursor:'pointer', fontSize:'12px'}}>{row.price}</Link> </TableCell>            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const Header = styled.div`
  display: flex;
  font-family: 'Kern';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
  &>h3{
    text-transform: none;
  }
  `
  const Span = styled.span` 
  display: flex;
  padding: 0px 10px;
  margin-left: 5px;
  align-items: center;
  font-family: 'Kern';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  color: #FBFBFB;
border-radius: 20px;
  background-color: ${props => props.className === 'new' ? '#FF7474' : 'none'};
  
  `
  const Paragraph = styled.p`
  font-family: 'Kern';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-transform: lowercase;
  color: #000000;
  `

 const Button = styled.button`
 font-family: 'Kern';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  outline: none;
  border: none;
  padding: 5px 15px;
border-radius: 22.069px;
  color: #000000;
  &.Purchase{
    background: #BAE5F8;
  }
  &.Resell{
    background: #E6CAED;;
  }
 `
 const Filter = styled('div')`
border-top:1px solid #D2D2D6;
border-bottom:1px solid #D2D2D6;
padding:15px;
padding-right:40px;
width:100%;
display:flex;
flex-direction:row;
justify-content:flex-end;
align-items:center;
margin-bottom:20px;
`
const FilterItem = styled('li')`
list-style:none;
padding-left:20px;
font-family: 'Kern';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: #000000;
align-items:center;
display:flex;
`

