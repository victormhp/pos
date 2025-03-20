/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4282183725")

  // update collection data
  unmarshal({
    "name": "products"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4282183725")

  // update collection data
  unmarshal({
    "name": "materials"
  }, collection)

  return app.save(collection)
})
