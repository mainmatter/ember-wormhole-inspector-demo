export default function getElement(positionalA /*, positionalB, named*/) {
  console.log(positionalA)
  return document.getElementById(positionalA)
}
