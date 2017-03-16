
import React, { Component }  from 'react';
import {
  Button,
  ScrollView,
  ListView,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';

export default class Detail extends Component {
	static navigationOptions = {
		title: 'artical'
	}
	render (){
		const {navigation} = this.props
		return (
			<Text>123</Text>
		)
	}
}