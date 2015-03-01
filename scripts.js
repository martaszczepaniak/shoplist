$(document).ready(function() {
  var loadData = $.ajax({
    url: "products.json",
    dataType: "json",
    success: function(data) {
      data["products"].forEach(function(product) {
        productListItem = $("<li>")
        productListItem.text(product["name"])
        itemLink = $("<a>")
        itemLink.text("+")
        productListItem.append(itemLink)
        $("#products-list").append(productListItem)
      })
    }
  })

  $("body").on("click", "#products-list a", function(event) {
    basketListItem = $("<li>")
    basketListItem.text($(event.currentTarget).parent().text().slice(0, -1))
    itemLink = $("<a>")
    itemLink.text("-")
    basketListItem.append(itemLink)
    $("#basket-list").append(basketListItem)
  })
})
