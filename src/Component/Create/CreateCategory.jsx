import AOS from 'aos';
import 'aos/dist/aos.css'
import './CreateCategory.css'
import { Table, TableHead, TableRow, TableCell, TableBody, Box, styled} from '@mui/material'
import { categories } from '../../constants/Categories';
import {useEffect} from 'react';
const StyledBox = styled(Box)`
  width:100vw;
  height:100vh;
  display:flex;
  justify-content: center;
  background:#fff;
`
const StyledTable = styled(Table)`
  width:40%;
  height:60%;
  padding: 0px 15px;
  margin-top: 4%;
  box-shadow: -7px -7px 17px #ffffff,7px 7px 17px rgba(70, 70, 70, 0.15);
  border: 1px solid #f7f7f7;
  border-radius: 10px;
`;
const CreateCategory = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  },[])
  return (
    <StyledBox>
      <StyledTable data-aos="fade-up">
        <TableHead>
          <TableRow>
            <TableCell  style={{fontSize:'20px'}}>
              All category
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            categories.map(data => (
              <TableRow key={data.id}>
                <TableCell className='cell' data-aos="fade-right">
                  {data.type}
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </StyledTable>
    </StyledBox>
  );
}
export default CreateCategory;