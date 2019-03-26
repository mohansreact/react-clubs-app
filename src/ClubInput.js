import React, {Component} from 'react';
import "./ClubInput.css";

class ClubInput extends Component {
    
    static defaultProps = {
        onClose() {},
        onSave() {}
    }
    
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            about: '',
            keyplayers: [''],
            img: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleNewPlayer = this.handleNewPlayer.bind(this);
        this.handleChangePlayer = this.handleChangePlayer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    
    handleNewPlayer(e) {
        const {keyplayers} = this.state;
        this.setState({keyplayers: [...keyplayers, '']});
    }
    
    handleChangePlayer(e) {
        const index = Number(e.target.name.split('-')[1]);
        const keyplayers = this.state.keyplayers.map((player, i) => (
                i === index ? e.target.value : player
            ));
            this.setState({keyplayers});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.onSave({...this.state});
        this.setState({
            title: '',
            about: '',
            keyplayers: [''],
            img: ''
        });  
    }
    
    render() {
        const {title, about, img, keyplayers} = this.state;
        const {onClose} = this.props;
        let inputs = keyplayers.map((player, i) => (
                <div
                    className="club-form-line"
                    key={`keyplayer-${i}`}
                >
                    <label>{i+1}.
                        <input 
                            type="text"
                            name={`keyplayer-${i}`}
                            value={player}
                            size={45}
                            autoComplete="off"
                            placeholder="KeyPlayer"
                            onChange={this.handleChangePlayer} />
                    </label>
                </div>
            ));
            
            
        return (
            <div className="club-form-container">
            <form className='club-form' onSubmit={this.handleSubmit}>
            <button
                type="button"
                className="close-button"
                onClick={onClose}
            >
            X
            </button>
          <div className="club-form-line">
            <label htmlFor='club-title-input'>Title</label>
            <input 
                id='club-title-input'
                key='title'
                name='title'
                type='text'
                value={title}
                size={45}
                autoComplete="off"
                onChange={this.handleChange} />
            </div>
          <label 
                htmlFor='club-about-input'
                style={{marginTop: '5px'}}
            >
            About
            </label>
          <textarea
                key='about'
                id='club-about-input'
                type='about'
                name='about'
                rows='8'
                cols='50'
                autoComplete='off'
                value={about}
                onChange={this.handleChange} />
                {inputs}
          <button
                type="button"
                onClick={this.handleNewPlayer}
                className="buttons"
            >
             +
            </button>
          <div className='club-form-line'>
            <label htmlFor='club-img-input'>Image Url</label>
            <input
              id='club-img-input'
              type='text'
              placeholder=''
              name='img'
              value={img}
              size={36}
              autoComplete='off'
              onChange={this.handleChange} />
          </div>
          <button
            type="submit"
            className="buttons"
            style={{alignSelf: 'flex-end', marginRight: 0}}
          >
            SAVE
          </button>
        </form>
      </div>
        ); 
    }
}

export default ClubInput;