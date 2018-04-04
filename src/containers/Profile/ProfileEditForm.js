import React, {Component} from 'react'

class ProfileEditForm extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    this.setState({
      username: event.target.value,
      image:''
    })
  }
  onSubmit(event) {
    event.preventDefault()
    var user = this.state.user
    this.props.onUpdateUser(user)
    this.setState({
      user: ""
    })
  }
  render(){
    return (
      <div className='userForm'>
        <form onSubmit={ this.onSubmit }>
          <input
            autoFocus={this.props.autoFocus}
            onChange={ this.onChange }
            placeholder='Update profile picture'
            type='text'
            value={(this.state && this.state.user || '')} />
          <button type='submit'>{this.props.buttonName}</button>
        </form>
      </div>
    )
  }
}

export default ProfileEditForm;
