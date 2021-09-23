import React, {Fragment,} from 'react'

export const HotBid = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {

    return (
        <Fragment>
            <section className="timer-container">
                <section className="timer">
                    <div className="clock" style={{display: 'flex'}}>
                        <section>
                            <p>{timerDays}</p> 
                        </section>&nbsp;
                        <span>:</span>&nbsp;
                        <section>
                            <p>{timerHours}</p> 
                        </section>&nbsp;
                        <span>:</span>&nbsp;
                        <section>
                            <p>{timerMinutes}</p> 
                        </section>&nbsp;
                        <span>:</span>&nbsp;
                        <section>
                            <p>{timerSeconds}</p> 
                        </section>&nbsp;
                        <section>
                            <p>Left</p> 
                        </section> 
                    </div>
                </section>
            </section>
        </Fragment>
    )
}

HotBid.defaultProps = {
    timerDays :10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10
}

export default HotBid;
 