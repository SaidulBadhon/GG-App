import React, { Component, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Box} from '@material-ui/core';

import "./randomUserCSS.css"


class UserItem extends Component {


    render() {

        const title = this.props.title;
        const firstName = this.props.firstName;
        const lastName = this.props.lastName;
        const email = this.props.email;
        const thumbnailPicture = this.props.thumbnail;

        const FullName = title + ". " + firstName + " " + lastName
        const birthday = this.props.birthday;
        console.log("user.age : ", this.props.birthday);
        console.log("birthday : ", birthday);
        //<div>{title} {firstName} {lastName}</div>
        //<div>{email}</div>
        return (
            <Fragment>
                <Card className="CardMain">
                    <div className ="CardBody">
                        <div className="CardImage">
                            <img src={thumbnailPicture} />
                        </div>

                        <div className="PersonalData">
 
                            <Box fontWeight={500} fontSize={25} m={1}>
                                {FullName}
                            </Box>

                            <Box fontWeight="fontWeightMedium" m={1}>
                            {email}
                            </Box>

                            <Box fontWeight="fontWeightRegular" m={1}>
                            {birthday}
                            </Box>

                        </div>
{/*

                        <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>

                        
                        
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>

                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        */}

                    </div>







                </Card>

            </Fragment>
        )
    }


}

export default UserItem;