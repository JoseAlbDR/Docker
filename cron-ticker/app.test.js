const syncDb = require('./tasks/sync-db');

describe('App test', () => {
  test('should return 2', () => {
    let times = 0;
    times = syncDb();
    times = syncDb();

    expect(times).toBe(2);
  });
});
