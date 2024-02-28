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
import { useNavigate } from "react-router-dom"
import ModalDefault from "../components/ModalDefault"

const Login = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [openModal, setOpenModal] = useState<boolean>(false)

    const passwordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const navUrl = (url: string) => {
        navigate(url)
    }

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const closeModal = () => {
        setOpenModal(false)
    }

    return (
        <Grid container sx={{ width: '100vw', height: '100vh' }}>
            <Grid item xs={6} sx={{
                background: `url(${Astronauta})center/cover no-repeat`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
            }}>
                <ContainerText children={
                    <><BoxText text="Bem vindo a Tropa Digital" />
                        <BoxParagraph text='Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' />
                    </>} />
            </Grid>
            <Grid item xs={6} md={6} sx={{ display: 'flex' }} justifyContent={"center"} alignItems={'center'}>
                <Grid container item justifyContent={"center"}>
                    <Grid item xs={9}>
                        <Title title={'Login'} />
                        <Typography sx={{ marginTop: '4rem', fontFamily: 'DM Sans, sans-serif', fontSize: '22', fontWeight: '700', color: '#CC6138' }} variant="h5">E-mail</Typography>
                        <TextField color='warning' label='Insira seu e-mail' type='email' variant="standard" fullWidth InputProps={{
                            endAdornment: <InputAdornment position='end'><img style={{ width: '27px', height: '29px', padding: '0px 10px 10px 0px' }} src={OutlineEmail} />
                            </InputAdornment>
                        }} />
                        <Typography sx={{ marginTop: '2.5rem', fontFamily: 'DM Sans, sans-serif', fontSize: '22', fontWeight: '700', color: '#CC6138' }} variant='h5'>Senha</Typography>
                        <TextField color='warning' sx={{ paddingBottom: '15px' }} label='Insira sua senha utilizando apenas números' type={showPassword ? 'password' : 'text'} variant="standard" fullWidth InputProps={{ endAdornment: <InputAdornment position="end"><IconButton onClick={passwordVisibility} edge='end'>{showPassword ? <img style={{ width: '29px', height: '34px', padding: '0px 10px 10px 0px' }} src={eyeOn} /> : <img style={{ width: '29px', height: '33px', padding: '0px 10px 10px 0px' }} src={eyeOff} />}</IconButton></InputAdornment> }} />
                        <CheckMe children={<p style={{ color: '#CC6138' }}>Lembrar e-mail e senha</p>} active={() => console.log()} value={false} />
                        <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '60px' }}>
                            <button className="buttonLogin">Entrar</button>
                            <button onClick={handleOpenModal} className="link">Esqueceu a senha ?</button>
                            <span>Novo por aqui ? <button onClick={() => navUrl('/cadastro')} className="link">Cadastre-se</button></span>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <ModalDefault title={<p className="styleTitleModal">{'Esqueci minha senha'}</p>} description={<p className="styleTextModal">{'Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.'}</p>} actionCancel={closeModal} open={openModal} children={
                <>
                    <Typography sx={{ paddingTop: '28px', fontFamily: 'DM Sans', fontWeight: 700, fontSize: '22px', color: '#CC6138' }}>E-mail</Typography>
                    <TextField color="warning" label='Insira seu e-mail' type='email' variant="standard" fullWidth InputProps={{
                        endAdornment: <InputAdornment position='end'><img style={{ width: '27px', height: '29px', padding: '0px 10px 10px 0px' }} src={OutlineEmail} />
                        </InputAdornment>
                    }} />

                </>} button={<>
                    <button className="buttonModal" onClick={closeModal} autoFocus>Enviar</button>
                    <button className="buttonCancel" onClick={closeModal}>Cancelar</button>
                </>} />
        </Grid>
    )
}

export default Login