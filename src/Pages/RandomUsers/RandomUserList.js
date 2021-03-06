import React, { Component } from "react";
import UserItem from "./UserItem.js";
import { getRandomUsers } from "./RandomUserAPI";
import "./randomUserCSS.css"

import CircularProgress from '@material-ui/core/CircularProgress';


export class RandomUserList extends Component {

  constructor(props){
    super(props);
    this.state = {fetching: true};
  }

  componentWillMount() {
    getRandomUsers(50)
      .then( data => {
        this.setState({
          users: data,
          fetching: false
        });
      });
  }

  renderUserItems() {
    return this.state.users.map((user, index) => {
      const first = user.name.first;
      const last = user.name.last;
      return (
        <UserItem
          key={first+last+index}
          title={user.name.title}
          firstName={first}
          lastName={last}
          thumbnail={user.picture.large}
          email={user.email}
          birthday={user.birthday}

          />

      );


    });
  }

  render () {


    if(this.state.fetching) {
      //show loader
      return (
        <div>
          <div className="LoadingBar">
            <CircularProgress size="100" thickness="4.6" color="secondary" />
          </div>
        </div>

      );
    }
    return (
        <div className="RenderUserItems">
          {this.renderUserItems()}
        </div>
    );
  }
}

export default RandomUserList
