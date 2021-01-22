var _ = require('lodash');

export const transform = (skeleton: Object) => {
    let schema = skeleton;
    let filtered: Array<any>;
  
    return {

      filter: (data: Array<any>) => {

        for (let elem of data) {

          let diff = _.difference(Object.keys(elem), Object.keys(schema));

          for (let df of diff) {

            delete elem[df];

          }

        }

        filtered = data;
  
        return this;

      },

      i18n: () => {

        for (let elem of filtered) {

          for (let label of Object.keys(schema)) {

            if (elem.hasOwnProperty(label)) {

              elem[schema[label]] = elem[label];

              delete elem[label];

            }

          }

        }

      },
      get: () => {

        return filtered;

      }
    };
  };