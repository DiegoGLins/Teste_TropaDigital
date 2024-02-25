import * as React from 'react';
import { ModalDefaultStyled } from './ModalDefaultStyle';
import { DialogContent, DialogContentText, Grid, Modal, Typography } from '@mui/material';

interface ModalDefaultProps {
    actionCancel: () => void;
    open: boolean;
    title?: React.ReactNode;
    description?: React.ReactNode;
    children?: React.ReactNode
    button: React.ReactNode
}

const ModalDefault: React.FC<ModalDefaultProps> = ({ actionCancel, open, title, description, children, button }) => {

    return (

        <Modal
            open={open}
            onClose={actionCancel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <ModalDefaultStyled>
                <Typography textAlign='center' mt='15px'>{title}</Typography>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {description}
                    </DialogContentText>
                    {children}
                </DialogContent>
                <Grid item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    {button}
                </Grid>
            </ModalDefaultStyled>
        </Modal>
    );
}

export default ModalDefault
