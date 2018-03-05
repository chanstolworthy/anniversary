import React, {Component} from 'react';
import './App.css';
import couple from './images/1.svg'
import mirror from './images/mirror.svg'
import llama from './images/llama.svg'
import mari from './images/mm.svg'
import hot from './images/hd.svg'
import keeb from './images/keb.jpg'
import beb from './images/beb.jpg'
import heart from './images/heart.svg'
import pres from './images/pres.png'
import mass from './images/preg.svg'

class App extends Component {
	constructor() {
		super();
		this.state = {
			page: 1,
			incorrect: false,
			string: '',
			more1: false,
			more2: false,
			more3: false,
			more4: false,
			more5: false,
			click: 0
		}
	}
	nextPage = (num) =>{
	this.setState({
					  page:num,
					  incorrect: false,
					  string: ''
				  })
}

displayIncorrectTag = () =>{
	this.setState({
		incorrect: true
	})
}
saveInput = (e) =>{
	this.setState({
		string: e
	})
}
incorrectTag = () =>{
	if(this.state.incorrect) {
		return (
			<div className='incorrect-tag'>
			<div>Incorrect, Try Again!</div>
		</div>
	)
	}
}


displayPage = () =>{
	if(this.state.page === 1){
		return(
			<div>
			<div className='an-header'>
			<img src={couple} alt='happy' className='an-main-image'/>
			<div>
			<div className='an-big-title'>Happy 7 Years</div>
		<div className='an-main-button' onClick={()=>{this.nextPage(2)}}> Start</div>
		</div>
		</div>
		</div>
	)
	}
	else if(this.state.page === 2){
		return(
			<div>
			<img src={mirror} alt={'mirror'} className='standard-image'/>
			<div className='an-med-title'>What would occur if</div>
		<div className='an-med-title'>these had a staring</div>
		<div className='an-med-title'>competition?</div>
		<input placeholder='Answer' onChange={(e)=>{this.saveInput(e.target.value)}} className='an-input'/>
			<div className='an-main-button' onClick={()=>{this.state.string === 'neverendingness' ? this.nextPage(3) : this.displayIncorrectTag()}}> Start</div>
		{this.incorrectTag()}
	</div>
	)

	}
	else if(this.state.page === 3){
		return(
			<div>
			<div>
			<img src={llama} alt={'llama'} className='standard-image'/>
			<div className='an-med-title'>What is the name</div>
		<div className='an-med-title'>of the domesticated</div>
		<div className='an-med-title'>version of this creature?</div>
		<input placeholder='Answer' onChange={(e)=>{this.saveInput(e.target.value)}} className='an-input'/>
			<div className='an-main-button' onClick={()=>{this.state.string === 'lakey' ? this.nextPage(4) : this.displayIncorrectTag()}}> Start</div>
		{this.incorrectTag()}
	</div>
		</div>
	)

	}
	else if(this.state.page === 4){
		return(
			<div>
			<div>
			<img src={mari} alt={'mm'} className='standard-image'/>
			<br />
			<img src={hot} alt={'hot'} className='standard-image'/>
			</div>

			<div className='an-med-title'>What do these 2</div>
		<div className='an-med-title'>things have in common?</div>
		<input placeholder='Answer' onChange={(e)=>{this.saveInput(e.target.value)}} className='an-input'/>
			<div className='an-main-button' onClick={()=>{this.state.string === 'pyper' ? this.nextPage(5) : this.displayIncorrectTag()}}> Start</div>
		{this.incorrectTag()}
	</div>
	)

	}
	else if(this.state.page === 5){
		return(
			<div>
			<div>
			<img src={keeb} alt={'mm'} className='standard-image'/>
			</div>

			<div className='an-med-title'>I love you more than life</div>
		<div className='an-med-title'>itself, I love you more than</div>
		<div className='an-med-title'>the ________ elf!</div>
		<input placeholder='Answer' onChange={(e)=>{this.saveInput(e.target.value)}} className='an-input'/>
			<div className='an-main-button' onClick={()=>{this.state.string === 'keebler' ? this.nextPage(6) : this.displayIncorrectTag()}}> Start</div>
		{this.incorrectTag()}
	</div>
	)

	}
	else if(this.state.page === 6){
		return(
			<div>
			<div>
			<div>
			<img src={beb} alt={'mm'} className='standard-image'/>
			</div>

			<div className='an-med-title'>We are getting one of these,</div>
		<div className='an-med-title'>and Justin Beiber has a song</div>
		<div className='an-med-title'>titled ....!</div>
		<input placeholder='Answer' onChange={(e)=>{this.saveInput(e.target.value)}} className='an-input'/>
			<div className='an-main-button' onClick={()=>{this.state.string === 'baby' ? this.nextPage(7) : this.displayIncorrectTag()}}> Start</div>
		{this.incorrectTag()}
	</div>
		</div>
	)

	}
	else if(this.state.page === 7){
		return(
			<div>
			<img src={heart} alt={'mm'} className='standard-image'/>
			<div className='an-big-title'>I love You Soo Very Much!</div>
		<div className='an-med-title'>For 7 years, you have made me the happiest</div>
		<div className='an-med-title'>and best self. You are thoughtful, loving, caring,</div>
		{this.viewMore()}
	</div>
	)

	}
	else if(this.state.page === 8){
		return(
			<div>
			<img src={mass} alt={'mm'} className='standard-image'/>
			<div className='an-big-title'>Happy 7th Anniversary!</div>
		<div className='an-med-title'>Massage For the Preggo!</div>
		</div>
	)

	}
}

displayMore = () => {
	this.setState({
		click: true
	})
}

viewMore = () => {
	if (this.state.click) {
		return (
			<div>
			<div className='an-med-title'>strong, beautiful, smart, talented, fit, </div>
		<div className='an-med-title'>sexy, kind, selfless, driven, happy, optimistic</div>
		<div className='an-med-title'>sassy, supportive, and perfect</div>
		<div className='an-main-button-img' onClick={()=>{this.nextPage(8)}}>
	<img src={pres}  className='standard-image' />
			</div>
			</div>
	)
	}
	else {
		return (
			<div className='an-main-button' onClick={()=>{this.displayMore()}}> See More</div>
	)
	}
}

render() {
	return (
		<div className="App">
		{this.displayPage()}
</div>
);
}
}

export default App;
