import React, { Component } from "react";
import "./myProfile.less";

class MyProfile extends Component {
  state = {
    name: '',
    gender: '',
    descriptions: '',
    isRead: false,
  }
  
  handleChange= (event) => {
    console.log('change');
    this.setState(
      {[event.target.name] : event.target.value}
      )
  }
  handleSubmit= (event) => {
    console.log('name:',this.state.value);
    console.log('gender:',this.state.gender)
    console.log('descriptions:',this.state.descriptions)
    console.log('isRead:',this.state.isRead)
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:<br />
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
        </label>
        <br />
        <label>
          Gender:<br />
          <select name="gender" value={this.state.gender} onChange={this.handleChange} >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </label>
        <br />
        <label className='gender'>
        Description:<br />
          <textarea name="descriptions" value={this.state.descriptions} onChange={this.handleChange}>Description yourself</textarea>
        </label>
        <br />
        <label>
          <input name="isRead" type='checkbox' checked={this.state.isRead} onChange={this.handleChange}/> I have read the term of conducts
        </label>
        <br />
        <input type='submit' value='Submit' disabled={!this.state.name || !this.state.gender || !this.state.descriptions || !this.state.isRead} />
      </form>
    );
  }
}

export default MyProfile;
