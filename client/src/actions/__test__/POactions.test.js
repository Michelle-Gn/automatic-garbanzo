import {
  updateNewProduct,
  UpdateSelectedStyle } from '../ProductOverview/actions'

import '@testing-library/jest-dom/extend-expect';

describe('Testing Product Overview Actions', () => {
  test('Update new Product should return correctly formed action object', () => {
    const productData = {
      somedata: 1,
      someString: "name"
    }
    const result = {
      type: "GET_NEW_PRODUCT",
      payload: {
        somedata: 1,
        someString: "name"
      }
    }
    expect(updateNewProduct(productData)).toStrictEqual(result)
  })

  test("Update Style should return a correctly formed action object", () => {
    const styleData = 123;
    const result = {
      type: "UPDATE_SELECTED_STYLE",
      payload: {
        style_id: 123
      }
    }
    expect(UpdateSelectedStyle(123)).toStrictEqual(result)
  })

  test("Update Style should a payload of type Number", () => {
    const styleData = "123";
    expect(UpdateSelectedStyle(123).payload.style_id).toEqual(123)
  })

  test('All async requests should recieve a response from API', () => {
    console.log("Need Tests for thunks in action.js")
    expect
  })

})
