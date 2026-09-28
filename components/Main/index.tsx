import { Stack, Typography, Link, styled } from '@mui/material'
import { Box, Container } from '@mui/system'
import type { NextPage } from 'next'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Main:NextPage = () => {
    
    const SlideBox = styled(Box)(({theme}) => ({

        backgroundSize:'100% 100%',
        height:'548px',


    }))

    return(
        <Box sx={{backgroundColor:'background.default', color:'text.primary'}}>
        <Container maxWidth={'xl'}>
            <Stack direction='row' sx={{background:"linear-gradient(90deg, #252C33 40%, rgba(37, 44, 51, 0) 60%), url('Versys-650-21.png')", backgroundRepeat:'no-repeat', backgroundPosition:'right'}} mt='90px' height='813px'>
                <Stack minWidth='300px' maxWidth='450px' justifyContent='center' spacing={10}>
                    <Typography fontSize='34px'>
                        <b>Tìm chiếc xe mô tô mơ ước của bạn tại đây!</b>
                    </Typography>
                    <Typography fontSize='20px'>
                    Chúng tôi cung cấp hơn 100+ mẫu xe mô tô phân khối lớn chính hãng từ Honda, Kawasaki, Yamaha, Ducati... Cam kết mang đến mức giá tốt nhất cùng chất lượng xe hàng đầu.
                    </Typography>
                    <Link href='/' underline='always' color='text.primary'>
                        <Typography fontSize='24px' textAlign='center'>
                            Khám phá ngay
                        </Typography>   
                    </Link>
                </Stack>
            </Stack>
            <Box>
                <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
                    <SlideBox sx={{background:"linear-gradient(90deg, rgba(205, 250, 253, 0.75) 0%, rgba(253, 253, 217, 0) 50%), url('slide-1.png')", backgroundSize:'100% 100%'}} color='primary.main'>
                        <Stack height="548px" textAlign='left' minWidth='500px' maxWidth='700px'direction="column" justifyContent="center"  spacing={5} ml="77px">
                            <Typography fontSize='55px'>
                                <b>SẴN SÀNG CHO NHỮNG CHUYẾN ĐI MÙA HÈ</b>
                            </Typography>
                            <Typography fontSize='35px'>
                            Tiết kiệm lên đến 20% khi mua xe tại cửa hàng trong mùa hè này
                            </Typography>
                            <Typography textAlign='left' fontSize='25px'>
                            Ưu đãi áp dụng đến ngày 31/08/2026
                            </Typography>
                        </Stack>                              
                    </SlideBox>
                    <SlideBox sx={{background:"linear-gradient(90deg, #252C33 0%, rgba(37, 44, 51, 0) 50%), url('slide-2.png')", backgroundSize:'100% 100%'}} color='primary.light'>
                        <Stack height="548px" textAlign='left' minWidth='500px' maxWidth='700px'direction="column" justifyContent="center"  spacing={5} ml="77px">
                            <Typography fontSize='55px'>
                                <b>Đã có Danh mục xe 2026, hãy khám phá những mẫu xe mới nhất</b>
                            </Typography>
                            <Stack alignItems='center' justifyContent='center' alignSelf='center'>
                                <Typography fontSize='25px' border='1px solid #FCF7D7' borderRadius='15px' px='30px' py='15px' sx={{cursor:"pointer"}}>
                                    <b>Tải xuống PDF</b>
                                </Typography>
                            </Stack>
                        </Stack>
                    </SlideBox>
                    <SlideBox sx={{background:"linear-gradient(90deg, #252C33 0%, rgba(37, 44, 51, 0) 50%), url('slide-3.png')", backgroundSize:'110% 100%'}} color='primary.light'>
                        <Stack height="548px" textAlign='left' minWidth='500px' maxWidth='700px'direction="column" justifyContent="center"  spacing={5} ml="77px">
                            <Typography fontSize='55px'>
                                <b>Lái xe mùa mưa lạnh? Xem ngay hướng dẫn di chuyển an toàn</b>
                            </Typography>
                            <Stack alignItems='center' justifyContent='center' alignSelf='center'>
                                <Typography fontSize='25px'  border='1px solid #FCF7D7' borderRadius='15px' px='30px' py='15px' sx={{cursor:"pointer"}}>
                                    <b>Tìm hiểu thêm</b>
                                </Typography>
                            </Stack>
                        </Stack>
                    </SlideBox>
                </Carousel>
            </Box>
        </Container>
        </Box>
    )
}

export default Main