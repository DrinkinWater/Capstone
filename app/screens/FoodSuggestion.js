import React,{Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,Button, StyleSheet} from 'react-native'
import { SearchBar } from '../components/Input'
import { FoodList } from '../components/List'
import { WhitePanel } from '../components/Panel'
import { ButtonTab } from '../components/Tab'
export default class FoodSuggestion extends Component{
	static navigationOptions = {
    header : null
  }
  constructor(props){
    super(props);
    this.state = {
      activeTab: "Food",
      results: [
        {
          name: 'Carbonara',
          calories: '580',
          type: 'low carbs'
        },
        {
          name: 'Apple Pie',
          calories: '300',
          type: 'low sugar'
        },
        {
          name: 'Porridge',
          calories: '200',
          type: 'low fat'
        }
      ]
    };

    this.onTabSelected = this.onTabSelected.bind(this)
  }

  onTabSelected(tab) {
    this.setState({activeTab: tab})
  }

  getActiveResults() {
    return this.state.results.filter(r => r.type === this.state.activeTab)
  }

	render(){
    const {navigate} = this.props.navigation;
    return(
    	<View style={styles.container}>
      	<SearchBar onChangeText={t => alert(t)} placeholder="What food are you looking for?" />
        <View style={styles.buttons}>
            <ButtonTab
              onPress={() => this.onTabSelected('low carbs')}
              active={this.state.activeTab === 'low carbs'}>
              low carbs
            </ButtonTab>
            <ButtonTab
              onPress={() => this.onTabSelected('low fat')}
              active={this.state.activeTab === 'low fat'}>
              low fat
            </ButtonTab>
            <ButtonTab
              onPress={() => this.onTabSelected('low sugar')}
              active={this.state.activeTab === 'low sugar'}>
              low sugar
            </ButtonTab>
          </View>
          <View style={styles.searchResults}>
            <WhitePanel>
              {this.getActiveResults().map((result, index) => (
                <FoodList
                  food={result}
                  onPress={() => navigate("FoodDetails")}
                  key={index} />
              ))}
            </WhitePanel>
          </View>
    	</View>
    	)
  }
}
const styles = StyleSheet.create({
    container: {
      padding: 10
    },
    searchbar: {
      flexDirection: "row",
      alignItems: 'center',
      padding: 5
    },
    searchIcon: {
      padding: 5
    },
    input: {
      flex: 1
    },
    buttons: {
      flexDirection: "row",
      justifyContent: 'center',
      marginTop: 15
    },
    space: {
      margin: 5
    },
    searchResults: {
      marginTop: 20
    }
  }
)
