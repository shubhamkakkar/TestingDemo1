import React from "react"
import Enzyme, { shallow } from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"

import CreateCounterHook from "./createCounterHook"


Enzyme.configure({ adapter: new EnzymeAdapter() })


const setup = (props = {}, state = null) => {
    const wrapper = shallow(<CreateCounterHook  {...props} />)
    return wrapper
}


const wrapperFind = (wrapper, value) => wrapper.find(`[data-test="${value}"]`)


test("HooksCounter counter display 0", () => {
    const wrapper = setup();
    const displayCounterDiv = wrapperFind(wrapper, "displayCounterDiv")
    expect(displayCounterDiv.text()).toBe("Create Counter : 0")
})

test("HooksCounter increment", () => {
    const wrapper = setup();
    const counterIncrementingButton = wrapperFind(wrapper, "counterIncrementingButton")
    counterIncrementingButton.simulate("click")
    const displayCounterDiv = wrapperFind(wrapper, "displayCounterDiv")
    expect(displayCounterDiv.text()).toBe("Create Counter : 1")

})