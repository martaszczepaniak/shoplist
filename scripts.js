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

  var basketList = {
    products: []
  }

  var renderBasket = function() {
    $("#basket-list").html("")
    basketList.products.forEach(function(product) {
      basketListItem = generateListItem(product, "-")
      $("#basket-list").append(basketListItem)
    })
  }

  var renderProductsList = function() {
    productsList.products.forEach(function(product) {
      productListItem = generateListItem(product, "+")
      $("#products-list").append(productListItem)
    })
  }

  var generateListItem = function(product, linkText) {
    listItem = $("<li>").text(product.name).attr("data-id", product.id).attr("data-number", product.number)
    
    itemLink = $("<a>").text(linkText)
    
    return listItem.append(itemLink)
  }

  var addItemToBasket = function(event) {
    productId = parseInt($(event.currentTarget).parent().attr("data-id"))
    product = _.find(productsList.products, { id: productId })

    basketProduct = _.find(basketList.products, { id: productId })

    if(basketProduct) {
      basketProduct.number += 1
    } else {
      product.number = 1
      basketList.products.push(product)
    }

    renderBasket()
  }

  var removeItemFromBasket = function(event) {
    productId = parseInt($(event.currentTarget).parent().attr("data-id"))
    product = _.find(basketList.products, { id: productId })

    if(product.number > 1) {
      product.number -= 1
    } else {
      _.remove(basketList.products, { id: productId })  
    }

    renderBasket()
  }

  $("body").on("click", "#products-list a", addItemToBasket)

  $("body").on("click", "#basket-list a", removeItemFromBasket)

  renderProductsList()
})
