import React from 'react'
import ProfileCard from "../cards/ProfileCard";
import './AboutPage.css'
const AboutPage = (props) =>{
    return (
        <>
<div style={{textAlign: 'center', marginLeft: '10px', marginRight: '10px'}}>
    <h1>Om MetalWorks</h1>
                <div className={'about-wrapper'}>
                
                <p>Metalworks aps blev grundlagt i 2018 af Andreas Mønsted Petersen.
                    Sammen med sin far Christian Petersen udviklede firmaet sig hurtigt og i april 2019 blev Nikolaj Ørsted Nielsen medejer i virksomheden.
                    Vi gør alt hvad vi kan for at tilfredsstille vores kunders behov og er med under hele processen med gode råd og vejledning.
                    Vores største mål er at kunden er tilfreds når vi er færdige med arbejdet.
                    Vi har et udtryk i firmaet, “Hvis vi ikke kan lave det, er der ingen der kan” som vi lever efter, vi siger aldrig nej til en udfordring.


                </p>



                

            </div>
</div>


        </>
    )
}
export default AboutPage
