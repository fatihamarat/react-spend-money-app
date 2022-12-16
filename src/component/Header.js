import React from 'react';
import { moneyFormat } from './Helpers';

function Header({money,total}) {
  return (
    <div className="h-16 flex items-center justify-center text-lg text-white bg-green-400 tracking-widest sticky top-0 ">
        {money-total !==0 && <div>Harcamak için<span className='ml-2 mr-2 font-bold'>$ {moneyFormat(money-total)}</span>paranız var.</div> }
        {/* {total === 0 && <div>${money} var</div>} */}
        {money-total === 0 && <div>Paranız bitti</div>}
        
    </div>
  )
}

export default Header;