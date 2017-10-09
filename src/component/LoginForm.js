import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardItem, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    onEmailChanged(text) {
        this.props.emailChanged(text);
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }

    onLoginPressed() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="small" />;
        }

        return <Button onPress={this.onLoginPressed.bind(this)}>Login</Button>;
    }

    render() {
        const { email, password, error } = this.props;

        return (

            <View style={styles.container}>
                <Card>
                    <CardItem>
                        <Input
                            label="Email"
                            placeholder="Email"
                            value={email}
                            onChangeText={this.onEmailChanged.bind(this)}
                        />
                    </CardItem>
                    <CardItem>
                        <Input
                            secureTextEntry
                            label="Password"
                            placeholder="Password"
                            value={password}
                            onChangeText={this.onPasswordChanged.bind(this)}
                        />
                    </CardItem>
                    <Text style={styles.errorTextStyles}>{error}</Text>
                    <CardItem>
                        {this.renderButton()}
                    </CardItem>
                </Card>
            </View>
        );
    }
}

const styles = {
    errorTextStyles: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'red'
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
};

const mapStateToProps = state => {
    const { email, password, error, loading } = state.auth;

    return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
