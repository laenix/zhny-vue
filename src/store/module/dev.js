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
      console.log('[mark] ctrldev point 0');
      return new Promise((resolve, reject) => {
        devService.ctrldev({ devid, cmd }).then((res) => {
          console.log('[mark] ctrldev point 1', res);
          resolve(res);
        }).catch((err) => {
          console.log('[mark] ctrldev point 2', err);
          reject(err);
        });
      });
    },
    readall() {
      console.log('[mark] readall point 0');
      return new Promise((resolve, reject) => {
        devService.readall().then((res) => {
          console.log('[mark] readall point 1', res);
          resolve(res);
        }).catch((err) => {
          console.log('[mark] readall point 2', err);
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
