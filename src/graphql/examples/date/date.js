const moment = require('moment');

module.exports = {
  resolvers: {},
  queries: {
    getMySchedule: async (_root, args) => {
      return [
        {
          id: 1,
          eventName: 'Watch movie at home',
          startDate: moment('2022-01-01 16:00'),
          endDate: moment('2022-01-01 16:30')
        },
        {
          id: 2,
          eventName: 'Play game console',
          startDate: moment('2022-01-02 18:00'),
          endDate: moment('2022-01-02 18:00')
        }
      ];
    },
  },
  mutations: {
    updateExample: async (_root, args) => '',
  },
};
