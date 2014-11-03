/**
 * Created by King Lee on 14-8-5.
 */
var redis_pools = require("../nosql/redis_pools");
var h_notice = 'h_notice';

var redis_notice_wrapper = module.exports;

redis_notice_wrapper.add_notice = function(channel,varsion,notice,cb){
    redis_pools.execute('pool_1',function(client, release){
        client.hset(h_notice,channel + ':' + varsion,JSON.stringify(notice),function (err, reply){
            if(err){
                //  some thing log
                console.error(err);
            }
            cb(reply);
            release();
        });
    });
};

redis_notice_wrapper.del_notice = function(channel,varsion,cb){
    redis_pools.execute('pool_1',function(client, release){
        client.hdel(h_notice,channel + ':' + varsion,function (err, reply){
            if(err){
                //  some thing log
                console.error(err);
            }
            cb(reply);
            release();
        });
    });
};

redis_notice_wrapper.save_notice = function(channel_varsion,notice,cb){
    redis_pools.execute('pool_1',function(client, release){
        client.hset(h_notice,channel_varsion,notice,function (err, reply){
            if(err){
                //  some thing log
                console.error(err);
            }
            cb(reply);
            release();
        });
    });
};

redis_notice_wrapper.get_notice = function(channel,version,cb){
    redis_pools.execute('pool_1',function(client, release){
        client.hget(h_notice,channel + ':' + version,function (err, reply){
            if(err){
                //  some thing log
                console.error(err);
            }
            cb(reply);
            release();
        });
    });
};

redis_notice_wrapper.get_all_notice = function(cb){
    redis_pools.execute('pool_1',function(client, release){
        client.hgetall(h_notice,function (err, reply){
            if(err){
                //  some thing log
                console.error(err);
            }
            cb(reply);
            release();
        });
    });
};