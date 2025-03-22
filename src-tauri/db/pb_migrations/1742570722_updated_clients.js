/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2442875294")

  // remove field
  collection.fields.removeById("number1172995660")

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1172995660",
    "max": 0,
    "min": 0,
    "name": "ext_number",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2442875294")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number1172995660",
    "max": null,
    "min": null,
    "name": "ext_number",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // remove field
  collection.fields.removeById("text1172995660")

  return app.save(collection)
})
