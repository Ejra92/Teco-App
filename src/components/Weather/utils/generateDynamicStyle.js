export const generateDynamicStyle = ({ boolean, original, alt }) => {
  if (boolean) return alt
  return original
}