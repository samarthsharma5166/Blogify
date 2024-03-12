import { categories } from "../../constants/Categories";
import "./Category.css";
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  styled,
  CardMedia
} from "@mui/material";
const Cards = styled(Card)`
  display: block;
  border: 1px solid #f7f7f7;
  background: #ffffff;
  box-shadow: -7px -7px 17px #fff, 7px 7px 17px rgba(70, 70, 70, 0.15);
  border-radius: 10px;
  margin: auto;
  margin-bottom: 5%;
`;
const Buttons = styled(Button)`
  color: #e2701b;
`;
const Category = () => {
    useEffect(()=>{
        AOS.init({duration:1000});
      },[]);
  return (
    <div >
      <div className="card" data-aos="fade-up">
        <>
          {categories.map((e) => (
            <Cards sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={e.img}
                title="green iguana"
                data-aos="fade-up"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" data-aos="fade-up">
                  {e.type}
                </Typography>
                <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                  {e.description}
                </Typography>
                <CardActions>
                  <Buttons size="small" data-aos="fade-up">
                    <FaArrowRight />
                  </Buttons>
                </CardActions>
              </CardContent>
            </Cards>
          ))}
        </>
      </div>
    </div>
  );
};

export default Category;
