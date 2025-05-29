async function obtenerDolares() {
      try {
        const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
        const data = await response.json();

        document.getElementById('oficial').textContent = `Compra: $${data.oficial.value_buy} - Venta: $${data.oficial.value_sell}`;
        document.getElementById('blue').textContent = `Compra: $${data.blue.value_buy} - Venta: $${data.blue.value_sell}`;
      } catch (error) {
        console.error('Error al obtener cotizaciones:', error);
        document.getElementById('oficial').textContent = 'Error';
        document.getElementById('blue').textContent = 'Error';
      }
    }

    obtenerDolares();