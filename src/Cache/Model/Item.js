/**
 * Created by giuffre on 22/09/15.
 */

class Item {
  private _key;
  private _value;

  constructor(key, value) {
    "use strict";

  }

  public get key() {
    return _key;
  }

  public set key(value) {
    _key = value;
  }

  public get value() {
    return _value;
  }

  public set value(value) {
    _value = value;
  }
}