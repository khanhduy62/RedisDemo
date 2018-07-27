import Redis from 'ioredis';

var redis = new Redis();
 
redis.set('name', 'le khanh duy');
redis.get('name').then(function (result) {
  console.log('result: ',result);
});