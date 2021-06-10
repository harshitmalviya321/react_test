import React from 'react'
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Source Listing',
      headerStyle: { backgroundColor: '#fff' },
      headerTitleStyle: { textAlign: 'center', flex: 1 }
    }
  }
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      dataSource: []
    }
  }
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          dataSource: responseJson
        })
      })
      .catch(error => console.log(error)) //to catch the errors if any
  }
  FlatListItemSeparator = () => {
    return <View />
  }
  renderItem = data => (
    <Card>
      <TouchableOpacity style={styles.list}>
        <Card.Title>
          <Text>{data.item.title}</Text>
        </Card.Title>
        <Card.Divider />
        <Card.Title>
          <Text>{data.item.body}</Text>
        </Card.Title>
      </TouchableOpacity>
    </Card>
  )
  render () {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size='large' color='#0c9' />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    borderRadius: 20
  }
})
