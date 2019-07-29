let Mock = require('mockjs')

let Random = Mock.Random;
let data = Mock.mock({
     'list|10-100' : [{
        'code': 0,
        'data': {
            'description': "仅供测试",
            'station_id': "T7936",
            'days_remaining|-200-200': 1,
            'min_total_price': 2,
            'audience_typ': 1,
            'days_remaining|-200-100': -116,
            "description": "仅供测试",
            "expiring_time": Random.date('yyyy-MM-dd'),
            "id|10000-99999": 11558,
            "min_total_price|1-30": 20,
            "name": "第一张优惠券",
            "order_id_lock": null,
            "price_value|1-20": 10,
            "station_id": "T7936",
            "status": 3,
        },
        "mag": "ok"
    }]
})

console.log(JSON.stringify(data))




