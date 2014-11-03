/**
 * Created by King Lee on 14-8-5.
 */
var redis_notice_wrapper = require('../nosql/redis_notice_wrapper');

var notice_wrapper = module.exports;

notice_wrapper.get = function(channel,version,cb){
    redis_notice_wrapper.get_notice(channel,version,function(reply){
        if(reply){
            cb(JSON.parse(reply));
        }else{
            redis_notice_wrapper.get_notice('template',version,function(reply){
                if(reply) {
                    cb(JSON.parse(reply));
                }
            });
        }
    });
};

notice_wrapper.get_just = function(channel,version,cb){
    redis_notice_wrapper.get_notice(channel,version,function(reply){
        cb(reply);
    });
};

notice_wrapper.save = function(channel_version,notice,cb){
    redis_notice_wrapper.save_notice(channel_version,notice,function(reply){
        cb(reply);
    });
};

notice_wrapper.add = function(channel,version,cb){
    redis_notice_wrapper.get_notice("template",version,function(notice){
        if(notice){
            redis_notice_wrapper.add_notice(channel,version,JSON.parse(notice),function(reply){
                cb(reply,notice);
            });
        }
        else{
            //  error,you must make sure the version' default template exits!
            //  hget return value or null
            cb(0,null);
        }
    });
};

notice_wrapper.del = function(channel,version,cb){
    redis_notice_wrapper.del_notice(channel,version,function(reply){
        cb(reply);
    });
};

notice_wrapper.get_all = function(cb){
    redis_notice_wrapper.get_all_notice(function(reply){
        if(reply){
            cb(reply);
        }
    });
};