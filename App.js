import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from './src/components/Button'
import Display from './src/components/Display'

const initialState = {
   displayValue: '0',
   clearDisplay: false,
   operation: null,
   values: [0, 0],
   currentIndexValue: 0
}

export default class App extends Component {
   state = { ...initialState }

   addDigit = n => {
      if (n === '.' && this.state.displayValue.includes('.')) {
         return
      }

      //setando o clearDisplay como true
      const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

      const currentDisplayValue = clearDisplay ? '' : this.state.displayValue
      const displayValue = currentDisplayValue + n
      this.setState({ displayValue, clearDisplay: false })

      if (n !== '.') {
         const newValue = parseFloat(displayValue)
         const valuesLocal = [...this.state.values]
         valuesLocal[this.state.currentIndexValue] = newValue
         this.setState({ values: valuesLocal })

      }
   }

   clearMemory = () => {
      this.setState({ ...initialState })

   }
   setOperation = operationLocal => {
         if (this.state.currentIndexValue === 0) {
            this.setState({ operation: operationLocal, currentIndexValue: 1, clearDisplay: true })
         } else {
            const equal = operationLocal === '='
            const valuesLocal = [...this.state.values]
            try {
               valuesLocal[0] = eval(`${valuesLocal[0]} ${this.state.operation} ${valuesLocal[1]}`)
            } catch (e) {
               valuesLocal[0] = this.state.values[0]
            }
            valuesLocal[1] = 0
            this.setState({
               displayValue: valuesLocal[0],
               operation: equal ? null : operationLocal,
               currentIndexValue: equal ? 0 : 1,
               clearDisplay: true,
               values: valuesLocal
            })
         }

   }

   render() {
      return (
         <View style={styles.container}>
            <Display value={this.state.displayValue} />
            <View style={styles.buttons}>
               <Button label='AC' triple onClick={this.clearMemory} />
               <Button label='/' operation onClick={this.setOperation} />
               <Button label='7' onClick={this.addDigit} />
               <Button label='8' onClick={this.addDigit} />
               <Button label='9' onClick={this.addDigit} />
               <Button label='*' operation onClick={this.setOperation} />
               <Button label='4' onClick={this.addDigit} />
               <Button label='5' onClick={this.addDigit} />
               <Button label='6' onClick={this.addDigit} />
               <Button label='-' operation onClick={this.setOperation} />
               <Button label='1' onClick={this.addDigit} />
               <Button label='2' onClick={this.addDigit} />
               <Button label='3' onClick={this.addDigit} />
               <Button label='+' operation onClick={this.setOperation} />
               <Button label='0' double onClick={this.addDigit} />
               <Button label='.' onClick={this.addDigit} />
               <Button label='=' operation onClick={this.setOperation} />
            </View>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: 'rgba(0,0,0,0.6)'
   }
});
