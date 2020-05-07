import React, { Component } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';

export default class home extends Component {
    constructor(){
        super();
        this.state = {
            data: {}
        }
    }

    async componentDidMount () {
        //const cok = Cookie.get('G_ENABLED_IDPS');
        //console.log(cok);
        /*try {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:4000/api/notes',
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache': 'no-cache'
                  }
                
            });
            if(res.data) {
                this.setState({
                    data: res.data.note
                })
                console.log('data '+res.data);
            }
        } catch (error) {
            console.log('Access Denied');
            window.location.replace("http://localhost:3000/login");
            alert(error);
        }
        */
    }

    handleLogout = async () => {
        try {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:4000/api/user/logout',
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache': 'no-cache'
                  }
                
            });
            if(res.data.success) {
                console.log('User logged out '+res.data);
                Cookie.remove('access_token');
                window.location.replace("http://localhost:3000/login");
            }
            
        } catch (error) {
            console.log('No user found');
            alert(error);
        }
        
    }

    render() {
        return (
            <div>
                This is Home Page!
                <a href="/#" onClick={this.handleLogout}>Logout</a>
            </div>
        )
    }
}
