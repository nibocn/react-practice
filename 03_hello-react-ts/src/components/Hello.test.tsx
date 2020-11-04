import React from 'react'
import Enzyme from 'enzyme'
import Hello from './Hello'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = Enzyme.shallow(<Hello name="Richard" />)
  expect(hello.find('.greeting').text()).toEqual('Hello Richard!')
})

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = Enzyme.shallow(<Hello name="Richard" enthusiasmLevel={1} />)
  expect(hello.find('.greeting').text()).toEqual('Hello Richard!')
})

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = Enzyme.shallow(<Hello name="Richard" enthusiasmLevel={5} />)
  expect(hello.find('.greeting').text()).toEqual('Hello Richard!!!!!')
})

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    Enzyme.shallow(<Hello name="Richard" enthusiasmLevel={0} />)
  }).toThrow()
})

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    Enzyme.shallow(<Hello name="Richard" enthusiasmLevel={-1} />)
  }).toThrow()
})
