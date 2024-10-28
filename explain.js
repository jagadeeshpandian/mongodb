db.zips.find(
    { state: "NY", pop: { $gte: 1000, $lte: 5000 }}, 
    {_id: 0, state: 1, city: 1, pop: 1}
    ).sort({pop: -1})
    .limit(10)


    db.zips.explain().find(
        { state: "NY", pop: { $gte: 1000, $lte: 5000 }}, 
        {_id: 0, state: 1, city: 1, pop: 1}
        ).sort({pop: -1})
        .limit(10)