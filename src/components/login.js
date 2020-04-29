import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

export default class login extends Component {
    render() {
        return (
            <div>
                <Form className="login-form">
                    <h1 className="text-center">
                        <span className="font-weight-bold">Login Form</span>
                    </h1>
                    <h2 className="text-center">Welcome</h2>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" placeholder="Email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" placeholder="Password"/>
                    </FormGroup>
                    <Button className="btn-lg btn-block">Log in</Button>
                    <div className="text-center pt-3">
                        Or continue with you social account
                    </div>
                    <FacebookLoginButton className="mt-3 mb-3"/>
                    <GoogleLoginButton className="mt-3 mb-3"/>
                    <div className="text-center">
                        <a href="/sign-up">Sign up</a>
                    </div>
                </Form>
            </div>
        )
    }
}
