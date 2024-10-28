db.sales.deleteOne({_id: ObjectId("5bd761dcae323e45a93ccff1")})


db.sales.deleteMany({ storeLocation: {$in: [ 'Denver', 'New York' ]} });