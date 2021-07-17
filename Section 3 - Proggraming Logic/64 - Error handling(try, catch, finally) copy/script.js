function returnHour(date) {
  if (date && !(date instanceof Date)) {
    throw new TypeError('Waiting instance of Date.');
  }

  if (!date) {
    date = new Date(); 
  }

  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}

try {
  const date = new Date('01-01-1970 12:58:12')
  const hour = returnHour(date);
  console.log(hour)
} catch(e) {
  // console.log(e);
} finally {
  console.log('Have a good day!');
}
