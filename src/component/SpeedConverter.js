import React, { createContext, useState } from 'react';
import '../css/SpeedConverter.css'
import Unitcontrol from './UnitController'
import Converter from './Converter'

export const Context = createContext()

const CardFooter = (props) => {
	const { value } = props;
	let criteria;
	
	value.Mbps ? value.Mbps >= 15 ? value.Mbps >= 40 ? 
	criteria = {title: 'FAST',backgroundColor: '#13d569',} 
	: criteria = {title: 'GOOD',backgroundColor: '#1b82f1',}	
	: criteria = {title: 'SLOW',backgroundColor: '#ee362d',}
	: criteria = {title: '---',backgroundColor: '#d3d8e2',} 
	
	return (
		<div 
			className="card-footer"
			style={{
				backgroundColor: criteria.backgroundColor
			}}
		>
			{criteria.title}
		</div>
	);
};

const SpeedConverter = () => {
	const [value, setValue] = useState({Mbps:0, MB:0});
	
    return (
		<Context.Provider value={{value, setValue}}>
			<div className="container">
				<div className="card-header">Network Speed Converter</div>
				<div className="card-body">
					<Unitcontrol />
					<Converter />
				</div>
				<CardFooter value={value}/>
			</div>
		</Context.Provider>
    )
};

export default SpeedConverter