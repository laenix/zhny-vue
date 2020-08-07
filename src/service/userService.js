import request from '@/util/request';
import qs from 'qs';
// 用户注册
const register = ({ name, password }) => (request.post('register', qs.stringify({ name, password })));
// 用户登录
const login = ({ name, password }) => (request.post('login', qs.stringify({ name, password })));
// 获取用户信息
const info = () => (request.post('userinfo'));
export default {
  register,
  login,
  info,
};
