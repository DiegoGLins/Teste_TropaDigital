import { Typography } from "@mui/material";

interface TitlePros {
    title: string;
}

const Title = ({ title }: TitlePros) => {
    return (
        <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '80px', fontWeight: '700px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#CC6138' }}><strong>{title}</strong></Typography>
    )
}

export default Title