export default function parseStringAsArray(Text) {
  return Text.split(",").map(tech => tech.trim());
}
