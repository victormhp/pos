/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_794708469")

  // update collection data
  unmarshal({
    "name": "material_categories"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_794708469")

  // update collection data
  unmarshal({
    "name": "materials_category"
  }, collection)

  return app.save(collection)
})
