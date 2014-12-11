var utils = module.exports;

//  current is the x week
utils.getWeek = function (date) {
    var onejan = new Date(date.getFullYear(), 0, 1);
    //	delay_day ,such as 3,that means wednesday is the first day of new week
    var delay_day = 3;
    return Math.ceil((((date - onejan) / 86400000) + onejan.getDay() + 1 + delay_day) / 7);
};

utils.getWeekDesc = function () {
    var date = new Date();
    var now = Date.now();
    var week_day = date.getDay();
    var special_week_day = 3;
    var interval_week_before_day = 0;
    var interval_week_later_day = 0;
    if (special_week_day == week_day) {
        interval_week_before_day = 0;
        interval_week_later_day = 7;
    }
    else if (special_week_day > week_day){
        interval_week_before_day =  7 - (special_week_day - week_day);
        interval_week_later_day = special_week_day - week_day;
    }
    else if (special_week_day < week_day){
        interval_week_before_day = week_day - special_week_day ;
        interval_week_later_day = 7 - (interval_week_before_day);
    }
    var week_before_now = now -  1000 * 60 * 60 * 24 * interval_week_before_day;
    var week_before_date = new Date(week_before_now);
    var week_later_now = now +  1000 * 60 * 60 * 24 * (interval_week_later_day - 1) //  for 23:59
    var week_later_date = new Date(week_later_now);
    //2014年12月10日0:00～12月16日23:59
    var date_desc = week_before_date.getFullYear() + "年" + (week_before_date.getMonth() + 1) + "月" + week_before_date.getDate() + "日0:00～" ;
    date_desc += week_later_date.getFullYear() + "年" + (week_later_date.getMonth() + 1) + "月" + week_later_date.getDate() + "日23:59";
    return date_desc;
};