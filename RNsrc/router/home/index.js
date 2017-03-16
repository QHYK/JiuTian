

import React, { Component } from 'react';
import {
  ScrollView,
  ListView,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View
} from 'react-native';

const name = ['最新', '资讯', '科普', '观测', '影像', '知识', '器材', '猜想', '人物', '揭秘'];
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
export default class Home extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows([{
				title: '未来一周天象预报',
				img: 'https://facebook.github.io/react/img/logo_og.png',
				tag: ['top','see'],
				desc: 'NASA中文'
			},{
				title: '315天文打假',
				img: 'https://facebook.github.io/react/img/logo_og.png',
				tag: ['top','see'],
				desc: '星光杂货铺'
			},{
				title: '三月的天象',
				img: 'https://facebook.github.io/react/img/logo_og.png',
				tag: ['top','see'],
				desc: '北洋星语'
			},{
				title: '未来一周天象预报',
				img: 'https://facebook.github.io/react/img/logo_og.png',
				tag: ['top','see'],
				desc: '北京天文馆'
			},{
				title: '三月的天象',
				img: 'https://facebook.github.io/react/img/logo_og.png',
				tag: ['top','see'],
				desc: '北洋星语'
			},{
				title: '未来一周天象预报',
				img: 'https://facebook.github.io/react/img/logo_og.png',
				tag: ['top','see'],
				desc: '北京天文馆'
			}])
		};
	}
	static navigationOptions = {
		title: '资讯',
		header: ({ state, setParams, goBack, navigate }) => ({
			right: (
				<View style={styles.headerRight}>
					<TouchableWithoutFeedback onPress={() => navigate('Detail', { name: 'Jane' })}>
						<Image source={require('./robot.png')} style={styles.icon}/>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={() => navigate('Detail', { name: 'Jane' })}>
						<Image source={require('./man.png')} style={styles.icon}/>
					</TouchableWithoutFeedback>
				</View>
			),
			style: {
				backgroundColor: '#000',
			},
			titleStyle: {
				color: '#fff',
			}
		})
	};


	render (){
		const {navigation} = this.props
		return (
			<View style={{flex: 1}}>
				<View>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.sortBar}>
						{
							name.map((elem,idx) => {
								return <TouchableHighlight 
									style={styles.sort}
									onPress={() => navigation.navigate('Detail', { name: 'Jane' })}
									key={'this' + idx} >
									<Text style={styles.sortItem}>{elem}</Text>
								</TouchableHighlight>
							})
						}
					</ScrollView>
				</View>
				<View style={styles.inputWrap}>
					<TouchableWithoutFeedback onPress={() => navigation.navigate('Detail', { name: 'Jane' })}>
						<View style={styles.input}>
							<Image source={require('./search_b.png')} style={styles.searchBar}/>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<ListView
					style={styles.listView}
					dataSource={this.state.dataSource}
					renderRow={(rowData,idx) => {
						return (
							<TouchableWithoutFeedback onPress={() => navigation.navigate('Detail', { name: 'Jane' })}>
								<View style={styles.articalItem}>
									<Image source={{uri: rowData.img}} style={styles.articleImg}/>
									<Text>{rowData.title}</Text>
								</View>
							</TouchableWithoutFeedback>
						)
					}}
				/>
				<TouchableHighlight onPress={() => navigation.goBack(null)} >
					<Text>Go to a scree</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	headerRight:{
		marginRight: -17,
		flexDirection: 'row'
	},
	icon:{
		width: 20,
		height: 20,
		flex: 1,
		marginRight: 30
	},
	sortBar:{
		backgroundColor: '#eee',
		paddingLeft: 10,
	},
	sort:{
		height: 35,
		width: 50,
	},
	sortItem: {
		textAlign: 'center',
		color: '#999',
		lineHeight: 30,
		fontSize: 16
	},
	inputWrap: {
		height: 55,
		backgroundColor: '#fff',
		padding: 10
	},
	input: {
		height: 35, 
		borderRadius: 4,
		backgroundColor: '#eee'
	},
	searchBar: {
		width: 25,
		height: 25,
		position:'absolute',
		top: 5,
		left: 5
	},
	listView: {
		flex:1,
		padding: 10,
		backgroundColor: '#fff'
	},
	articalItem: {
		height: 96,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		paddingVertical: 10
	},
	articleImg: {
		width: 100,
		height: 75,
		marginRight: 20
	}
})
