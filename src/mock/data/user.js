import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'wjj',
    password: '123456',
    avatar: 'http://www.runoob.com/wp-content/uploads/2017/01/vue.png',
    name: '王杰杰'
  },
  {
    id:2,
    username:"admin",
    password:'123456',
    avatar: 'http://www.runoob.com/wp-content/uploads/2017/01/vue.png',
    name:'admin'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
