import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

const Image = ({ data }) => (
	<div>
		<ul>
			{data.map (data => {
				return (
					<li key={data.alt}>
						<h2>{data.alt}</h2>
						<p>{data.caption}</p>
						<img src={data.src} width={data.width} alt={data.alt}  />
					</li>
				);
			})}
		</ul>
	</div>
);

Image.propTypes = {
	data: PropTypes.array
};

const Banner = ({ data }) => (
    <div>
        <h1>{data.text}</h1>
		<p>{data.description}</p>
    </div>
);

Banner.propTypes = {
	data: PropTypes.object
};



class App extends Component {
    render() {
        const data = {
			images: [
				{
					src: "http://www.magistra-historia.sk/wp-content/uploads/2014/06/piatok-1.jpg",
					width: 500,
					alt: "Freya",
					caption: "Goddess of Sex, Love, Fertility, Battle, War and Death."
				},
				{
					src: "https://66.media.tumblr.com/3a7a6debf02e21933d201ad4fbe5fc90/tumblr_no4z28gHnW1rdzvo9o1_500.jpg",
					width: 500,
					alt: "Eir",
					caption: "Goddess of Healing." 
				},
				{
					src: "https://i.pinimg.com/736x/d8/22/21/d82221f632ff56a2dab08d130c20e270--norse-goddess-norse-mythology.jpg",
					width: 500,
					alt: "Frigga",
					caption: "Goddess of Marriage and Motherhood."
				},
				{
					src: "https://vignette.wikia.nocookie.net/gods-goddess/images/d/db/Skadi_by_Anna_Novikova.png/revision/latest?cb=20140807144842",
					width: 500,
					alt: "Skadi",
					caption: "Goddess of Winter"
				},
			],
			hero: {
				text: "Norse Goddesses",
				description: "A short list of Norse Goddesses that I am interested in"
			}
		}
	
		
        return (
        <div className="App">
			<Banner data={data.hero} />
            <Image data={data.images} />
        </div>
        );
    }
}

export default App;
