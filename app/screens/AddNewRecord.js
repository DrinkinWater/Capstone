import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native-material-ui'
import { WhitePanel } from '../components/Panel'
import { RoundedButton } from '../components/Button'
import { MenuList } from '../components/List'


export default  class AddNewRecords extends Component{
	static navigationOptions = {
    title : 'Add New Record'
  };

  render() {
    const {navigate} = this.props.navigation;
	  return(
		  <View style = {styles.container}>
		    <View  style ={styles.top}>
		      <TextInput placeholder = "Title"/> 
		      <TextInput placeholder = "Date"/>
		      <TextInput placeholder = "Notes"/>
        </View>

	      <View style = {styles.bottom}>
		      <WhitePanel style={styles.whitePanel}>

          <MenuList onPress={e => alert("Add Photo!")}>
          <Icon name="camera" size={20}/>
          <Text style={styles.title2}> Add Photo </Text> 
          </MenuList>
                  
          <MenuList onPress={e => alert("Upload from gallery!")}>
          <Icon name="picture-o" size={20} />
          <Text style={styles.title2}> Upload from gallery</Text>
          </MenuList>

          <MenuList onPress={e => alert("Upload a file!")}>
          <Icon name="file-pdf-o" size={20} />
          <Text style={styles.title2}> Upload a file </Text>
          </MenuList>

		      </WhitePanel>
		    </View>
      </View>
      )
    }
  }

const styles = StyleSheet.create({
	whitePanel: {
		padding: 15	
	},

	title2:{
		fontSize: 15,    
	},

	bottom: {
		padding: 25
	},

	picIcon:
	{
    padding: 30
	},

	container :{
		padding: 20
	}
	
})