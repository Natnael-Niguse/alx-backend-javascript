// classRoom.js
export default class ClassRoom {
  constructor(maxStudentsSize) {
    if (typeof maxStudentsSize === 'number') {
      // Private property for maxStudentsSize
      this._maxStudentsSize = maxStudentsSize;
    }
  }
}
