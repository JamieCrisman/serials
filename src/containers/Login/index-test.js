/*eslint-env mocha*/
import {assert} from "chai";
import React from "react";
import Dashboard from "./index";
import testTree from "react-test-tree";

describe("Login Component", function() {
  xit("should exist", function() {
    // Render into document
    var app = testTree(<Login />);
    assert.ok(app.isMounted());
  });
});
