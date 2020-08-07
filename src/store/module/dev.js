import devService from '@/service/devService';

const devModule = {
  namespaced: true,
  actions: {
    binddev(_, { devid, devpass }) {
      return new Promise((resolve, reject) => {
        devService.binddev({ devid, devpass }).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    ctrldev(_, { devid, cmd }) {
      return new Promise((resolve, reject) => {
        devService.ctrldev({ devid, cmd }).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    readall() {
      return new Promise((resolve, reject) => {
        devService.readall().then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    readdev(_, devid) {
      return new Promise((resolve, reject) => {
        devService.readdev({ devid }).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
  },
};
export default devModule;
