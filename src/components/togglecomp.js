import React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import mtn from '../img/mtn.png'
import airtel from '../img/airtel.png'
import nmobile from '../img/9mobile.png'
import glo from '../img/glo.png'

const Togglebtn = () => {
    const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
    return (
        <div>
            <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            >
                <ToggleButton value="1" aria-label="left aligned">
                    <img src={mtn} alt="mtn" style={{width:'25px'}}/>
                </ToggleButton>
                <ToggleButton value="2" aria-label="centered">
                    <img src={airtel} alt="mtn" style={{width:'25px'}}/>
                </ToggleButton>
                <ToggleButton value="3" aria-label="left aligned">
                    <img src={nmobile} alt="mtn" style={{width:'25px'}}/>
                </ToggleButton>
                <ToggleButton value="4" aria-label="centered">
                    <img src={glo} alt="mtn" style={{width:'25px'}}/>
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

export default Togglebtn;

