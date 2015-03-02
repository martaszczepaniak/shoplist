$(document).ready(function() {
  var productsList = {
    products: [
      {
        name: "Butter",
        id: 0
      },
      {
        name: "Flour",
        id: 1
      },
      {
        name: "Milk",
        id: 2
      },
      {
        name: "Eggs",
        id: 3
      },
      {
        name: "Pasta",
        id: 4
      },
      {
        name: "Tomato",
        id: 5
      },
      {
        name: "Cucumber",
        id: 6
      },
      {
        name: "Orange Juice",
        id: 7
      }
    ]
  }

  window.productsList = productsList

  var basketList = {
    products: []
  }

  window.basketList = basketList

  productsList["products"].forEach(function(product) {
    productListItem = $("<li>")
    productListItem.text(product["name"])
    productListItem.attr("data-id", product["id"])
    itemLink = $("<a>")
    itemLink.text("+")
    productListItem.append(itemLink)
    $("#products-list").append(productListItem)
  })

  $("body").on("click", "#products-list a", function(event) {
    productId = parseInt($(event.currentTarget).parent().attr("data-id"))
    product = _.find(productsList.products, { id: productId })
    basketList.products.push(product)
    $("#basket-list").html("")
    basketList["products"].forEach(function(product) {
      basketListItem = $("<li>")
      basketListItem.text(product["name"])
      basketListItem.attr("data-id", product["id"])
      itemLink = $("<a>")
      itemLink.text("-")
      basketListItem.append(itemLink)
      $("#basket-list").append(basketListItem)
    })
  })

  $("body").on("click", "#basket-list a", function(event) {
    productId = parseInt($(event.currentTarget).parent().attr("data-id"))
    product = _.find(basketList.products, { id: productId })
    index = basketList.products.indexOf(product)
    basketList.products.splice(index, 1)
    $("#basket-list").html("")
    basketList["products"].forEach(function(product) {
      basketListItem = $("<li>")
      basketListItem.text(product["name"])
      basketListItem.attr("data-id", product["id"])
      itemLink = $("<a>")
      itemLink.text("-")
      basketListItem.append(itemLink)
      $("#basket-list").append(basketListItem)
    })
  })
})
