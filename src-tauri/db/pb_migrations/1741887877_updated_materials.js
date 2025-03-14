/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4282183725")

  // update collection data
  unmarshal({
    "viewRule": ""
  }, collection)

  // update field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_794708469",
    "hidden": false,
    "id": "relation306617826",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "category_id",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4282183725")

  // update collection data
  unmarshal({
    "viewRule": null
  }, collection)

  // update field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_794708469",
    "hidden": false,
    "id": "relation306617826",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "category_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
