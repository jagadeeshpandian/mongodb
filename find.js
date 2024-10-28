

db.zips.findOne({})

db.zips.find({state: 'AZ', pop: {$lt: 500}})

db.zips.find({state: 'AZ', pop: {$lt: 500}}, {_id: 0, city: 1})