import React from 'react';
import "./Prize.css"

const Prize = () => {
    const cardData = [
        {
            heading: '1ST RUNNER UP',
            content: 'HACK THE FUTURE FIRST SEASON 1ST RUNNER UP - $15,000',
            value: '1st',
        },
        {
            heading: 'WINNER',
            content: 'HACK THE FUTURE FIRST SEASON WINNER - $25,000',
            value: 'WINNER',
        },
        {
            heading: '2ND RUNNER UP',
            content: 'HACK THE FUTURE FIRST SEASON 1ST RUNNER UP - $5,000',
            value: '2nd',
        },
    ];

    return (
        <div id="Prize">
            <div className="dd_heading" >
                <h3 className="heading-tag-line">Prizes</h3>
                <hr className="heading-underline"/>
            </div>
            <main className="page-content">
                {cardData.map((card, index) => (
                    <div className="d_card" key={index} value={card.value}>
                        <div className="prize-content">
                            <h2 className="heading">{card.heading}</h2>
                            <p className="data-content">{card.content}</p>
                            <br/><br/><br/>
                            {/* <button class="prize-button">Click Here</button> */}
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Prize;
