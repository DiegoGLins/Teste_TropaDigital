import { Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import Astronauta from '/Astronauta.png'
import Title from "../components/Title"
import { } from '../App.css'
import OutlineEmail from '/outline_email.png'
import eyeOff from '/eyeOff.png'
import eyeOn from '/eyeOn.png'
import BoxText from "../components/BoxText"
import BoxParagraph from "../components/BoxParagraph"
import ContainerText from "../components/ContainerText"
import { useState } from "react"
import CheckMe from "../components/CheckMe"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from "react-router-dom"

const Cadastro = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const navigate = useNavigate()

    const passwordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const passwordRepeatVisibility = () => {
        setShowRepeatPassword(!showRepeatPassword);
    };

    const navUrl = (url: string) => {
        navigate(url)
    }

    return (
        <Grid container sx={{ width: '100vw', minHeight: '100vh' }}>
            <Grid item xs={6} sx={{
                background: `url(${Astronauta})center/cover no-repeat`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: '100%'
            }}>
                <ContainerText children={
                    <><BoxText text="Bem vindo a Tropa Digital" />
                        <BoxParagraph text='Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' />
                    </>} />
            </Grid>
            <Grid item xs={6} md={6} sx={{ display: 'flex', minHeight: '100%', paddingBottom: '30px' }} justifyContent={"center"} alignItems={'center'}>
                <Grid container item justifyContent={"center"} sx={{ display: 'flex' }}>
                    <Grid item xs={9}>
                        <IconButton onClick={() => navUrl('/')}><ChevronLeftIcon />{'Voltar'}</IconButton>
                        <Title title={'Cadastro'} />
                        <Typography sx={{ marginTop: '2rem', fontFamily: 'DM Sans, sans-serif', fontSize: '22', fontWeight: '700', color: '#CC6138' }} variant="h5">Nome</Typography>
                        <TextField label='Insira seu nome' type='text' variant="standard" fullWidth InputProps={{
                            endAdornment: <InputAdornment position='end'><img style={{ width: '27px', height: '29px', padding: '0px 10px 10px 0px' }} src={''} />
                            </InputAdornment>
                        }} />
                        <Typography sx={{ marginTop: '2rem', fontFamily: 'DM Sans, sans-serif', fontSize: '22', fontWeight: '700', color: '#CC6138' }} variant="h5">E-mail</Typography>
                        <TextField label='Insira seu e-mail' type='email' variant="standard" fullWidth InputProps={{
                            endAdornment: <InputAdornment position='end'><img style={{ width: '27px', height: '29px', padding: '0px 10px 10px 0px' }} src={OutlineEmail} />
                            </InputAdornment>
                        }} />
                        <Typography sx={{ marginTop: '2rem', fontFamily: 'DM Sans, sans-serif', fontSize: '22', fontWeight: '700', color: '#CC6138' }} variant='h5'>Senha</Typography>
                        <TextField label='Insira sua senha utilizando apenas números' type={showPassword ? 'text' : 'password'} variant="standard" fullWidth InputProps={{ endAdornment: <InputAdornment position="end"><IconButton onClick={passwordVisibility} edge='end'>{showPassword ? <img style={{ width: '29px', height: '34px', padding: '0px 10px 10px 0px' }} src={eyeOn} /> : <img style={{ width: '29px', height: '33px', padding: '0px 10px 10px 0px' }} src={eyeOff} />}</IconButton></InputAdornment> }} />
                        <Typography sx={{ marginTop: '2rem', fontFamily: 'DM Sans, sans-serif', fontSize: '22', fontWeight: '700', color: '#CC6138' }} variant='h5'>Confirme senha</Typography>
                        <TextField sx={{ paddingBottom: '15px' }} label='Repita a senha criada anteriormente' type={showRepeatPassword ? 'text' : 'password'} variant="standard" fullWidth InputProps={{ endAdornment: <InputAdornment position="end"><IconButton onClick={passwordRepeatVisibility} edge='end'>{showRepeatPassword ? <img style={{ width: '29px', height: '34px', padding: '0px 10px 10px 0px' }} src={eyeOn} /> : <img style={{ width: '29px', height: '33px', padding: '0px 10px 10px 0px' }} src={eyeOff} />}</IconButton></InputAdornment> }} />
                        <CheckMe children={<p>Li e Concordo com os <a style={{ color: '#CC6138' }}>Termos e Condições</a></p>} active={() => console.log()} value={false} />
                        <CheckMe children={<p style={{ color: '#CC6138' }}>Lembrar e-mail e senha</p>} active={() => console.log()} value={false} />
                        <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
                            <button style={{ backgroundColor: '#CC6138' }} className="buttonCadastrar">Cadastrar</button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Cadastro