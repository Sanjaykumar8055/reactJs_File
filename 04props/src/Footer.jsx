import React from "react";

function Footer({userInfo,children}) {  //destructure use in {} brecket//

    return(
        <>
        <h2> Email:{userInfo.email}</h2>
        <h2>PhNo:{userInfo.phon}</h2>
        {children}
        </>
    )

}

export default Footer;