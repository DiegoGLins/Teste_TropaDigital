import { FormControlLabel, FormGroup, Radio } from "@mui/material";

interface CheckMeProps {
    active: (value: boolean) => void;
    value: boolean;
    children: React.ReactNode
    color?: string
}

export default function CheckMe({ active, value, children, color }: CheckMeProps) {
    return (
        <>
            <FormGroup color={color ? color : "orange"}>
                <FormControlLabel
                    control={
                        <Radio color="error"
                            value={value}
                            onChange={(e) => active(e.target.checked)}
                        />
                    }
                    label={children}
                />
            </FormGroup>
        </>
    );
}