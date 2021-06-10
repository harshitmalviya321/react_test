import React, { Component } from 'react'
import BottomTabNavigator from './navigation/TabNavigator'
import { NavigationContainer } from '@react-navigation/native'

class App extends Component {
  render () {
    return (
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
export default App
