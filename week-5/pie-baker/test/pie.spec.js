/**
 * Author:      Dustin Craven
 * Date:        5/14/24
 * File Name:   pie.spec.js
 * Description: Testing file for the pie.js file.
 */

"use strict";

const baker = require("../src/pie");

// Tests
test("successfully baked", () => {
  let ingredients = ["flour", "apples", "butter", "sugar"];
  expect(baker.bakePie("Apple Pie", ingredients)).toBe("Apple Pie successfully baked.");
});

test("successfully baked - varied input", () => {
  let ingredients = ["Flour", "8oz Strawberries", "Butter", "Sugar", "8oz Blueberries", "8oz Blackberries", "8oz Raspberries"];
  expect(baker.bakePie("Mixed Berry Pie", ingredients)).toBe("Mixed Berry Pie successfully baked.");
});

test("failed to baked", () => {
  let ingredients = ["flour", "apples", "butter", "salt"];
  expect(baker.bakePie("Apple Pie", ingredients)).toBe("Apple Pie failed to bake.");
});