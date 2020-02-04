import React, { useContext } from 'react';
import { Context } from './SpeedConverter';


const Converter = () => {
    const {value, setValue} = useContext(Context)

    const handleinput = e => setValue({Mbps:e.target.value, MB: e.target.value/8})

    return (
        <div className="converter">
            <div className="flex-1">
                <div className="converter-title">Set</div>
                <input type="number" className="input-number" min="0" onChange={e => handleinput(e)} value={value.MBps} />
            </div>
            <span
                className="angle-icon fa-2x"
                style={{
                    marginTop: 30,
                }}
            >
                <i className="fas fa-angle-right" />
            </span>
            <div className="text-right flex-1">
                <div className="converter-title">Show</div>
                <input
                    className="input-number text-right"
                    type="number"
                    value={value.MB}
                    disabled
                />
            </div>
        </div>
    )
}

export default Converter