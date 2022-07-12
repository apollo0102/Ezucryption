import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';

function createData(
  monday: Array <string | number >,
  tuesday: Array <string | number >,
    wednesday: Array <string | number >,
    thursday: Array <string | number >,
    friday: Array <string | number >,
    saturday: Array <string | number >,
    sunday: Array <string | number >
) {
  return { monday, tuesday, wednesday, thursday, friday, saturday, sunday };
}

const rows = [
  createData(   
                [30, '', '', '' ], 
                [1, '', '', ''], 
                [2, 'in-person', 'virtual', ''],
                [3,'', '', ''], 
                [4, '', '', ''], 
                [5, '', '', ''],
                [6, 'drops', 'drops', 'drops']),
    createData(
                [7, '', '', '' ],
                [8, '', '', ''],
                [9, '', '', ''],
                [10, '', '', ''],
                [11, '', '', ''],
                [12, '', '', ''],
                [13, '', '', '']),
    createData(
                [14, '', '', '' ],
                [15, 'drops', 'drops', 'drops'],
                [16, '', '', ''],
                [17, '', '', ''],
                [18, '', '', ''],
                [19, '', '', ''],
                [20, 'virtual', 'in-person', '']),
    createData(
                [21, '', '', '' ],
                [22, '', '', ''],
                [23, '', '', ''],
                [24, 'in-person', 'virtual', ''],
                [25, '', '', ''],
                [26, '', '', ''],
                [27, '', '', '']),
    createData(
                [28, '', '', '' ],
                [29, '', '', ''],
                [30, '', '', ''],
                [31, '', '', ''],
                [1, '', '', ''],
                [2, '', '', ''],
                [3, '', '', '']),
];

export default function BasicTable() {
  return (
    <TableContainer>
      <Table sx={{ maxWidth: "100%", }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Monday</StyledTableCell>
            <StyledTableCell>Tuesday</StyledTableCell>
            <StyledTableCell >Wednesday</StyledTableCell>
            <StyledTableCell >Thursday</StyledTableCell>
            <StyledTableCell>Friday</StyledTableCell>
            <StyledTableCell >Saturday</StyledTableCell>
            <StyledTableCell >Sunday</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.monday[0]}
              sx={{ '&:last-child td, &:last-child th': { borderBottom: 0} }}
            >
              <TableCell component="th" scope="row" sx={{ borderRight:'1px solid #d5d5d5'}}>
                {row.monday[0]}
                <CircleWrapper>
                    <Circle className={`${row.monday[1]}`} />
                    <Circle className={`${row.monday[2]}`} />
                    <Circle className={`${row.monday[3]}`} />
                </CircleWrapper>
              </TableCell>
              <TableCell sx={{borderRight:'1px solid #d5d5d5'}}>
                  {row.tuesday[0]}
                  <CircleWrapper>
                    <Circle className={`${row.tuesday[1]}`} />
                    <Circle className={`${row.tuesday[2]}`} />
                    <Circle className={`${row.tuesday[3]}`} />
                </CircleWrapper>
                </TableCell>
                <TableCell sx={{borderRight:'1px solid #d5d5d5'}}>
                    {row.wednesday[0]}
                    <CircleWrapper>
                    <Circle className={`${row.wednesday[1]}`} />
                    <Circle className={`${row.wednesday[2]}`} />
                    <Circle className={`${row.wednesday[3]}`} />
                </CircleWrapper>

                </TableCell>
                <TableCell sx={{borderRight:'1px solid #d5d5d5'}} >
                    {row.thursday[0]}
                    <CircleWrapper>
                    <Circle className={`${row.thursday[1]}`} />
                    <Circle className={`${row.thursday[2]}`} />
                    <Circle className={`${row.thursday[3]}`} />
                </CircleWrapper>

                </TableCell>
                <TableCell sx={{borderRight:'1px solid #d5d5d5'}} >
                    {row.friday[0]}
                    <CircleWrapper>
                    <Circle className={`${row.friday[1]}`} />
                    <Circle className={`${row.friday[2]}`} />
                    <Circle className={`${row.friday[3]}`} />
                    </CircleWrapper>
                </TableCell>
                <TableCell sx={{borderRight:'1px solid #d5d5d5'}} >
                    {row.saturday[0]}
                    <CircleWrapper>
                    <Circle className={`${row.saturday[1]}`} />
                    <Circle className={`${row.saturday[2]}`} />
                    <Circle className={`${row.saturday[3]}`} />
                    </CircleWrapper>

                </TableCell>
                <TableCell>
                    {row.sunday[0]}
                    <CircleWrapper>
                    <Circle className={`${row.sunday[1]}`} />
                    <Circle className={`${row.sunday[2]}`} />
                    <Circle className={`${row.sunday[3]}`} />
                    </CircleWrapper>
                    </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const TableContainer    = styled.div`

`
const StyledTableCell = styled(TableCell)`
font-family: 'Kern';
text-align: center;
color: #717579;
@media (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;

}
`
const Circle = styled.div`
width:10px;
height:10px;
border-radius:50%;
margin-right:5px;
@media (max-width: 768px) {
    width:5px;
    height:5px;
    margin-right:0;
}
&.drops{
 background-color: #CBAACE;

}
&.in-person{
  background-color: #A6C8A9;
    
}
&.virtual{
    background-color: #95D4EF;
}
`
const CircleWrapper =  styled.div`
display:flex;
flex-direction:row;
margin-bottom:5px;
margin-top:10px;
display:none;
@media (max-width: 768px) {
  margin-bottom:2px;
  margin-top:2px;
  background-color: #f5f5f5;
}

`