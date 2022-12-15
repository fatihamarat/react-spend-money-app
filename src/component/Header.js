import React from 'react';
import { moneyFormat } from './Helpers';

function Header({money,total}) {
  return (
    <div>
        {money-total !==0 && <div>Harcamak için $ {moneyFormat(money-total)} paranız var.</div> }
        {/* {total === 0 && <div>${money} var</div>} */}
        {money-total === 0 && <div>Paranız bitti</div>}
        
    </div>
  )
}

export default Header;