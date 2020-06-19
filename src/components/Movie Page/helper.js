export const year = (date) => {
  if (!date) {
    return 'N/A'
  } 
  return date.slice(0,4)
}