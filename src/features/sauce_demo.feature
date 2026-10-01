Feature: Sauce Demo Shopping
  Como un cliente de Sauce Demo,
  Quiero poder iniciar sesión, agregar productos al carrito y completar una compra
  Para poder adquirir los productos que necesito

  Background:
    Given que estoy en la pagina de inicio de sesion de Sauce Demo

  # Criterio 1
  Scenario: Iniciar sesion con credenciales validas
    When ingreso el usuario "standard_user" y la contrasena "secret_sauce"
    And hago clic en el boton de inicio de sesion
    Then deberia ser redirigido a la pagina de productos

  # Criterio 2
  Scenario: Iniciar sesion con credenciales invalidas (usuario bloqueado)
    When ingreso el usuario "locked_out_user" y la contrasena "secret_sauce"
    And hago clic en el boton de inicio de sesion
    Then deberia ver un mensaje de error indicando que el usuario esta bloqueado

  # Criterio 3
  Scenario: Agregar un producto al carrito desde la pagina de productos
    Given he iniciado sesion como "standard_user"
    When agrego el primer producto al carrito
    Then el icono del carrito deberia mostrar que hay "1" producto

  # Criterio 4
  Scenario: Ver los productos agregados en el carrito de compras
    Given he iniciado sesion como "standard_user"
    And he agregado un producto al carrito
    When voy al carrito de compras
    Then deberia ver el producto en el carrito

  # Criterio 5
  Scenario: Completar el proceso de compra hasta la confirmacion
    Given he iniciado sesion como "standard_user"
    And he agregado un producto al carrito
    And estoy en el carrito de compras
    When procedo al checkout
    And ingreso la informacion de envio: nombre "Juan", apellido "Perez", codigo postal "12345"
    And continuo con el checkout
    And finalizo la compra
    Then deberia ver un mensaje de confirmacion de la compra
