/**
 * Created by King Lee on 14-7-31.
 */
var redis_pools = require("../nosql/redis_pools");
var h_schedule_notice = 'h_schedule_notice';

var redis_schedule_wrapper = module.exports;

redis_schedule_wrapper.add_schedule = function(start_time,schedule,cb){
    redis_pools.execute('pool_1',function(client, release){
        client.hset(h_schedule_notice,JSON.stringify(start_time),JSON.stringify(schedule),function (err, reply){
            if(err){
                //  some thing log
                console.error(err);
            }
            cb(reply);
            release();
        });
    });
};

redis_schedule_wrapper.del_schedule = function(start_time,cb){
    redis_pools.execute('pool_1',function(client, release){
        client.hdel(h_schedule_notice,start_time,function (err, reply){
            if(err){
                //  some thing log
                console.error(err);
            }
            cb(reply);
            release();
        });
    });
};

redis_schedule_wrapper.get_all_schedule = function(cb){
    redis_pools.execute('pool_1',function(client, release){
        client.hgetall(h_schedule_notice,function (err, reply){
            if(err){
                //  some thing log
                console.error(err);
            }
            cb(reply);
            release();
        });
    });
};

redis_schedule_wrapper.clear_schedule = function(cb){
    redis_pools.execute('pool_1',function(client, release){
        client.hgetall(h_schedule_notice,function (err, reply){
            if(err){
                //  some thing log
                console.error(err);
            }
            for(var v in reply){
                client.hdel(h_schedule_notice,v,function (err, reply){
                    if(err){
                        //  some thing log
                        console.error(err);
                    }
                    //release();
                });
            }
            release();
        });
    });
};