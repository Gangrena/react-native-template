// components/Hello.tsx
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export interface IProps {
  name: string
  enthusiasmLevel?: number
}

interface IState {
  enthusiasmLevel: number
}

export class Hello extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    if ((props.enthusiasmLevel || 0) <= 0) {
      throw new Error('You could be a little more enthusiastic. :D')
    }

    this.state = {
      enthusiasmLevel: props.enthusiasmLevel || 1,
    }
  }

  private onIncrement = () =>
    this.setState({ enthusiasmLevel: this.state.enthusiasmLevel + 1 })
  private onDecrement = () =>
    this.setState({ enthusiasmLevel: this.state.enthusiasmLevel - 1 })
  private getExclamationMarks = (numChars: number) =>
    Array(numChars + 1).join('!')

  public render() {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          Hello{' '}
          {this.props.name +
            this.getExclamationMarks(this.state.enthusiasmLevel)}
        </Text>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="-"
              onPress={this.onDecrement}
              accessibilityLabel="decrement"
              color="red"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="+"
              onPress={this.onIncrement}
              accessibilityLabel="increment"
              color="blue"
            />
          </View>
        </View>
      </View>
    )
  }
}

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
})
