export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be of type number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  static evacuationWarningMessage() {
    // Check for missing evacuationWarningMessage in subclasses
    if (!this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
