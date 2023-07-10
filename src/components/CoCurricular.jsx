import React, {useState} from 'react';
import RadioIcon from './RadioIcon';
import Text from './Text';
import Zoom from '@mui/material/Zoom';


const CoCurricular = () => {
  const [checked, setChecked] = React.useState(true);


  return (
    <Zoom in={checked} style={{ transitionDelay: checked ? '3000ms' : '0ms'}} >
    <div className='col-md-6 col-12 co-curricular'>
    <div className='vertical-rule'>
    <RadioIcon />
    </div>
    <div className='text'>
    <h5>
      CO-CURRICULAR:
    </h5>
    <p>-- {Text.cc1}</p>
    <p>-- {Text.cc2}</p>
    <p>-- {Text.cc3}</p>
    <p>-- {Text.cc4}</p>
    <p>-- {Text.cc5}</p>
    <p>-- {Text.cc6}</p>
    </div>
    </div>
    </Zoom>
  )
}

export default CoCurricular