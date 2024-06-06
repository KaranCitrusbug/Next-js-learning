import { ReactNode } from "react";

export default function ImageLayout({children , modal} : {children : ReactNode ,modal :ReactNode} ){
    return(
        <>
        {modal}
        {children}
        </>
    )
}