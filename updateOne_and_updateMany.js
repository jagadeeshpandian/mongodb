db.sales.updateOne(
  { _id: ObjectId("5bd761dcae323e45a93ccff1") },
  { $set: { storeLocation: "London" } }
);

db.sales.updateOne(
    { _id: ObjectId("5bd761dcae323e45a93ccab2") },
    { $set: { storeLocation: "London" } },
    { upsert: true }
  );