import React from "react"
import Enzyme, { shallow } from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"

import CreateCounterClass from "./CreateaCounterClass"


Enzyme.configure({ adapter: new EnzymeAdapter() })


/**
 * this is a factory fn to create a shallow adapter for the App component
 * @function setup
 * @param {object} props 
 * @param {any} state
 * @returns {ShallowWrapper} 
 */

const setup = (props = {}, state = null) => shallow(<CreateCounterClass  {...props} />)

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
    const counterIncrementButton = wrapperFind(wrapper, "counter-incrementing-button")

})

it("renders counter div", () => {
    const wrapper = setup()
    const displayCounterDiv = wrapper.find('[data-test="displayCounterDiv"]')
    expect(displayCounterDiv.length).toBe(1)
})

it("counter starts with 0", () => { })

it("click increments counter", () => { })