import React, { Component } from "react"
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Add from "@material-ui/icons/Add"
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import signalR from "@aspnet/signalr"

const classes = {
    list: {
        width: 250,
      }
}

const PopulateChatroomList = (props) => {
     return (   
        <div className={classes.list}>
            <List>
                {props.chatrooms.map((room, index) => (
                <div key={index}>
                    <ListItem button key={room.title} onClick={() => props.toggleDrawer(false)}>
                    <ListItemText primary={room.title} />
                    <IconButton id={room.title} onClick={(e) => {
                        console.log(e.currentTarget)
                        props.setCurrentChatroom(e.currentTarget.id)
                        props.hubConnection.invoke("AddToGroup", e.currentTarget.id)
                    }}><Add /></IconButton>
                    </ListItem>
                    </div>
          ))}
        </List>
      </div>
        )
    }

    export default withStyles(classes)(PopulateChatroomList)