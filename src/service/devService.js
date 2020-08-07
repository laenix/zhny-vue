import request from '@/util/request';
import qs from 'qs';

const binddev = ({ devid, devpass }) => (request.post('binddev', qs.stringify({ devid, devpass })));
const ctrldev = ({ devid, cmd }) => (request.post('ctrldev', qs.stringify({ devid, cmd })));
const readall = () => (request.post('readall'));
const readdev = ({ devid }) => (request.post('readdev', qs.stringify({ devid })));
export default {
  binddev,
  ctrldev,
  readall,
  readdev,
};
