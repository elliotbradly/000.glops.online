// A simple function that returns a promise
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('peanut butter');
    }, 1000);
  });
}

// A function that returns a promise that rejects
function fetchError() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject('error');
    }, 1000);
  });
}

// Test with async/await
test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

// Test with .resolves
test('the data is peanut butter with .resolves', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});

// Test with async/await and .rejects
test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchError();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

// Test with .rejects
test('the fetch fails with an error with .rejects', () => {
  return expect(fetchError()).rejects.toMatch('error');
});
