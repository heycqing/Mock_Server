exports.mock_data = [{
    id: 1,
    movieName: '金逸影院',
    movieAddress: '深圳市福田区福华路',
    movieTickeType: '订座票',
    movieSalePrice: '成本价成本价',
    movieOnlineType: '已上线',
    movieUpdateTime: '2020-2-28',
    movieOpretor: '小明'
}]

// 定座票管理开始
exports.mock_movieList = {
    status: 0,
    msg: "success",
    data:
    {
        page: {
            pageNum: 1,
            pageSize: 10,
            total: 189
        },
        cinemas: [{
            cinemaId: 12,
            name: "南山电影院",
            cityId: 123,
            address: "影院地址",
            businessType: 1,//订座票类型
            priceRuleInfo: {
                priceRateValue: 1.08,//影院价格比率
                priceFixedValue: 4.12 //价格填充
            },
            cinemaStatus: 0,//影院上线状态
            updatedAt: 1583465890967,//最近更新时间
            createdBy: "yoker"
        }]
    }
}

exports.mock_city = {
    status: 0,
    msg: "success",
    data: {
        cities: [
            {
                cityId: 380,
                name: "武汉",
                provinceName: "湖北"
            },
            {
                cityId: 111,
                name: "深圳",
                provinceName: "广东"
            },
            {
                cityId: 112,
                name: "广州",
                provinceName: "广东"
            },
            {
                cityId: 116,
                name: "厦门",
                provinceName: "福建"
            },
            {
                cityId: 366,
                name: "成都",
                provinceName: "四川"
            }
        ]
    }
}

exports.mock_get_movie_by_city = {
    status: 0,
    msg: "success",
    data: {
        page: {
            pageNum: 1,
            pageSize: 10,
            total: 189
        },
        cinemas: [{
            cinemaId: 12,
            name: "南山电影院"
        }, {
            cinemaId: 102,
            name: "102电影院"
        }, {
            cinemaId: 712,
            name: "712电影院"
        }, {
            cinemaId: 312,
            name: "312电影院"
        }, {
            cinemaId: 612,
            name: "612电影院"
        }, {
            cinemaId: 182,
            name: "182电影院"
        }, {
            cinemaId: 126,
            name: "126电影院"
        }, {
            cinemaId: 152,
            name: "152电影院"
        }, {
            cinemaId: 142,
            name: "142电影院"
        }, {
            cinemaId: 124,
            name: "124电影院"
        }, {
            cinemaId: 123,
            name: "123电影院"
        }, {
            cinemaId: 122,
            name: "122电影院"
        }]
    }
}

// 修改价格
exports.success_res = {
    status: 0,
    msg: "success",
    data: ""
}

// 查询价格规则详情
exports.success_rule_res = {
    status: 0,
    msg: "success",
    data:
    {
        priceRateValue: 1.08,
        priceFixedValue: 5,
        roundPriceType: 0,
        retainDecimal: 1
    }
}

// 查询排期
exports.mock_movie_schedule = {
    status: 0,
    msg: "success",
    data: {
        cinemaId: "2565",//影院id
        showList: [{
            foretellId: "1482253351",//排期id
            hallId: "7",//厅id 
            filmName: "大闹天宫", //影片名称
            hallName: "八号VIP厅",//厅名称 
            showtime: "2010",//开场时间
            filmId: "3555",// 影片id
            language: "英语",//语言 
            duration: "108",//放映时间 分钟
            dimensional: "3D",//影片维度类型，如2D/3D/IMAX3D
            ticketType: "2",//票品类型 
            priceInfo: {
                costPrice: 152,// 平台供应商结算价
                platformServiceFee: 5,//平台服务费
                opertatorSalesPrice: 200 //代理商销售价
            }
        }]
    }
}


// 查询影院信息
exports.mock_cinema_infp = {
    status: 0,
    msg: "success",
    data: {
        cinemaId: 692,
        name: "英特数字影城",
        address: "绥化绥棱县文化艺术中心一楼北侧",
        cityId: 231200,
        cityName: "绥化市"
    }
}

// 定座票管理结束

// 电子票管理
exports.mock_eticket = {
    status: 0,
    msg: "success",
    data:
    {
        page: {
            pageNum: 1,
            pageSize: 10,
            total: 189
        },
        cinemas: [{
            cinemaId: 12,
            name: "南山电影院",
            cityId: 123,
            address: "影院地址",
            businessType: 2,//电子票类型
            goodsList: [
                {
                    ticketTypeId: 1,
                    name: "2D通兑票",
                    costPrice: 100,// 平台供应商结算价
                    platformServiceFee: 5,//平台服务费
                    operatorSalePrice: 100//代理商销售价
                },
                {
                    ticketTypeId: 2,
                    name: "3D通兑票",
                    costPrice: 100,// 平台供应商结算价
                    platformServiceFee: 5,//平台服务费
                    operatorSalePrice: 100//代理商销售价
                },
            ],
            cinemaStatus: 0,//影院上线状态
        }]
    }

}