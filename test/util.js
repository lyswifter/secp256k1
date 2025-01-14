const Buffer = require('safe-buffer').Buffer;

export function fromHex(data) {
  return new Uint8Array(Buffer.from(data, "hex"));
}

export function toHex(data) {
  return Buffer.from(data).toString("hex");
}
