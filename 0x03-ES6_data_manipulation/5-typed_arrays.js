function createInt8TypedArray(length, position, value) {
    // Create a new ArrayBuffer of the specified length
    const buffer = new ArrayBuffer(length);
    
    // Create a view of the buffer as an Int8Array
    const int8View = new Int8Array(buffer);
    
    // Check if the position is within the allowed range
    if (position < 0 || position >= length) {
      throw new Error('Position outside range');
    }
  
    // Set the value at the specified position
    int8View[position] = value;
  
    // Return the ArrayBuffer
    return buffer;
  }
  