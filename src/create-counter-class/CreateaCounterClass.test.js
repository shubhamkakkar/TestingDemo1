import React from "react"
import Enzyme, { shallow } from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"

import CreateCounterClass from "./CreateaCounterClass"


Enzyme.configure({ adapter: new EnzymeAdapter() })


/**
 * this is a factory fn to create a shallow adapter for the App component
 * @function setup
 * @param {object} props 
 * @param {object} state
 * @returns {ShallowWrapper} 
 */

const setup = (props = {}, state = null) => {
    const wrapper = shallow(<CreateCounterClass  {...props} />)
    if (state) wrapper.setState(state)
    return wrapper
}

/**
* Returns ShallowWrapper containing node(s) with the given data-test value
* @function wrapperFind
* @param {enzmeShallowWrapper} wrapper - enzyme wrapper 
* @param {string} value - value for data-test-attr
*/

const wrapperFind = (wrapper, value) => wrapper.find(`[data-test="${value}"]`)

it("Runs CreateCounterClass test", () => {
    const wrapper = setup()
    const appContainer = wrapperFind(wrapper, 'create-counter-class-container')
    expect(appContainer.length).toBe(1);
})


it("renders increment button", () => {
    const wrapper = setup()
    const counterIncrementButton = wrapperFind(wrapper, "counter-incrementing-button");

})

it("renders counter div", () => {
    const wrapper = setup()
    const displayCounterDiv = wrapper.find('[data-test="displayCounterDiv"]')
    expect(displayCounterDiv.length).toBe(1)
})

it("counter starts with 0", () => {
    const wrapper = setup()
    const initialCounterState = wrapper.state('counter')
    expect(initialCounterState).toBe(0)
})

it("click increments counter", () => {
    const counter = 8;
    const wrapper = setup(null, { counter })
    const counterIncrementButton = wrapperFind(wrapper, "counter-incrementing-button");
    counterIncrementButton.simulate('click')
    wrapper.update();
    const displayCounterDiv = wrapper.find('[data-test="displayCounterDiv"]')
    expect(displayCounterDiv.text()).toContain(`Create Counter : ${counter + 1}`)



})